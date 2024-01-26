<h1 align="center">GymPass API</h1>

<h3 align="center">GymPass é uma API de serviço de check-in em academias, sendo o check-in feito pelo usuário e validado por administradores. É possível para o usuário buscar as academias cadastradas pelo nome ou por proximidade, assim como administradores cadastrarem novas academias. O usuário também pode ter acesso às suas métricas de check-ins realizados. Todos os perfis tem suas senhas criptografadas e passam por um processo de autenticação por JWT para poderem acessar seus dados e métricas. Desenvolvido com Node.js, TypeScript e Fastify.</h3>

---

<h2>O que eu aprendi desenvolvendo o projeto</h2>

<br>

- `Docker` para implementação do software em um pacote (contêiner) isolado.
- `Prisma` para a criação de schemas e migrations de tabelas para o banco de dados.
- `Vitest` e `Supertest` para a realização de testes nas rotas da aplicação.
- `Dotenv` para gerenciar variáveis de ambiente.
- `Dayjs` para a manipulação de datas e horários.

<br>

---

<h2>Tecnologias Utilizadas no Projeto</h2>

- Node.js
- Typescript
- Fastify
- Docker
- Prisma
- Jsonwebtoken
- Bcrypt.js
- Zod Resolver
- Eslint
- Vitest
- Supertest
- Dotenv
- Tsx

## Requisitos Funcionais da aplicação

Deve ser possível se cadastrar;
Deve ser possível se autenticar;
Deve ser possível obter o perfil de um usuário logado;
Deve ser possível obter o número de check-ins realizados pelo usuário logado;
Deve ser possível o usuário obter seu histórico de check-ins;
Deve ser possível o usuário buscar academias próximas (até 10km);
Deve ser possível o usuário buscar academias pelo nome;
Deve ser possível o usuário realizar check-in em uma academia;
Deve ser possível validar o check-in de um usuário;
Deve ser possível cadastrar uma academia;

## Regras de Negócio da aplicação

O usuário não deve poder se cadastrar com um email duplicado;
O usuário não pode fazer dois check-ins no mesmo dia;
O usuário não pode fazer check-in se não estiver perto (100m) da academia;
O check-in só pode ser validade até 20 minutos após criad;
O check-in só pode ser validado por administradores;
A academia só pode ser cadastrada por administradores;

## Requisitos Não Funcionais da aplicação

A senha do usuário precisa estar criptografada;
Os dados da aplicação precisam estar persistidas em um banco PostgreSQL;
Todas listas de dados precisam estar paginadas com 20 itens por página;
O usuário deve ser identificado por um JWT (JSON Web Token);

<div id="footer" align="center">
<a href="https://www.linkedin.com/in/pedro-schinke-17b866223/" target="_blank">
<img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank">
</a>
<a href = "mailto:pedro.schinke@outlook.com">
<img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank">
</a>
</div>
