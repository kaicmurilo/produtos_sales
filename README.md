# API de Vendas de Produtos

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

### Documentação Interativa

A API disponibiliza uma interface Swagger para documentação interativa. Após iniciar a aplicação, você pode acessar a documentação em `http://localhost:3000/api-docs`.

### Comandos Úteis

- **`npm run start`**: Inicia a aplicação em modo de produção.
- **`npm run start:dev`**: Inicia a aplicação em modo de desenvolvimento com recarregamento automático.

### Estrutura do Projeto

A estrutura do projeto segue a arquitetura padrão do NestJS:

- **`src/`**: Contém o código-fonte principal, incluindo módulos, controladores, serviços e entidades.
