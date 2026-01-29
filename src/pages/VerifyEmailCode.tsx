import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Alert, AlertDescription } from "../components/ui/alert";
import { CheckCircle, Mail, AlertCircle, RefreshCw, ArrowLeft, Sparkles } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { verifyEmailCode, resendVerificationCode } from "../lib/api";

const VerifyEmailCode = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const email = searchParams.get("email") || "";
  const plan = searchParams.get("plan");
  const [code, setCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleVerifyCode = async () => {
    if (!code.trim()) {
      toast({
        title: "Código obrigatório",
        description: "Digite o código de verificação",
        variant: "destructive",
      });
      return;
    }

    setIsVerifying(true);

    try {
      await verifyEmailCode(code.trim());
      setIsVerified(true);

      toast({
        title: "Email verificado!",
        description: "Sua conta foi ativada com sucesso.",
      });

    } catch (error) {
      toast({
        title: "Código inválido",
        description: error instanceof Error ? error.message : "Código incorreto ou expirado",
        variant: "destructive",
      });
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendCode = async () => {
    if (!email) {
      toast({
        title: "Erro",
        description: "Email não encontrado",
        variant: "destructive",
      });
      return;
    }

    setIsResending(true);

    try {
      const result = await resendVerificationCode(email);
      toast({
        title: result.success ? "Código reenviado!" : "Erro",
        description: result.message,
        variant: result.success ? "default" : "destructive",
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível reenviar o código",
        variant: "destructive",
      });
    } finally {
      setIsResending(false);
    }
  };

  const handleBackToRegister = () => {
    navigate("/register");
  };

  if (isVerified) {
    const planInfo = {
      pro: {
        title: "Plano Profissional",
        price: "R$ 299,90/mês",
        color: "text-primary",
        bg: "bg-primary/5",
        border: "border-primary/20",
        btnLabel: "Ativar Plano Profissional",
      },
      standard: {
        title: "Plano Standard",
        price: "R$ 149,90/mês",
        color: "text-primary",
        bg: "bg-primary/5",
        border: "border-primary/20",
        btnLabel: "Ativar Plano Standard",
      },
    };

    const selectedPlan = plan === "pro" ? planInfo.pro : plan === "standard" ? planInfo.standard : null;

    return (
      <div className="min-h-screen bg-muted/30 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md mx-auto border-border/50 shadow-2xl animate-in zoom-in-95 duration-500">
          <CardContent className="pt-10 pb-10">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground tracking-tight">Conta criada com sucesso ✅</h3>
                <p className="text-muted-foreground text-sm">
                  Sua identidade foi confirmada. Agora ative seu plano para começar.
                </p>
              </div>

              {selectedPlan && (
                <div className={`rounded-2xl border ${selectedPlan.border} ${selectedPlan.bg} p-6 my-6 text-left`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Plano Selecionado</span>
                    <div className="flex items-center gap-1.5 text-green-600 font-bold text-[10px] bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                      <Sparkles className="w-3 h-3" />
                      7 DIAS GRÁTIS
                    </div>
                  </div>
                  <h4 className={`text-xl font-bold ${selectedPlan.color} mb-1`}>{selectedPlan.title}</h4>
                  <p className="text-sm font-medium text-muted-foreground">{selectedPlan.price}</p>
                </div>
              )}

              <div className="pt-4 space-y-4">
                <Button 
                  onClick={() => window.location.href = `https://app.sousclinic.com/dashboard/upgrade/${plan || 'pro'}`}
                  size="lg"
                  className="w-full h-14 text-md font-bold shadow-lg shadow-primary/20 rounded-2xl"
                >
                  {selectedPlan ? selectedPlan.btnLabel : "Ir para o Dashboard"}
                </Button>
                
                <p className="text-[11px] text-muted-foreground">
                  Você será redirecionado para o ambiente seguro do Sous Clinic.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!email) {
    return (
      <div className="min-h-screen bg-muted/50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
            <CardTitle className="text-center">Link inválido</CardTitle>
            <CardDescription className="text-center">
              O link de verificação parece estar incompleto.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button onClick={handleBackToRegister} variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao cadastro
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground">Sous Clinic</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sistema de gerenciamento de relacionamento com clientes
          </p>
        </div>

        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-100 rounded-full">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <CardTitle className="text-center">Verificar Email</CardTitle>
            <CardDescription className="text-center">
              Digite o código de 6 dígitos enviado para{" "}
              <strong className="text-foreground">{email}</strong>
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="code" className="text-sm font-medium">
                  Código de Verificação
                </label>
                <Input
                  id="code"
                  type="text"
                  placeholder="A1B2C3"
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase())}
                  maxLength={6}
                  className="text-center text-2xl font-mono tracking-widest"
                  disabled={isVerifying}
                />
                <p className="text-xs text-muted-foreground text-center">
                  O código expira em 15 minutos
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                onClick={handleVerifyCode}
                className="w-full"
                disabled={isVerifying || code.length !== 6}
              >
                {isVerifying ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Verificando...
                  </>
                ) : (
                  "Verificar Código"
                )}
              </Button>

              <Button
                onClick={handleResendCode}
                variant="outline"
                className="w-full"
                disabled={isResending}
              >
                {isResending ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Reenviando...
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 mr-2" />
                    Reenviar código
                  </>
                )}
              </Button>
            </div>

            <div className="text-center">
              <Button
                onClick={handleBackToRegister}
                variant="ghost"
                size="sm"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao cadastro
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 Sous Clinic. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailCode;
