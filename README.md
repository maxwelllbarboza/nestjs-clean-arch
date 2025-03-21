# **User API - Clean Architecture com NestJS**

## **Descrição**
A **User API** é uma API RESTful desenvolvida com **Node.js**, **NestJS** e **TypeScript**, seguindo os princípios da **Clean Architecture**, **Domain-Driven Design (DDD)** e **princípios SOLID**. O projeto inclui testes automatizados (**unitários, de integração e ponta a ponta**) e implementa **Design Patterns** para garantir modularidade e manutenção eficiente.

## **Tecnologias Utilizadas**
- **Node.js 18+**
- **NestJS**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**
- **Docker**
- **Swagger (OpenAPI)**
- **Jest para Testes Automatizados**
- **Github Actions para CI/CD**

## **Recursos da API**
✅ **Autenticação JWT** (Login, Refresh Token, Proteção de Rotas)
✅ **Gerenciamento de Usuários** (Cadastro, Atualização, Exclusão, Listagem)
✅ **Controle de Permissões e RBAC**
✅ **Testes Automatizados (unitários, integração e E2E)**
✅ **Documentação interativa com Swagger**
✅ **Clean Architecture e Domain-Driven Design (DDD)**
✅ **Implementação de Design Patterns**
✅ **Workflow de CI/CD com Github Actions**
✅ **Deploy automatizado a partir do Github**

## **Requisitos**
- **Node.js** versão 18 ou superior
- **Docker Engine**
- **VS Code** ou similar
- **Insomnia** ou similar (para testes da API)
- **CLI do NestJS**

## **Instalação e Configuração**

### **1. Clonar o repositório**
```sh
git clone https://github.com/seu-usuario/user-api.git
cd user-api
```

### **2. Instalar dependências**
```sh
yarn install  # ou npm install
```

### **3. Configurar variáveis de ambiente**
Crie um arquivo **.env** na raiz do projeto com o seguinte conteúdo:
```env
DATABASE_URL=postgresql://user:password@localhost:5432/userdb
JWT_SECRET=seu_segredo_aqui
```

### **4. Subir o banco de dados com Docker**
```sh
docker-compose up -d
```

### **5. Executar as migrações do banco**
```sh
npx prisma migrate dev
```

### **6. Rodar a aplicação**
```sh
yarn start  # ou npm run start
```

A API estará disponível em: `http://localhost:3000`

### **7. Acessar a documentação Swagger**
Acesse `http://localhost:3000/api` para visualizar a documentação interativa.

## **Testes Automatizados**
Rodar testes unitários:
```sh
yarn test
```
Rodar testes de integração:
```sh
yarn test:integration
```
Rodar testes ponta a ponta (E2E):
```sh
yarn test:e2e
```

## **CI/CD com Github Actions**
O projeto inclui um **workflow de CI/CD** utilizando **Github Actions** para:
- Rodar os testes automaticamente a cada commit.
- Implementar linting e boas práticas de código.
- Deploy automatizado em produção.


---

## 📝 **Licença**

Este projeto está sob a licença **MIT**.

---

👨‍💻 **Desenvolvido por [Maxwell R Barboza](https://github.com/maxwelllbarboza)**
