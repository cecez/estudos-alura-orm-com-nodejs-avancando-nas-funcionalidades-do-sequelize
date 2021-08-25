const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');
const MatriculaController = require('../controllers/MatriculaController');

const router = Router();

router.get('/pessoas', PessoaController.index);
router.get('/pessoas/:id', PessoaController.show);
router.post('/pessoas', PessoaController.create);
router.put('/pessoas/:id', PessoaController.update);
router.delete('/pessoas/:id', PessoaController.delete);

// rotas para ações com matrículas do estudante
router.get('/pessoas/:estudanteId/matriculas/:matriculaId', MatriculaController.show);
router.post('/pessoas/:estudanteId/matriculas', MatriculaController.create);
router.put('/pessoas/:estudanteId/matriculas/:matriculaId', MatriculaController.update);
router.delete('/pessoas/:estudanteId/matriculas/:matriculaId', MatriculaController.delete);


module.exports = router;