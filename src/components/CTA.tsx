import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight } from "lucide-react";

export const CTA = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de conhecer o ClinicAI', '_blank');
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="gradient-card p-12 rounded-3xl border border-primary/20 shadow-glow text-center space-y-8">
            {/* Icon */}
            <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mx-auto shadow-glow">
              <MessageSquare className="w-10 h-10 text-primary-foreground" />
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Pronto para transformar seu atendimento?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fale com nosso time comercial e descubra como o ClinicAI pode revolucionar 
                a gestão dos seus pacientes em apenas 7 dias.
              </p>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>Sem setup técnico</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Implementação em 7 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>Treinamento incluído</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                size="xl" 
                variant="gradient"
                onClick={handleWhatsAppClick}
                className="group"
              >
                <MessageSquare className="w-5 h-5" />
                Falar com Especialista
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Trust message */}
            <p className="text-sm text-muted-foreground">
              Resposta em até 2 horas úteis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
