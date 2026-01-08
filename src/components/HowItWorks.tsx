import { CreditCard, Settings, Monitor, Rocket, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const steps = [
  {
    icon: CreditCard,
    title: "Escolha seu Plano",
    description: "Cadastre-se na plataforma, selecione o plano ideal para sua clínica e inicie a transformação digital.",
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
    title: "Acesso Imediato",
    description: "Enquanto a IA é preparada, você já pode cadastrar consultas antigas, organizar os serviços e histórico de pacientes.",
    hasInfo: false
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
    <section id="como-funciona" className="py-24 relative">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fadeInUp" delay={0}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Como implementar
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <AnimateOnScroll
                  key={index}
                  animation="fadeInLeft"
                  delay={index * 150}
                  duration={600}
                >
                  <div className="flex gap-6 items-start group">
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
                      </div>
                    </div>

                    {/* Connecting line */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-8 mt-20 w-0.5 h-8 bg-gradient-to-b from-primary to-accent opacity-30" />
                    )}
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <AnimateOnScroll animation="fadeInUp" delay={750}>
          <div className="text-center mt-16">
            <Button
              asChild
              size="lg"
              variant="gradient"
              className="group"
            >
              <Link to="/register">
                Começar implementação
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
