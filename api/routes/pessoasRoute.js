const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');
const MatriculaController = require('../controllers/MatriculaController');

const router = Router();

router
    .delete('/pessoas/:id', PessoaController.delete)
    .get('/pessoas', PessoaController.indexActives)
    .get('/pessoas/todas', PessoaController.index)
    .get('/pessoas/:id', PessoaController.show)
    .post('/pessoas', PessoaController.create)
    .post('/pessoas/:id/restaura', PessoaController.restore)
    .put('/pessoas/:id', PessoaController.update);

// rotas para ações com matrículas do estudante
router
    .delete('/pessoas/:estudanteId/matriculas/:matriculaId', MatriculaController.delete)
    .get('/pessoas/:estudanteId/matriculas/:matriculaId', MatriculaController.show)
    .post('/pessoas/:estudanteId/matriculas', MatriculaController.create)
    .post('/pessoas/:id/matriculas/restaura', MatriculaController.restore)
    .put('/pessoas/:estudanteId/matriculas/:matriculaId', MatriculaController.update);

module.exports = router;