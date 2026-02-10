🎬 MovieHub

MovieHub é uma aplicação web desenvolvida com Next.js que permite visualizar informações de filmes utilizando a API do TMDB (The Movie Database).
O projeto foi criado com foco em boas práticas de desenvolvimento moderno, incluindo CI/CD com GitHub Actions e deploy automático no Vercel.


🛠️ Tecnologias Utilizadas
Next.js 16 (App Router + Turbopack)
React
TypeScript
Tailwind CSS
TMDB API
Vercel
GitHub Actions


🚀 Funcionalidades
✅ Listagem de filmes populares
✅ Página de detalhes do filme
✅ Pesquisa de filmes por nome
✅ Integração com TMDB
✅ Proteção de token sensível (server-side)
✅ Deploy automático com Vercel
✅ CI/CD com GitHub Actions
✅ Interface responsiva com Tailwind CSS

⚙️ Pré-requisitos:

Antes de rodar o projeto, você precisa ter instalado:

Node.js (versão 16 ou superior)
npm ou yam
Uma conta no GitHub
Uma conta no Vercel
Uma API Key do TMDB


🔐 Variáveis de Ambiente

Este projeto utiliza variáveis de ambiente para proteger o token da API do TMDB.

📌 Local (.env.local)

Crie um arquivo .env.local na raiz do projeto:

TMDB_ACCESS_TOKEN=SEU_TOKEN_DO_TMDB

⚠️ Use o API Read Access Token (v4) do TMDB
⚠️ Não utilize NEXT_PUBLIC_ para esse token


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


🌐 Produção (Vercel)
Na Vercel:
Acesse Settings → Environment Variables
Adicione:
Name
Value
TMDB_ACCESS_TOKEN
Seu token
Marque:
Production
Preview
Development
Depois disso, faça um redeploy.


🧠 Observações Técnicas:

O ESLint foi removido do pipeline de CI para evitar falhas relacionadas a diretórios inválidos.
O deploy é acionado automaticamente após cada push na branch main.
O projeto segue uma estrutura padrão recomendada pelo Next.js.


👨‍💻 Autor:

Desenvolvido por [Eduardo349]

Projeto acadêmico com foco em CI/CD e deploy automatizado.


📄 Licença:

Este projeto é apenas para fins educacionais.


Test de CI/CD realizadocom sucesso.
