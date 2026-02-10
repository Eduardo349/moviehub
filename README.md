🎬 MovieHub

MovieHub é uma aplicação web desenvolvida com Next.js que permite visualizar informações de filmes utilizando a API do TMDB (The Movie Database).
O projeto foi criado com foco em boas práticas de desenvolvimento moderno, incluindo CI/CD com GitHub Actions e deploy automático no Vercel.


🚀 Tecnologias Utilizadas:

Next.js
React
TypeScript
TMDB API
GitHub Actions (CI/CD)
Vercel (Deploy)


📦 Funcionalidades:

Listagem de filmes
Página de detalhes de cada filme
Consumo de API externa (TMDB)
Renderização dinâmica com rotas do Next.js
Build e deploy automáticos


⚙️ Pré-requisitos:

Antes de rodar o projeto, você precisa ter instalado:

Node.js (versão 16 ou superior)
npm ou yam
Uma conta no GitHub
Uma conta no Vercel
Uma API Key do TMDB


🔑 Variáveis de Ambiente:

Crie um arquivo .env.local na raiz do projeto com a seguinte variável:
Env

TMDB_API_KEY=SUA_API_KEY_AQUI

⚠️ Essa variável não deve ser versionada.
Ela é configurada no deploy via Secrets.


▶️ Como rodar o projeto localmente:

Clone o repositório:

git clone https://github.com/seu-usuario/moviehub.git
cd moviehub

Instale as dependências:

npm install

Execute o projeto em modo de desenvolvimento:

npm run dev

Acesse no navegador:

http://localhost:3000


🧪 Scripts Disponíveis:

npm run dev     # Inicia o servidor de desenvolvimento
npm run build   # Gera o build de produção
npm run start   # Executa o build em produção
npm run lint    # Executa o lint (opcional)

ℹ️ O ESLint foi desativado no pipeline de CI para evitar falhas de build relacionadas à configuração do projeto.


🔄 CI/CD – Integração e Deploy Contínuos

O projeto possui um pipeline de CI/CD configurado com GitHub Actions.

🔹 CI (Continuous Integration)

A cada push ou pull request para a branch main, o workflow executa:

Instalação das dependências

Build da aplicação

🔹 CD (Continuous Deployment)

Após o build bem-sucedido, o projeto é deployado automaticamente no Vercel.


🔐 Secrets Configurados no GitHub
Os seguintes secrets foram adicionados no repositório:

VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID
Esses secrets são usados pelo GitHub Actions para realizar o deploy automático.


🌐 Deploy
A aplicação está publicada no Vercel:


🔗 URL do projeto:
👉 https://moviehub-azure.vercel.app.


🧠 Observações Técnicas:

O ESLint foi removido do pipeline de CI para evitar falhas relacionadas a diretórios inválidos.
O deploy é acionado automaticamente após cada push na branch main.
O projeto segue uma estrutura padrão recomendada pelo Next.js.


👨‍💻 Autor:

Desenvolvido por [Eduardo349]

Projeto acadêmico com foco em CI/CD e deploy automatizado.


📄 Licença:

Este projeto é apenas para fins educacionais.