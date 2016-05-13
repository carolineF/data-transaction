'use strict';

var User = require('../models/index').User;
var Category = require('../models/index').Category;
var Data = require('../models/index').Data;

var UPLOAD_FOLDER = require('../config/file_path').video;
var formidable = require('formidable');
var fs = require('fs');

var FILE_PATH = '';
var FILE_SIZE = 0;

function DataController() {}

DataController.prototype.show = function(req, res) {
  var userEmail = req.cookies.id;
  if(!userEmail) {
    res.redirect('/login');
  }

  Category.findAll().then(function(categories){
    console.log(categories.length);
    res.render('upload', {categories: categories});
  });

};

DataController.prototype.upload = function(req, res) {
  console.log(req.body);
  var form = new formidable.IncomingForm();

  form.encoding = 'utf-8';
  form.uploadDir = 'public' + UPLOAD_FOLDER;
  form.keepExtensions = true;
  form.maxFieldsSize = 20 * 1024 * 1024 * 1024;

  form .on('file', function(field, file) {
    FILE_PATH = form.uploadDir + file.name;
    FILE_SIZE = file.size;
    console.log(FILE_PATH + '         ' + FILE_SIZE);
    fs.rename(file.path, form.uploadDir  + file.name);
  });
  form.parse(req, function(err,fields, files) {
  });
  res.locals.success = '上传成功';
  res.redirect('/data/upload');
};

DataController.prototype.create = function(req, res) {
  var userEmail = req.cookies.id;
  if(!userEmail) {
    res.redirect('/login');
  }
  User.findIdByEmail(userEmail, function(userId){
    console.log(req.body.category);
    Category.findIdByName(req.body.category, userId, function(userId, categoryId){
      console.log('-------------------' + userId + '  ' + categoryId);
      Data.create({title: req.body.title, dataSize: FILE_SIZE + 'K', price: req.body.price, dataTime: new Date(),
        path: FILE_PATH, form: req.body.form, userId: userId, categoryId: categoryId, description: req.body.description,
        owner: userEmail
      });
    });
  });
};

DataController.prototype.index = function(req, res){
  Data.findById(req.params.id, function(data){

    res.render('data-info', {data:data.dataValues});
  });
};

DataController.prototype.buy = function(req, res){
  var userEmail = req.cookies.id;
  if(!userEmail) {
    res.redirect('/login');
  }
  var dataId = parseInt(req.url.split('/')[1]);
  Data.findById(dataId, function(data){
    res.render('buy', {data:data});
  });

};

DataController.prototype.download = function(req, res){
  var userEmail = req.cookies.id;
  if(!userEmail) {
    res.redirect('/login');
  }
  var dataId = parseInt(req.url.split('/')[1]);
  Data.findById(dataId, function(data){
    res.download(data.path);
  });
};

module.exports = DataController;
