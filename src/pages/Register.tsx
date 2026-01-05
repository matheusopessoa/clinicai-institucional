import { Link } from "react-router-dom";
import { RegisterWizard } from "../components/RegisterWizard";

const Register = () => {
  return (
    <div className="min-h-screen bg-muted/50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground">Sous Clinic</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sistema de gerenciamento de relacionamento com clientes
          </p>
        </div>

        <RegisterWizard />

        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Já tem uma conta?{" "}
            <Link
              to="/login"
              className="font-medium text-primary hover:text-primary/80"
            >
              Faça login
            </Link>
          </p>
          <p className="text-xs text-muted-foreground">
            © 2025 Sous Clinic. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
