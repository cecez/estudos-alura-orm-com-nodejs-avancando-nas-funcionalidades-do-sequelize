const bodyParser = require('body-parser')
 
const matriculas = require('./matriculasRoute')
const niveis = require('./niveisRoute')
const pessoas = require('./pessoasRoute')
const turmas = require('./turmasRoute')

module.exports = app => {
 app.use(
   bodyParser.json(),
   matriculas,
   niveis,
   pessoas,
   turmas
   )
 }