'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Matriculas', 'deletedAt', {
          type: Sequelize.DataTypes.DATE
        }, { transaction: t }),
        queryInterface.addColumn('Pessoas', 'deletedAt', {
          type: Sequelize.DataTypes.DATE
        }, { transaction: t }),
        queryInterface.addColumn('Turmas', 'deletedAt', {
          type: Sequelize.DataTypes.DATE
        }, { transaction: t }),
        queryInterface.addColumn('Niveis', 'deletedAt', {
          type: Sequelize.DataTypes.DATE,
        }, { transaction: t })
      ]);
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Matriculas', 'deletedAt', { transaction: t }),
        queryInterface.removeColumn('Pessoas', 'deletedAt', { transaction: t }),
        queryInterface.removeColumn('Turmas', 'deletedAt', { transaction: t }),
        queryInterface.removeColumn('Niveis', 'deletedAt', { transaction: t })
      ]);
    });
  }
};
