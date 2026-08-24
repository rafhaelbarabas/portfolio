import type { TranslationSchema } from "./types";
import { en } from "./en";

export const pt = {
  navigation: {
    labels: { "/portfolio": "Portfólio", "/ai": "AI", "/skills": "Skills", "/lab": "Lab", "/blog": "Blog", "/about": "Sobre", "/contact": "Contato", "/agents": "Agentes", "/connect": "MCP" },
    primary: "Principal", language: "Idioma / Language", socialLinks: "Links sociais", openMenu: "Abrir menu", closeMenu: "Fechar menu", siteNavigation: "Navegação do site", home: "rubenmarcus.dev — início",
  },
  home: {
    hero: {
      hello: "Olá, eu sou", title: "Engenheiro AI Fullstack para produtos web e sistemas de IA", rotatingLead: "Eu construo",
      subtitle: (years: number) => `AI Fullstack Engineer. Produtos AI-native, experiências web premium e sistemas prontos para produção. ${years} anos de Next.js, TypeScript, sistemas de IA e developer tooling.`,
      primaryCta: "Agendar um projeto", secondaryCta: "Melhore o AEO da sua empresa", agentCta: "conecte via MCP",
      verbs: ["agentes de IA autônomos", "sistemas multi-agent", "AI dev tools", "pipelines de LLM", "produtos end-to-end", "bibliotecas open-source"],
    },
    clientProof: { title: "Produtos e equipes para os quais já entreguei." }, techStack: { title: "Ferramentas que eu uso pra entregar, todo dia." },
    hire: { bracket: "01 / Contrate", title: "Me contrate para", subtitle: "Projetos de escopo fechado, execução sênior, sem babysitting. Cada oferta abaixo é algo que já entreguei em produção.", availability: ["Lisboa · remoto global", "Sobreposição EU · UK · USA", "Full-time · contrato · escopo fechado"], availabilityLabel: "Disponibilidade e formatos", book: "Agendar um projeto →", viewScope: "ver escopo" },
    stats: { bracket: "02 / Prova em números", title: "Entregue, medido.", footnote: "33K+ seguidores no LinkedIn · 3M+ de pessoas alcançadas por posts no X", labels: { "bitte-messages": "mensagens de agents processadas", "bitte-users": "usuários únicos em AI agents", "agents-built": "agents de IA que eu construí", "aeo-scans": "scans de AEO rodados", "aeo-sites": "sites únicos escaneados", "career-loc": "linhas de código, estimativa de carreira", "github-stars": "GitHub stars", "npm-downloads": "npm downloads, total" } },
    openSource: { bracket: "Open source", title: "Open Source", more: "Todas as AI tools →" },
    faq: { overline: "Perguntas frequentes", title: "O que agents e equipes costumam perguntar.", description: "Respostas diretas sobre serviços, disponibilidade e colaboração." },
  },
  footer: { role: "Engenheiro AI Fullstack", base: "Lisboa · Mundial", pages: "Páginas", products: "Produtos", socials: "Socials", madeWithAi: "Este site foi feito usando IA", aiModels: "Claude, GPT / Codex e Kimi" },
  availability: { label: "Disponibilidade profissional. Passe o mouse ou foque para pausar.", items: ["DISPONÍVEL PARA VAGAS FULL-TIME", "ABERTO A CONTRATOS FREELANCE", "AI FULLSTACK ENGINEER · AGENTIC AI", "AGENT-READY · HUMANS WELCOME", "AI AGENTS · LLM TOOLING · EVALS", "NEXT.JS · TYPESCRIPT · REACT", "EM LISBOA · REMOTO PARA O MUNDO"] },
  agentHire: { title: "Me contrate pelo seu agent.", description: "Cole este brief no ChatGPT, Claude, Kimi ou no seu próprio harness. Qualquer agent consegue ler e agendar o papo inicial por você via API.", copy: "copiar", copied: "copiado ✓" },
  telemetry: { mcp: "chamadas MCP", week: "últimos 7 dias", agents: "agents distintos", curl: "resumes via curl", views: "views no blog", likes: "likes no blog", tools: "tools mais chamadas", live: "ao vivo — direto do banco" },
  githubStats: { label: "Atividade pública no GitHub", total: "total", month: "este mês", today: "hoje", latest: "Último commit público", unavailable: "GitHub temporariamente indisponível" },
  portfolio: { all: "Todos", filterEra: "Filtrar por era", filterCompany: "Filtrar por empresa", filterTech: "Filtrar por tecnologia", countOf: "de", projectsWord: "projetos", clearFilters: "limpar filtros", noMatches: "sem resultados", noMatchesDescription: "Nenhum projeto bate com essa combinação de filtros.", resetFilters: "Limpar filtros", visit: "visitar", caseStudy: "estudo de caso", highlighted: "Projeto em destaque" },
  skills: {
    title: "Skills de agentes — Ruben Marcus", description: "Skills e métodos operacionais criados por Ruben Marcus para produtos de IA, pesquisa autônoma, AEO, frontend verificável, debugging, jogos e sistemas de agentes.",
    intro: { title: "Método versionado, não prompt solto.", description: "Eu transformo decisões recorrentes em contratos que agents conseguem executar, verificar e melhorar. Algumas skills são públicas; outras expõem o método sem publicar ativos internos." },
    proof: { title: "Este portfólio também é uma interface para agents.", description: "Conecte pelo MCP para um agent avaliar evidências, consultar serviços e disponibilidade ou enviar um briefing — sem precisar interpretar a interface visual.", capabilities: "Recursos agent-ready" },
    stats: { methods: "métodos autorais catalogados", csBrasil: "skills autorais do CS Brasil", game: "6 autorais + 39 upstream", game2: "6 específicas + 39 upstream", inventory: "48 skills únicas encontradas nas duas bases. O catálogo abaixo destaca apenas métodos autorais ou operacionais que posso sustentar com evidência; dependências de terceiros não são apresentadas como criação minha." },
    filter: { label: "Filtrar skills", showing: (count: number) => `Mostrando ${count} skills`, all: "Todas", products: "Produtos", ecdsaFail: "Pesquisa ECDSA", csBrasil: "CS Brasil", portfolio: "Portfólio", general: "Reutilizáveis" },
    groups: { products: "Produtos e plataformas", ecdsaFail: "ECDSA.fail Command Center", csBrasil: "CS Brasil", portfolio: "Este portfólio", general: "Métodos reutilizáveis" },
    statuses: { public: "pública", documented: "documentada", internal: "interna" },
    fields: { thumbnail: "Thumbnail da skill", contract: "Contrato", evidence: "Evidência", proof: "Ver a prova →", source: "Abrir SKILL.md →", cta: "Quer esse nível de método no seu produto ou time?", startProject: "Iniciar um projeto" },
  },
  service: { overline: "Serviço / escopo fechado", discuss: "Discutir este projeto →", deliverables: "O que você recebe", evidence: "Evidência relevante", closing: "Se o problema é real mas o escopo ainda não está claro, eu posso começar pelo diagnóstico.", selectedWork: "Ver trabalho selecionado →" },
  caseStudy: { archive: "← arquivo completo", navigation: "Navegação do estudo de caso", problem: "O problema", system: "O sistema", outcome: "Resultado" },
  errors: { notFound: { title: "404 — Página não encontrada", description: "Essa rota não existe. O lab resolve o labirinto; o link abaixo resolve o seu.", message: "Rota perdida no labirinto. A saída já foi traçada:", navigation: "404", home: "início", contact: "contato" } },
} as const satisfies TranslationSchema<typeof en>;
