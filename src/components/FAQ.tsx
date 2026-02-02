import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

const faqs = [
  {
    question: "A Inteligência Artificial da Sous Clinic substitui o contato com profissionais de saúde?",
    answer: "A Sous Clinic atua como uma extensão da sua equipe clínica. Ela cuida do monitoramento diário e dúvidas rotineiras sobre a prescrição ou do tratamento, permitindo que o profissional de saúde foque no diagnóstico e em intercorrências complexas. Nossa tecnologia preenche a lacuna do pós-atendimento, onde o paciente geralmente fica desassistido."
  },
  {
    question: "É seguro deixar uma IA falar com meus pacientes? Ela pode inventar informações?",
    answer: "A segurança é nosso pilar principal. Utilizamos uma Engenharia de Contexto Proprietária que cria barreiras de segurança. O profissional dentro do prontuário escreve como irá ocorrer o tratamento e a IA só responde com base nesse contexto clínico capturado na prescrição e nos protocolos definidos. Ela não \"alucina\" nem inventa tratamentos, operando estritamente dentro do escopo de cada profissional de saúde."
  },
  {
    question: "O que acontece se o paciente disser que está passando mal ou tiver uma emergência?",
    answer: "O sistema possui Triagem de Risco em Tempo Real. Se o paciente relatar sintomas graves ou inesperados, a automação é interrompida instantaneamente e sua equipe recebe um alerta para intervir. A IA sabe identificar quando o caso requer atenção humana imediata. Com isso sua equipe poderá dar prioridade aos pacientes que relataram sintomas fora do comum para aquele tratamento."
  },
  {
    question: "Como a plataforma sabe o que o profissional receitou?",
    answer: "Utilizamos a Captura de Contexto Clínico. Ao finalizar a prescrição, o sistema analisa os dados. Isso captura o raciocínio clínico do profissional, garantindo que o acompanhamento seja personalizado para aquele tratamento específico."
  },
  {
    question: "A Sous Clinic é apenas para agendamento de consultas?",
    answer: "Somos muito mais do que apenas agendamentos. Nos diferenciamos dos CRMs tradicionais porque focamos na adesão ao tratamento e na jornada de recuperação do paciente, e não apenas nas tarefas administrativas de agenda."
  },
  {
    question: "A Sous Clinic fornece treinamento para utilização da plataforma?",
    answer: "Sim! Ao ter a Sous Clinic como parceira, toda a sua equipe, tanto atendentes e profissionais, recebem treinamento para utilizar a plataforma na sua melhor performance. Esse treinamento pode ocorrer de forma presencial ou remota. Além disso, possuímos um canal no youtube, com vídeos explicativos para utilização da plataforma."
  },
  {
    question: "É possível fazer a transferência dos pacientes de um outro software para a Sous Clinic?",
    answer: "Sim, é possível transferir seus pacientes para o nosso sistema. No entanto, é necessário saber qual software está sendo usado atualmente, e que ele permita gerar algum documento ou resgatar todas as informações do paciente de uma vez. Está com dúvida sobre a transferência de dados, entre em contato com o nosso suporte e encontraremos a melhor solução."
  },
  {
    question: "É possível fazer prescrição dentro do Sous Clinic?",
    answer: "Sim! Nossa plataforma possui um prontuário eletrônico completo onde você gera prescrições de medicamentos e anotações clínicas de forma integrada. O sistema formata o documento, e para validade farmacêutica, basta imprimir, assinar e carimbar conforme seu conselho regional. O grande diferencial é que essa prescrição alimenta nossa IA para iniciar o monitoramento pós-consulta."
  },
{
    question: "Na minha Clínica existe mais de um profissional, é possível usar o Sous Clinic?",
    answer: "Com certeza. O Sous Clinic foi desenhado para escalar. Cada profissional de saúde possui um login individual com acesso exclusivo aos seus pacientes, garantindo sigilo ético e organização. Paralelamente, oferecemos um perfil administrativo para a recepção/gestão, que permite visualizar a agenda global e gerenciar o fluxo de atendimento de todos os profissionais simultaneamente."
},
{
    question: "Como funciona o pagamento?",
    answer: "Trabalhamos com um modelo de assinatura. Você escolhe o plano ideal e o pagamento é realizado via cartão de crédito na modalidade recorrente, ou seja, debita apenas a mensalidade sem comprometer o limite total do seu cartão. O contrato garante o acesso a todas as funcionalidades, atualizações da IA e suporte técnico pelo período de 12 meses."
}
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <AnimateOnScroll animation="fadeInUp" delay={0}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-800/30 backdrop-blur-sm mb-6">
              <HelpCircle className="w-4 h-4 text-rose-500" />
              <span className="text-sm font-medium text-rose-600 dark:text-rose-400">
                Perguntas Frequentes
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              Dúvidas sobre o{" "}
              <span className="font-serif italic bg-gradient-to-r from-rose-500 to-rose-400 bg-clip-text text-transparent">
                Sous Clinic?
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              Encontre respostas para as principais perguntas sobre nossa plataforma.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AnimateOnScroll
                key={index}
                animation="fadeInUp"
                delay={index * 100}
                duration={500}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
                >
                  <AccordionTrigger className="text-left font-semibold text-lg text-slate-900 dark:text-white hover:no-underline hover:text-rose-500 dark:hover:text-rose-400 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 dark:text-slate-400 leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </AnimateOnScroll>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <AnimateOnScroll animation="fadeInUp" delay={700}>
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              Pronto para transformar sua clínica?
            </p>
            <Button
              asChild
              size="lg"
              variant="gradient"
              className="group"
            >
              <Link to="/register">
                Criar conta gratuita
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

