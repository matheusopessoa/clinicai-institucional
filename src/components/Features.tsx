import { Activity, Eye, Brain, Clock, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const features = [
  {
    icon: Activity,
    title: "Confirmação de Visita",
    description: "Entramos em contato com o paciente para confirmar a ida para a consulta e caso seja cancelada, deixamos isso em destaque na plataforma para que você possa reagendar. Isso reduz as faltas e aumenta a lucratividade da sua clínica."
  },
  {
    icon: Eye,
    title: "Pós atendimento",
    description: "Saiba exatamente o que acontece após o paciente sair da sua clínica. Você saberá exatamente quais pacientes não estão evoluindo e precisam voltar para uma nova consulta, o motivo e até mesmo os sintomas que eles estão apresentando."
  },
  {
    icon: Brain,
    title: "Respostas Humanizadas",
    description: "Comunicação natural e empática, ideal para atender o paciente de forma personalizada e humanizada."
  },
  {
    icon: Shield,
    title: "Gestão Completa",
    description: "Sistema robusto para gerenciar todos os dados dos seus pacientes, profissionais e consultas em um só lugar."
  },
  {
    icon: Shield,
    title: "Multi-Acesso",
    description: "Plataforma pode ser usada por vários profissionais da sua clínica, cada um com seu próprio login e senha. Além, é claro, da conta principal da clínica, com visão de todos agendamentos e financeiro."
  },
  {
    icon: Zap,
    title: "Rápida Implementação",
    description: "Sistema implementado em poucos dias, com pouco esforço de sua equipe. Nós migramos os dados e treinamos a sua equipe para utilizar a plataforma."
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