import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Alert, AlertDescription } from "../components/ui/alert";
import { CheckCircle, Mail, AlertCircle, RefreshCw, ArrowLeft } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { verifyEmailCode, resendVerificationCode } from "../lib/api";

const VerifyEmailCode = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const email = searchParams.get("email") || "";
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

      // Redirect to app after 2 seconds
      setTimeout(() => {
        window.location.href = "https://app.clinicai.io";
      }, 2000);

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
    return (
      <div className="min-h-screen bg-muted/50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md mx-auto">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-600">Conta verificada!</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Você será redirecionado para o ClinicAI...
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
          <h1 className="text-3xl font-bold text-foreground">ClinicAI</h1>
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
            © 2025 ClinicAI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailCode;
