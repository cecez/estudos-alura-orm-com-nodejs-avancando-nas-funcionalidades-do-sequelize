const database = require('../models');
const { Op } = require('sequelize');

class TurmaController {

  static montaFiltros(consulta) {
    const { data_inicial, data_final } = consulta;
    const where = {};

    // filtro para data de início da turma
    data_inicial || data_final ? where.data_inicio = {} : null;
    data_inicial ? where.data_inicio[Op.gte] = data_inicial : null;
    data_final ? where.data_inicio[Op.lte] = data_final : null;

    return where;
  }

  static async pegaTodasAsTurmas(requisicao, resposta){
    try {
      const filtros = TurmaController.montaFiltros(requisicao.query);
      const todasAsTurmas = await database.Turmas.findAll({ where: filtros });
      return resposta.status(200).json(todasAsTurmas)  
    } catch (error) {
      return resposta.status(500).json(error.message)
    }
  }

  static async pegaUmaTurma(req, res) {
    const { id } = req.params
    try {
      const umaTurma = await database.Turmas.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(umaTurma)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaTurma(req, res) {
    const novaTurma = req.body
    try {
      const novaTurmaCriada = await database.Turmas.create(novaTurma)
      return res.status(200).json(novaTurmaCriada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaTurma(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.Turmas.update(novasInfos, { where: { id: Number(id) }})
      const turmaAtualizada = await database.Turmas.findOne( { where: { id: Number(id) }})
      return res.status(200).json(turmaAtualizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaTurma(req, res) {
    const { id } = req.params
    try {
      await database.Turmas.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async restore(requisicao, resposta)
    {
        const { id } = requisicao.params;
        try {
            await database.Turmas.restore({ where: { id: Number(id) } });
            return resposta.status(200).json({ mensagem: `Turma ${id} restaurada com sucesso.` });
        } catch (erro) {
            resposta.status(500).json(erro.message);
        }
    }

}

module.exports = TurmaController