// const database = require('../models')
const Service = require('../services/Service');
const nivelService = new Service('Niveis');

class NivelController {
  static async pegaTodosOsNiveis(req, res){
    try {
      const todosOsNiveis = await nivelService.pegaTodosOsRegistros()
      return res.status(200).json(todosOsNiveis)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmNivel(req, res) {
    const { id } = req.params
    try {
      const umNivel = await database.Niveis.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(umNivel)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaNivel(req, res) {
    const novoNivel = req.body
    try {
      const novoNivelCriado = await database.Niveis.create(novoNivel)
      return res.status(200).json(novoNivelCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaNivel(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.Niveis.update(novasInfos, { where: { id: Number(id) }})
      const nivelAtualizado = await database.Niveis.findOne( { where: { id: Number(id) }})
      return res.status(200).json(nivelAtualizado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaNivel(req, res) {
    const { id } = req.params
    try {
      await database.Niveis.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async restore(requisicao, resposta)
    {
        const { id } = requisicao.params;
        try {
            await database.Niveis.restore({ where: { id: Number(id) } });
            return resposta.status(200).json({ mensagem: `Nível ${id} restaurado com sucesso.` });
        } catch (erro) {
            resposta.status(500).json(erro.message);
        }
    }

}

module.exports = NivelController