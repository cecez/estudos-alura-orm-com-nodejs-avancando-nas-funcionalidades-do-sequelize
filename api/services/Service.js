const database = require('../models');

class Service {

    constructor(nomeDoModelo) {
        this.nomeDoModelo = nomeDoModelo;
    }

    async atualizaRegistro(dadosAtualizados, id, transacao = {}) {
        return database[this.nomeDoModelo].update(dadosAtualizados, { where: { id: id } }, transacao);
    }

    async atualizaRegistros(dadosAtualizados, where, transacao = {}) {
        return database[this.nomeDoModelo].update(dadosAtualizados, { where: { ...where } }, transacao);
    }

    async create(dados) {
        return database[this.nomeDoModelo].create(dados);
    }

    async destroy(where) {
        return database[this.nomeDoModelo].destroy(where);
    }

    async pegaTodosOsRegistros() {
        return database[this.nomeDoModelo].findAll();
    }

    async restore(id) {
        await database[this.nomeDoModelo].restore({ where: { id: Number(id) } });
    }

}

module.exports = Service