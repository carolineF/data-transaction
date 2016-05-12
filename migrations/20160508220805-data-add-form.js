'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn('Data','form', {
      type:Sequelize.INTEGER
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Data','form');
  }
};
