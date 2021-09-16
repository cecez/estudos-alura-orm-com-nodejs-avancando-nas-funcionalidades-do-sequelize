const Service = require('./Service');

class MatriculaService extends Service {

    constructor() {
        super('Matriculas');
    }

    async exclui(estudanteId, matriculaId) {

        const where = { where: {
            id: Number(matriculaId),
            estudante_id: Number(estudanteId)
        }};

        await this.destroy(where);
    }

}

module.exports = MatriculaService;