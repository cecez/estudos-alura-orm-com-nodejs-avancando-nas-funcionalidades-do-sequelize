const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.index);
router.get('/pessoas/:id', PessoaController.show);
router.post('/pessoas', PessoaController.create);
router.put('/pessoas/:id', PessoaController.update);


module.exports = router;