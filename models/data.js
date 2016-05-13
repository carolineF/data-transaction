'use strict';
module.exports = function(sequelize, DataTypes) {
  var Data = sequelize.define('Data', {
    title: DataTypes.STRING,
    dataSize: DataTypes.STRING,
    price: DataTypes.STRING,
    dataTime: DataTypes.DATE,
    path: DataTypes.STRING,
    description: DataTypes.STRING,
    form: DataTypes.STRING,
    owner: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Data.belongsTo(models.User, {foreignKey: {name: 'userId'}});
        Data.belongsTo(models.Category, {foreignKey: {name: 'categoryId'}});
      },
      /*pageAll: function(pageSize, pageIndex, callback){
        this.findAndCountAll({
          offset: (pageIndex-1) * pageSize,
          limit: pageSize
        }).then(function(result){
          var totalPages = Math.ceil(result.count /pageSize);
          var datas = result.row;
          callback(totalPages, datas);
        })
      },*/
      findAndPage: function(page, count, callback){
        this.findAndCount({
          limit: count,
          offset: (page - 1) * count
        }).then(function(datas){
          callback(datas);
        });
      }
    }
  });
  return Data;
};