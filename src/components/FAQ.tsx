import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "A Inteligência Artificial da Sous Clinic substitui o contato com profissionais de saúde?",
    answer: "A Sous Clinic atua como uma extensão da sua equipe clínica. Ela cuida do monitoramento pós procedimentos, permitindo que o profissional de saúde tenha mais tempo para focar no atendimento e consiga dar atenção no pós aos pacientes que mais precisam sem esquecer de nenhum. A IA não tira dúvidas e nem sugere nada, apenas realiza triagens e retorna o resumo da conversa para o profissional, que tomará a decisão final do que fazer."
  },
  {
    question: "É seguro deixar uma IA falar com meus pacientes? Ela pode inventar informações?",
    answer: "A segurança é nosso pilar principal. Utilizamos uma Engenharia de Contexto Proprietária que cria barreiras de segurança. O profissional dentro do prontuário escreve como irá ocorrer o tratamento e a IA só responde com base nesse contexto clínico capturado na prescrição e nos protocolos definidos. Ela não alucina nem inventa tratamentos, operando estritamente dentro do escopo de cada profissional de saúde."
  },
  {
    question: "O que acontece se o paciente disser que está passando mal ou tiver uma emergência?",
    answer: "O sistema não tem a liberdade de sugerir nada, portanto, em casos de emergência, a IA retorna diretamente para o whatsapp do profissional para agilizar a comunicação e deixa a critério dele encaminhar o paciente para o hospital ou não."
  },
  {
    question: "A Sous Clinic é apenas para agendamento de consultas?",
    answer: "Somos muito mais do que apenas agendamentos. Nos diferenciamos dos sistemas tradicionais porque focamos na área da estética, na fidelização e na jornada de recuperação do paciente, e não apenas nas tarefas administrativas de agenda."
  },
  {
    question: "A Sous Clinic fornece treinamento para utilização da plataforma?",
    answer: "Sim. Ao ter a Sous Clinic como parceira, toda a sua equipe recebe treinamento para utilizar a plataforma na sua melhor performance. Esse treinamento pode ocorrer de forma presencial ou remota."
  },
  {
    question: "É possível fazer a transferência dos pacientes de outro software para a Sous Clinic?",
    answer: "Sim, é possível transferir seus pacientes para o nosso sistema. No entanto, é necessário saber qual software está sendo usado atualmente e que ele permita gerar algum documento ou resgatar todas as informações do paciente de uma vez. Com dúvidas sobre a transferência de dados, entre em contato com o nosso suporte e encontraremos a melhor solução."
  },
  {
    question: "Na minha clínica existe mais de um profissional, é possível usar o Sous Clinic?",
    answer: "Com certeza. O Sous Clinic foi desenhado para escalar. Cada profissional possui um login individual com acesso exclusivo aos seus pacientes, garantindo sigilo ético e organização. Paralelamente, oferecemos um perfil administrativo para a recepção e gestão, que permite visualizar a agenda global e gerenciar o fluxo de atendimento de todos os profissionais simultaneamente."
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="relative py-20 md:py-28 bg-[#f4ebe0]/40 dark:bg-slate-900 overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f43f5e]/30 to-transparent" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #a64458 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative container mx-auto px-6 max-w-3xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#f43f5e]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#a64458] dark:text-rose-400">
              Dúvidas
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#f43f5e]" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#0f172a] dark:text-slate-100 leading-tight mb-3">
            Dúvidas sobre o{" "}
            <span className="font-serif italic font-semibold text-[#f43f5e]">Sous Clinic?</span>
          </h2>
          <p className="text-[#64748b] dark:text-slate-400 text-base">
            Respostas para as principais perguntas sobre nossa plataforma.
          </p>
        </motion.div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 px-6 shadow-sm data-[state=open]:border-[#f43f5e]/20 data-[state=open]:shadow-md transition-all duration-200"
                style={{ boxShadow: "0 2px 12px 0 rgba(15,23,42,0.04)" }}
              >
                <AccordionTrigger className="text-left font-semibold text-sm md:text-base text-[#0f172a] dark:text-slate-100 hover:no-underline hover:text-[#f43f5e] dark:hover:text-rose-400 transition-colors py-5 gap-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#64748b] dark:text-slate-400 leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-14"
        >
          <p className="text-sm text-[#64748b] dark:text-slate-400 mb-5">
            Ainda tem dúvidas? Fale com nosso time.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full px-10 h-14 text-base font-semibold bg-[#f43f5e] hover:bg-[#a64458] text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-rose-200 dark:hover:shadow-rose-900/40"
          >
            <Link to="/register" className="flex items-center gap-2">
              Criar conta gratuita
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f43f5e]/20 to-transparent" />
    </section>
  );
};
