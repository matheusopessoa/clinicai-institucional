import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const ContratoProfissionalClinicaAcompanhamento = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Contrato de Prestação de Serviços SaaS e Licença de Uso – Sous Clinic
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            Última atualização: {new Date().toLocaleDateString("pt-BR", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="space-y-10 text-muted-foreground">
            {/* Preâmbulo */}
            <section className="prose prose-slate dark:prose-invert max-w-none">
              <p className="leading-relaxed text-foreground/90">
                Pelo presente instrumento particular, de um lado,{" "}
                <strong className="text-foreground">SOUS CLINIC TECNOLOGIA LTDA.</strong>, pessoa jurídica
                de direito privado, inscrita no CNPJ sob nº [●], com sede em [●], doravante denominada
                &quot;SOUS CLINIC&quot; ou &quot;CONTRATADA&quot;; e, de outro lado,{" "}
                <strong className="text-foreground">CLÍNICA / PROFISSIONAL CONTRATANTE</strong>,
                inscrita no CPF/CNPJ sob nº [●], com sede/endereço em [●], doravante denominada
                &quot;CONTRATANTE&quot;, têm entre si justo e contratado o seguinte:
              </p>
            </section>

            {/* Cláusula 1 - Definições */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cláusula 1 – Definições</h2>
              <p className="mb-4 leading-relaxed">1.1. Para os fins deste Contrato:</p>
              <ul className="list-none space-y-2 ml-4">
                <li><strong className="text-foreground">a) Plataforma:</strong> sistema SaaS denominado Sous Clinic;</li>
                <li><strong className="text-foreground">b) IA:</strong> recursos computacionais de inteligência artificial incorporados ou integrados à Plataforma;</li>
                <li><strong className="text-foreground">c) Dados do Contratante:</strong> informações inseridas, importadas ou geradas pelo CONTRATANTE na Plataforma;</li>
                <li><strong className="text-foreground">d) Dados de Pacientes/Clientes:</strong> dados pessoais e dados pessoais sensíveis tratados pelo CONTRATANTE por meio da Plataforma;</li>
                <li><strong className="text-foreground">e) Usuários Autorizados:</strong> pessoas cadastradas pelo CONTRATANTE para uso da Plataforma;</li>
                <li><strong className="text-foreground">f) Suboperadores:</strong> terceiros contratados pela SOUS CLINIC para atividades acessórias de hospedagem, mensageria, suporte, analytics, IA, segurança ou integração.</li>
              </ul>
            </section>

            {/* Cláusula 2 - Objeto */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cláusula 2 – Objeto</h2>
              <p className="mb-4 leading-relaxed">2.1. O presente Contrato tem por objeto a disponibilização, pela SOUS CLINIC ao CONTRATANTE, de acesso à Plataforma, em modelo Software as a Service (SaaS), para:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4 mb-4">
                <li>gestão de agenda, cadastros e rotinas;</li>
                <li>automação de acompanhamentos e comunicações;</li>
                <li>acesso a históricos de interações;</li>
                <li>organização de dados operacionais, de saúde e/ou estética, conforme parametrização do CONTRATANTE.</li>
              </ol>
              <p className="mb-4 leading-relaxed">2.2. A contratação compreende licença de uso limitada, revogável, não exclusiva, intransferível e não sublicenciável da Plataforma, pelo prazo de vigência contratual.</p>
              <p className="mb-4 leading-relaxed">2.3. A SOUS CLINIC não presta serviços de saúde, não realiza atos privativos de profissionais regulamentados e não assume responsabilidade técnica, clínica, terapêutica, assistencial ou estética pelos atendimentos do CONTRATANTE.</p>
              <p className="leading-relaxed">2.4. A Plataforma e a IA constituem ferramentas de apoio. A decisão profissional, a supervisão do tratamento, a validação das mensagens, a escolha dos parâmetros e a condução assistencial/estética são de responsabilidade exclusiva do CONTRATANTE.</p>
            </section>

            {/* Cláusula 3 - Natureza da IA */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cláusula 3 – Natureza da IA e Limites de Uso</h2>
              <p className="mb-4 leading-relaxed">3.1. O CONTRATANTE reconhece que a IA:</p>
              <ol className="list-roman list-inside space-y-2 ml-4 mb-4">
                <li>não substitui julgamento humano;</li>
                <li>pode gerar respostas imprecisas, incompletas, desatualizadas, enviesadas ou alucinatórias;</li>
                <li>deve ser utilizada sob monitoramento humano compatível com o risco da atividade.</li>
              </ol>
              <p className="mb-4 leading-relaxed">3.2. É vedado utilizar a Plataforma ou a IA para:</p>
              <ol className="list-roman list-inside space-y-2 ml-4 mb-4">
                <li>decisões autônomas sem revisão humana quando houver impacto clínico/estético relevante;</li>
                <li>comunicação automatizada de diagnósticos, prognósticos, condutas terapêuticas ou orientações críticas sem mediação profissional;</li>
                <li>atendimento de urgência ou emergência;</li>
                <li>promessa de resultado ou publicidade irregular.</li>
              </ol>
              <p className="leading-relaxed">3.3. O CONTRATANTE deterá, a qualquer tempo, poder de revisão, edição, veto, pausa e cancelamento das comunicações automatizadas.</p>
            </section>

            {/* Cláusula 4 - Obrigações da SOUS CLINIC */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cláusula 4 – Obrigações da SOUS CLINIC</h2>
              <p className="mb-4 leading-relaxed">4.1. Constituem obrigações da SOUS CLINIC:</p>
              <ol className="list-roman list-inside space-y-2 ml-4 mb-4">
                <li>disponibilizar a Plataforma durante a vigência contratual, ressalvadas manutenções programadas, indisponibilidades técnicas, falhas de terceiros e eventos fora de seu controle razoável;</li>
                <li>envidar esforços comercialmente razoáveis para manutenção da estabilidade e segurança da Plataforma;</li>
                <li>tratar os dados do CONTRATANTE conforme suas instruções documentadas, quando atuar na condição de operadora;</li>
                <li>adotar medidas técnicas e administrativas razoáveis de segurança compatíveis com a natureza do serviço;</li>
                <li>manter logs técnicos e registros operacionais pelo prazo aplicável à sua atividade;</li>
                <li>comunicar ao CONTRATANTE, sem demora injustificada, incidentes de segurança de que tenha ciência e que possam impactar dados tratados em nome do CONTRATANTE;</li>
                <li>prestar suporte nos canais e horários contratados.</li>
              </ol>
              <p className="leading-relaxed">4.2. A SOUS CLINIC poderá atualizar, corrigir, evoluir, modificar layout, interfaces, arquitetura e funcionalidades da Plataforma, desde que não suprima indevidamente a essência do serviço contratado.</p>
            </section>

            {/* Cláusula 5 - Obrigações do Usuário Profissional */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cláusula 5 – Obrigações do Usuário Profissional / CONTRATANTE</h2>
              <p className="mb-4 leading-relaxed">5.1. Constituem obrigações essenciais do CONTRATANTE, sem prejuízo de outras previstas neste Contrato, na legislação aplicável e nas normas éticas de sua categoria profissional:</p>
              <ol className="list-[upper-roman] list-inside space-y-2 ml-4 mb-4">
                <li>utilizar a plataforma exclusivamente para finalidades lícitas, legítimas, compatíveis com sua atividade profissional e em conformidade com a legislação sanitária, civil, consumerista, ética, digital e de proteção de dados aplicável;</li>
                <li>manter-se regularmente habilitado, inscrito e apto ao exercício profissional, quando exigível, bem como assegurar que seus empregados, parceiros, prepostos, responsáveis técnicos e usuários autorizados observem os deveres legais e éticos da respectiva profissão;</li>
                <li>definir, validar, revisar periodicamente e documentar os protocolos de uso da plataforma, os critérios de elegibilidade de pacientes, os fluxos de comunicação, os gatilhos de automação, os parâmetros da IA e as hipóteses de escalonamento obrigatório para atendimento humano;</li>
                <li>exercer supervisão humana contínua e efetiva sobre todo conteúdo, recomendação, resumo, resposta, acompanhamento, lembrete, orientação ou mensagem gerada, sugerida ou disparada pela plataforma;</li>
                <li>editar, aprovar, vetar, corrigir, pausar ou cancelar, sempre que necessário, qualquer comunicação automatizada antes ou depois do envio;</li>
                <li>não utilizar a plataforma como substituta de consulta, avaliação profissional, anamnese, exame físico, diagnóstico ou atendimento emergencial;</li>
                <li>não delegar à IA, sem mediação humana adequada, a comunicação de diagnósticos, prognósticos, condutas terapêuticas ou recomendações que demandem análise profissional;</li>
                <li>obter, registrar, armazenar e comprovar a base legal adequada para cada operação de tratamento de dados pessoais e para cada comunicação com pacientes;</li>
                <li>disponibilizar aos titulares avisos de privacidade, informações transparentes sobre o uso da plataforma, da automação e da IA;</li>
                <li>garantir a licitude, exatidão, qualidade, pertinência e atualização dos dados inseridos na plataforma;</li>
                <li>responder integralmente pelo conteúdo cadastrado, importado, parametrizado, enviado, aprovado ou mantido em sua conta;</li>
                <li>restringir o acesso à plataforma apenas a pessoas autorizadas, implementando políticas de senhas fortes e gestão de acessos;</li>
                <li>comunicar imediatamente à SOUS CLINIC qualquer suspeita de acesso indevido, comprometimento de conta ou incidente de segurança;</li>
                <li>não compartilhar credenciais ou permitir uso da conta por terceiros não autorizados;</li>
                <li>manter infraestrutura mínima compatível para uso da plataforma;</li>
                <li>utilizar a plataforma de forma compatível com a boa-fé objetiva, abstendo-se de engenharia reversa, cópia indevida ou uso abusivo;</li>
                <li>não utilizar a plataforma para práticas discriminatórias, publicidade enganosa, promessa de resultado ou exercício ilegal de profissão;</li>
                <li>manter prontuário, registros clínicos/estéticos e demais documentos sob sua guarda e responsabilidade;</li>
                <li>atender as solicitações de titulares relativas a direitos previstos na LGPD;</li>
                <li>assumir, com exclusividade, a responsabilidade por toda decisão clínica, terapêutica, estética, operacional e ética tomada com apoio da plataforma.</li>
              </ol>
              <p className="mb-4 leading-relaxed">5.2. O descumprimento das obrigações desta cláusula autoriza a SOUS CLINIC a suspender funcionalidades, limitar acessos, interromper fluxos automatizados, exigir adequações, rescindir o Contrato por justa causa e pleitear perdas e danos.</p>
              <p className="leading-relaxed">5.3. O CONTRATANTE responderá integralmente pelos atos de seus usuários autorizados, empregados, sócios, administradores, prepostos, terceiros contratados e responsáveis técnicos.</p>
            </section>

            {/* Cláusulas 6 a 12 - Resumidas */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cláusulas 6 a 12 – Acesso, Preço, Propriedade Intelectual, Confidencialidade e LGPD</h2>
              <p className="mb-4 leading-relaxed">O acesso à Plataforma será realizado mediante credenciais individuais. O CONTRATANTE é responsável pela guarda, sigilo e uso correto das credenciais. O preço será o previsto na Proposta Comercial; inadimplemento sujeita a correção monetária, juros e multa. A propriedade intelectual da Plataforma pertence exclusivamente à SOUS CLINIC. As Partes obrigam-se à confidencialidade por 5 anos. Quanto à LGPD, o CONTRATANTE atua como CONTROLADOR e a SOUS CLINIC como OPERADORA. O CONTRATANTE autoriza a contratação de Suboperadores. Em caso de incidente de segurança, a SOUS CLINIC comunicará ao CONTRATANTE sem demora. O CONTRATANTE obriga-se a defender e indenizar a SOUS CLINIC contra reclamações decorrentes de erro profissional, falha de consentimento, uso indevido da Plataforma ou atos de seus prepostos.</p>
            </section>

            {/* Cláusula 13 - Limitação de Responsabilidade */}
            <section className="border-l-4 border-primary/30 pl-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cláusula 13 – Limitação de Responsabilidade e Exclusão de Garantias</h2>
              <p className="mb-4 leading-relaxed">13.1. A SOUS CLINIC disponibiliza licença de uso temporária, onerosa, limitada, não exclusiva e intransferível de plataforma tecnológica em modelo SaaS, destinada à gestão, organização de rotinas, automação operacional e apoio à comunicação com pacientes, <strong className="text-foreground">não prestando serviços médicos, odontológicos, de enfermagem, fisioterapia, estética, prescrição, diagnóstico, prognóstico, definição terapêutica, triagem clínica autônoma, teleconsulta ou qualquer ato privativo de profissional habilitado</strong>.</p>
              <p className="mb-4 leading-relaxed">13.2. O CONTRATANTE reconhece que a plataforma e seus recursos de IA constituem ferramentas de apoio operacional e comunicacional, não substituindo avaliação, supervisão, prudência técnica, dever de informação, consentimento, juízo clínico/estético, nem decisão humana do profissional responsável. Toda parametrização de fluxos, modelos de mensagens, gatilhos, permissões e uso prático das informações geradas pela IA são de responsabilidade exclusiva do CONTRATANTE.</p>
              <p className="mb-4 leading-relaxed">13.3. A SOUS CLINIC não garante que a plataforma será isenta de erros, interrupções ou indisponibilidades; produzirá resultado clínico, assistencial ou terapêutico específico; substituirá controles internos, revisão humana ou prontuário; nem impedirá erro profissional, infração ética ou litígio com paciente.</p>
              <p className="mb-4 leading-relaxed">13.4. A SOUS CLINIC não será responsável por danos decorrentes de ato ou omissão do CONTRATANTE; uso em desacordo com a legislação; ausência de supervisão humana; conteúdo inadequado inserido pelo CONTRATANTE; alucinação ou imprecisão da IA quando o CONTRATANTE deixar de exercer supervisão; uso em urgência/emergência; credenciais comprometidas; falhas de terceiros; inexistência de base legal adequada; ou reivindicação fundada em suposto erro médico/odontológico/estético.</p>
              <p className="mb-4 leading-relaxed">13.5. A responsabilidade total da SOUS CLINIC fica limitada, por evento ou série de eventos conexos, <strong className="text-foreground">ao valor total efetivamente pago pelo CONTRATANTE nos 12 (doze) meses anteriores ao fato gerador</strong>.</p>
              <p className="mb-4 leading-relaxed">13.6. Em nenhuma hipótese a SOUS CLINIC responderá por lucros cessantes, perda de chance, dano indireto, especial, incidental, punitivo ou consequencial; danos morais ou reflexos; condenações assumidas pelo CONTRATANTE sem participação da SOUS CLINIC.</p>
              <p className="mb-4 leading-relaxed">13.7. A plataforma é fornecida no estado em que se encontra e conforme disponibilidade, sem garantias implícitas de adequação a finalidade clínica específica ou obtenção de resultados assistenciais/estéticos.</p>
              <p className="mb-4 leading-relaxed">13.8. O CONTRATANTE reconhece que a remuneração pactuada foi definida considerando a presente alocação contratual de riscos.</p>
              <p className="leading-relaxed">13.9. As limitações aplicam-se na máxima extensão admitida em lei e não afastam responsabilidade nas hipóteses de dolo ou culpa grave comprovados da SOUS CLINIC; violação comprovada de dever de sigilo ou confidencialidade; ou quando a limitação seja expressamente vedada pela legislação aplicável.</p>
            </section>

            {/* Cláusulas 14 a 18 */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cláusulas 14 a 18 – Disposições Finais</h2>
              <p className="mb-4 leading-relaxed"><strong className="text-foreground">Disponibilidade e Manutenção (14):</strong> A SOUS CLINIC poderá realizar manutenções programadas. Não haverá responsabilidade por indisponibilidade decorrente de força maior, falha de terceiros ou ordem de autoridade.</p>
              <p className="mb-4 leading-relaxed"><strong className="text-foreground">Suspensão e Rescisão (15):</strong> A SOUS CLINIC poderá suspender imediatamente o acesso em caso de inadimplemento, uso ilícito ou violação contratual. O Contrato poderá ser rescindido por justa causa.</p>
              <p className="mb-4 leading-relaxed"><strong className="text-foreground">Auditoria e Prova (16):</strong> O CONTRATANTE reconhece a validade probatória de logs, trilhas de auditoria e evidências digitais produzidas pela Plataforma.</p>
              <p className="mb-4 leading-relaxed"><strong className="text-foreground">Conformidade Ética (17):</strong> O CONTRATANTE compromete-se a cumprir normas profissionais, éticas, sanitárias e de proteção de dados. Nenhuma disposição autoriza transferir à SOUS CLINIC sua responsabilidade técnica ou assistencial.</p>
              <p className="mb-4 leading-relaxed"><strong className="text-foreground">Disposições Gerais (18):</strong> Este Contrato constitui o acordo integral entre as Partes. Será regido pelas leis da República Federativa do Brasil. Fica eleito o foro da Comarca de [●].</p>
            </section>

            {/* Termos de Uso - Resumo */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Termos de Uso da Plataforma – Usuário Profissional</h2>
              <p className="mb-4 leading-relaxed">Ao criar conta ou utilizar a Plataforma Sous Clinic, o usuário profissional declara ter lido e aceito estes Termos e o Contrato de Prestação de Serviços SaaS. A Plataforma destina-se a clínicas, consultórios, profissionais de saúde e estética. É ferramenta de gestão e apoio comunicacional, não presta serviços médicos ou assistenciais. O usuário é integralmente responsável por configurar, revisar e supervisionar mensagens automatizadas, obter consentimentos e garantir a licitude dos dados. É vedado utilizar para urgência/emergência, diagnóstico automatizado sem supervisão, publicidade irregular ou prática ilícita. A Plataforma é fornecida &quot;as is&quot;, sem garantias implícitas. A SOUS CLINIC poderá suspender ou encerrar contas em caso de inadimplemento ou violação dos Termos.</p>
            </section>

            {/* Aviso */}
            <div className="mt-12 p-6 rounded-lg bg-muted/50 border border-border/50">
              <p className="text-sm leading-relaxed">
                <strong className="text-foreground">Aviso:</strong> Este documento constitui minuta de contrato para fins informativos. Recomenda-se consulta a advogado antes da assinatura. Os campos [●] indicam informações a serem preenchidas no momento da formalização. Para uso em áreas de saúde reguladas, recomenda-se anexar: Anexo Operacional de IA (níveis de risco, fluxos proibidos, regras de escalonamento), Política de Privacidade, DPA/Anexo de Tratamento de Dados e, quando aplicável, Termo/Autorização do Paciente para acompanhamento automatizado com IA.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContratoProfissionalClinicaAcompanhamento;
