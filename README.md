Projeto DevClub YT — Cadastro de Usuários

Aplicação full-stack simples para cadastro, listagem e exclusão de usuários, construída com:

Frontend: React, Axios, CSS

Backend: Node.js, Express, Prisma

Banco de Dados: MongoDB

📂 Estrutura do Projeto
Projeto DevClub YT/
├── BackEnd - DevClubYT2/
│   ├── prisma/
│   │   └── schema.prisma
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── FrontEnd - DevClubYT/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── services/api.js
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
└── README.md

⚙️ Backend
Dependências principais

express

cors

@prisma/client

prisma

Arquivos principais

prisma/schema.prisma → define o modelo User com id, email, name e age.

server.js → configura o servidor Express com as rotas:

GET /usuarios → lista usuários

POST /usuarios → cria usuário

PUT /usuarios/:id → atualiza usuário

DELETE /usuarios/:id → remove usuário

Como rodar o backend
cd "BackEnd - DevClubYT2"
npm install
npx prisma generate
npm run dev


Servidor roda em http://localhost:3000

🎨 Frontend
Dependências principais

react

axios

Arquivos principais

App.jsx → renderiza formulário de cadastro, lista usuários e permite excluir.

api.js → cria instância Axios com baseURL http://localhost:3000.

index.css → estilos para formulário e cards.

Como rodar o frontend
cd "FrontEnd - DevClubYT"
npm install
npm run dev


Frontend roda em http://localhost:5173

🔌 Rotas da API
Método	Rota	Body (JSON)	Resposta
GET	/usuarios	—	Lista de usuários
POST	/usuarios	{ "email": string, "name": string, "age": number }	Usuário criado
PUT	/usuarios/:id	{ "email": string, "name": string, "age": number }	Usuário atualizado
DELETE	/usuarios/:id	—	Usuário deletado
🏃 Fluxo de uso

Subir o backend em http://localhost:3000.

Rodar o frontend em http://localhost:5173.

Preencher formulário para cadastrar usuário.

Usuários aparecem listados em cards.

Clicar na lixeira para excluir.

📌 Observações

O projeto utiliza MongoDB via Prisma.

É necessário configurar a variável de ambiente DATABASE_URL no backend (.env).

O frontend está configurado para consumir a API no http://localhost:3000.