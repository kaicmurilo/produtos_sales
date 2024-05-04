Aqui está um exemplo de `README.md` para a sua aplicação de vendas de produtos, escrito em português. Adapte conforme necessário para atender às necessidades do seu projeto:

```markdown
# API de Vendas de Produtos

A API de Vendas de Produtos é uma aplicação para gerenciar e vender produtos, desenvolvida com NestJS e TypeORM. Ela suporta vários tipos de produtos e inclui autenticação usando JWT.

## Funcionalidades

- **Gerenciamento de Produtos:** Gerencie diferentes tipos de produtos, incluindo simples, digitais, configuráveis e agrupados.
- **Gerenciamento de Vendas:** Crie e gerencie registros de vendas para os produtos.
- **Autenticação JWT:** Proteja os endpoints com JSON Web Tokens.
- **Testes Automatizados:** Testes de unidade e integração usando Jest.

## Início Rápido

### Pré-requisitos

- Node.js (versão >= 14)
- PostgreSQL (versão >= 12)

### Instalação

1. **Clone o repositório:**

   ```bash
   git clone <url-do-repositorio>
   cd product-sales-api
```

2. **Instale as dependências:**

   ```bash
   npm install
   ```
3. **Configure as variáveis de ambiente:**

   Crie um arquivo `.env` no diretório raiz com as seguintes variáveis:

   ```text
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=usuario
   DB_PASSWORD=senha
   DB_NAME=product_sales
   JWT_SECRET=seu_segredo_jwt
   ```
4. **Inicie a aplicação:**

   ```bash
   npm run start
   ```

### Comandos Úteis

- **`npm run start`**: Inicia a aplicação em modo de produção.
- **`npm run start:dev`**: Inicia a aplicação em modo de desenvolvimento com recarregamento automático.
- **`npm test`**: Executa os testes automatizados.

### Estrutura do Projeto

A estrutura do projeto segue a arquitetura padrão do NestJS:

- **`src/`**: Contém o código-fonte principal, incluindo módulos, controladores, serviços e entidades.
- **`test/`**: Contém os testes de ponta a ponta.

### Licença

Este projeto é licenciado sob a Licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

```

Esse README fornece uma introdução clara e concisa à sua aplicação, bem como instruções para configuração e execução.<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>
```
