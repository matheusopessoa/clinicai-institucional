import { motion } from "framer-motion";

const institutions = [
  { name: "AWS", logo: "/confiam_em_nos/aws.png" },
  { name: "Parquetec", logo: "/confiam_em_nos/parquetec.png" },
  { name: "Porto Digital", logo: "/confiam_em_nos/portodigital.png" },
  { name: "Web Summit", logo: "/confiam_em_nos/websummit.png" },
  { name: "Sebrae", logo: "/confiam_em_nos/sebrae.png" },
  { name: "CEIA", logo: "/confiam_em_nos/ceia.png" },
  { name: "Hub Goiás", logo: "/confiam_em_nos/hubgo.png" },
];

const LogoTrack = ({ reversed = false }: { reversed?: boolean }) => (
  <div className="flex gap-16 items-center" style={{ animation: `${reversed ? 'marqueeReverse' : 'marquee'} 28s linear infinite` }}>
    {[...institutions, ...institutions].map((inst, i) => (
      <div
        key={`${inst.name}-${i}`}
        className="flex-shrink-0 flex items-center justify-center"
        style={{ width: 140, height: 56 }}
      >
        <img
          src={inst.logo}
          alt={inst.name}
          className="max-w-full max-h-full object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          style={{ filter: "grayscale(1) brightness(0.7)", transition: "all 0.5s ease" }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLImageElement).style.filter = "grayscale(0) brightness(1)";
            (e.currentTarget as HTMLImageElement).style.opacity = "1";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLImageElement).style.filter = "grayscale(1) brightness(0.7)";
            (e.currentTarget as HTMLImageElement).style.opacity = "0.6";
          }}
        />
      </div>
    ))}
  </div>
);

export const TrustedBy = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-[#f8fafc] dark:bg-slate-900">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-300/50 to-transparent" />

      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #a64458 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#f43f5e]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#a64458] dark:text-rose-400">
              Reconhecimento
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#f43f5e]" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0f172a] dark:text-slate-100 leading-tight">
            Instituições que{" "}
            <span className="italic text-[#f43f5e]">confiam</span>{" "}
            em nós
          </h2>

          <p className="mt-3 text-[#64748b] dark:text-slate-400 text-base max-w-md mx-auto">
            Apoiados por organizações referência em tecnologia e inovação no Brasil e no mundo.
          </p>
        </motion.div>

        {/* Marquee track */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-[#f8fafc] dark:from-slate-900 to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-[#f8fafc] dark:from-slate-900 to-transparent" />

          <div className="overflow-hidden py-4">
            <LogoTrack />
          </div>
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="mt-12 h-px bg-gradient-to-r from-transparent via-[#f43f5e]/30 to-transparent origin-center"
        />
      </div>

      {/* Keyframes injected via style tag */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};
