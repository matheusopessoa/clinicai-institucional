import { Activity, Eye, Brain, Clock, Shield, Zap, TrendingUp, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const features = [
  {
    icon: Shield,
    title: "Gestão e Organização",
    description: "Centralize agenda, prontuários e financeiro em um só lugar. A base sólida que sua clínica precisa para operar com excelência."
  },
  {
    icon: Eye,
    title: "Acompanhamento Inteligente",
    description: "Saiba exatamente o que acontece após o paciente sair da consulta. IA que monitora a evolução e garante que ninguém fique sem cuidado."
  },
  {
    icon: Heart,
    title: "Fidelização de Pacientes",
    description: "Crie um vínculo inquebrável através de um contato humanizado e proativo via WhatsApp, aumentando as taxas de retorno."
  },
  {
    icon: TrendingUp,
    title: "Crescimento Acelerado",
    description: "Capture novos agendamentos 24 horas por dia com sua própria agenda online, reduzindo a carga de trabalho da recepção."
  },
  {
    icon: Users,
    title: "Multi-Acesso Ético",
    description: "Logins individuais para cada profissional com sigilo absoluto, além de uma visão administrativa global para o gestor."
  },
  {
    icon: Zap,
    title: "Implementação Express",
    description: "Migramos seus dados e treinamos sua equipe em tempo recorde. Tecnologia de ponta sem a complexidade de sistemas antigos."
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