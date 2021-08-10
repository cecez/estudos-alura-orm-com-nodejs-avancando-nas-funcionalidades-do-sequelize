const database = require('../models');

class PessoaController
{
    static async index(req, res)
    {
        try {
            const todasPessoas = await database.Pessoas.findAll();
            res.status(200).json(todasPessoas);
        } catch (erro) {
            res.status(500).json(erro.message);
        }
    }
}

module.exports = PessoaController