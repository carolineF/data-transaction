'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.renameColumn('Users','Email', "email");
  }
};
