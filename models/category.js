'use strict';
module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define('Category', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Category.hasMany(models.Data)
      },
      pageAll: function() {

      },
      findIdByName: function(name, userId, callback) {
        this.find({where: {name: name}}).then(function(result){
          console.log('########################' + result.id);
          callback(userId, result.id);
        });
      }
    }
  });
  return Category;
};