const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.index);
router.get('/pessoas/:id', PessoaController.show);

module.exports = router;