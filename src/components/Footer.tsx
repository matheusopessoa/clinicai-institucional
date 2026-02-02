import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-12 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-rose-400 bg-clip-text text-transparent">
              Sous Clinic
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Gestão Inteligente de Pacientes
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a 
              href="https://app.sousclinic.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
            >
              Acessar Plataforma
            </a>
            <a 
              href="https://wa.me/+5581995497487?text=Olá! Gostaria de conhecer o Sous Clinic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
            >
              Suporte
            </a>
            <Link 
              to="/politica-de-privacidade"
              className="text-slate-500 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
            >
              Política de Privacidade
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span>para profissionais de saúde</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-400 dark:text-slate-500">
          <p>© {new Date().getFullYear()} Sous Clinic. Todos os direitos reservados.</p>
          <p className="mt-2 text-[10px] opacity-70">
            CNPJ: 56.544.618/0001-77 | 56.544.618 ANDRE VINICIUS CAMPOS LUCENA
          </p>
        </div>
      </div>
    </footer>
  );
};
