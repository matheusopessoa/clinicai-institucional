import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight, UserPlus, LogIn, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const benefits = [
  "Sem setup técnico",
  "Implementação em 7 dias",
  "Treinamento incluído",
];

export const CTA = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+5581995497487?text=Olá! Gostaria de conhecer o Sous Clinic', '_blank');
  };

  return (
    <section className="relative py-20 md:py-28 bg-[#f8fafc] dark:bg-slate-950 overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #a64458 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none opacity-[0.07] dark:opacity-[0.05]"
        style={{ background: "radial-gradient(ellipse, #f43f5e 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      <div className="relative container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative bg-white dark:bg-slate-900 rounded-3xl border border-[#f43f5e]/15 dark:border-rose-900/30 px-8 py-12 md:px-14 md:py-16 text-center overflow-hidden"
          style={{ boxShadow: "0 8px 48px 0 rgba(244,63,94,0.10)" }}
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#f43f5e] to-[#a64458]" />

          {/* Decorative corner */}
          <div
            className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-[0.06] pointer-events-none"
            style={{ background: "radial-gradient(circle, #f43f5e 0%, transparent 70%)" }}
          />

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#f43f5e]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#a64458] dark:text-rose-400">
              Comece agora
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#f43f5e]" />
          </div>

          <h2 className="text-3xl md:text-4xl font-light text-[#0f172a] dark:text-slate-100 leading-tight mb-4">
            Pronto para transformar seu{" "}
            <span className="font-serif italic font-semibold text-[#f43f5e]">atendimento?</span>
          </h2>

          <p className="text-[#64748b] dark:text-slate-400 text-base leading-relaxed mb-8 max-w-lg mx-auto">
            Fale com nosso time e descubra como o Sous Clinic pode revolucionar a gestão dos seus pacientes em apenas 7 dias.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-[#10b981]/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#10b981]" />
                </div>
                <span className="text-sm text-[#64748b] dark:text-slate-400">{b}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 h-13 text-base font-semibold bg-[#f43f5e] hover:bg-[#a64458] text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-rose-200 dark:hover:shadow-rose-900/40"
            >
              <Link to="/register" className="flex items-center gap-2">
                <UserPlus className="w-4 h-4" />
                Criar conta gratuita
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={handleWhatsAppClick}
              className="rounded-full px-8 h-13 text-base font-semibold border-slate-200 dark:border-slate-700 text-[#0f172a] dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Falar com especialista
            </Button>
          </div>

          <p className="text-xs text-[#64748b] dark:text-slate-500">
            Já tem uma conta?{" "}
            <Link to="/login" className="font-medium text-[#f43f5e] hover:text-[#a64458] inline-flex items-center gap-1 transition-colors">
              <LogIn className="w-3 h-3" />
              Fazer login
            </Link>
          </p>

          <p className="text-xs text-[#64748b] dark:text-slate-500 mt-3">
            7 dias grátis · Sem cartão de crédito · Suporte em até 2 horas
          </p>
        </motion.div>
      </div>
    </section>
  );
};
