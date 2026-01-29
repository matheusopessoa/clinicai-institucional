import { Button } from "@/components/ui/button";
import { MessageSquare, Sparkles } from "lucide-react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+5581995497487?text=Olá! Gostaria de conhecer o Sous Clinic', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 md:pt-24 pb-8 md:pb-12">
      {/* Background - mais limpo, sem orbs animados */}
      <div className="absolute inset-0 bg-background" />
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center min-h-[90vh]">
        <AnimateOnScroll animation="fadeInUp" delay={0} duration={700}>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Main heading - estilo minimalista como na imagem */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Não deixe seu paciente{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                desamparado
              </span>{" "}
              após a consulta
            </h1>

            {/* Subheading - Primeiro parágrafo */}
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Nosso sistema{" "}
                <span className="font-semibold text-foreground">gerencia toda a sua clínica</span> e{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">
                  transforma a prescrição em acompanhamento automático
                </span>{" "}
                no WhatsApp, garantindo{" "}
                <span className="font-semibold text-foreground">adesão ao tratamento e fidelidade</span>.
              </p>
              
              {/* Linha secundária de preços - SaaS Premium Style */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm text-muted-foreground/80">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-primary/60" />
                  Planos a partir de <strong className="text-foreground">R$ 149,90/mês</strong>
                </span>
                <span className="hidden sm:inline opacity-30">•</span>
                <span>Agendamento online opcional</span>
              </div>
            </div>

            {/* CTA Button - único botão centralizado como na imagem */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
              <Button 
                size="xl" 
                variant="gradient"
                onClick={handleWhatsAppClick}
                className="group px-8 py-6 text-lg w-full sm:w-auto"
              >
                <MessageSquare className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Falar com um especialista
              </Button>
              <Button 
                asChild
                size="xl" 
                variant="outline"
                className="px-8 py-6 text-lg w-full sm:w-auto border-primary/20 hover:bg-primary/5"
              >
                <a href="/register">Começar agora</a>
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
