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
        Data.belongsTo(models.User, {foreignKey: {name: 'user_id'}});
        Data.belongsTo(models.Category, {foreignKey: {name: 'category_id'}});
      }
    }
  });
  return Data;
};