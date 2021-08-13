const database = require('../models');

class PessoaController
{
    static async create(req, res)
    {
        const dadosNovaPessoa = req.body;
        try {
            const novaPessoa = await database.Pessoas.create(dadosNovaPessoa);
            res.status(200).json(novaPessoa);
        } catch (erro) {
            res.status(500).json(erro.message);
        }
    }

    static async delete(req, res)
    {
        const { id } = req.params;
        try {
            const pessoa = await database.Pessoas.findByPk(id);
            await pessoa.destroy();
            res.status(200).json({"mensagem": `Registro ${id} excluído com sucesso.`});
        } catch (erro) {
            res.status(500).json(erro.message);
        }
    }

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

    static async update(req, res) 
    {
        const { id } = req.params;
        const dadosParaAtualizar = req.body;

        try {
            const pessoa = await database.Pessoas.findByPk(id);
            pessoa.set(dadosParaAtualizar);
            const pessoaAtualizada = await pessoa.save();

            res.status(200).json(pessoaAtualizada);

        } catch (erro) {
            res.status(500).json(erro.message);
        }
    }
}

module.exports = PessoaController