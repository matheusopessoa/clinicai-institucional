import { Shield, Heart, Users, Calendar, Smartphone, FileText, BarChart3, BoxIcon, Camera, DollarSign, Bell, MessageCircle, Zap, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const primaryFeature = {
  icon: Smartphone,
  tag: "Inteligência Artificial · WhatsApp",
  title: "IA que cuida do paciente por você",
  description:
    "Uma assistente inteligente que age nos momentos certos: antes, durante e depois do procedimento, sem que você precise fazer nada.",
  highlights: [
    {
      icon: Bell,
      label: "Confirmação automática",
      detail: "Lembra o paciente 1 dia antes da consulta e aguarda confirmação pelo WhatsApp.",
    },
    {
      icon: MessageCircle,
      label: "Acompanhamento pós-procedimento",
      detail: "Envia mensagens personalizadas após cada procedimento para acompanhar a recuperação e fidelizar o paciente.",
    },
    {
      icon: Zap,
      label: "Respostas 24h",
      detail: "Responde dúvidas, confirma agendamentos e gerencia a agenda mesmo fora do horário comercial.",
    },
  ],
};

const secondaryFeatures = [
  {
    icon: Calendar,
    number: "03",
    title: "Agenda Online",
    description: "Link de agendamento 24h para consultas, avaliações e procedimentos.",
  },
  {
    icon: FileText,
    number: "04",
    title: "Assinatura Digital",
    description: "Documentos com validade jurídica, sem papel e com rastreabilidade.",
  },
  {
    icon: BoxIcon,
    number: "05",
    title: "Gestão de Estoque",
    description: "Controle de produtos, compras e validades de forma inteligente.",
  },
  {
    icon: BarChart3,
    number: "06",
    title: "Resumo Visual do Dia",
    description: "Panorama da rotina diária para decisões rápidas e objetivas.",
  },
  {
    icon: Users,
    number: "07",
    title: "Multi-Profissional",
    description: "Acessos individuais com permissões personalizadas para sua equipe.",
  },
  {
    icon: Shield,
    number: "08",
    title: "Segurança de Dados",
    description: "Dados dos pacientes protegidos com criptografia e conformidade LGPD.",
  },
  {
    icon: Camera,
    number: "09",
    title: "Fotos Antes & Depois",
    description: "Registre e compare a evolução dos pacientes com galeria de fotos organizada por procedimento.",
  },
  {
    icon: DollarSign,
    number: "10",
    title: "Financeiro & Orçamentos",
    description: "Crie pacotes personalizados e envie orçamentos em PDF direto para o paciente.",
  },
];

const PrimaryCard = () => {
  const Icon = primaryFeature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl bg-[#f4ebe0] dark:bg-slate-800/80 border border-[#f43f5e]/15 dark:border-rose-900/30 p-6 md:p-8 flex flex-col gap-5 md:gap-7 cursor-default h-full"
      style={{ boxShadow: "0 4px 32px 0 rgba(244,63,94,0.09)" }}
    >
      <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-gradient-to-b from-[#f43f5e] to-[#a64458]" />
      <span className="absolute right-5 bottom-3 font-serif text-[7rem] font-bold select-none pointer-events-none text-[#a64458]/[0.06] dark:text-rose-300/[0.05] leading-none">
        01
      </span>
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 20% 40%, rgba(244,63,94,0.09) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 flex flex-col h-full gap-5 md:gap-6">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase text-[#a64458] dark:text-rose-400">
          <span className="w-3 h-px bg-[#f43f5e]" />
          {primaryFeature.tag}
        </span>

        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-white/70 dark:bg-slate-700/60 shadow-sm group-hover:shadow-md transition-shadow flex-shrink-0">
            <Icon className="w-5 h-5 text-[#f43f5e] transition-transform duration-300 group-hover:scale-110" />
          </div>
          <h3 className="font-serif text-xl md:text-2xl font-bold text-[#0f172a] dark:text-slate-100 leading-snug">
            {primaryFeature.title}
          </h3>
        </div>

        <p className="text-[#64748b] dark:text-slate-400 text-sm leading-relaxed">
          {primaryFeature.description}
        </p>

        <div className="flex flex-col gap-2.5 mt-auto">
          {primaryFeature.highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-3 p-3 rounded-xl bg-white/60 dark:bg-slate-700/40 border border-white/80 dark:border-slate-600/30"
            >
              <div className="flex-shrink-0 mt-0.5 text-[#f43f5e]">
                <h.icon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#0f172a] dark:text-slate-100 mb-0.5">{h.label}</p>
                <p className="text-[11px] text-[#64748b] dark:text-slate-400 leading-snug">{h.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SecondaryCard = ({
  feature,
  index,
  inCarousel = false,
}: {
  feature: (typeof secondaryFeatures)[0];
  index: number;
  inCarousel?: boolean;
}) => {
  const Icon = feature.icon;

  const card = (
    <div
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 flex flex-col gap-3 cursor-default h-full"
      style={{ boxShadow: "0 2px 12px 0 rgba(15,23,42,0.04)" }}
    >
      <span className="absolute right-4 top-3 font-serif text-4xl font-bold select-none pointer-events-none text-slate-100 dark:text-slate-800 leading-none">
        {feature.number}
      </span>
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-rose-50/60 to-[#f4ebe0]/40 dark:from-rose-950/20 dark:to-slate-800/0" />

      <div className="relative z-10 flex items-start gap-3">
        <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-[#f43f5e]/[0.08] dark:bg-rose-900/30 group-hover:bg-[#f43f5e]/[0.15] transition-colors">
          <Icon className="w-4 h-4 text-[#f43f5e]" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#0f172a] dark:text-slate-100 mb-1 leading-tight">
            {feature.title}
          </h3>
          <p className="text-[#64748b] dark:text-slate-400 text-xs leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );

  if (inCarousel) return card;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.07, ease: "easeOut" }}
      whileHover={{ y: -3 }}
    >
      {card}
    </motion.div>
  );
};

const MobileCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const cardWidth = el.scrollWidth / secondaryFeatures.length;
      setActiveIndex(Math.round(el.scrollLeft / cardWidth));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative">
      {/* Fade right edge hint */}
      <div className="absolute right-0 top-0 bottom-4 w-10 bg-gradient-to-l from-[#f8fafc] dark:from-slate-950 to-transparent pointer-events-none z-10" />

      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto pb-4"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
        {secondaryFeatures.map((feat, i) => (
          <div
            key={feat.number}
            className="flex-shrink-0"
            style={{ scrollSnapAlign: "start", width: "78vw", maxWidth: 280 }}
          >
            <SecondaryCard feature={feat} index={i} inCarousel />
          </div>
        ))}
        {/* Trailing spacer */}
        <div className="flex-shrink-0 w-4" />
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-1.5 mt-1">
        {secondaryFeatures.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const el = scrollRef.current;
              if (!el) return;
              const cardWidth = el.scrollWidth / secondaryFeatures.length;
              el.scrollTo({ left: cardWidth * i, behavior: "smooth" });
            }}
            className={`rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-4 h-1.5 bg-[#f43f5e]"
                : "w-1.5 h-1.5 bg-slate-200 dark:bg-slate-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export const Features = () => {
  return (
    <section id="features" className="relative py-16 md:py-24 bg-[#f8fafc] dark:bg-slate-950 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #a64458 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full opacity-[0.06] dark:opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #f43f5e 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="relative container mx-auto px-6 max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-16 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#f43f5e]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#a64458] dark:text-rose-400">
              Funcionalidades
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#f43f5e]" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#0f172a] dark:text-slate-100 leading-tight max-w-lg">
              Tecnologia que{" "}
              <span className="font-serif italic font-semibold text-[#f43f5e]">cuida</span>{" "}
              do seu negócio
            </h2>
            <p className="text-[#64748b] dark:text-slate-400 text-base leading-relaxed max-w-xs md:text-right">
              Uma suíte completa desenhada para a rotina da clínica estética moderna.
            </p>
          </div>
        </motion.div>

        {/* Desktop layout */}
        <div className="hidden md:grid md:grid-cols-5 gap-5">
          <div className="md:col-span-2 flex flex-col">
            <PrimaryCard />
          </div>
          <div className="md:col-span-3 grid grid-cols-2 lg:grid-cols-3 gap-4 content-start">
            {secondaryFeatures.map((feat, i) => (
              <SecondaryCard key={feat.number} feature={feat} index={i} />
            ))}
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex flex-col gap-5 md:hidden">
          <PrimaryCard />

          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#64748b] dark:text-slate-400">
                Mais funcionalidades
              </span>
              <span className="flex items-center gap-0.5 text-[11px] text-[#a64458] font-medium">
                deslize <ChevronRight className="w-3 h-3" />
              </span>
            </div>
            <MobileCarousel />
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 md:mt-16 flex justify-center"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full px-10 h-14 text-base font-semibold bg-[#f43f5e] hover:bg-[#a64458] text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-rose-200 dark:hover:shadow-rose-900/40"
          >
            <Link to="/register" className="flex items-center gap-2">
              Começar transformação
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
