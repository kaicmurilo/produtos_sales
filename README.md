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

Aqui está uma descrição sucinta sobre a funcionalidade de controle de taxa de requisições (rate limiting) que você pode incluir no arquivo `README.md`:

---

## Rate Limiting

A Product Sales API implementa controle de taxa de requisições (rate limiting) usando o `ThrottlerModule` do NestJS. Esta funcionalidade é crucial para proteger a API contra ataques de negação de serviço (DoS) e para assegurar uma distribuição justa dos recursos do servidor entre todos os usuários.

### Configuração do Rate Limiting

- **Time to Live (ttl)**: O intervalo de tempo, em milissegundos, pelo qual o limite de requisições é calculado. Atualmente, está configurado para 60000 milissegundos (1 minuto), durante o qual um usuário pode fazer até 10 requisições.
- **Limit**: O número máximo de requisições que um usuário pode fazer dentro do período definido pelo `ttl`. Este valor está configurado para 10 requisições por minuto.

Essa configuração ajuda a prevenir o abuso da API, mantendo a performance e a disponibilidade do serviço para todos os usuários.


## Documentação das Collections de Teste


### Introdução

Este README fornece informações sobre as coleções de teste disponíveis para este projeto. As coleções estão localizadas na pasta `/docs/postman`.


### Estrutura de Pasta


-`/docs/postman`
  -`Produtos.postman_collection.json`: Requisições para produtos.
  -`Usuarios.postman_collection.json`: Requisições de usuários, registro e login.
  -`Vendas.postman_collection.json`: Requisições de vendas. 


### Como Utilizar


1. Baixe a coleção desejada para o seu ambiente de desenvolvimento.
2. Importe a coleção para o Postman.
3. Acesse as variáveis de ambiente, se necessário, e configure conforme o ambiente desejado (por exemplo: desenvolvimento, teste, produção).
4. Execute as solicitações para testar a API.


#### Observações



Certifique-se de que o ambiente de destino está configurado corretamente antes de executar os testes. Sempre verifique se há atualizações nas coleções, especialmente se houver mudanças significativas na API.
