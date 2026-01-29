"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, ChevronRight, Check, Building, User, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Alert, AlertDescription } from "./ui/alert";
import { useToast } from "../hooks/use-toast";
import {
  clinicInfoSchema,
  personalInfoSchema,
  registrationSchema,
  registerUser,
  businessTypeOptions,
  formatPhoneNumber,
  type ClinicInfo,
  type PersonalInfo,
  type RegistrationData,
} from "../lib/api";

const steps = [
  {
    id: 1,
    title: "Dados da Clínica",
    description: "Conte-nos sobre sua clínica",
    icon: Building,
    schema: clinicInfoSchema,
  },
  {
    id: 2,
    title: "Dados Pessoais",
    description: "Informações do responsável",
    icon: User,
    schema: personalInfoSchema,
  },
];

export function RegisterWizard() {
  const [searchParams] = useSearchParams();
  const plan = searchParams.get("plan");
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<RegistrationData>({
    resolver: zodResolver(registrationSchema),
    mode: "onChange",
    defaultValues: {
      business_name: "",
      business_type: undefined,
      specialty: "",
      number_of_employees: undefined,
      full_name: "",
      email: "",
      phone_number_id: "",
      password: "",
    },
  });

  const { register, handleSubmit, formState: { errors }, setValue, watch, trigger } = form;

  const watchedValues = watch();
  const progress = (currentStep / steps.length) * 100;

  // Função para validar apenas os campos do passo atual
  const isCurrentStepValid = () => {
    const currentValues = watchedValues;
    const currentErrors = errors;

    if (currentStep === 1) {
      // Validação do passo 1 - apenas campos obrigatórios
      const hasBusinessName = currentValues.business_name && currentValues.business_name.trim().length >= 2;
      const hasBusinessType = currentValues.business_type &&
                             (currentValues.business_type === 'clinic' ||
                              currentValues.business_type === 'consulting_room' ||
                              currentValues.business_type === 'hospital' ||
                              currentValues.business_type === 'other');


      return hasBusinessName && hasBusinessType && !currentErrors.business_name && !currentErrors.business_type;
    } else if (currentStep === 2) {
      // Validação do passo 2 - usando apenas validação do Zod
      const hasFullName = currentValues.full_name && currentValues.full_name.trim().length >= 2;
      const hasEmail = currentValues.email && /^[^\s@]+@[^\s@]+$/.test(currentValues.email);
      const hasPhone = currentValues.phone_number_id && currentValues.phone_number_id.trim().length > 0;
      const hasPassword = currentValues.password && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(currentValues.password) && currentValues.password.length >= 8;

      return hasFullName && hasEmail && hasPhone && hasPassword &&
             !currentErrors.full_name && !currentErrors.email &&
             !currentErrors.phone_number_id && !currentErrors.password;
    }

    return false;
  };

  const handleNext = async () => {
    if (isCurrentStepValid() && currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: RegistrationData) => {
    setIsSubmitting(true);

    try {
      await registerUser(data);

      // Redirecionar diretamente para verificação de email, mantendo o plano na URL
      const planParam = plan ? `&plan=${plan}` : "";
      window.location.href = `/verify-email-code?email=${encodeURIComponent(data.email)}${planParam}`;

    } catch (error) {
      toast({
        title: "Erro no cadastro",
        description: error instanceof Error ? error.message : "Ocorreu um erro inesperado",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };


  return (
    <Card className="w-full max-w-md mx-auto border-border/50 shadow-xl overflow-hidden">
      <CardHeader className="space-y-4 bg-muted/20 border-b border-border/50 pb-6">
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isCompleted = currentStep > step.id;
              const isCurrent = currentStep === step.id;

              return (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isCompleted
                        ? "bg-green-500 text-white shadow-sm"
                        : isCurrent
                        ? "bg-primary text-primary-foreground shadow-md scale-110"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Icon className="w-4 h-4" />
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-8 h-0.5 mx-1 transition-colors duration-300 ${
                        currentStep > step.id ? "bg-green-500" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            Passo {currentStep} de {steps.length}
          </span>
        </div>

        <div>
          <CardTitle className="text-xl font-bold">
            {steps[currentStep - 1].title}
          </CardTitle>
          <CardDescription className="text-sm">
            {steps[currentStep - 1].description}
          </CardDescription>
        </div>

        <Progress value={progress} className="h-1.5 w-full bg-muted" />
      </CardHeader>

      <CardContent className="pt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {currentStep === 1 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                {/* Passo 1: Dados da Clínica */}
                <div className="space-y-2">
                  <Label htmlFor="business_name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Nome da Clínica *</Label>
                  <Input
                    id="business_name"
                    {...register("business_name")}
                    placeholder="Ex: Clínica Saúde & Bem-Estar"
                    className="h-11 border-border/60 focus:border-primary/50 transition-all"
                  />
                  {errors.business_name && (
                    <p className="text-[10px] font-bold text-red-500 mt-1 uppercase tracking-tight">{errors.business_name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="business_type" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Tipo de Negócio *</Label>
                  <Select
                    onValueChange={(value) => setValue("business_type", value as any)}
                    value={watchedValues.business_type}
                  >
                    <SelectTrigger className="h-11 border-border/60">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      {businessTypeOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.business_type && (
                    <p className="text-[10px] font-bold text-red-500 mt-1 uppercase tracking-tight">{errors.business_type.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialty" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Especialidade Principal</Label>
                  <Input
                    id="specialty"
                    {...register("specialty")}
                    placeholder="Ex: Cardiologia, Pediatria, etc."
                    className="h-11 border-border/60"
                  />
                  {errors.specialty && (
                    <p className="text-[10px] font-bold text-red-500 mt-1 uppercase tracking-tight">{errors.specialty.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="number_of_employees" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Número de Funcionários</Label>
                  <Input
                    id="number_of_employees"
                    type="number"
                    min="1"
                    {...register("number_of_employees", { valueAsNumber: true })}
                    placeholder="Ex: 5"
                    className="h-11 border-border/60"
                  />
                  {errors.number_of_employees && (
                    <p className="text-[10px] font-bold text-red-500 mt-1 uppercase tracking-tight">{errors.number_of_employees.message}</p>
                  )}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                {/* Passo 2: Dados Pessoais */}
                <div className="space-y-2">
                  <Label htmlFor="full_name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Nome Completo *</Label>
                  <Input
                    id="full_name"
                    {...register("full_name")}
                    placeholder="Seu nome completo"
                    className="h-11 border-border/60"
                  />
                  {errors.full_name && (
                    <p className="text-[10px] font-bold text-red-500 mt-1 uppercase tracking-tight">{errors.full_name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Profissional *</Label>
                  <Input
                    id="email"
                    type="text"
                    {...register("email")}
                    placeholder="seu@email.com"
                    className="h-11 border-border/60"
                  />
                  {errors.email && (
                    <p className="text-[10px] font-bold text-red-500 mt-1 uppercase tracking-tight">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone_number_id" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Telefone *</Label>
                  <Input
                    id="phone_number_id"
                    {...register("phone_number_id", {
                      onChange: (e) => {
                        const formatted = formatPhoneNumber(e.target.value);
                        setValue("phone_number_id", formatted);
                      },
                      validate: (value) => {
                        if (!value || value.trim() === '') {
                          return 'Telefone é obrigatório';
                        }
                        const digitsOnly = value.replace(/\D/g, '');
                        if (digitsOnly.length !== 10 && digitsOnly.length !== 11) {
                          return 'Telefone deve ter 10 ou 11 dígitos';
                        }
                        return true;
                      }
                    })}
                    placeholder="(11) 99999-9999"
                    className="h-11 border-border/60"
                  />
                  {errors.phone_number_id && (
                    <p className="text-[10px] font-bold text-red-500 mt-1 uppercase tracking-tight">{errors.phone_number_id.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Senha *</Label>
                  <Input
                    id="password"
                    type="password"
                    {...register("password")}
                    placeholder="Mínimo 8 caracteres"
                    className="h-11 border-border/60"
                  />
                  {errors.password && (
                    <p className="text-[10px] font-bold text-red-500 mt-1 uppercase tracking-tight">{errors.password.message}</p>
                  )}
                </div>

                <Alert className="bg-muted/30 border-none py-2">
                  <AlertDescription className="text-[10px] leading-relaxed text-muted-foreground">
                    A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula,
                    uma minúscula e um número.
                  </AlertDescription>
                </Alert>
              </div>
            )}

          <div className="flex flex-col space-y-4 pt-4">
            <div className="flex gap-3">
              {currentStep > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={isSubmitting}
                  className="flex-1 h-12 border-border/60"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Voltar
                </Button>
              )}

              {currentStep < steps.length ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  disabled={!isCurrentStepValid() || isSubmitting}
                  className="flex-[2] h-12 font-bold"
                >
                  Continuar cadastro
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-[2] h-12 font-bold text-md"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Criando...
                    </>
                  ) : (
                    plan ? "Continuar para ativação" : "Criar minha conta gratuita"
                  )}
                </Button>
              )}
            </div>

            {currentStep === steps.length && (
              <div className="text-center space-y-1 animate-in fade-in duration-500 delay-150">
                <p className="text-[11px] font-medium text-muted-foreground">
                  {plan ? "Crie sua conta e continue para ativação do plano." : "Acesso imediato à plataforma. Escolha seu plano depois."}
                </p>
                <p className="text-[10px] text-muted-foreground/60 italic">
                  Sem compromisso. {plan ? "Você ativa ou cancela dentro do sistema." : "Teste gratuito disponível para todos os planos."}
                </p>
              </div>
            )}

            {/* Texto de segurança */}
            <div className="text-center pt-2 border-t border-border/30 mt-2">
              <p className="text-[10px] text-muted-foreground/70">
                🔒 Seus dados estão protegidos e criptografados
              </p>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
