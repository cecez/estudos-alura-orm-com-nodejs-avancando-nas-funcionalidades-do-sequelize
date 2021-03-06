const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')
 
const router = Router()
router
    .delete('/turmas/:id', TurmaController.apagaTurma)
    .get('/turmas', TurmaController.pegaTodasAsTurmas)
    .get('/turmas/lotadas', TurmaController.indexTurmasLotadas)
    .get('/turmas/:id', TurmaController.pegaUmaTurma)
    .get('/turmas/:turmaId/matriculas/confirmadas', TurmaController.indexMatriculas)
    .post('/turmas', TurmaController.criaTurma)
    .post('/turmas/:id/restaura', TurmaController.restore)
    .put('/turmas/:id', TurmaController.atualizaTurma);
 
module.exports = router