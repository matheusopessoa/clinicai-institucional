import { Button } from "@/components/ui/button";
import { Check, X, Star, Calendar, Zap, Heart, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { cn } from "@/lib/utils";

interface PlanFeatureProps {
  text: string;
  included?: boolean;
  isSparkle?: boolean;
}

const PlanFeature = ({ text, included = true, isSparkle = false }: PlanFeatureProps) => (
  <div className="flex items-start gap-3 text-sm">
    <div className={cn(
      "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
      isSparkle ? "bg-amber-500/10" : included ? "bg-primary/10" : "bg-muted/50"
    )}>
      {isSparkle ? (
        <Sparkles className="w-3 h-3 text-amber-500" />
      ) : included ? (
        <Check className="w-3 h-3 text-primary" />
      ) : (
        <X className="w-3 h-3 text-muted-foreground/50" />
      )}
    </div>
    <span className={cn(
      "leading-relaxed",
      isSparkle ? "text-foreground font-semibold" : included ? "text-muted-foreground" : "text-muted-foreground/40"
    )}>
      {text}
    </span>
  </div>
);

export const Pricing = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+5581995497487?text=Olá! Gostaria de conhecer o Sous Clinic', '_blank');
  };

  const handleTestSousAgendaOnlineClick = () => {
    window.open('https://agenda.sousclinic.com/clinicabelezaintensa', '_blank');
  };

  return (
    <section id="planos" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll animation="fadeInUp">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              Evolua a gestão da sua{" "}
              <span className="font-serif italic font-medium bg-gradient-to-r from-rose-500 to-rose-400 bg-clip-text text-transparent">
                clínica
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Escolha o estágio ideal para o seu momento atual.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Planos Lado a Lado */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          
          {/* Plano PRO (Destaque) */}
          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <div className="relative group h-full">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <div className="bg-gradient-to-r from-rose-500 to-rose-400 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg animate-pulse">
                  <Star className="w-3 h-3 fill-current" />
                  MAIS RECOMENDADO
                </div>
              </div>
              
              <div className="gradient-card p-8 md:p-10 rounded-[32px] border-2 border-rose-500/30 shadow-glow relative bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-rose-500/20 flex flex-col h-full">
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-5 h-5 text-rose-500" />
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Profissional</h3>
                  </div>
                  <p className="text-rose-500 font-medium text-sm mb-6">Tudo do Standard + Acompanhamento ativo pós-consulta com IA</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">R$ 299,90</span>
                    <span className="text-slate-500 dark:text-slate-400">/mês</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  <div className="bg-rose-50 dark:bg-rose-900/10 rounded-2xl p-4 border border-rose-100 dark:border-rose-800/30 mb-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-rose-600 dark:text-rose-400 mb-1">Diferencial Pro</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Além de toda a estrutura do Standard, você ganha o poder da IA para cuidar dos seus pacientes:
                    </p>
                  </div>

                  <PlanFeature text="Acompanhamento pós-consulta com IA" isSparkle />
                  <PlanFeature text="Monitoramento ativo de evolução" isSparkle />
                  <PlanFeature text="Alertas inteligentes de saúde" isSparkle />
                  <PlanFeature text="Resumo automático de triagem" isSparkle />
                  <PlanFeature text="Suporte prioritário" isSparkle />
                </div>

                <div className="mb-8">
                  <p className="text-sm text-center italic text-slate-500 dark:text-slate-400">"Sua clínica cuidando dos pacientes mesmo após a consulta."</p>
                </div>

                <div className="space-y-3 mt-auto">
                  <div className="flex flex-col items-center mb-2">
                    <div className="bg-rose-100 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 mb-2">
                      <Sparkles className="w-3 h-3" />
                      7 DIAS GRÁTIS
                    </div>
                  </div>
                  <Button asChild size="lg" className="w-full rounded-2xl h-14 text-md font-bold bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white border-0 shadow-lg shadow-rose-500/20">
                    <Link to="/register?plan=pro">Continuar para ativação</Link>
                  </Button>
                  <p className="text-[11px] text-center text-slate-400">
                    Crie sua conta e escolha o plano dentro do sistema.
                  </p>
                  <Button onClick={handleWhatsAppClick} variant="ghost" className="w-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-xs">
                    Falar com Especialista
                  </Button>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Plano STANDARD */}
          <AnimateOnScroll animation="fadeInUp" delay={200}>
            <div className="gradient-card p-8 md:p-10 rounded-[32px] border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-card bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] h-full flex flex-col">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-slate-400" />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Standard</h3>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">Organize sua clínica com estrutura profissional</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">R$ 149,90</span>
                  <span className="text-slate-500 dark:text-slate-400">/mês</span>
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                <PlanFeature text="Agenda e gestão de pacientes" />
                <PlanFeature text="Confirmação de comparecimento automático via Whatsapp" />
                <PlanFeature text="Prontuário eletrônico completo" />
                <PlanFeature text="Gestão financeira integrada" />
                <PlanFeature text="Relatórios de atendimento" />
                <PlanFeature text="Multi-acesso para profissionais" />
                <PlanFeature text="IA Pós-Consulta" included={false} />
                <PlanFeature text="Suporte Prioritário" included={false} />
              </div>

              <div className="mb-8">
                <p className="text-sm text-center italic text-slate-500 dark:text-slate-400">"Base sólida para operar sua clínica com segurança."</p>
              </div>

              <div className="space-y-3 mt-auto">
                <div className="flex flex-col items-center mb-2">
                  <div className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 mb-2">
                    <Sparkles className="w-3 h-3" />
                    7 DIAS GRÁTIS
                  </div>
                </div>
                <Button asChild size="lg" variant="outline" className="w-full rounded-2xl h-14 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-md font-bold text-slate-900 dark:text-white">
                  <Link to="/register?plan=standard">Continuar para ativação</Link>
                </Button>
                <p className="text-[11px] text-center text-slate-400">
                  Crie sua conta e escolha o plano dentro do sistema.
                </p>
                <Button onClick={handleWhatsAppClick} variant="ghost" className="w-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-xs">
                  Falar com Especialista
                </Button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Seção de Addon */}
        <AnimateOnScroll animation="fadeInUp" delay={300}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Funcionalidades Extras para Crescimento</h3>
              <p className="text-slate-500 dark:text-slate-400 italic text-sm">Disponível para clientes Standard e Pro</p>
            </div>

            <div className="gradient-card p-8 md:p-10 rounded-[32px] border border-amber-200/50 dark:border-amber-900/30 bg-amber-50/50 dark:bg-amber-900/10 relative overflow-hidden group transition-all duration-500 hover:shadow-amber-500/10 hover:shadow-2xl">
              <div className="grid md:grid-cols-[1fr,250px] gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-amber-600 dark:text-amber-500" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 dark:text-white">Sous Agenda Online</h4>
                      <p className="text-amber-600 dark:text-amber-500 font-medium text-sm">Link para agendamento on-line para os seus pacientes</p>
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <PlanFeature text="Agendamento 24/7 sem interrupção" />
                    <PlanFeature text="Redução de carga da recepção" />
                    <PlanFeature text="Link próprio personalizado" />
                    <PlanFeature text="Confirmação automática" />
                  </div>

                  <div className="space-y-2">
                    <div className="bg-white/60 dark:bg-black/20 p-4 rounded-xl border border-amber-100 dark:border-amber-900/30 text-sm font-mono text-slate-500 dark:text-slate-400 flex items-center justify-between group-hover:border-amber-200 dark:group-hover:border-amber-800 transition-colors">
                      <span>agenda.sousclinic.com/suaclinica</span>
                      <ArrowRight className="w-4 h-4 text-amber-500" />
                    </div>
                    <p className="text-[10px] text-slate-400 italic pl-1">
                      * O link será personalizado com o nome da sua clínica.
                    </p>
                  </div>
                </div>

                <div className="text-center md:text-right border-t md:border-t-0 md:border-l border-amber-200/30 dark:border-amber-800/30 pt-6 md:pt-0 md:pl-8 flex flex-col justify-center h-full">
                  <div className="mb-4">
                    <span className="text-sm text-slate-500 dark:text-slate-400 block text-center md:text-right">Apenas</span>
                    <div className="flex items-baseline justify-center md:justify-end gap-1">
                      <span className="text-4xl font-bold text-slate-900 dark:text-white">R$ 19,90</span>
                      <span className="text-slate-500 dark:text-slate-400">/mês</span>
                    </div>
                  </div>
                  
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3 text-center md:text-right leading-tight">
                    Veja como seus pacientes<br/>visualizarão sua agenda:
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-amber-200 dark:border-amber-800 hover:bg-amber-50 dark:hover:bg-amber-900/20 text-amber-700 dark:text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all rounded-xl h-12 text-xs"
                    onClick={handleTestSousAgendaOnlineClick}
                  >
                    Visualizar Exemplo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};
