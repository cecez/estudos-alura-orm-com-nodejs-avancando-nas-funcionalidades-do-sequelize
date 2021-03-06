const { MatriculaService } = require('../services');
const matriculaService = new MatriculaService();

class MatriculaController
{
    static async create(req, res)
    {
        const { estudanteId } = req.params;
        const dadosNovaMatricula = { ...req.body, estudante_id: Number(estudanteId) };
        try {
            const novaMatricula = await matriculaService.create(dadosNovaMatricula);
            res.status(200).json(novaMatricula);
        } catch (erro) {
            res.status(500).json(erro.message);
        }
    }

    static async delete(req, res)
    {
        const { estudanteId, matriculaId } = req.params;
        try {
            await matriculaService.exclui(estudanteId, matriculaId);
            res.status(200).json({"mensagem": `Registro ${matriculaId} excluído com sucesso.`});
        } catch (erro) {
            res.status(500).json(erro.message);
        }
    }

    static async index(requisicao, resposta)
    {
        const { estudanteId } = requisicao.params;
        try {
            const matriculas = await matriculaService.pegaMatriculasConfirmadasDoEstudante(estudanteId);
            resposta.status(200).json(matriculas);
        } catch (erro) {
            resposta.status(500).json(erro.message);
        }
    }

    static async restore(requisicao, resposta)
    {
        const { id } = requisicao.params;
        try {
            await matriculaService.restore(id);
            return resposta.status(200).json({ mensagem: `Matrícula ${id} restaurada com sucesso.` });
        } catch (erro) {
            resposta.status(500).json(erro.message);
        }
    }

    static async show(req, res)
    {
        const { estudanteId, matriculaId } = req.params;
        try {
            const matricula = await matriculaService.pegaUmRegistro(estudanteId, matriculaId); 
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
            await matriculaService.atualizaRegistros(estudanteId, matriculaId, dadosParaAtualizar);
            const matriculaAtualizada = await matriculaService.pegaUmRegistroPorId(matriculaId);
            res.status(200).json(matriculaAtualizada);
        } catch (erro) {
            res.status(500).json(erro.message);
        }
    }
}

module.exports = MatriculaController