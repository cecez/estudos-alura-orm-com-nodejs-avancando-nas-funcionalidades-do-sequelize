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

    static async show(req, res)
    {
        const { id } = req.params;
        try {
            const pessoa = await database.Pessoas.findByPk(Number(id));
            res.status(200).json(pessoa);
        } catch (erro) {
            res.status(500).json(erro.message);
        }
    }
}

module.exports = PessoaController