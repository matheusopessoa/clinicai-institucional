import { Button } from "@/components/ui/button";
import { Check, X, Star, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WHATSAPP_URL = 'https://wa.me/+5581995497487?text=Olá! Gostaria de conhecer o Sous Clinic';

const features = [
  { label: "Usuários inclusos",                              standard: "2 usuários",   pro: "Até 20 usuários",  highlight: true  },
  { label: "Unidades / clínicas",                            standard: "1 unidade",    pro: "Até 3 unidades",   highlight: true  },
  { label: "Agenda de pacientes",                            standard: true,           pro: true,               highlight: false },
  { label: "Confirmação automática 1 dia antes via WhatsApp",standard: true,           pro: true,               highlight: false },
  { label: "Prontuário eletrônico",                          standard: true,           pro: true,               highlight: false },
  { label: "Gestão financeira e orçamentos em PDF",          standard: true,           pro: true,               highlight: false },
  { label: "Gestão de estoque",                              standard: true,           pro: true,               highlight: false },
  { label: "Resumo visual do dia",                           standard: true,           pro: true,               highlight: false },
  { label: "Assinatura digital",                             standard: false,          pro: true,               highlight: true  },
  { label: "Fotos antes e depois",                           standard: false,          pro: true,               highlight: true  },
  { label: "IA pós-procedimento no WhatsApp",                standard: false,          pro: true,               highlight: true  },
  { label: "Agenda online para pacientes 24h",               standard: false,          pro: true,               highlight: true  },
  { label: "Suporte prioritário",                            standard: false,          pro: true,               highlight: true  },
];

type FeatureValue = boolean | string;

// ─── Desktop table cells ────────────────────────────────────────────────────
const Cell = ({ value, highlight }: { value: FeatureValue; highlight?: boolean }) => {
  if (typeof value === "string") {
    return (
      <span className={`text-xs ${highlight ? "font-bold text-[#0f172a] dark:text-slate-100" : "font-semibold text-[#64748b] dark:text-slate-400"}`}>{value}</span>
    );
  }
  if (value) {
    return (
      <div className={`w-5 h-5 rounded-full flex items-center justify-center mx-auto ${highlight ? "bg-[#00A3FF]/10" : "bg-[#10b981]/10"}`}>
        <Check className={`w-3 h-3 ${highlight ? "text-[#00A3FF]" : "text-[#10b981]"}`} />
      </div>
    );
  }
  return (
    <div className="w-5 h-5 rounded-full flex items-center justify-center mx-auto bg-slate-100 dark:bg-slate-800">
      <X className="w-3 h-3 text-slate-300 dark:text-slate-600" />
    </div>
  );
};

// ─── Mobile plan card ────────────────────────────────────────────────────────
const MobilePlanCard = ({
  plan,
  delay,
}: {
  plan: "standard" | "pro";
  delay: number;
}) => {
  const isPro = plan === "pro";
  const includedFeatures = features.filter(f => f[plan] !== false);
  const excludedFeatures = features.filter(f => f[plan] === false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay }}
      className={`relative rounded-2xl border overflow-hidden ${
        isPro
          ? "border-[#f43f5e]/25 bg-white dark:bg-slate-900"
          : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
      }`}
      style={{ boxShadow: isPro ? "0 4px 32px 0 rgba(244,63,94,0.10)" : "0 2px 16px 0 rgba(15,23,42,0.05)" }}
    >
      {isPro && <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#f43f5e] to-[#a64458]" />}

      <div className={`p-5 ${isPro ? "bg-[#fff5f6]/60 dark:bg-rose-950/10" : ""}`}>
        {isPro && (
          <div className="inline-flex items-center gap-1.5 mb-3 px-2.5 py-1 rounded-full bg-[#f43f5e]/10">
            <Star className="w-3 h-3 text-[#f43f5e] fill-[#f43f5e]" />
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#f43f5e]">Mais recomendado</span>
          </div>
        )}

        <div className="flex items-end justify-between">
          <div>
            <p className={`text-[10px] font-bold tracking-[0.18em] uppercase mb-1 ${isPro ? "text-[#f43f5e]" : "text-[#64748b] dark:text-slate-400"}`}>
              {isPro ? "Profissional" : "Standard"}
            </p>
            <div className="flex items-baseline gap-0.5">
              <span className={`text-sm mt-1 ${isPro ? "text-[#a64458]" : "text-[#64748b]"}`}>R$</span>
              <span className="text-3xl font-bold text-[#0f172a] dark:text-slate-100">{isPro ? "299" : "149"}</span>
              <span className={`text-sm ${isPro ? "text-[#a64458]" : "text-[#64748b]"}`}>,90/mês</span>
            </div>
          </div>

          <Button
            asChild
            size="sm"
            className={`rounded-xl h-9 px-4 text-xs font-semibold ${
              isPro
                ? "bg-[#f43f5e] hover:bg-[#a64458] text-white"
                : "bg-white border border-slate-200 dark:border-slate-700 text-[#0f172a] dark:text-slate-100 hover:bg-slate-50 dark:bg-slate-800"
            }`}
          >
            <Link to={`/register?plan=${plan}`}>Começar grátis</Link>
          </Button>
        </div>
      </div>

      <div className="px-5 pb-5 pt-3 flex flex-col gap-2">
        {includedFeatures.map((f, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${f.highlight ? "bg-[#00A3FF]/10" : "bg-[#10b981]/10"}`}>
              <Check className={`w-2.5 h-2.5 ${f.highlight ? "text-[#00A3FF]" : "text-[#10b981]"}`} />
            </div>
            <span className={`text-xs leading-snug ${f.highlight ? "font-semibold text-[#0f172a] dark:text-slate-100" : "text-[#64748b] dark:text-slate-400"}`}>
              {typeof f[plan] === "string" ? `${f.label}: ${f[plan]}` : f.label}
            </span>
          </div>
        ))}

        {excludedFeatures.length > 0 && (
          <div className="mt-1 pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            {excludedFeatures.map((f, i) => (
              <div key={i} className="flex items-center gap-2.5 opacity-40">
                <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 bg-slate-100 dark:bg-slate-800">
                  <X className="w-2.5 h-2.5 text-slate-400" />
                </div>
                <span className="text-xs text-[#64748b] dark:text-slate-400">{f.label}</span>
              </div>
            ))}
          </div>
        )}

        <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800">
          <Button
            asChild
            className={`w-full rounded-xl h-11 text-sm font-semibold ${
              isPro
                ? "bg-[#f43f5e] hover:bg-[#a64458] text-white"
                : "bg-white border border-slate-200 dark:border-slate-700 dark:bg-slate-800 text-[#0f172a] dark:text-slate-100 hover:bg-slate-50"
            }`}
          >
            <Link to={`/register?plan=${plan}`}>Começar 7 dias grátis</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Main section ────────────────────────────────────────────────────────────
export const Pricing = () => {
  return (
    <section id="planos" className="relative py-20 md:py-28 bg-[#f8fafc] dark:bg-slate-950 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #a64458 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[300px] pointer-events-none opacity-[0.06] dark:opacity-[0.04]"
        style={{ background: "radial-gradient(ellipse, #f43f5e 0%, transparent 70%)", filter: "blur(70px)" }}
      />

      <div className="relative container mx-auto px-5 max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#f43f5e]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#a64458] dark:text-rose-400">Planos</span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#f43f5e]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#0f172a] dark:text-slate-100 leading-tight mb-3">
            Evolua a gestão da sua{" "}
            <span className="font-serif italic font-semibold text-[#f43f5e]">clínica</span>
          </h2>
          <p className="text-[#64748b] dark:text-slate-400 text-base">
            Escolha o estágio ideal para o seu momento atual.
          </p>
        </motion.div>

        {/* ── MOBILE: stacked cards ── */}
        <div className="flex flex-col gap-4 md:hidden">
          <MobilePlanCard plan="pro" delay={0.1} />
          <MobilePlanCard plan="standard" delay={0.2} />
        </div>

        {/* ── DESKTOP: comparison table ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:block bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden"
          style={{ boxShadow: "0 4px 40px 0 rgba(15,23,42,0.07)" }}
        >
          {/* Plan headers */}
          <div className="grid grid-cols-[1.6fr_1fr_1fr] border-b border-slate-100 dark:border-slate-800">
            <div className="p-7" />

            {/* Standard */}
            <div className="p-7 border-l border-slate-100 dark:border-slate-800">
              <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#64748b] dark:text-slate-400 mb-2">Standard</p>
              <div className="flex items-baseline gap-0.5 mb-1">
                <span className="text-xs text-[#64748b] mt-1">R$</span>
                <span className="text-3xl font-bold text-[#0f172a] dark:text-slate-100">149</span>
                <span className="text-sm text-[#64748b]">,90</span>
              </div>
              <p className="text-[11px] text-[#64748b] dark:text-slate-500">/mês</p>
            </div>

            {/* Profissional */}
            <div className="p-7 border-l border-[#f43f5e]/20 bg-[#fff5f6] dark:bg-rose-950/10 relative">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#f43f5e] to-[#a64458]" />
              <div className="flex items-center gap-1.5 mb-2">
                <Star className="w-3 h-3 text-[#f43f5e] fill-[#f43f5e]" />
                <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#f43f5e]">Profissional</p>
              </div>
              <div className="flex items-baseline gap-0.5 mb-1">
                <span className="text-xs text-[#a64458] mt-1">R$</span>
                <span className="text-3xl font-bold text-[#0f172a] dark:text-slate-100">299</span>
                <span className="text-sm text-[#a64458]">,90</span>
              </div>
              <p className="text-[11px] text-[#a64458]">/mês</p>
            </div>
          </div>

          {/* Feature rows */}
          {features.map((feat, i) => (
            <div
              key={i}
              className={`grid grid-cols-[1.6fr_1fr_1fr] border-b border-slate-50 dark:border-slate-800/60 last:border-0 ${feat.highlight ? "bg-[#fdf8f8] dark:bg-rose-950/5" : ""}`}
            >
              <div className="px-7 py-3.5 flex items-center">
                <span className={`text-sm leading-snug ${feat.highlight ? "font-semibold text-[#0f172a] dark:text-slate-100" : "text-[#64748b] dark:text-slate-400"}`}>
                  {feat.label}
                </span>
              </div>
              <div className="px-7 py-3.5 border-l border-slate-100 dark:border-slate-800 flex items-center justify-center">
                <Cell value={feat.standard} highlight={false} />
              </div>
              <div className="px-7 py-3.5 border-l border-[#f43f5e]/15 bg-[#fff5f6]/40 dark:bg-rose-950/5 flex items-center justify-center">
                <Cell value={feat.pro} highlight={feat.highlight} />
              </div>
            </div>
          ))}

          {/* CTA row */}
          <div className="grid grid-cols-[1.6fr_1fr_1fr] border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
            <div className="px-7 py-5 flex items-center">
              <button
                onClick={() => window.open(WHATSAPP_URL, '_blank')}
                className="flex items-center gap-1.5 text-xs text-[#64748b] dark:text-slate-400 hover:text-[#a64458] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Falar com especialista
              </button>
            </div>
            <div className="px-6 py-5 border-l border-slate-100 dark:border-slate-800 flex items-center justify-center">
              <Button asChild size="sm" variant="outline" className="w-full rounded-xl h-10 text-xs font-semibold border-slate-200 dark:border-slate-700 text-[#0f172a] dark:text-slate-100">
                <Link to="/register?plan=standard">Começar grátis</Link>
              </Button>
            </div>
            <div className="px-6 py-5 border-l border-[#f43f5e]/15 bg-[#fff5f6]/40 dark:bg-rose-950/5 flex items-center justify-center">
              <Button asChild size="sm" className="w-full rounded-xl h-10 text-xs font-semibold bg-[#f43f5e] hover:bg-[#a64458] text-white">
                <Link to="/register?plan=pro">Começar grátis</Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Trial note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs text-[#64748b] dark:text-slate-500 mt-4"
        >
          7 dias grátis em todos os planos.
        </motion.p>
      </div>
    </section>
  );
};
