import { Button } from "@/components/ui/button";
import { Check, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export const Pricing = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+5581992408882?text=Olá! Gostaria de conhecer o Sous Clinic', '_blank');
  };

  return (
    <section id="precos" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll animation="fadeInUp" delay={0}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Planos e{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Preços
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Escolha o plano ideal para sua clínica e transforme seu atendimento.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scaleIn" delay={200} duration={700}>
          <div className="max-w-4xl mx-auto">
            <div className="gradient-card p-8 md:p-12 rounded-3xl border border-primary/20 shadow-glow">
              <div className="text-center mb-8">
                <div className="inline-block">
                  <div className="text-5xl md:text-6xl font-bold mb-2">
                    R$ <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">299,90</span>
                  </div>
                  <p className="text-muted-foreground text-lg">por mês</p>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Pós atendimento e Monitoramento Ativo:</strong> A IA entra em contato para verificar a evolução do quadro.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Respostas Humanizadas:</strong> Comunicação natural e empática, ideal para atender o paciente de forma personalizada e humanizada.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Disponível 24/7:</strong> Seus pacientes são atendidos a qualquer hora.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Gestão Completa:</strong> Sistema robusto para gerenciar todos os dados dos seus pacientes.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Rápida Implementação:</strong> Sistema implementado e sua equipe treinado em poucos dias, com pouco mínimo esforço do seu time.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  asChild
                  size="xl"
                  variant="gradient"
                  className="group"
                >
                  <Link to="/register">
                    Começar Agora
                  </Link>
                </Button>

                <Button
                  size="xl"
                  variant="outline"
                  onClick={handleWhatsAppClick}
                  className="group"
                >
                  <MessageSquare className="w-5 h-5" />
                  Falar com Especialista
                </Button>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

