const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.get('/teste', (requisicao, resposta) => {
    resposta.status(200).send({ mensagem: 'retorno da API' })
})

app.listen(3000, () => { console.log('Servidor funcionando...' )})

module.exports = app