import { Phone, Settings, Rocket, CheckCircle, Monitor, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const steps = [
  {
    icon: Phone,
    title: "Entre em Contato",
    description: "Fale conosco pelo WhatsApp e demonstre interesse no Sous Clinic.",
    hasInfo: false
  },
  {
    icon: Settings,
    title: "Configuração Personalizada",
    description: "Nossa equipe agenda uma reunião para captar suas informações e treinar a IA no seu estilo.",
    hasInfo: false
  },
  {
    icon: Monitor,
    title: "Acesso à Plataforma",
    description: "Receba acesso à plataforma de gerenciamento conectada ao agente. Enquanto a IA é preparada, você já pode cadastrar consultas antigas e aproveitar nosso controle financeiro e histórico de pacientes.",
    hasInfo: true,
    infoContent: "Durante os dias de preparação da IA, você terá acesso completo à plataforma app.sousclinic.com. Este é o momento ideal para: migrar suas consultas históricas, configurar seu controle financeiro, organizar o cadastro de pacientes e se familiarizar com todas as ferramentas de gestão."
  },
  {
    icon: Rocket,
    title: "IA Pronta em 7 Dias",
    description: "Seu agente inteligente fica disponível em até 7 dias, já integrado ao seu número atual.",
    hasInfo: false
  },
  {
    icon: CheckCircle,
    title: "Comece a Atender 24/7",
    description: "Seus pacientes são atendidos automaticamente, enquanto você acompanha tudo pela plataforma.",
    hasInfo: false
  }
];

export const HowItWorks = () => {
  return (
    <TooltipProvider>
    <section id="como-funciona" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Como implementar o{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sous Clinic?
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
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      
                      {step.hasInfo && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 hover:bg-accent/30 flex items-center justify-center transition-smooth group/info">
                              <Info className="w-4 h-4 text-accent group-hover/info:scale-110 transition-transform" />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent side="left" className="max-w-xs p-4 gradient-card border-accent/20">
                            <p className="text-sm leading-relaxed">{step.infoContent}</p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </div>
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
          <a href="https://app.sousclinic.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 border border-accent/20">
            <CheckCircle className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium">
              Acesso à plataforma: <span className="text-accent font-bold">app.sousclinic.com</span>
            </span>
          </a>
        </div>
      </div>
    </section>
    </TooltipProvider>
  );
};
