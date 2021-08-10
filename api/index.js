require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const app = express();

routes(app);

app.listen(process.env.NODEJS_LOCAL_PORT, () => { console.log('Servidor funcionando na porta: ' + process.env.NODEJS_LOCAL_PORT )})

module.exports = app