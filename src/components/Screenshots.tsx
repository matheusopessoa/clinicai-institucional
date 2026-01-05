export const Screenshots = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Veja o{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sous Clinic em ação
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Interface intuitiva e conversas naturais que transformam a experiência dos seus pacientes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
          {/* Sistema Dashboard */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-center">Plataforma de Gestão</h3>
            <div className="aspect-video rounded-2xl border-2 border-dashed border-primary/30 bg-secondary/30 flex items-center justify-center gradient-card shadow-card overflow-hidden">
              <video
                src="/Gravacao sistema.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Gerencie pacientes, agendamentos e visualize relatórios em tempo real
            </p>
          </div>

          {/* WhatsApp Conversation */}
          <div className="space-y-4 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-center">Conversa no WhatsApp</h3>
            <div className="flex justify-center">
              <img
                src="/Sistema zap.jpg"
                alt="Exemplo de conversa no WhatsApp com o Sous Clinic"
                className="max-h-[600px] w-auto rounded-2xl border-2 border-dashed border-accent/30 p-1 bg-secondary/30"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              IA humanizada respondendo e agendando com naturalidade
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};