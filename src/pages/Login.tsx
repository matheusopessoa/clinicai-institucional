import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { LogIn } from "lucide-react";

const Login = () => {
  const handleLoginRedirect = () => {
    window.location.href = "https://app.sousclinic.com";
  };

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
            <CardTitle className="text-center">Acesse sua conta</CardTitle>
            <CardDescription className="text-center">
              Faça login na plataforma Sous Clinic
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Button
              onClick={handleLoginRedirect}
              className="w-full"
              size="lg"
            >
              <LogIn className="w-5 h-5 mr-2" />
              Ir para o Login
            </Button>
          </CardContent>
        </Card>

        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Não tem uma conta?{" "}
            <a
              href="/register"
              className="font-medium text-primary hover:text-primary/80"
            >
              Criar conta gratuita
            </a>
          </p>
          <p className="text-xs text-muted-foreground">
            © 2025 Sous Clinic. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
