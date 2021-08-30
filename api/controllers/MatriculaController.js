const database = require('../models');

class PessoaController
{
    static async create(req, res)
    {
        const { estudanteId } = req.params;
        const dadosNovaMatricula = { ...req.body, estudante_id: Number(estudanteId) };
        try {
            const novaMatricula = await database.Matriculas.create(dadosNovaMatricula);
            res.status(200).json(novaMatricula);
        } catch (erro) {
            res.status(500).json(erro.message);
        }
    }

    static async delete(req, res)
    {
        const { estudanteId, matriculaId } = req.params;
        try {
            await database.Matriculas.destroy({ where: {
                id: Number(matriculaId),
                estudante_id: Number(estudanteId)
            }});
            res.status(200).json({"mensagem": `Registro ${matriculaId} excluído com sucesso.`});
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

    static async restore(requisicao, resposta)
    {
        const { id } = requisicao.params;
        try {
            await database.Matriculas.restore({ where: { id: Number(id) } });
            return resposta.status(200).json({ mensagem: `Matrícula ${id} restaurada com sucesso.` });
        } catch (erro) {
            resposta.status(500).json(erro.message);
        }
    }

    static async show(req, res)
    {
        const { estudanteId, matriculaId } = req.params;
        try {
            const matricula = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });
            res.status(200).json(matricula);
        } catch (erro) {
            res.status(500).json(erro.message);
        }
    }

    static async update(req, res) 
    {
        const { estudanteId, matriculaId } = req.params;
        const dadosParaAtualizar = req.body;

        try {
            await database.Matriculas.update(dadosParaAtualizar, {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });
            
            const matriculaAtualizada = await database.Matriculas.findByPk(matriculaId);
            res.status(200).json(matriculaAtualizada);
        } catch (erro) {
            res.status(500).json(erro.message);
        }
    }
}

module.exports = PessoaController