const TermosAgenteIA = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Termos de Privacidade - Agente de IA para Conversas no WhatsApp
        </h1>
        
        <div className="space-y-8 text-muted-foreground">
          <section className="mb-6">
            <p className="text-sm text-muted-foreground/80 mb-8">
              Última atualização: {new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className="mb-4 leading-relaxed">
              Os presentes Termos de Privacidade regulam o tratamento de dados pessoais e sensíveis 
              coletados através do Agente de Inteligência Artificial ("Agente de IA") utilizado em 
              conversas realizadas via WhatsApp, operado pela plataforma Sous Clinic CRM.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Escopo e Natureza dos Dados Coletados
            </h2>
            <p className="mb-4 leading-relaxed">
              O Agente de IA terá acesso exclusivamente aos dados sensíveis fornecidos voluntariamente 
              pelo próprio paciente durante as interações realizadas via WhatsApp. Tais dados incluem, 
              mas não se limitam a:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Informações compartilhadas em triagens realizadas pelo Agente de IA</li>
              <li>Dados fornecidos em respostas a perguntas de pesquisa ou investigação clínica</li>
              <li>Descrições de sintomas, queixas ou insatisfações relatadas pelo paciente</li>
              <li>Informações sobre procedimentos realizados e resultados obtidos</li>
            </ul>
            <p className="leading-relaxed">
              É importante destacar que o Agente de IA não possui acesso a dados sensíveis armazenados 
              previamente em nosso banco de dados, sendo limitado exclusivamente às informações 
              compartilhadas pelo paciente durante a conversa em tempo real.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Compartilhamento com Provedores de Modelos de Linguagem (LLM)
            </h2>
            <p className="mb-4 leading-relaxed">
              Para viabilizar o funcionamento do Agente de IA e a geração de respostas adequadas, 
              os dados sensíveis fornecidos pelo paciente poderão ser compartilhados com provedores 
              de modelos de linguagem de grande escala (LLM), incluindo, mas não se limitando a:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Anthropic (Claude)</li>
              <li>OpenAI (GPT)</li>
              <li>Meta (LLaMA)</li>
              <li>Google (Gemini)</li>
              <li>Outros provedores que a Sous Clinic CRM julgar confiáveis e adequados</li>
            </ul>
            <p className="leading-relaxed">
              O compartilhamento de dados com tais provedores ocorre exclusivamente para fins de:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Geração de respostas contextualizadas e adequadas ao paciente</li>
              <li>Realização de triagens clínicas automatizadas</li>
              <li>Prestação de suporte à clínica e ao paciente na resolução de problemas</li>
              <li>Melhoria contínua da qualidade do atendimento</li>
            </ul>
            <p className="leading-relaxed">
              A Sous Clinic CRM reserva-se o direito de alterar, adicionar ou remover provedores de LLM 
              conforme julgar necessário, sempre priorizando a segurança e a confiabilidade dos serviços 
              prestados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Armazenamento e Proteção de Dados Sensíveis
            </h2>
            <p className="mb-4 leading-relaxed">
              Todos os dados sensíveis que são armazenados em nosso banco de dados são submetidos a 
              rigorosas medidas de proteção e privacidade:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>
                <strong className="text-foreground">Anonimização:</strong> Dados pessoais são 
                anonimizados sempre que possível, removendo identificadores diretos que permitam 
                a associação imediata ao paciente.
              </li>
              <li>
                <strong className="text-foreground">Hash:</strong> Informações sensíveis são 
                submetidas a processos de hash utilizando algoritmos criptográficos seguros, 
                impedindo a recuperação dos dados originais.
              </li>
              <li>
                <strong className="text-foreground">Criptografia:</strong> Dados armazenados são 
                criptografados tanto em trânsito quanto em repouso, utilizando padrões de 
                criptografia de nível empresarial.
              </li>
            </ul>
            <p className="leading-relaxed">
              Tais medidas garantem que, mesmo em caso de acesso não autorizado aos sistemas, 
              os dados sensíveis permaneçam protegidos e indecifráveis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Uso, Venda e Compartilhamento de Dados de Pesquisa
            </h2>
            <p className="mb-4 leading-relaxed">
              A Sous Clinic CRM reserva-se o direito de utilizar, vender, licenciar, compartilhar ou 
              comercializar quaisquer dados, informações, padrões, insights ou resultados obtidos 
              através de pesquisas realizadas pelo Agente de IA, incluindo, mas não se limitando a:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Dados agregados e estatísticos derivados das interações</li>
              <li>Padrões de comportamento e tendências identificadas</li>
              <li>Insights e análises sobre necessidades de saúde e estética</li>
              <li>Resultados de triagens e pesquisas realizadas</li>
              <li>Metadados e informações técnicas sobre o uso do sistema</li>
            </ul>
            <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg mb-4">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Garantia de Anonimização
              </h3>
              <p className="mb-3 leading-relaxed">
                <strong className="text-foreground">É garantido ao paciente que:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
                <li>
                  Todos os dados pessoais serão <strong className="text-foreground">obrigatoriamente 
                  anonimizados</strong> antes de qualquer uso, venda, compartilhamento ou 
                  comercialização
                </li>
                <li>
                  Identificadores diretos (nome, CPF, telefone, e-mail, endereço) serão 
                  completamente removidos ou substituídos por códigos irreversíveis
                </li>
                <li>
                  Será impossível associar as informações de pesquisa à identidade do paciente
                </li>
                <li>
                  O paciente <strong className="text-foreground">não precisa se preocupar com sua 
                  identidade</strong> sendo relacionada às respostas fornecidas, uma vez que 
                  todos os dados pessoais serão anonimizados de forma irreversível
                </li>
              </ul>
            </div>
            <p className="mb-4 leading-relaxed">
              O uso, venda ou compartilhamento de dados de pesquisa poderá ocorrer para fins de:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Pesquisa científica e acadêmica</li>
              <li>Desenvolvimento de produtos e serviços de saúde e estética</li>
              <li>Melhoria de algoritmos e modelos de inteligência artificial</li>
              <li>Geração de relatórios e análises de mercado</li>
              <li>Comercialização de insights e dados agregados para terceiros</li>
              <li>Qualquer outro fim comercial ou não comercial que a Sous Clinic CRM julgar apropriado</li>
            </ul>
            <p className="leading-relaxed">
              Ao utilizar o Agente de IA, o paciente consente expressamente com o uso, venda e 
              compartilhamento de dados de pesquisa anonimizados, renunciando a qualquer direito 
              de oposição ou restrição a tais atividades, desde que respeitada a garantia de 
              anonimização aqui estabelecida.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Acesso Humano aos Dados Sensíveis
            </h2>
            <p className="mb-4 leading-relaxed">
              Em observância aos princípios de privacidade e proteção de dados, estabelecemos 
              restrições rigorosas quanto ao acesso humano aos dados sensíveis fornecidos durante 
              as triagens:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>
                <strong className="text-foreground">Regra Geral:</strong> Nenhum humano, incluindo 
                funcionários, administradores ou terceiros contratados pela Sous Clinic CRM, terá 
                acesso aos dados sensíveis respondidos em triagens, exceto nas situações 
                expressamente previstas neste documento.
              </li>
              <li>
                <strong className="text-foreground">Exceção - Profissional Responsável:</strong> 
                O profissional de saúde que agendou a mensagem inicial terá acesso aos dados 
                sensíveis exclusivamente em casos de alertas que necessitem de sua intervenção 
                direta. Tal acesso ocorre apenas quando o Agente de IA identifica situações que 
                requerem atenção profissional imediata, conforme critérios técnicos predefinidos.
              </li>
              <li>
                <strong className="text-foreground">Finalidade do Acesso:</strong> O acesso do 
                profissional de saúde é limitado estritamente à finalidade de prestar atendimento 
                adequado ao paciente, sendo vedado qualquer uso diverso ou compartilhamento 
                não autorizado.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Limitações e Responsabilidades do Agente de IA
            </h2>
            <p className="mb-4 leading-relaxed">
              É fundamental que o paciente compreenda as limitações inerentes ao Agente de IA e 
              as responsabilidades envolvidas:
            </p>
            
            <div className="bg-muted/50 p-6 rounded-lg mb-4">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                5.1. Funções do Agente de IA
              </h3>
              <p className="mb-3 leading-relaxed">
                O Agente de IA foi desenvolvido e configurado exclusivamente para:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Realizar pesquisas e coleta de informações do paciente</li>
                <li>Conduzir triagens automatizadas para identificar necessidades de atenção</li>
                <li>Encaminhar casos para profissionais adequados da clínica que agendou a mensagem</li>
              </ul>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg mb-4">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                5.2. Funções Expressamente Proibidas
              </h3>
              <p className="mb-3 leading-relaxed">
                O Agente de IA <strong className="text-foreground">NÃO</strong> está autorizado a:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fornecer dicas médicas ou de saúde</li>
                <li>Prescrever medicamentos ou tratamentos</li>
                <li>Indicar procedimentos ou terapias específicas</li>
                <li>Realizar diagnósticos ou emitir opiniões clínicas</li>
                <li>Substituir a avaliação de um profissional de saúde qualificado</li>
              </ul>
            </div>

            <div className="bg-destructive/10 border border-destructive/20 p-6 rounded-lg mb-4">
              <h3 className="text-xl font-semibold text-destructive mb-3">
                5.3. Isenção de Responsabilidade por Alucinações
              </h3>
              <p className="mb-3 leading-relaxed">
                A Sous Clinic CRM, a clínica que agendou a mensagem e o profissional de saúde que 
                atende o paciente <strong className="text-foreground">NÃO SE RESPONSABILIZAM</strong> por:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
                <li>Alucinações da IA que possam resultar em recomendações médicas incorretas</li>
                <li>Informações imprecisas ou enganosas geradas pelo modelo de linguagem</li>
                <li>Consequências decorrentes do uso de informações fornecidas pelo Agente de IA sem 
                    confirmação prévia com profissional de saúde</li>
                <li>Danos resultantes da interpretação incorreta de respostas do Agente de IA</li>
              </ul>
              <p className="leading-relaxed">
                Embora o Agente de IA seja desenvolvido com alta engenharia e técnicas avançadas 
                para minimizar alucinações, é inerente à natureza de modelos de linguagem generativa 
                a possibilidade de geração de informações incorretas ou enganosas. Portanto, 
                <strong className="text-foreground"> qualquer recomendação, orientação ou informação 
                fornecida pelo Agente de IA deve ser previamente confirmada com um profissional de 
                saúde qualificado antes de ser utilizada para tomada de decisões médicas ou de saúde.</strong>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Medidas Técnicas de Prevenção de Alucinações
            </h2>
            <p className="mb-4 leading-relaxed">
              A Sous Clinic CRM implementa medidas técnicas rigorosas para minimizar a ocorrência de 
              alucinações no Agente de IA:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Engenharia de prompts avançada com instruções claras e restritivas</li>
              <li>Validação e filtragem de respostas antes da apresentação ao paciente</li>
              <li>Limitação explícita do escopo de atuação do Agente de IA</li>
              <li>Monitoramento contínuo e ajustes baseados em feedback</li>
              <li>Uso de modelos de linguagem de alta qualidade e confiabilidade</li>
            </ul>
            <p className="leading-relaxed">
              Não obstante tais medidas, a natureza probabilística dos modelos de linguagem 
              generativa torna impossível garantir a ausência absoluta de alucinações, razão pela 
              qual a confirmação com profissional de saúde permanece obrigatória.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. Consentimento e Aceitação dos Termos
            </h2>
            <p className="mb-4 leading-relaxed">
              Ao utilizar o Agente de IA através de conversas no WhatsApp, o paciente declara 
              ter lido, compreendido e aceito integralmente os presentes Termos de Privacidade, 
              incluindo:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>O compartilhamento de seus dados sensíveis com provedores de LLM</li>
              <li>As limitações e restrições de funcionalidade do Agente de IA</li>
              <li>A necessidade de confirmação prévia com profissional de saúde</li>
              <li>A isenção de responsabilidade por alucinações da IA</li>
              <li>As medidas de proteção e armazenamento de dados implementadas</li>
            </ul>
            <p className="leading-relaxed">
              O uso do Agente de IA implica em consentimento tácito e irretratável para o 
              tratamento de dados conforme descrito nestes termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              9. Conformidade Legal
            </h2>
            <p className="mb-4 leading-relaxed">
              Os presentes Termos de Privacidade estão em conformidade com:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD)</li>
              <li>Resoluções do Conselho Federal de Medicina (CFM) aplicáveis</li>
              <li>Normativas da Agência Nacional de Vigilância Sanitária (ANVISA)</li>
              <li>Regulamentações internacionais de proteção de dados, quando aplicáveis</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              10. Alterações nos Termos
            </h2>
            <p className="mb-4 leading-relaxed">
              A Sous Clinic CRM reserva-se o direito de modificar estes Termos de Privacidade a 
              qualquer momento, mediante notificação prévia aos usuários através dos canais 
              oficiais de comunicação. Alterações significativas serão comunicadas com antecedência 
              mínima de 30 (trinta) dias.
            </p>
            <p className="leading-relaxed">
              O uso continuado do Agente de IA após a publicação de alterações constitui 
              aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              11. Contato e Dúvidas
            </h2>
            <p className="mb-4 leading-relaxed">
              Para questões, esclarecimentos ou exercício de direitos relacionados ao tratamento 
              de dados pessoais, o paciente poderá entrar em contato através dos seguintes canais:
            </p>
            <ul className="list-none space-y-2 mb-4">
              <li className="flex items-start">
                <span className="font-semibold text-foreground mr-2">E-mail:</span>
                <li>contato@sousclinic.com</li>
                </li>
              <li className="flex items-start">
                <span className="font-semibold text-foreground mr-2">Plataforma:</span>
                <li>app.sousclinic.com</li>
              </li>
            </ul>
            <p className="leading-relaxed">
              O paciente possui direito de acesso, correção, exclusão, portabilidade e oposição 
              ao tratamento de seus dados pessoais, nos termos da LGPD.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-border/30">
            <p className="text-sm leading-relaxed">
              <strong className="text-foreground">Aviso Final:</strong> Estes Termos de Privacidade 
              constituem documento jurídico vinculante. Recomenda-se leitura atenta e consulta a 
              profissional jurídico em caso de dúvidas. O uso do Agente de IA implica aceitação 
              integral e irretratável de todas as condições aqui estabelecidas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermosAgenteIA;
