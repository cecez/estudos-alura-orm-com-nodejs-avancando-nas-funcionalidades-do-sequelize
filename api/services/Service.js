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

    async pegaTodosOsRegistros() {
        return database[this.nomeDoModelo].findAll();
    }

}

module.exports = Service