const express = require('express')
const cors = require('cors')
const routes = require('./routes')

// constante que armazena a minha aplicacao
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

// fique escutando essa porta
app.listen(3333)
