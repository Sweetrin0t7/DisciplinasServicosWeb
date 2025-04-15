# DisciplinasServicosWeb
Desenvolver uma API para gerenciar a lista de disciplinas de um curso. A aplicação deverá permitir a criação, leitura, atualização e exclusão de disciplinas. A API deve permitir:

Listar todas as disciplinas
GET /disciplinas
Retorna uma lista com todas as disciplinas cadastradas.
Deve permitir filtrar a disciplina pelo nome através de querystring
Consultar uma disciplina específica
GET /disciplinas/id
Retorna os dados de uma disciplina a partir de seu identificador.
Cadastrar uma nova disciplina
POST /disciplinas
Recebe os dados de uma disciplina e a adiciona à lista.
Atualizar uma disciplina existente
PUT /disciplinas/id
Atualiza os dados de uma disciplina específica.
Remover uma disciplina
DELETE /disciplinas/id
Remove a disciplina do sistema.
Cada disciplina possui as seguintes informações:

id (uuid gerado automaticamente)
nome (texto)
carga horária (inteiro)
obrigatória (bool)
Detalhes de implementação:

A API deve ser implementada javascript (Node.js) e utilizar o Express.js;
As respostas devem estar no formato JSON, assim como o corpo das requisições;
Os dados devem ser armazenados em memória. Implemente um repositório com os métodos adequados.
