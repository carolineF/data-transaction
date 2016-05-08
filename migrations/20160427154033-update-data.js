'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn('Data','description', {
      type:Sequelize.STRING,
      defaultValue: ''
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Data','description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ');
  }
};
