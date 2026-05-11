import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight, CheckCircle2, Sparkles, Activity, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// ─── Chat bubble ─────────────────────────────────────────────────────────────
const ChatMessage = ({
  text,
  isUser = false,
  time,
  delay = 0,
}: {
  text: React.ReactNode;
  isUser?: boolean;
  time: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.4, delay, ease: "easeOut" }}
    className={`flex flex-col ${isUser ? "items-end" : "items-start"} mb-1.5`}
  >
    <div
      className={`max-w-[92%] px-2.5 py-1.5 text-[10.5px] leading-snug shadow-sm relative ${
        isUser
          ? "bg-[#E7FFDB] text-slate-900 rounded-lg rounded-tr-none"
          : "bg-white text-slate-900 rounded-lg rounded-tl-none"
      }`}
    >
      {text}
    </div>
    <span className="text-[9px] text-slate-400 mt-0.5 px-1">{time}</span>
  </motion.div>
);

// ─── Morphing word — cycles through verbs ────────────────────────────────────
const MORPHING_WORDS = ["cuida", "fideliza", "encanta", "escala"];

const MorphingWord = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % MORPHING_WORDS.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-block align-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={MORPHING_WORDS[index]}
          initial={{ opacity: 0, y: 16, rotateX: -40 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -16, rotateX: 40 }}
          transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
          className="inline-block font-serif italic font-semibold text-[#f43f5e] dark:text-rose-400"
          style={{ transformPerspective: 600 }}
        >
          {MORPHING_WORDS[index]}
        </motion.span>
      </AnimatePresence>
      {/* Hand-drawn underline */}
      <svg
        className="absolute -bottom-1 left-0 w-full"
        height="10"
        viewBox="0 0 200 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M2 6 Q 50 1, 100 5 T 198 4"
          stroke="#f43f5e"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        />
      </svg>
    </span>
  );
};

// ─── Animated stat counter ───────────────────────────────────────────────────
const Counter = ({ target, duration = 2 }: { target: number; duration?: number }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.floor(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return <>{value.toLocaleString("pt-BR")}</>;
};

// ─── Decorative ornament SVG ────────────────────────────────────────────────
const Ornament = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M2 10 Q 20 2, 40 10 T 78 10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    />
    <motion.circle
      cx="90" cy="10" r="2.5"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
    />
  </svg>
);

