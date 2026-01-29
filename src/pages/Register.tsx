import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { RegisterWizard } from "../components/RegisterWizard";
import { CheckCircle2, Sparkles, ArrowLeft, Check, Shield, Clock } from "lucide-react";
import { Button } from "../components/ui/button";

const Register = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const plan = searchParams.get("plan");

  const planInfo = {
    pro: {
      title: "Plano Profissional",
      price: "R$ 299,90/mês",
      color: "text-primary",
      bg: "bg-primary/5",
      border: "border-primary/20",
    },
    standard: {
      title: "Plano Standard",
      price: "R$ 149,90/mês",
      color: "text-primary",
      bg: "bg-primary/5",
      border: "border-primary/20",
    },
  };

  const selectedPlan = plan === "pro" ? planInfo.pro : plan === "standard" ? planInfo.standard : null;

  const onboardingSteps = [
    { text: "Crie sua conta", active: true },
    { text: "Entre no sistema", active: false },
    { text: "Escolha seu plano", active: false },
    { text: "Ative 7 dias grátis", active: false },
  ];

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl lg:max-w-5xl">
        <div className="flex items-center mb-6 max-w-md mx-auto lg:max-w-none">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate(-1)} 
            className="text-muted-foreground hover:text-foreground transition-colors -ml-2 gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
        </div>

        <div className="grid lg:grid-cols-[1fr,400px] gap-8 lg:gap-12 items-start">
          {/* Coluna da esquerda: Informações e contexto */}
          <div className="space-y-6 order-2 lg:order-1">
            {selectedPlan ? (
              <>
                <div className={`rounded-2xl border ${selectedPlan.border} ${selectedPlan.bg} p-6 animate-in fade-in slide-in-from-top-4 duration-500 shadow-sm`}>
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className={`w-5 h-5 ${selectedPlan.color}`} />
                    <h2 className="font-bold text-foreground">Você escolheu o {selectedPlan.title}</h2>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Crie sua conta para ativar seu plano dentro do sistema.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${selectedPlan.bg} ${selectedPlan.color} border ${selectedPlan.border}`}>
                      {selectedPlan.price}
                    </span>
                    <div className="flex items-center gap-1.5 text-green-600 font-bold text-xs bg-green-50 px-2 py-1 rounded-md border border-green-100">
                      <Sparkles className="w-3.5 h-3.5" />
                      7 DIAS GRÁTIS
                    </div>
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-xs text-muted-foreground">
                    Você confirma a assinatura somente após o período de teste.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="text-center lg:text-left space-y-4 animate-in fade-in duration-700">
                  <h1 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                    Crie sua conta gratuita
                  </h1>
                  <p className="text-base text-muted-foreground max-w-[480px] mx-auto lg:mx-0 leading-relaxed">
                    Crie sua conta e explore o sistema.<br />
                    Você escolhe o plano e ativa o teste grátis depois.
                  </p>
                </div>

                {/* Checklist de fluxo */}
                <div className="bg-card border border-border/50 rounded-xl p-5 shadow-sm animate-in fade-in duration-700 delay-150">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-5 bg-primary rounded-full" />
                    <h3 className="text-sm font-semibold text-foreground">Como funciona</h3>
                  </div>
                  <div className="space-y-3">
                    {onboardingSteps.map((step, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          step.active 
                            ? 'bg-primary/10 border-2 border-primary' 
                            : 'bg-muted border border-border'
                        }`}>
                          {step.active ? (
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          ) : (
                            <Check className="w-3 h-3 text-muted-foreground" />
                          )}
                        </div>
                        <span className={`text-sm ${
                          step.active 
                            ? 'text-foreground font-medium' 
                            : 'text-muted-foreground'
                        }`}>
                          {step.text}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/50">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      Leva menos de 1 minuto
                    </span>
                  </div>
                </div>

                {/* Selo de segurança */}
                <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground animate-in fade-in duration-700 delay-300">
                  <Shield className="w-4 h-4" />
                  <span className="text-xs">
                    Seus dados estão protegidos e criptografados
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Coluna da direita: Formulário */}
          <div className="order-1 lg:order-2 w-full max-w-md mx-auto lg:mx-0">
            <RegisterWizard />
          </div>
        </div>

        {/* Rodapé */}
        <div className="text-center space-y-4 mt-12 max-w-md mx-auto">
          <p className="text-sm text-muted-foreground">
            Já tem uma conta?{" "}
            <Link
              to="/login"
              className="font-semibold text-primary hover:underline"
            >
              Faça login
            </Link>
          </p>
          <div className="pt-4 border-t border-border/50">
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
              © 2026 Sous Clinic. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
