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
      },
      pageAll: function(pageSize, pageIndex, callback){
        this.findAndCountAll({
          offset: (pageIndex-1) * pageSize,
          limit: pageSize
        }).then(function(result){
          var totalPages = Math.ceil(result.count /pageSize);
          var datas = result.row;
          callback(totalPages, datas);
        })
      }
    }
  });
  return Data;
};