// ─── Floating notification card ──────────────────────────────────────────────
const FloatingCard = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5, ease: "easeOut" }}
    className={`absolute bg-white rounded-2xl border border-slate-100 z-20 hidden 2xl:block ${className}`}
    style={{ boxShadow: "0 12px 40px -8px rgba(15,23,42,0.15)" }}
  >
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  </motion.div>
);

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+5581995497487?text=Olá! Gostaria de conhecer o Sous Clinic", "_blank");
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12 md:pt-28 md:pb-16 xl:pt-32 xl:pb-20 bg-[#f8fafc] dark:bg-slate-950 transition-colors duration-300"
    >
      {/* ── Background layers ──────────────────────────────────────────── */}

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #a64458 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Champagne gradient wash bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(244,235,224,0.5) 70%, rgba(244,235,224,0.8) 100%)",
        }}
      />

      {/* Ambient breathing glows */}
      <motion.div
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(244,63,94,0.13) 0%, transparent 65%)", filter: "blur(40px)" }}
      />
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(166,68,88,0.12) 0%, transparent 65%)", filter: "blur(40px)" }}
      />

      {/* Decorative SVG flourish — top-left corner */}
      <svg
        className="absolute top-32 left-8 hidden lg:block opacity-30 pointer-events-none"
        width="120" height="120" viewBox="0 0 120 120" fill="none"
      >
        <motion.path
          d="M10 60 Q 30 20, 60 40 T 110 60"
          stroke="#f43f5e" strokeWidth="1.5" fill="none" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.circle cx="110" cy="60" r="3" fill="#f43f5e"
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.4 }}
        />
        <motion.circle cx="10" cy="60" r="2" fill="#a64458"
          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 }}
        />
      </svg>

      {/* ── Content grid ───────────────────────────────────────────────── */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 2xl:gap-16 items-center">

          {/* ── LEFT: Copy ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-left space-y-5 lg:space-y-6 xl:space-y-7"
          >

            {/* Eyebrow with live dot */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-[#f43f5e]/15 text-xs font-medium text-[#0f172a] dark:text-slate-200 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f43f5e] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f43f5e]" />
              </span>
              <span className="tracking-wide">Nova tecnologia para esteticistas</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[3rem] xl:text-[3.75rem] font-light leading-[1.05] tracking-tight text-[#0f172a] dark:text-white">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="block"
              >
                Sua clínica que
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="block text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4.5rem] leading-[1.05] py-1"
              >
                <MorphingWord />
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="block"
              >
                seus pacientes.
              </motion.span>
            </h1>

            {/* Ornament under title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.4 }}
              className="text-[#f43f5e]/40"
            >
              <Ornament className="w-24 h-4" />
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-sm md:text-base lg:text-[0.95rem] xl:text-lg text-[#64748b] dark:text-slate-400 leading-relaxed max-w-xl"
            >
              O sistema mais completo para clínicas estéticas, com{" "}
              <span className="relative inline-block">
                <span className="relative z-10 font-semibold text-[#0f172a] dark:text-slate-100">
                  acompanhamento automático com inteligência artificial
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.4, duration: 0.7, ease: "easeOut" }}
                  className="absolute inset-x-0 bottom-0 h-2 bg-[#f4ebe0] dark:bg-rose-900/30 -z-0 origin-left"
                />
              </span>{" "}
              no WhatsApp.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-1"
            >
              <Button
                size="lg"
                className="group relative overflow-hidden rounded-full px-8 h-13 text-base font-semibold bg-[#f43f5e] hover:bg-[#a64458] text-white border-0 transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-rose-200 dark:shadow-rose-900/30"
                onClick={handleWhatsAppClick}
              >
                {/* Shimmer */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <MessageSquare className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">Falar com Especialista</span>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="rounded-full px-6 h-13 text-base text-[#0f172a] dark:text-slate-200 hover:bg-[#f4ebe0]/60 dark:hover:bg-slate-800 transition-colors group"
                asChild
              >
                <a href="#planos" className="flex items-center gap-2">
                  Ver planos
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>

            {/* Trust row + live counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 text-sm"
            >
              <div className="flex items-center gap-2 text-[#64748b] dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                <span>Setup em 24h</span>
              </div>
              <div className="flex items-center gap-2 text-[#64748b] dark:text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
                <span>7 dias grátis</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <Activity className="w-3.5 h-3.5 text-[#f43f5e]" />
                <span className="text-[#0f172a] dark:text-slate-100 font-semibold text-xs">+
                  <Counter target={20000} />
                </span>
                <span className="text-[#64748b] dark:text-slate-400 text-xs">agendamentos realizados</span>
              </div>
            </motion.div>

          </motion.div>

          {/* ── RIGHT: Phone + floating cards ── */}
          <div className="relative flex justify-center mt-8 lg:mt-0">
            <div className="relative w-[240px] lg:w-[260px] 2xl:w-[280px] mx-auto">

              {/* Glow halo behind phone */}
              <motion.div
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-8 rounded-[3rem] pointer-events-none"
                style={{ background: "radial-gradient(ellipse at center, rgba(244,63,94,0.18) 0%, transparent 60%)", filter: "blur(30px)" }}
              />

              {/* Phone shell */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: -2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 1, delay: 0.2, type: "spring" }}
                className="relative w-full bg-[#0f172a] rounded-[2rem] shadow-2xl overflow-hidden border-[6px] border-[#0f172a] aspect-[9/18.5] z-10"
              >
                <div className="absolute inset-0 bg-[#EFE7DD] flex flex-col">
                  <div className="absolute inset-0 opacity-[0.06] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat bg-[length:400px]" />

                  {/* WhatsApp header */}
                  <div className="bg-[#005C4B] p-3 pt-8 flex items-center gap-2 z-10 shadow-sm text-white shrink-0">
                    <div className="w-8 h-8 rounded-full bg-white p-0.5 flex items-center justify-center shrink-0">
                      <img src="/logo.png" alt="Sous Clinic" className="w-full h-full object-contain rounded-full" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-xs truncate">Sous Clinic</div>
                      <div className="text-[10px] opacity-80 truncate flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
                        online agora
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 p-2.5 overflow-hidden flex flex-col justify-end pb-14 relative z-0">
                    <ChatMessage text="Olá Ana! Como está sua pele 2 dias após o peeling?" time="09:15" delay={0.5} />
                    <ChatMessage isUser text="Oi! Está descamando um pouco, mas estou seguindo tudo!" time="09:18" delay={1} />
                    <ChatMessage text="Ótimo! Notou alguma área muito vermelha ou com 'pontadas' de dor?" time="09:18" delay={1.5} />
                    <ChatMessage isUser text="No queixo está ardendo bastante e ficou bem vermelho." time="09:19" delay={2} />
                    <ChatMessage
                      text={<span>Entendi. <strong>Vou alertar a Dra. agora mesmo</strong>. Evite passar produtos na área!</span>}
                      time="09:19"
                      delay={2.5}
                    />
                  </div>

                  {/* Input */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#F0F2F5] px-2 py-2 flex items-center gap-2 shrink-0">
                    <div className="flex-1 h-8 bg-white rounded-full px-3 text-[10px] text-slate-400 flex items-center shadow-sm">
                      Mensagem...
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#00A884] flex items-center justify-center shadow-sm shrink-0">
                      <Send className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ── Floating cards ── */}

              {/* Alert card (left) */}
              <FloatingCard delay={3.5} className="right-[105%] bottom-16 w-[170px] p-3">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="p-1 rounded-md bg-[#f43f5e]/10 text-[#f43f5e]">
                    <Sparkles className="w-3 h-3" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wide text-[#0f172a] uppercase">Alerta ativo</span>
                </div>
                <p className="text-[11.5px] text-[#64748b] leading-snug font-medium">
                  IA identificou o risco e alertou a profissional automaticamente.
                </p>
              </FloatingCard>

              {/* New appointment card (right top) */}
              <FloatingCard delay={4} className="left-[105%] top-12 w-[180px] p-3">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] font-bold tracking-wide text-[#0f172a] uppercase">Confirmada</span>
                </div>
                <p className="text-[11.5px] text-[#0f172a] font-semibold leading-snug mb-0.5">
                  Maria Costa
                </p>
                <p className="text-[10.5px] text-[#64748b] leading-snug">
                  Limpeza de pele · Amanhã, 14h
                </p>
              </FloatingCard>

              {/* Stats card (right bottom) */}
              <FloatingCard delay={4.5} className="left-[105%] bottom-20 w-[170px] p-3">
                <div className="flex items-center mb-2">
                  <span className="text-[10px] font-bold tracking-wide text-[#a64458] uppercase">Esta semana</span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-baseline justify-between">
                    <span className="text-[10.5px] text-[#64748b]">Interagem e Fidelizam</span>
                    <span className="font-bold text-sm text-[#0f172a]">+75%</span>
                  </div>
                  <div className="h-1 rounded-full bg-slate-100 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ delay: 5, duration: 1.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#f43f5e] to-[#a64458] rounded-full"
                    />
                  </div>
                </div>
              </FloatingCard>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[#64748b] dark:text-slate-500"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Role para descobrir</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-[#64748b]/30 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-[#f43f5e]" />
        </motion.div>
      </motion.div>
    </section>
  );
};
