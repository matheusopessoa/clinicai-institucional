import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight, UserPlus, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

export const CTA = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+5581995497487?text=Olá! Gostaria de conhecer o Sous Clinic', '_blank');
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
                Fale com nosso time comercial e descubra como o Sous Clinic pode revolucionar 
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

            {/* CTA Buttons */}
            <div className="pt-4 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="xl"
                  className="group"
                >
                  <Link to="/register">
                    <UserPlus className="w-5 h-5" />
                    Criar Conta Gratuita
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Já tem uma conta?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary hover:text-primary/80 inline-flex items-center"
                  >
                    <LogIn className="w-4 h-4 mr-1" />
                    Fazer login
                  </Link>
                </p>
              </div>
            </div>

            {/* Trust message */}
            <p className="text-sm text-muted-foreground">
              Comece grátis • Sem cartão de crédito • Suporte em até 2 horas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
