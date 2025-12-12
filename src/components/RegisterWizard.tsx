"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
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
      const hasEmail = currentValues.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(currentValues.email);
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

      // Redirecionar diretamente para verificação de email
      window.location.href = `/verify-email-code?email=${encodeURIComponent(data.email)}`;

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
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isCompleted = currentStep > step.id;
              const isCurrent = currentStep === step.id;

              return (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      isCompleted
                        ? "bg-green-500 text-white"
                        : isCurrent
                        ? "bg-primary text-primary-foreground"
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
                      className={`w-8 h-0.5 ${
                        currentStep > step.id ? "bg-green-500" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <CardTitle className="text-xl">
            {steps[currentStep - 1].title}
          </CardTitle>
          <CardDescription>
            {steps[currentStep - 1].description}
          </CardDescription>
        </div>

        <Progress value={progress} className="w-full" />
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {currentStep === 1 && (
            <div className="space-y-4">
                {/* Passo 1: Dados da Clínica */}
                <div className="space-y-2">
                  <Label htmlFor="business_name">Nome Fantasia *</Label>
                  <Input
                    id="business_name"
                    {...register("business_name")}
                    placeholder="Ex: Clínica Saúde & Bem-Estar"
                  />
                  {errors.business_name && (
                    <p className="text-sm text-red-500">{errors.business_name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="business_type">Tipo de Negócio *</Label>
                  <Select
                    onValueChange={(value) => setValue("business_type", value as any)}
                    value={watchedValues.business_type}
                  >
                    <SelectTrigger>
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
                    <p className="text-sm text-red-500">{errors.business_type.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialty">Especialidade Principal</Label>
                  <Input
                    id="specialty"
                    {...register("specialty")}
                    placeholder="Ex: Cardiologia, Pediatria, etc."
                  />
                  {errors.specialty && (
                    <p className="text-sm text-red-500">{errors.specialty.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="number_of_employees">Número de Funcionários</Label>
                  <Input
                    id="number_of_employees"
                    type="number"
                    min="1"
                    {...register("number_of_employees", { valueAsNumber: true })}
                    placeholder="Ex: 5"
                  />
                  {errors.number_of_employees && (
                    <p className="text-sm text-red-500">{errors.number_of_employees.message}</p>
                  )}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                {/* Passo 2: Dados Pessoais */}
                <div className="space-y-2">
                  <Label htmlFor="full_name">Nome Completo *</Label>
                  <Input
                    id="full_name"
                    {...register("full_name")}
                    placeholder="Seu nome completo"
                  />
                  {errors.full_name && (
                    <p className="text-sm text-red-500">{errors.full_name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Profissional *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone_number_id">Telefone *</Label>
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
                          return 'Telefone deve ter 10 ou 11 dígitos (ex: (11) 99999-9999 ou (11) 9999-9999)';
                        }
                        return true;
                      }
                    })}
                    placeholder="(11) 99999-9999"
                  />
                  {errors.phone_number_id && (
                    <p className="text-sm text-red-500">{errors.phone_number_id.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Senha *</Label>
                  <Input
                    id="password"
                    type="password"
                    {...register("password")}
                    placeholder="Mínimo 8 caracteres"
                  />
                  {errors.password && (
                    <p className="text-sm text-red-500">{errors.password.message}</p>
                  )}
                </div>

                <Alert>
                  <AlertDescription className="text-xs">
                    A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula,
                    uma minúscula e um número.
                  </AlertDescription>
                </Alert>
              </div>
            )}

          <div className="flex justify-between pt-4">
            {currentStep > 1 ? (
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                disabled={isSubmitting}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            ) : (
              <div />
            )}

            {currentStep < steps.length ? (
              <Button
                type="button"
                onClick={handleNext}
                disabled={!isCurrentStepValid() || isSubmitting}
              >
                Próximo
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={isSubmitting}
                className="min-w-[120px]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Criando...
                  </>
                ) : (
                  "Criar Conta"
                )}
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
