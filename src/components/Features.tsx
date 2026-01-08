import { Activity, Eye, Brain, Clock, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const features = [
  {
    icon: Activity,
    title: "Monitoramento Ativo",
    description: "A IA entra em contato para verificar a adesão à medicação e evolução do quadro, não apenas espera o paciente chamar."
  },
  {
    icon: Eye,
    title: "Pós atendimento",
    description: "Saiba exatamente o que acontece após a porta fechar. Quem está tomando o remédio, como está a evolução do paciente."
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
    description: "Agente pronto em até 7 dias, já integrado ao seu número de WhatsApp da clínica."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fadeInUp" delay={0}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tecnologia que acompanha seu paciente fora do consultório
            </h2>
            <p className="text-xl text-muted-foreground">
              Automatize o suporte clínico com segurança enquanto você foca em diagnósticos complexos.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <AnimateOnScroll
                key={index}
                animation="fadeInUp"
                delay={index * 100}
                duration={600}
              >
                <div className="gradient-card p-8 rounded-2xl border border-border/50 shadow-card hover:shadow-glow transition-smooth group hover:scale-105">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* CTA */}
        <AnimateOnScroll animation="fadeInUp" delay={600}>
          <div className="text-center mt-16">
            <Button
              asChild
              size="lg"
              variant="gradient"
              className="group"
            >
              <Link to="/register">
                Criar conta gratuita
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};