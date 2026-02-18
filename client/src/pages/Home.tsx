import { motion } from "framer-motion";
import { 
  Check, 
  Terminal, 
  Cpu, 
  Zap, 
  Download,
  Users,
  Code2,
  BookOpen,
  LineChart,
  Lightbulb,
  Globe,
  Sparkles
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-foreground overflow-x-hidden select-none">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-white/[0.03] blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-6 rounded-full px-4 py-1.5 border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10 transition-colors cursor-default">
              <span className="mr-2 text-white">●</span> v1.0 Disponível Agora
            </Badge>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Seu novo e dinâmico <br /> <span className="text-gradient italic">agente de execução web</span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <strong>Automatize tarefas na web</strong>, gere arquivos TXT, JSON, CSV e Markdown, e acesse <strong>500+ integrações</strong>. <br />
            <span className="text-white font-medium">Planos a partir de R$ 39/mês</span>
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button 
              size="lg" 
              className="h-12 px-8 rounded-full bg-white text-black hover:bg-gray-200 font-semibold text-base shadow-xl shadow-white/5 w-full sm:w-auto"
              onClick={() => {
                window.location.href = '/Delta-AI-Setup-1.0.0.exe';
              }}
            >
              <Download className="mr-2 h-4 w-4" />
              Baixar para Windows
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-12 px-8 rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 w-full sm:w-auto"
              onClick={() => {
                const el = document.querySelector('#pricing');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ver Preços
            </Button>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <Section id="how-it-works" className="border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="font-bold">Simples</span>, <span className="font-bold text-gradient">poderoso</span> e <span className="italic">seguro</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Projetado para se integrar ao seu fluxo de trabalho sem fricção.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {[
            {
              step: "1",
              title: "Instalação Rápida",
              desc: (
                <>
                  Baixe o arquivo <strong>.exe para Windows</strong> e instale em segundos. O D3LTA AI está <strong>pronto para usar</strong> assim que você abrir, sem necessidade de configurações complexas ou dependências adicionais. Todo o processo é guiado e intuitivo.
                </>
              ),
              icon: <Download className="w-5 h-5" />
            },
            {
              step: "2",
              title: "Crie sua Conta",
              desc: (
                <>
                  Crie sua conta <strong>diretamente no aplicativo</strong> em menos de um minuto. <strong>Não é necessário configurar chaves de API externas</strong> - ao contrário de outras soluções, você começa imediatamente com nosso <strong>plano gratuito</strong> sem barreiras técnicas.
                </>
              ),
              icon: <Users className="w-5 h-5" />
            },
            {
              step: "3",
              title: "Gere Arquivos com IA",
              desc: (
                <>
                  Peça para a IA criar <strong>arquivos estruturados como TXT, JSON, CSV e Markdown</strong> com um simples comando. Ideal para <strong>exportar dados</strong>, organizar informações rapidamente e criar documentação automatizada. A IA entende contexto e formata perfeitamente.
                </>
              ),
              icon: <Terminal className="w-5 h-5" />
            },
            {
              step: "4",
              title: "Escolha seu Modo",
              content: (
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="bg-zinc-950/50 p-4 rounded-lg border border-white/5">
                    <h4 className="font-bold text-white mb-2">Modo Ask</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Faça <strong>perguntas sobre a página atual</strong>. O D3LTA analisa o conteúdo em tempo real e responde com <strong>informações precisas e contextualizadas</strong>, extraindo dados específicos ou resumindo conteúdos complexos.
                    </p>
                  </div>
                  <div className="bg-zinc-950/50 p-4 rounded-lg border border-white/5">
                    <h4 className="font-bold text-white mb-2">Modo Agente</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Peça qualquer ação e o D3LTA <strong>executa automaticamente</strong>: preencher formulários, navegar entre páginas, clicar em elementos, extrair dados e muito mais. <strong>Automação real</strong> com inteligência artificial.
                    </p>
                  </div>
                </div>
              ),
              icon: <Cpu className="w-5 h-5" />
            },
            {
              step: "5",
              title: "Acesse 500+ Integrações",
              desc: (
                <>
                  Conecte-se com <strong>Gmail, Slack, GitHub, Notion</strong> e centenas de outras ferramentas através de nossas <strong>integrações nativas</strong>. Sincronize dados, automatize workflows e centralize sua produtividade em um único lugar.
                </>
              ),
              icon: <Zap className="w-5 h-5" />
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-zinc-900/30 border border-white/5 rounded-xl p-6 flex gap-6 items-start hover:border-white/10 transition-colors">
              <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white shrink-0 font-bold border border-white/10">
                {item.step}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                {item.desc && <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>}
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* TARGET AUDIENCE */}
      <Section id="target-audience" className="bg-black">
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Para quem é</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Qualquer pessoa que trabalha na web</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Profissionais",
              desc: (
                <>
                  <strong>Automatize tarefas repetitivas</strong> como preenchimento de formulários, coleta de dados e envio de emails. Economize horas do seu dia com <strong>automação inteligente</strong> que aprende com seu comportamento e otimiza processos complexos.
                </>
              ),
              icon: <BriefcaseIcon className="text-white" />
            },
            {
              title: "Pesquisadores",
              desc: (
                <>
                  <strong>Extraia informações de múltiplas páginas</strong> simultaneamente, organize dados em formatos estruturados e faça <strong>perguntas complexas</strong> sobre grandes volumes de conteúdo. Ideal para revisões bibliográficas e análise de dados.
                </>
              ),
              icon: <BookOpen className="text-white" />
            },
            {
              title: "Desenvolvedores",
              desc: (
                <>
                  <strong>Teste aplicações web</strong> automaticamente, automatize workflows de desenvolvimento e integre com suas <strong>ferramentas favoritas</strong> como GitHub, Bitbucket e Jira. Debug e monitore aplicações em tempo real.
                </>
              ),
              icon: <Code2 className="text-white" />
            },
            {
              title: "Analistas",
              desc: (
                <>
                  <strong>Colete dados de sites</strong> sem programação, gere <strong>relatórios automaticamente</strong> em CSV ou JSON e monitore métricas em tempo real. Transforme dados brutos em insights acionáveis rapidamente.
                </>
              ),
              icon: <LineChart className="text-white" />
            },
            {
              title: "Criadores de Conteúdo",
              desc: (
                <>
                  Pesquise referências em múltiplas fontes, <strong>organize informações</strong> automaticamente e automatize tarefas de pesquisa. Gere <strong>resumos e compilações</strong> de conteúdo com um comando.
                </>
              ),
              icon: <Lightbulb className="text-white" />
            },
            {
              title: "Usuários Comuns",
              desc: (
                <>
                  Simplifique sua <strong>navegação diária</strong> com um assistente inteligente que entende suas necessidades. <strong>Economize tempo</strong> em tarefas cotidianas como compras online, pesquisas e organização de informações.
                </>
              ),
              icon: <Globe className="text-white" />
            }
          ].map((card, idx) => (
            <Card key={idx} className="bg-zinc-900/20 border-white/5 hover:border-white/10 transition-all hover:bg-zinc-900/30">
              <CardContent className="p-6">
                <div className="mb-4 w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center border border-white/5">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{card.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{card.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* WHY D3LTA SECTION */}
      <Section className="bg-white text-black rounded-3xl mx-auto max-w-6xl my-20 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="px-8">
            <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4">Funcionalidades</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Por que escolher o D3LTA AI?</h2>
          </div>
          <div className="space-y-8 px-8 border-l border-zinc-100">
            {[
              { 
                title: "Geração de Arquivos", 
                desc: (
                  <>
                    Crie <strong>TXT, JSON, CSV e Markdown</strong> estruturados com um comando. A IA formata automaticamente, <strong>economizando horas</strong> de trabalho manual.
                  </>
                )
              },
              { 
                title: "Facilidade de Uso", 
                desc: (
                  <>
                    <strong>Instalação em segundos</strong> e onboarding guiado. <strong>Sem configurações complexas</strong>, sem chaves de API. Interface intuitiva para todos.
                  </>
                )
              },
              { 
                title: "Privacidade e Segurança", 
                desc: (
                  <>
                    <strong>Seus dados ficam no seu computador.</strong> Coletamos apenas o <strong>consumo de tokens</strong>. <strong>Não vendemos ou compartilhamos</strong> seus dados.
                  </>
                )
              },
              { 
                title: "Suporte Especializado", 
                desc: (
                  <>
                    Equipe pronta para ajudar você a <strong>extrair o máximo da IA</strong>. Documentação completa e <strong>suporte direto</strong> nos planos pagos.
                  </>
                )
              }
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="mt-1">
                  <Check className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">{feature.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PRICING */}
      <Section id="pricing">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Preços</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Planos flexíveis para você</h2>
            <p className="text-zinc-400">Escolha o plano que melhor se adapta às suas necessidades</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <Card className="bg-zinc-900/40 border-white/5 relative overflow-hidden backdrop-blur-sm hover:border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:z-20">
              <CardContent className="p-8">
                <div className="text-zinc-400 text-xs font-medium mb-4 uppercase tracking-wider">Free</div>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-bold text-white">Grátis</span>
                </div>
                <div className="space-y-4 mb-8">
                  {[
                    <>5 créditos <strong>mensais</strong></>,
                    <>Acesso aos Modos <strong>Ask e Agent</strong></>,
                    <><strong>Geração de arquivos</strong></>,
                    <>Suporte via <strong>comunidade</strong></>
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                      <span className="text-zinc-400 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full rounded-full border-white/10 text-white hover:bg-white/5"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/Delta-AI-Setup-1.0.0.exe';
                    link.download = 'Delta-AI-Setup-1.0.0.exe';
                    link.click();
                  }}
                >
                  Começar Agora
                </Button>
              </CardContent>
            </Card>

            {/* Plus Plan */}
            <Card className="bg-zinc-900/60 border-white/20 relative overflow-hidden backdrop-blur-sm shadow-2xl scale-105 z-10 hover:scale-110 transition-all duration-300 hover:shadow-white/10">
              <div className="absolute top-0 right-0 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-bl-lg">MAIS POPULAR</div>
              <CardContent className="p-8">
                <div className="text-zinc-300 text-xs font-medium mb-4 uppercase tracking-wider">Plus</div>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-bold text-white">R$ 39</span>
                  <span className="text-zinc-500 text-sm">/mês</span>
                </div>
                <div className="space-y-4 mb-8">
                  {[
                    <><strong>100 créditos</strong> mensais</>,
                    <><strong>~5M tokens</strong> input/output</>,
                    <>Tudo do <strong>plano Free</strong></>,
                    <><strong>Suporte prioritário</strong></>,
                    <>Acesso ao <strong>nosso grupo de network</strong></>
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <span className="text-zinc-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  className="w-full rounded-full bg-white text-black hover:bg-gray-200 font-bold"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/Delta-AI-Setup-1.0.0.exe';
                    link.download = 'Delta-AI-Setup-1.0.0.exe';
                    link.click();
                  }}
                >
                  Começar Agora
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-zinc-900/40 border-white/5 relative overflow-hidden backdrop-blur-sm hover:border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:z-20">
              <CardContent className="p-8">
                <div className="text-zinc-400 text-xs font-medium mb-4 uppercase tracking-wider">Pro</div>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-bold text-white">R$ 89</span>
                  <span className="text-zinc-500 text-sm">/mês</span>
                </div>
                <div className="space-y-4 mb-8">
                  {[
                    <><strong>300 créditos</strong> mensais</>,
                    <><strong>~15M tokens</strong> input/output</>,
                    <>Tudo do <strong>plano Plus</strong></>,
                    <><strong>Contato direto</strong> com o dono</>,
                    <>Acesso às <strong>docs de agentes</strong></>
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                      <span className="text-zinc-400 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full rounded-full border-white/10 text-white hover:bg-white/5"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/Delta-AI-Setup-1.0.0.exe';
                    link.download = 'Delta-AI-Setup-1.0.0.exe';
                    link.click();
                  }}
                >
                  Começar Agora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Perguntas</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Alguma dúvida? Aqui está a resposta</h2>
          <p className="text-zinc-400">Ainda ficou com alguma dúvida? Entre em contato conosco</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {[
            {
              q: "O que é o D3LTA AI?",
              a: (
                <>
                  O D3LTA AI é um <strong>agente de execução web</strong> que utiliza inteligência artificial avançada para <strong>automatizar tarefas complexas na internet</strong>, gerar arquivos estruturados (TXT, JSON, CSV, Markdown) e executar ações automaticamente. Diferente de navegadores tradicionais, o D3LTA é um <strong>agente inteligente</strong> focado em <strong>automação e produtividade</strong>, capaz de interagir com sites, preencher formulários, extrair dados e executar workflows completos de forma autônoma.
                </>
              )
            },
            {
              q: "Preciso de uma chave de API para usar?",
              a: (
                <>
                  <strong>Não!</strong> Ao contrário de outras ferramentas de IA que exigem configuração de APIs do OpenAI, Anthropic ou Google, o D3LTA AI funciona através de um <strong>sistema de conta simples e direto</strong>. Basta criar sua conta no aplicativo e começar a usar imediatamente com o <strong>plano gratuito</strong>. Toda a complexidade técnica é gerenciada por nós, você só precisa focar no que importa: <strong>sua produtividade</strong>.
                </>
              )
            },
            {
              q: "Como funcionam os créditos?",
              a: (
                <>
                  Cada interação com a IA consome créditos baseados no <strong>volume de processamento</strong>. O plano gratuito oferece <strong>5 créditos mensais</strong> para você experimentar. O plano Plus oferece <strong>100 créditos</strong> (equivalente a ~5 milhões de tokens de input e output), enquanto o plano Pro oferece <strong>300 créditos</strong> (~15 milhões de tokens). Os créditos são <strong>renovados mensalmente</strong> e você pode acompanhar seu uso em tempo real no painel do aplicativo.
                </>
              )
            },
            {
              q: "Quais arquivos posso gerar?",
              a: (
                <>
                  O D3LTA AI pode gerar <strong>arquivos TXT, JSON, CSV e Markdown</strong> a partir de qualquer informação na web ou conversa com o assistente. Por exemplo: extraia dados de uma tabela e gere um <strong>CSV estruturado</strong>, peça um resumo e receba em <strong>Markdown formatado</strong>, ou colete informações de APIs e exporte em <strong>JSON</strong>. A IA entende contexto e formata automaticamente conforme suas necessidades, <strong>economizando horas</strong> de trabalho manual.
                </>
              )
            },
            {
              q: "Meus dados estão seguros?",
              a: (
                <>
                  <strong>Sim, totalmente.</strong> Todas as suas conversas, mensagens e interações ficam <strong>armazenadas apenas no seu computador</strong>. <strong>Não coletamos, armazenamos ou vendemos seus dados pessoais</strong>. O único dado que registramos é o <strong>consumo de tokens</strong> para controle de créditos do seu plano. Seus dados de navegação e automações são <strong>100% privados e locais</strong>, garantindo total controle e privacidade sobre suas informações.
                </>
              )
            },
            {
              q: "Onde posso baixar o D3LTA AI?",
              a: (
                <>
                  Atualmente o D3LTA AI está disponível <strong>exclusivamente para Windows</strong> através do instalador <strong>.exe oficial</strong> em nosso site. A instalação é <strong>rápida e segura</strong>, levando apenas alguns segundos. Estamos trabalhando nas versões para <strong>macOS e Linux</strong>, que serão lançadas em breve. Cadastre-se para receber notificações sobre novos lançamentos e atualizações.
                </>
              )
            }
          ].map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-white/5 rounded-xl px-6 bg-zinc-900/20 hover:bg-zinc-900/30 transition-colors">
              <AccordionTrigger className="text-white hover:text-zinc-300 hover:no-underline font-medium text-left py-6">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-400 pb-6 leading-relaxed text-sm">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* FINAL CTA */}
      <Section className="pb-32">
        <Card className="bg-zinc-900/40 border-white/5 overflow-hidden rounded-[2rem] p-12 md:p-20 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-2xl mx-auto leading-tight">
            Pronto para ter um agente inteligente?
          </h2>
          <p className="text-zinc-400 mb-10 text-lg max-w-xl mx-auto">
            <strong>Comece gratuitamente</strong> agora e transforme sua produtividade na web com automação inteligente de ponta.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Button 
              size="lg" 
              className="h-12 px-8 rounded-full bg-white text-black hover:bg-gray-200 font-bold shadow-xl shadow-white/5"
              onClick={() => {
                window.location.href = '/Delta-AI-Setup-1.0.0.exe';
              }}
            >
              Baixar para Windows
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-12 px-8 rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10"
              onClick={() => {
                const el = document.querySelector('#pricing');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ver Preços
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-zinc-500 font-mono uppercase tracking-widest">
            <span>Instalação rápida</span>
            <span>•</span>
            <span>Configuração simples</span>
            <span>•</span>
            <span>Suporte completo</span>
          </div>
          <div className="mt-8 text-center text-xs text-zinc-600">
            © 2026 D3LTA AI - Todos os direitos reservados
          </div>
        </Card>
      </Section>

    </div>
  );
}

// Helper component for the target audience section
function BriefcaseIcon({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}
