import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="relative bg-[#0f172a] dark:bg-slate-950 overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f43f5e]/40 to-transparent" />

      {/* Subtle glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] pointer-events-none opacity-[0.06]"
        style={{ background: "radial-gradient(ellipse, #f43f5e 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="relative container mx-auto px-6 py-12 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

          {/* Brand */}
          <div>
            <h3 className="text-xl text-white mb-1 tracking-tight">
              <span className="font-bold">Sous</span><span className="font-light"> Clinic</span>
            </h3>
            <p className="text-xs text-slate-500">Gestão inteligente de pacientes</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 text-sm">
            <a
              href="https://app.sousclinic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              Acessar plataforma
            </a>
            <a
              href="https://wa.me/+5581995497487?text=Olá! Gostaria de conhecer o Sous Clinic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              Suporte
            </a>
            <Link
              to="/politica-de-privacidade"
              className="text-slate-400 hover:text-white transition-colors duration-200"
            >
              Política de privacidade
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Sous Clinic. Todos os direitos reservados.
          </p>
          <p className="text-xs text-slate-600">
            Sous Clinic LTDA · CNPJ 65.889.169/0001-90
          </p>
        </div>
      </div>
    </footer>
  );
};
