'use strict';
module.exports = function(sequelize, DataTypes) {
  var Data = sequelize.define('Data', {
    title: DataTypes.STRING,
    dataSize: DataTypes.STRING,
    price: DataTypes.STRING,
    dataTime: DataTypes.DATE,
    path: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Data;
};