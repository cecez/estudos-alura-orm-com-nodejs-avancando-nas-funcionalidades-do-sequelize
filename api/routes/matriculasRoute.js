const { Router } = require('express');
const MatriculaController = require('../controllers/MatriculaController');

const router = Router();

router
    .delete('/pessoas/:estudanteId/matriculas/:matriculaId', MatriculaController.delete)
    .get('/estudante/:estudanteId/matriculas', MatriculaController.index)
    .get('/pessoas/:estudanteId/matriculas/:matriculaId', MatriculaController.show)
    .post('/pessoas/:estudanteId/matriculas', MatriculaController.create)
    .post('/pessoas/:id/matriculas/restaura', MatriculaController.restore)
    .put('/pessoas/:estudanteId/matriculas/:matriculaId', MatriculaController.update);

module.exports = router;