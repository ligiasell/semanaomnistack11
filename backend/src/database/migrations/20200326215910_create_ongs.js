// metodo responsavel pela criacao da tabela
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table) {
    table.string('id').primary() // dou o id pra cada ong, nao deixo ela escolher
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('whatsapp').notNullable()
    table.string('city').notNullable()
    table.string('uf', 2).notNullable()
  })
}

// metodo responsavel por deletar a tabela
exports.down = function(knex) {
  return knex.schema.dropTable('ongs')
}
