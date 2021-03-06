// const database = require('../models');
const { PessoaService } = require('../services');
const pessoaService = new PessoaService();

class PessoaController
{

    static async cancela(requisicao, resposta) 
    {
        const { estudanteId } = requisicao.params;

        try {
            await pessoaService.cancelaEstudanteEMatriculas(estudanteId);
            resposta.status(200).json({ mensagem: "Estudante e matrículas canceladas com sucesso."});
        } catch (erro) {
            resposta.status(500).json(erro.message);
        }
    }

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
            const todasPessoas = await pessoaService.pegaTodosOsRegistros();
            res.status(200).json(todasPessoas);
        } catch (erro) {
            res.status(500).json(erro.message);
        }
    }

    static async indexActives(req, res)
    {
        try {
            const todasPessoasAtivas = await pessoaService.pegaRegistrosAtivos();
            res.status(200).json(todasPessoasAtivas);
        } catch (erro) {
            res.status(500).json(erro.message);
        }
    }

    static async restore(requisicao, resposta)
    {
        const { id } = requisicao.params;
        try {
            await database.Pessoas.restore({ where: { id: Number(id) } });
            return resposta.status(200).json({ mensagem: `Pessoa ${id} restaurada com sucesso.` });
        } catch (erro) {
            resposta.status(500).json(erro.message);
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