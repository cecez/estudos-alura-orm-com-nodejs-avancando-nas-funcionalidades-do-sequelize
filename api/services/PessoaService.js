const database = require('../models');
const MatriculaService = require('./MatriculaService');
const Service = require('./Service');

class PessoaService extends Service {

    constructor() {
        super('Pessoas');

        this.matriculaService = new MatriculaService();
    }

    async cancelaEstudanteEMatriculas(estudanteId) {

        return database.sequelize.transaction(async transacao => {
            await super.atualizaRegistro({ ativo: false }, estudanteId, { transaction: transacao });
            await this.matriculaService.atualizaRegistros({ status: 'cancelado' }, { estudante_id: estudanteId }, { transaction: transacao });
        });

    }

    async pegaRegistrosAtivos(where = {}) {
        return database[this.nomeDoModelo].findAll({ where: { ...where } });
    }

    async pegaTodosOsRegistros(where = {}) {
        return database[this.nomeDoModelo].scope('todas').findAll({ where: { ...where } });
    }

}

module.exports = PessoaService;