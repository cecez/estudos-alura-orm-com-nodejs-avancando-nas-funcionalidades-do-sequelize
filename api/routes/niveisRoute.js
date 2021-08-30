const { Router } = require('express')
const NivelController = require('../controllers/NivelController')
 
const router = Router()
router
    .delete('/niveis/:id', NivelController.apagaNivel)
    .get('/niveis', NivelController.pegaTodosOsNiveis)
    .get('/niveis/:id', NivelController.pegaUmNivel)
    .post('/niveis', NivelController.criaNivel)
    .post('/niveis/:id/restaura', NivelController.restore)
    .put('/niveis/:id', NivelController.atualizaNivel);

module.exports = router