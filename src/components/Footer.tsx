import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sous Clinic
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Gestão Inteligente de Pacientes
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a 
              href="https://app.sousclinic.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Acessar Plataforma
            </a>
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Suporte
            </a>
            <Link 
              to="/politica-de-privacidade"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              Política de Privacidade
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-accent fill-accent" />
            <span>para profissionais de saúde</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Sous Clinic. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
