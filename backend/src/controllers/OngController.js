const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {
  async index(request, response) {
    const ongs = await connection('ongs').select('*')

    return response.json(ongs)
  },

  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body

    // pra criar o id da ong
    // gera 4 bytes de caracteres hexadecimais que incluem letras e numeros
    const id = crypto.randomBytes(4).toString('HEX')

    // pra cadastrar a ong quero inserir dados na tabela 'ongs'
    // await pra quando o node chegar nessa parte do codigo ele vai aguardar esse codigo finalizar pra entao dar o return
    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    })

    return response.json({ id })
  },
}
