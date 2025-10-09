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
              ClinicAI em ação
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Interface intuitiva e conversas naturais que transformam a experiência dos seus pacientes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Sistema Dashboard */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-center">Plataforma de Gestão</h3>
            <div className="aspect-video rounded-2xl border-2 border-dashed border-primary/30 bg-secondary/30 flex items-center justify-center gradient-card shadow-card">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  Espaço para print do sistema
                  <br />
                  <span className="text-xs">(16:9)</span>
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Gerencie pacientes, agendamentos e visualize relatórios em tempo real
            </p>
          </div>

          {/* WhatsApp Conversation */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-center">Conversa no WhatsApp</h3>
            <div className="aspect-video rounded-2xl border-2 border-dashed border-accent/30 bg-secondary/30 flex items-center justify-center gradient-card shadow-card">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  Espaço para print da conversa
                  <br />
                  <span className="text-xs">(16:9)</span>
                </p>
              </div>
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
