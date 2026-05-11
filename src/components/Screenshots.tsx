import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const PhoneMockup = ({
  src,
  alt,
  delay = 0,
  rotate = 0,
}: {
  src: string;
  alt: string;
  delay?: number;
  rotate?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    style={{ rotate }}
    className="relative flex-shrink-0"
  >
    {/* Phone shell */}
    <div
      className="relative rounded-[2.8rem] bg-[#0f172a] dark:bg-slate-950 p-[3px]"
      style={{
        boxShadow: "0 32px 64px -12px rgba(15,23,42,0.35), 0 0 0 1px rgba(255,255,255,0.06) inset",
      }}
    >
      {/* Screen bezel */}
      <div className="rounded-[2.5rem] overflow-hidden bg-black relative">
        {/* Dynamic island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[72px] h-[22px] bg-black rounded-full z-20" />

        {/* Screen content */}
        <div className="w-[155px] sm:w-[200px] lg:w-[240px]">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>
      </div>

      {/* Side buttons */}
      <div className="absolute -right-[3px] top-20 w-[3px] h-12 bg-[#1e293b] rounded-r-full" />
      <div className="absolute -left-[3px] top-16 w-[3px] h-8 bg-[#1e293b] rounded-l-full" />
      <div className="absolute -left-[3px] top-28 w-[3px] h-8 bg-[#1e293b] rounded-l-full" />
      <div className="absolute -left-[3px] top-40 w-[3px] h-8 bg-[#1e293b] rounded-l-full" />
    </div>
  </motion.div>
);

export const Screenshots = () => {
  return (
    <section id="demo" className="relative py-20 md:py-28 bg-[#f4ebe0]/40 dark:bg-slate-900 overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f43f5e]/30 to-transparent" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #a64458 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none opacity-[0.07] dark:opacity-[0.05]"
        style={{ background: "radial-gradient(ellipse, #f43f5e 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      <div className="relative container mx-auto px-6 max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#f43f5e]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#a64458] dark:text-rose-400">
              Plataforma
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#f43f5e]" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#0f172a] dark:text-slate-100 leading-tight">
              Esteja presente em toda a{" "}
              <span className="font-serif italic font-semibold text-[#f43f5e]">jornada</span>{" "}
              do tratamento
            </h2>
            <p className="text-[#64748b] dark:text-slate-400 text-base leading-relaxed max-w-xs md:text-right flex-shrink-0">
              Acompanhe, formalize e fidelize. Tudo em um só lugar.
            </p>
          </div>
        </motion.div>

        {/* Phones + copy */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Phones group */}
          <div className="flex items-end justify-center flex-shrink-0">
            <PhoneMockup
              src="/dashboard_mobile.png"
              alt="Dashboard mobile da plataforma"
              delay={0.1}
              rotate={-4}
            />
            <div className="mb-8 -ml-6 sm:-ml-4 lg:-ml-2">
              <PhoneMockup
                src="/conversa-whatsapp.jpeg"
                alt="Conversa no WhatsApp com a IA"
                delay={0.25}
                rotate={4}
              />
            </div>
          </div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-6 max-w-md text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 mx-auto lg:mx-0">
              <div className="w-8 h-8 rounded-xl bg-[#f43f5e]/10 flex items-center justify-center">
                <Smartphone className="w-4 h-4 text-[#f43f5e]" />
              </div>
              <span className="text-sm font-semibold text-[#0f172a] dark:text-slate-100">
                100% compatível com celular
              </span>
            </div>

            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0f172a] dark:text-slate-100 leading-snug">
              Gerencie sua clínica de qualquer lugar
            </h3>

            <p className="text-[#64748b] dark:text-slate-400 text-sm leading-relaxed">
              Da confirmação de consultas ao acompanhamento pós-procedimento, tudo acontece pelo celular. Você e seus pacientes sempre conectados.
            </p>

            <div className="flex flex-col gap-3">
              {[
                "Plataforma web para computador e aplicativo para celular",
                "IA no WhatsApp ativa 24h para seus pacientes",
                "Agenda, assinatura digital e estoque na palma da mão",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-2.5"
                >
                  <div className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-[#f43f5e]/10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#f43f5e]" />
                  </div>
                  <span className="text-sm text-[#64748b] dark:text-slate-400">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-2">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 h-12 text-sm font-semibold bg-[#f43f5e] hover:bg-[#a64458] text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-rose-200 dark:hover:shadow-rose-900/40"
              >
                <Link to="/register" className="flex items-center gap-2">
                  Comece a usar agora
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f43f5e]/20 to-transparent" />
    </section>
  );
};
