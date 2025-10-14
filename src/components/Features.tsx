import { Calendar, MessageCircle, Brain, Clock, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "IA no WhatsApp",
    description: "Atendimento automatizado direto no WhatsApp que seus pacientes já usam todos os dias."
  },
  {
    icon: Calendar,
    title: "Agendamentos Automáticos",
    description: "A IA agenda, reagenda e confirma consultas automaticamente, sem sua intervenção."
  },
  {
    icon: Brain,
    title: "Respostas Humanizadas",
    description: "Comunicação natural e empática, treinada especificamente para seu estilo de atendimento."
  },
  {
    icon: Clock,
    title: "Disponível 24/7",
    description: "Seus pacientes são atendidos a qualquer hora, mesmo quando você não pode responder."
  },
  {
    icon: Shield,
    title: "Gestão Completa",
    description: "Sistema robusto para gerenciar todos os dados dos seus pacientes em um só lugar."
  },
  {
    icon: Zap,
    title: "Rápida Implementação",
    description: "Agente pronto em até 7 dias, já integrado ao seu número de WhatsApp atual."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tudo que você precisa para{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              crescer seu consultório
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Automatize tarefas repetitivas e foque no que realmente importa: cuidar dos seus pacientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="gradient-card p-8 rounded-2xl border border-border/50 shadow-card hover:shadow-glow transition-smooth group hover:scale-105"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};