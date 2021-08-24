const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');
const MatriculaController = require('../controllers/MatriculaController');

const router = Router();

router.get('/pessoas', PessoaController.index);
router.get('/pessoas/:id', PessoaController.show);
router.post('/pessoas', PessoaController.create);
router.put('/pessoas/:id', PessoaController.update);
router.delete('/pessoas/:id', PessoaController.delete);

router.get('/pessoas/:estudanteId/matriculas/:matriculaId', MatriculaController.show);



module.exports = router;