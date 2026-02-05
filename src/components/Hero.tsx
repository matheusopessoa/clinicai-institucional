import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight, CheckCircle2, Sparkles } from "lucide-react"; 
import { motion } from "framer-motion";

// Componente de Mensagem (Mantendo o design compacto aprovado)
const ChatMessage = ({ 
  text, 
  isUser = false, 
  time, 
  delay = 0 
}: { 
  text: React.ReactNode; 
  isUser?: boolean; 
  time: string; 
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.4, delay, ease: "easeOut" }}
    className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} mb-1.5`}
  >
    <div
      className={`max-w-[92%] px-2.5 py-1.5 text-[10.5px] leading-snug shadow-sm relative ${ 
        isUser
          ? 'bg-[#E7FFDB] text-slate-900 rounded-lg rounded-tr-none' 
          : 'bg-white text-slate-900 rounded-lg rounded-tl-none' 
      }`}
    >
      {text}
    </div>
    <span className="text-[9px] text-slate-400 mt-0.5 px-1">
      {time}
    </span>
  </motion.div>
);

export const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+5581995497487?text=Olá! Gostaria de conhecer o Sous Clinic', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 md:pt-40 md:pb-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none transition-colors duration-300" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-500/5 dark:bg-rose-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none transition-colors duration-300" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          
          {/* Coluna Esquerda: Texto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left space-y-6 md:space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-800 backdrop-blur-sm shadow-sm transition-colors duration-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              Nova tecnologia para esteticistas
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight text-slate-900 dark:text-white transition-colors duration-300">
              Não deixe sua paciente <br />
              <span className="font-serif italic font-medium text-5xl md:text-6xl lg:text-7xl text-rose-500 dark:text-rose-400 pr-2 transition-colors duration-300">
                desamparada
              </span>
              <br />
              após a consulta.
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl transition-colors duration-300">
              Transforme prescrições em <strong className="text-rose-600 dark:text-rose-100 font-medium transition-colors duration-300">acompanhamento automático</strong> no WhatsApp. 
              Garanta adesão ao tratamento e fidelidade.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <Button 
                size="lg" 
                className="rounded-full px-8 h-12 text-base font-medium shadow-[0_0_20px_-5px_rgba(244,63,94,0.4)] bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white border-0 transition-all hover:scale-105"
                onClick={handleWhatsAppClick}
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Falar com Especialista
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="rounded-full px-6 h-12 text-base text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-white/5 transition-colors duration-300"
                asChild
              >
                <a href="#planos" className="flex items-center gap-2">
                  Ver planos <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
            
             <div className="hidden sm:flex items-center gap-6 text-sm text-slate-500 dark:text-slate-500 pt-4 transition-colors duration-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A3FF]" />
                <span>Setup em 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00A3FF]" />
                <span>Teste grátis de 7 dias</span>
              </div>
            </div>
          </motion.div>

          {/* Coluna Direita: Wrapper Corrigido */}
          <div className="relative flex justify-center lg:justify-end mt-4 lg:mt-0">
            {/* CONTAINER MÁGICO: Largura exata do celular. Isso prende o card ao lado. */}
            <div className="relative w-[280px] mx-auto lg:mx-0">
              
              {/* Moldura Celular */}
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: -2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 1, delay: 0.2, type: "spring" }}
                className="relative w-full bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden border-[6px] border-slate-900 aspect-[9/18.5]"
              >
                <div className="absolute inset-0 bg-[#EFE7DD] flex flex-col">
                   {/* Padrão WhatsApp */}
                   <div className="absolute inset-0 opacity-[0.06] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat bg-[length:400px]" />

                  {/* Header */}
                  <div className="bg-[#005C4B] p-3 pt-8 flex items-center gap-2 z-10 shadow-sm text-white shrink-0">
                    <div className="w-8 h-8 rounded-full bg-white p-0.5 flex items-center justify-center cursor-pointer shrink-0">
                      <img src="/logo.png" alt="SC" className="w-full h-full object-contain rounded-full" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-xs truncate">Sous Clinic</div>
                      <div className="text-[10px] opacity-80 truncate">online agora</div>
                    </div>
                  </div>

                  {/* Mensagens */}
                  <div className="flex-1 p-2.5 overflow-hidden flex flex-col justify-end pb-14 relative z-0">
                    
                    <ChatMessage 
                      text="Olá Ana! 🥰 Como está sua pele 2 dias após o peeling?" 
                      time="09:15" 
                      delay={0.5}
                    />
                    
                    <ChatMessage 
                      isUser 
                      text="Oi! Está descamando um pouco, mas estou seguindo tudo! ❤️" 
                      time="09:18" 
                      delay={1.0}
                    />
                    
                    <ChatMessage  
                      text="Ótimo! Mas preciso saber: notou alguma área muito vermelha ou com 'pontadas' de dor?" 
                      time="09:18" 
                      delay={1.5}
                    />
                    
                    <ChatMessage 
                      isUser 
                      text="No queixo está ardendo bastante e ficou bem vermelho." 
                      time="09:19" 
                      delay={2}
                    />

                     {/* Mensagem Final */}
                     <ChatMessage  
                      text={<span>Entendi. <strong>Vou alertar a Dra. agora mesmo</strong>. Evite passar produtos na área!</span>} 
                      time="09:19" 
                      delay={2.5}
                    />
                  </div>

                  {/* Input */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#F0F2F5] px-2 py-2 flex items-center gap-2 shrink-0">
                    <div className="flex-1 h-8 bg-white rounded-full px-3 text-[10px] text-slate-400 flex items-center shadow-sm">
                      Mensagem...
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#00A884] flex items-center justify-center shadow-sm shrink-0">
                       <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* CARD DE ALERTA (Ajuste Definitivo de Posição) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, x: -20 }} 
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 3.5, duration: 0.5 }} 
                // A MÁGICA: 'right-[105%]' coloca ele colado na esquerda do container de 280px
                className="absolute right-[105%] bottom-12 bg-white p-3 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border border-slate-100 w-[160px] z-20 hidden md:block"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-1 rounded-md bg-rose-100 text-rose-600">
                    <Sparkles className="w-3 h-3" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-800">Alerta Ativo</span>
                </div>
                <p className="text-[12px] text-slate-600 leading-relaxed font-medium">
                  O sistema identificou o risco e alertou a profissional.
                </p>
                {/* Seta Apontando para DIREITA (para o celular) */}
                <div className="absolute w-3 h-3 bg-white transform rotate-45 -right-1.5 top-1/2 -translate-y-1/2 border-r border-t border-slate-100"></div>
              </motion.div>            
              </div>
          </div>

        </div>
      </div>
    </section>
  );
};
