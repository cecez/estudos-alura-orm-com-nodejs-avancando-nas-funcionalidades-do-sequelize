const Service = require('./Service');

class MatriculaService extends Service {

    constructor() {
        super('Matriculas');

        this.pessoaTipoService = new Service('Pessoas');
    }

    async atualizaRegistros(estudanteId, matriculaId, dadosAtualizados) {
        await super.atualizaRegistros(dadosAtualizados, {
                id: Number(matriculaId),
                estudante_id: Number(estudanteId)            
        });
    }

    async exclui(estudanteId, matriculaId) {

        const where = { where: {
            id: Number(matriculaId),
            estudante_id: Number(estudanteId)
        }};

        await this.destroy(where);
    }

    async pegaMatriculasConfirmadasDoEstudante(id) {
        const estudante = await this.pessoaTipoService.pegaUmRegistroPorId(id);

        if (estudante === null) {
            throw Error("Nenhum estudante ativo encontrado.");
        }

        return await estudante.getMatriculasConfirmadas();
    }

    async pegaUmRegistro(estudanteId, matriculaId) {

        return await this.pegaUmRegistroPorWhere({
            where: {
                id: Number(matriculaId),
                estudante_id: Number(estudanteId)
            }
        });

    }

}

module.exports = MatriculaService;