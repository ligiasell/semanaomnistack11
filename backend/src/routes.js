const express = require('express')
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
// No Insomnia: Ongs - POST Create
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

// No Insomnia: Profile - GET List
routes.get('/profile', ProfileController.index)

// No Insomnia: Casos - GET List
// No Insomnia: Casos - POST Create
// No Insomnia: Casos - POST Delete
routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes
