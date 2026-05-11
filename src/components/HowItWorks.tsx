import { CreditCard, Database, GraduationCap, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: CreditCard,
    title: "Cadastre-se na Plataforma",
    description: "Crie sua conta, escolha o plano ideal ou fale com nosso suporte para entender o processo de implementação e tirar dúvidas antes de começar.",
    detail: "Suporte disponível antes e durante a implementação",
  },
  {
    icon: Database,
    title: "Migração de Dados",
    description: "Se você já tem dados de pacientes, consultas e serviços, nossa equipe faz a migração completa para que nenhuma informação seja perdida.",
    detail: "Opcional — apenas se houver dados a migrar",
  },
  {
    icon: GraduationCap,
    title: "Treinamento da Equipe",
    description: "Treinamos toda a sua equipe para usar a plataforma com confiança: recepcionistas, profissionais e gestores.",
    detail: "Treinamento completo incluso em todos os planos",
  },
  {
    icon: Rocket,
    title: "Sua Clínica no Ar",
    description: "Com tudo pronto, você já tem acesso completo à plataforma para gerenciar sua clínica com total autonomia.",
    detail: "Suporte contínuo após o lançamento",
  },
];

const StepCard = ({
  step,
  index,
  align,
}: {
  step: (typeof steps)[0];
  index: number;
  align: "left" | "right";
}) => {
  const Icon = step.icon;
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className={`group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-4 sm:p-5 ${align === "right" ? "text-right" : "text-left"}`}
      style={{ boxShadow: "0 2px 20px 0 rgba(15,23,42,0.05)" }}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-rose-50/50 to-[#f4ebe0]/30 dark:from-rose-950/20 dark:to-transparent" />

      <div className="relative z-10">
        <div className={`flex items-center gap-2 mb-3 ${align === "right" ? "justify-end" : "justify-start"}`}>
          <span className="font-serif text-2xl font-bold text-[#f43f5e]/15 dark:text-rose-300/10 leading-none select-none">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="w-7 h-7 rounded-lg bg-[#f43f5e]/10 dark:bg-rose-900/30 flex items-center justify-center group-hover:bg-[#f43f5e]/15 transition-colors flex-shrink-0">
            <Icon className="w-3.5 h-3.5 text-[#f43f5e]" />
          </div>
        </div>

        <h3 className="text-sm font-semibold text-[#0f172a] dark:text-slate-100 mb-1.5 leading-snug">
          {step.title}
        </h3>
        <p className="text-xs text-[#64748b] dark:text-slate-400 leading-relaxed mb-3 hidden sm:block">
          {step.description}
        </p>
        <p className="text-xs text-[#64748b] dark:text-slate-400 leading-relaxed mb-3 sm:hidden line-clamp-2">
          {step.description}
        </p>

        <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[#f4ebe0] dark:bg-slate-800 border border-[#f43f5e]/10 ${align === "right" ? "flex-row-reverse" : ""}`}>
          <div className="w-1 h-1 rounded-full bg-[#10b981] flex-shrink-0" />
          <span className="text-[10px] text-[#64748b] dark:text-slate-400 leading-snug">{step.detail}</span>
        </div>
      </div>
    </motion.div>
  );
};

export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="relative py-20 md:py-28 bg-[#f8fafc] dark:bg-slate-950 overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #a64458 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative container mx-auto px-6 max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#f43f5e]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#a64458] dark:text-rose-400">
              Implementação
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#f43f5e]" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#0f172a] dark:text-slate-100 leading-tight">
            Como{" "}
            <span className="font-serif italic font-semibold text-[#f43f5e]">implementar</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-[#f43f5e]/30 via-[#a64458]/20 to-transparent" />

          <div className="flex flex-col gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
                  className="grid grid-cols-[1fr_44px_1fr] items-center gap-0"
                >
                  {/* Left slot */}
                  <div className={isEven ? "pr-4" : ""}>
                    {isEven && <StepCard step={step} index={index} align="right" />}
                  </div>

                  {/* Center node */}
                  <div className="flex items-center justify-center z-10">
                    <div
                      className="w-9 h-9 rounded-full bg-white dark:bg-slate-900 border-2 border-[#f43f5e]/40 flex items-center justify-center flex-shrink-0"
                      style={{ boxShadow: "0 0 0 4px rgba(244,63,94,0.08)" }}
                    >
                      <span className="text-xs font-bold text-[#f43f5e]">{index + 1}</span>
                    </div>
                  </div>

                  {/* Right slot */}
                  <div className={!isEven ? "pl-4" : ""}>
                    {!isEven && <StepCard step={step} index={index} align="left" />}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full px-10 h-14 text-base font-semibold bg-[#f43f5e] hover:bg-[#a64458] text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-rose-200 dark:hover:shadow-rose-900/40"
          >
            <Link to="/register" className="flex items-center gap-2">
              Começar implementação
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
