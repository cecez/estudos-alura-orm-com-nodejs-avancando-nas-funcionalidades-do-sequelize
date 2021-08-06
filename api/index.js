const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.get('/teste', (requisicao, resposta) => {
    resposta.status(200).send({ mensagem: 'retorno da API' })
})

app.listen(process.env.NODEJS_LOCAL_PORT, () => { console.log('Servidor funcionando...' )})

module.exports = app