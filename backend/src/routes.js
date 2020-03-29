const express = require('express')
// celebrate para validacoes
const { celebrate, Segments, Joi } = require('celebrate')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

// rota raiz eh a /
// recurso eh como chamo chamo a rota depois da /
// recurso geralmente estah associado a uma tabela no banco

// METODOS HTTP
// GET: Buscar/listar uma informacao no back-end
// POST: Criar uma informacao no back-end
// PUT: Alterar uma informacao no BE
// DELETE: Deletar uma informacao no BE

// TIPOS DE PARAMETROS
// QUERY PARAMS: Parametros nomeados enviados na rota (url) apos o "?" usado para filtros, paginacao, etc
// Acessa atraves do request.query
// ROUTE PARAMS: Parametros utilizados pra identificar recurson, por exemplo um unico usuario
// Acessa atraves do request.params
// REQUEST BODY: Corpo da requisicao, utilizado pra criar ou alterar recursos
// Acessa atraves do request.body
// Temos que transformar o json em objeto colocando no topo "app.use(express.json())"

// BANCOS DE DADOS
// SQL X NoSQL

// FORMAS DE BUSCA
// DRIVE: Usando linguagem SQL. Ex.: SELECT * FROM users
// QUERY BUILDER. Usando lingagem javascript. Ex.: table('users').select('*').where()

// No Insomnia: Session POST Login
routes.post('/sessions', SessionController.create)

// No Insomnia: Ongs - GET List
routes.get('/ongs', OngController.index)

// No Insomnia: Ongs - POST Create
routes.post(
  '/ongs',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      whatsapp: Joi.number()
        .required()
        .min(10)
        .max(11),
      city: Joi.string().required(),
      uf: Joi.string()
        .required()
        .length(2),
    }),
  }),
  OngController.create
)

// No Insomnia: Profile - GET List
routes.get(
  '/profile',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  ProfileController.index
)

// No Insomnia: Casos - GET List
routes.get(
  '/incidents',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
  }),
  IncidentController.index
)

// No Insomnia: Casos - POST Create
routes.post('/incidents', IncidentController.create)

// No Insomnia: Casos - POST Delete
routes.delete(
  '/incidents/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  IncidentController.delete
)

module.exports = routes
