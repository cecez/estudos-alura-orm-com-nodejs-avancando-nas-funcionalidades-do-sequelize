const bodyParser = require('body-parser');
const PessoaController = require('../controllers/PessoaController');


module.exports = app => {
    app.use(bodyParser.json());
    app.get('/', (req, res) => res.send('Helll'));

    app.get('/pessoas', (req, res) => PessoaController.index(req, res));
}