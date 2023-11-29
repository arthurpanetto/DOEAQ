# Aplicação de Formulário de Doação de Sangue

## Visão Geral

Esta aplicação é um formulário web simples para doação de sangue, onde os usuários podem inserir suas informações e verificar sua elegibilidade para a doação de sangue. O formulário inclui campos para o nome do doador, e-mail, idade, peso, data da última doação, gênero e tipo sanguíneo.

## Recursos

- **Validação do Formulário:** A validação do lado do cliente é implementada para garantir que os usuários preencham as informações necessárias corretamente antes da submissão.

- **Verificação de Elegibilidade:** A aplicação verifica a elegibilidade do doador com base em critérios como idade, peso e tempo desde a última doação.

- **Integração com Banco de Dados:** As informações dos doadores elegíveis são inseridas em um banco de dados MySQL utilizando PHPMyAdmin, MySQL e Apache no XAMPP, usando PHP e AJAX.

- **Conexão com Banco de Dados:** A aplicação estabelece uma conexão com um banco de dados MySQL utilizando PHPMyAdmin, MySQL e Apache no XAMPP para armazenar as informações dos doadores de forma segura.

## Estrutura de Arquivos

- **index.html:** O principal arquivo HTML contendo o formulário de doação de sangue.

- **style.css:** A folha de estilo para estilizar os elementos HTML.

- **script.js:** Arquivo JavaScript que lida com a validação do formulário, verificação de elegibilidade e requisição AJAX para inserir dados no banco de dados.

- **db_connection.php:** Arquivo PHP que estabelece uma conexão com o banco de dados MySQL.

- **function.php:** Arquivo PHP contendo funções para interagir com o banco de dados, incluindo a inserção de informações do doador.

- **insert_data.php:** Arquivo PHP que lida com a inserção de dados do doador no banco de dados.

## Instruções de Configuração

1. **Configuração do Banco de Dados:**
   - Crie um banco de dados MySQL chamado `blood_donation` utilizando o PHPMyAdmin.
   - Atualize os detalhes da conexão do banco de dados em `db_connection.php` com suas credenciais de banco de dados.

2. **Criação da Tabela:**
   - Execute a consulta SQL em `create_table.sql` utilizando o PHPMyAdmin para criar a tabela necessária em seu banco de dados.

3. **Configuração do Servidor Web:**
   - Implante a aplicação no XAMPP, que inclui o Apache e o PHP.
   - Certifique-se de que o PHPMyAdmin está configurado corretamente.

4. **Acesse a Aplicação:**
   - Acesse a aplicação através do navegador da web usando a URL apropriada (por exemplo, http://localhost/sua_pasta).
   - Preencha o formulário de doação de sangue e verifique a elegibilidade.

## Dependências

- **XAMPP:** Ambiente de desenvolvimento que inclui Apache, MySQL, PHP e PHPMyAdmin.
- **PHPMyAdmin:** Interface gráfica para gerenciar o banco de dados MySQL.
- **PHP:** Certifique-se de que o PHP está instalado e configurado no XAMPP.

## Solução de Problemas

- Se houver problemas com a conexão do banco de dados ou inserção de dados, verifique as mensagens de erro no console do navegador e nos logs de erro do PHP.

## Contribuições

Contribuições para aprimorar os recursos, melhorar a qualidade do código ou corrigir problemas são bem-vindas. Faça um fork do repositório, faça alterações e envie uma solicitação pull.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE). Sinta-se à vontade para usar e modificar o código conforme necessário.

---