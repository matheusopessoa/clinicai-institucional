import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Alert, AlertDescription } from "../components/ui/alert";
import { CheckCircle, Mail, AlertCircle, RefreshCw } from "lucide-react";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const [isResending, setIsResending] = useState(false);
  const [resendMessage, setResendMessage] = useState("");

  const handleResendEmail = async () => {
    if (!email) return;

    setIsResending(true);
    setResendMessage("");

    try {
      // TODO: Implement resend email API call
      // await resendVerificationEmail(email);
      setResendMessage("Email de verificação reenviado com sucesso!");
    } catch (error) {
      setResendMessage("Erro ao reenviar email. Tente novamente.");
    } finally {
      setIsResending(false);
    }
  };

  const handleContinueToApp = () => {
    window.location.href = "https://app.sousclinic.com";
  };

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
            <Link
              to="/register"
              className="text-primary hover:text-primary/80 font-medium"
            >
              Voltar ao cadastro
            </Link>
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
            <CardTitle className="text-center">Verifique seu email</CardTitle>
            <CardDescription className="text-center">
              Enviamos um link de verificação para{" "}
              <strong className="text-foreground">{email}</strong>
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-4 text-center">
              <div className="space-y-2">
                <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                <p className="text-sm text-muted-foreground">
                  <strong>1.</strong> Abra seu email e clique no link de verificação
                </p>
              </div>

              <div className="space-y-2">
                <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                <p className="text-sm text-muted-foreground">
                  <strong>2.</strong> Sua conta será ativada automaticamente
                </p>
              </div>

              <div className="space-y-2">
                <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                <p className="text-sm text-muted-foreground">
                  <strong>3.</strong> Você será redirecionado para o Sous Clinic
                </p>
              </div>
            </div>

            <Alert>
              <Mail className="h-4 w-4" />
              <AlertDescription>
                Não encontrou o email? Verifique sua caixa de spam ou lixo eletrônico.
              </AlertDescription>
            </Alert>

            {resendMessage && (
              <Alert className={resendMessage.includes("sucesso") ? "" : "border-red-200"}>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{resendMessage}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-3">
              <Button
                onClick={handleResendEmail}
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
                    Reenviar email de verificação
                  </>
                )}
              </Button>

              <Button
                onClick={handleContinueToApp}
                className="w-full"
              >
                Ir para o Sous Clinic
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

export default VerifyEmail;
