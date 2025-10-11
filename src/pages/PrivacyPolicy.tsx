const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Política de Privacidade
        </h1>
        
        <div className="space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Informações que Coletamos</h2>
            <p className="mb-4">
              O ClinicAI coleta informações necessárias para fornecer nossos serviços de gestão de pacientes e atendimento automatizado via WhatsApp. Isso inclui:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Dados de cadastro: nome, e-mail, telefone e informações profissionais</li>
              <li>Dados de pacientes: informações fornecidas pelo profissional de saúde</li>
              <li>Conversas via WhatsApp entre o agente de IA e os pacientes</li>
              <li>Dados de uso da plataforma e histórico de atendimentos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Como Utilizamos suas Informações</h2>
            <p className="mb-4">
              As informações coletadas são utilizadas para:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Prestar os serviços de gestão de pacientes e atendimento automatizado</li>
              <li>Treinar e personalizar o agente de IA conforme seu estilo de atendimento</li>
              <li>Melhorar nossos serviços e desenvolver novos recursos</li>
              <li>Comunicar atualizações importantes sobre o serviço</li>
              <li>Garantir a segurança e integridade da plataforma</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Proteção de Dados de Saúde</h2>
            <p className="mb-4">
              Reconhecemos a sensibilidade dos dados de saúde e implementamos medidas rigorosas de segurança:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Criptografia de dados em trânsito e em repouso</li>
              <li>Acesso restrito às informações apenas para pessoal autorizado</li>
              <li>Conformidade com a Lei Geral de Proteção de Dados (LGPD)</li>
              <li>Auditorias regulares de segurança</li>
              <li>Backups frequentes para garantir a integridade dos dados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Compartilhamento de Informações</h2>
            <p className="mb-4">
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Quando necessário para prestar os serviços (ex: integração com WhatsApp)</li>
              <li>Para cumprir obrigações legais ou regulatórias</li>
              <li>Com seu consentimento explícito</li>
              <li>Para proteger os direitos e segurança do ClinicAI e seus usuários</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Seus Direitos</h2>
            <p className="mb-4">
              De acordo com a LGPD, você tem direito a:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Acessar seus dados pessoais armazenados</li>
              <li>Solicitar correção de dados incompletos ou incorretos</li>
              <li>Solicitar a exclusão de dados pessoais</li>
              <li>Revogar consentimento a qualquer momento</li>
              <li>Portabilidade dos dados para outro fornecedor</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Retenção de Dados</h2>
            <p>
              Mantemos seus dados pelo tempo necessário para fornecer nossos serviços e cumprir obrigações legais. 
              Após o encerramento da conta, os dados serão mantidos conforme exigido por lei ou excluídos de forma segura.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookies e Tecnologias Similares</h2>
            <p>
              Utilizamos cookies e tecnologias similares para melhorar a experiência do usuário, analisar o uso da plataforma 
              e personalizar conteúdo. Você pode gerenciar suas preferências de cookies nas configurações do navegador.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Atualizações desta Política</h2>
            <p>
              Esta Política de Privacidade pode ser atualizada periodicamente. Notificaremos sobre mudanças significativas 
              através da plataforma ou por e-mail. A data da última atualização será sempre indicada no topo do documento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contato</h2>
            <p className="mb-4">
              Para questões sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, entre em contato:
            </p>
            <ul className="list-none space-y-2">
              <li>E-mail: privacidade@clinicai.io</li>
              <li>WhatsApp: +55 11 99999-9999</li>
              <li>Plataforma: app.clinicai.io</li>
            </ul>
          </section>

          <div className="mt-12 pt-8 border-t border-border/30 text-sm">
            <p>Última atualização: {new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
