'use strict';

var EMAIL_VERIFY = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$/;
var PASSWORD_VERIFY = /^(\w){6,16}$/;

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.Data);
      },
      registerVerify: function(registerEmail, registerPassword, name, callback) {
        if(EMAIL_VERIFY.test(registerEmail) && PASSWORD_VERIFY.test(registerPassword)){
          this.findAll({
            where: {
              email: registerEmail
            }
          }).then(function (result) {

            if(result.length <= 0){
              callback({isCorrect:true,isExist:false})
            }else{
              callback({isCorrect:true,isExist:true})
            }
          });
        }else{
          callback({isCorrect:false,isExist:null});
        }
      },
      add: function(email, name, password){
        this.create({email: email, name: name, password: password});
      },
      verify: function(email, password, callback) {
        this.find({
          where: {
            email: email
          }
        }).then(function(data){
          console.log(data);
          if(data) {
            var isTrue = data.dataValues.password === password;
            isTrue === true ? callback(data) : callback();
          }else{
            callback(data);
          }
        })
      },
      findIdByEmail: function(email, callback) {
        this.find({where: {email: email}}).then(function(result){
          callback(result.id);
        });
      }
    }
  });
  return User;
};