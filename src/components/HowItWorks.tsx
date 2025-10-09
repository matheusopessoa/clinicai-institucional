import { Phone, Settings, Rocket, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Entre em Contato",
    description: "Fale conosco pelo WhatsApp e demonstre interesse no ClinicAI."
  },
  {
    icon: Settings,
    title: "Configuração Personalizada",
    description: "Nossa equipe agenda uma reunião para captar suas informações e treinar a IA no seu estilo."
  },
  {
    icon: Rocket,
    title: "IA Pronta em 7 Dias",
    description: "Seu agente inteligente fica disponível em até 7 dias, já integrado ao seu número atual."
  },
  {
    icon: CheckCircle,
    title: "Comece a Atender 24/7",
    description: "Seus pacientes são atendidos automaticamente, enquanto você acompanha tudo pela plataforma."
  }
];

export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Como funciona o{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ClinicAI?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Implementação simples e rápida, sem complicação técnica.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex gap-6 items-start group">
                  {/* Step number and icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-smooth">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-sm font-bold shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 gradient-card p-6 rounded-2xl border border-border/50 shadow-card group-hover:shadow-glow transition-smooth">
                    <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connecting line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 mt-20 w-0.5 h-8 bg-gradient-to-b from-primary to-accent opacity-30" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 border border-accent/20">
            <CheckCircle className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium">
              Acesso à plataforma: <span className="text-accent font-bold">app.clinicai.io</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
