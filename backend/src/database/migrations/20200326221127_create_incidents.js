// metodo responsavel pela criacao da tabela
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function(table) {
    table.increments()

    table.string('title').notNullable()
    table.string('description').notNullable()
    table.decimal('value').notNullable()

    // chave primaria
    table.string('ong_id').notNullable()

    // chave estrangeira
    table
      .foreign('ong_id')
      .references('id')
      .inTable('ongs')
  })
}

// metodo responsavel por deletar a tabela
exports.down = function(knex) {
  return knex.schema.dropTable('incidents')
}
