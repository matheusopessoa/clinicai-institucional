import { Shield, Eye, Heart, TrendingUp, Users, Zap, Calendar, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "Gestão Integrada",
    description: "Prontuários, agenda e financeiro em um único lugar seguro.",
    className: "md:col-span-2 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950",
    delay: 0.1
  },
  {
    icon: Smartphone,
    title: "IA no WhatsApp",
    description: "Assistente virtual que responde pacientes e confirma agendamentos.",
    className: "md:col-span-1 bg-white dark:bg-slate-900",
    delay: 0.2
  },
  {
    icon: Heart,
    title: "Acompanhamento Pós-Consulta Automatizado",
    description: "Mensagens de cuidado pós-procedimento que lhe ajudam a cuidar, encantar e fidelizar.",
    className: "md:col-span-1 bg-white dark:bg-slate-900",
    delay: 0.3
  },
  {
    icon: Calendar,
    title: "Agenda Inteligente",
    description: "Link de agendamento online disponível 24h para seus pacientes.",
    className: "md:col-span-2 bg-gradient-to-br from-rose-50 to-white dark:from-slate-900 dark:to-slate-800",
    delay: 0.4
  },
  {
    icon: Users,
    title: "Multi-Profissional",
    description: "Acessos individuais com permissões personalizadas para sua equipe.",
    className: "md:col-span-1 bg-white dark:bg-slate-900",
    delay: 0.5
  },
  {
    icon: Zap,
    title: "Setup Rápido",
    description: "Comece a usar em minutos. Interface intuitiva e moderna.",
    className: "md:col-span-1 bg-white dark:bg-slate-900",
    delay: 0.6
  },
  {
    icon: TrendingUp,
    title: "Dashboards",
    description: "Métricas financeiras e de performance claras para decisão.",
    className: "md:col-span-1 bg-white dark:bg-slate-900",
    delay: 0.7
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 relative bg-slate-50/50 dark:bg-slate-950/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-foreground">
              Tecnologia que <span className="font-display italic font-medium text-primary">cuida</span> do seu negócio
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Uma suíte completa de ferramentas desenhada para a rotina da clínica estética moderna.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: feature.delay }}
                className={`
                  ${feature.className}
                  group relative overflow-hidden rounded-3xl p-8 
                  border border-black/5 dark:border-white/5 
                  shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1
                `}
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                  <Icon className="w-32 h-32" />
                </div>
                
                <div className="relative z-10 flex flex-col h-full items-start justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#00A3FF]/10 flex items-center justify-center mb-6 group-hover:bg-[#00A3FF]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[#00A3FF]" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium mb-3 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full px-10 h-14 text-lg bg-foreground text-background hover:bg-foreground/90 transition-all hover:scale-105 shadow-xl"
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
