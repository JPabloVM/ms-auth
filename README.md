# 🛡️ ms-auth

Microserviço de autenticação com Node.js, TypeScript e MongoDB.

📚 Documentação disponível em dois idiomas:
- 🇧🇷 [Português](#-documentação-em-português)
- 🇺🇸 [English](#-documentation-in-english)

---

## 🇧🇷 Documentação em Português

### 🧾 Descrição

Microserviço de autenticação de usuários desenvolvido em Node.js com TypeScript. Este serviço lida com operações de CRUD de usuários e pode ser integrado a outros sistemas por meio de APIs RESTful.

---

### 🚀 Tecnologias Utilizadas

- **Node.js** com **TypeScript**
- **Express.js** (framework web)
- **MongoDB** + **Mongoose** (ODM)
- **Joi** para validação de dados
- **Docker** + **Docker Compose**
- **dotenv** para variáveis de ambiente
- **ESLint** + **Prettier**
- **TypeDoc** para documentação de tipos

---

### 📁 Estrutura de Pastas

```
src/
├── config/         # Configurações de ambiente e banco
├── controllers/    # Lógica dos endpoints
├── errors/         # Manipulação e tratamento de erros
├── libs/           # Utilitários e conexões
├── middlewares/    # Middlewares personalizados
├── models/         # Modelos do Mongoose
├── routes/         # Arquivos de rotas
├── schemas/        # Schemas Joi
├── services/       # Regras de negócio
├── types/          # Tipagens globais
└── app.ts          # Inicialização da aplicação
```

---

### ⚙️ Variáveis de Ambiente

Crie um arquivo `.env` baseado em `.dev.env`:

```env
PORT=3000
DATABASE_CONNECTION_URI=mongodb://localhost:27017
DATABASE_NAME=ms-auth
```

---

### 📦 Instalação

```bash
git clone https://github.com/JPabloVM/ms-auth.git
cd ms-auth
yarn install
yarn dev
```

---

### 🐳 Execução com Docker

```bash
docker compose -f docker-compose-dev.yml up --build
```

---

### 🔐 Rotas da API

| Método | Rota         | Descrição                        |
|--------|--------------|----------------------------------|
| POST   | /users       | Criação de um novo usuário       |
| GET    | /users       | Listagem de usuários             |
| GET    | /users/:id   | Obter usuário por ID             |
| PUT    | /users/:id   | Atualizar um usuário             |
| DELETE | /users/:id   | Exclusão lógica de um usuário    |

---

### ✅ Validações com Joi

- `name`: obrigatório
- `email`: obrigatório e válido
- `password`: obrigatório (mínimo 6 caracteres)
- `status`: opcional
- `deletedAt`: opcional

---

### 🧪 Scripts

```bash
yarn dev        # Ambiente de desenvolvimento
yarn build      # Compilação
yarn start      # Execução em produção
yarn lint       # Verificação de lint
yarn lint:fix   # Correção automática de lint
yarn typedoc    # Geração da documentação
```

---

### 📝 Licença

MIT License.  
Desenvolvido por **João Pablo Vilanir de Melo**

---

## 🇺🇸 Documentation in English

### 🧾 Description

User authentication microservice built with Node.js and TypeScript. It supports full user CRUD and can be integrated into other systems using RESTful APIs.

---

### 🚀 Technologies

- **Node.js** with **TypeScript**
- **Express.js** (web framework)
- **MongoDB** + **Mongoose** (ODM)
- **Joi** for input validation
- **Docker** + **Docker Compose**
- **dotenv** for environment variables
- **ESLint** + **Prettier**
- **TypeDoc** for typed documentation

---

### 📁 Folder Structure

```
src/
├── config/         # Environment and DB settings
├── controllers/    # Endpoint logic
├── errors/         # Error handling
├── libs/           # Utilities and connectors
├── middlewares/    # Custom middlewares
├── models/         # Mongoose models
├── routes/         # Route declarations
├── schemas/        # Joi schemas
├── services/       # Business logic
├── types/          # Global typings
└── app.ts          # Application bootstrap
```

---

### ⚙️ Environment Variables

Create a `.env` file from `.dev.env`:

```env
PORT=3000
DATABASE_CONNECTION_URI=mongodb://localhost:27017
DATABASE_NAME=ms-auth
```

---

### 📦 Installation

```bash
git clone https://github.com/your-user/ms-auth.git
cd ms-auth
yarn install
yarn dev
```

---

### 🐳 Running with Docker

```bash
docker compose -f docker-compose-dev.yml up --build
```

---

### 🔐 API Routes

| Method | Route       | Description                 |
|--------|-------------|-----------------------------|
| POST   | /users      | Create a new user           |
| GET    | /users      | List all users              |
| GET    | /users/:id  | Retrieve user by ID         |
| PUT    | /users/:id  | Update a user               |
| DELETE | /users/:id  | Soft delete a user          |

---

### ✅ Joi Validations

- `name`: required
- `email`: required and valid
- `password`: required (min 6 characters)
- `status`: optional
- `deletedAt`: optional

---

### 🧪 Scripts

```bash
yarn dev        # Development mode
yarn build      # Compile TypeScript
yarn start      # Production mode
yarn lint       # Run linter
yarn lint:fix   # Auto-fix lint issues
yarn typedoc    # Generate documentation
```

---

### 📝 License

MIT License.  
Developed by **João Pablo Vilanir de Melo**
