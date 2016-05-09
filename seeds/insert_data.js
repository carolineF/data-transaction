'use strict';

var User = require('../models/index').User;
var Category = require('../models/index').Category;
var Data = require('../models/index').Data;
var path = require('../config/path.json');

var Users = [
  {name: 'user1', Email: '12344556662@163.com', password: '111111'},
  {name: 'user2', Email: '12344556662@163.com', password: '111111'},
  {name: 'user3', Email: '12344556662@163.com', password: '111111'},
  {name: 'user4', Email: '12344556662@163.com', password: '111111'},
  {name: 'user5', Email: '12344556662@163.com', password: '111111'},
  {name: 'user6', Email: '12344556662@163.com', password: '111111'}
];

var Categories = [
  {name: '移动电信'},
  {name: '餐饮美食'},
  {name: '建筑工程'},
  {name: '医疗工程'},
  {name: '社交沟通'},
  {name: '互联网'},
  {name: '政府部门'},
  {name: '教育学院'}
];


User.bulkCreate(Users).then(function(){
  Category.bulkCreate([
    {name: '移动电信'},
    {name: '餐饮美食'},
    {name: '建筑工程'},
    {name: '医疗工程'},
    {name: '社交沟通'},
    {name: '互联网'},
    {name: '政府部门'},
    {name: '教育学院'}
  ]).then(function (){
    Data.bulkCreate([
      {title: '标题1',dataSize: '100M', price: '100', dataTime: new Date(), path: path[1], userId: 4, categoryId: 2, description:'miaoshu1'},
      {title: '标题2',dataSize: '100M', price: '100', dataTime: new Date(), path: path[2], userId: 3, categoryId: 3, description:'miaoshu2'},
      {title: '标题3',dataSize: '100M', price: '100', dataTime: new Date(), path: path[3], userId: 1, categoryId: 2, description:'miaoshu3'},
      {title: '标题4',dataSize: '100M', price: '100', dataTime: new Date(), path: path[4], userId: 2, categoryId: 1, description:'miaoshu4'},
      {title: '标题5',dataSize: '100M', price: '100', dataTime: new Date(), path: path[5], userId: 4, categoryId: 3, description:'miaoshu5'},
      {title: '标题6',dataSize: '100M', price: '100', dataTime: new Date(), path: path[6], userId: 5, categoryId: 4, description:'miaoshu6'},
      {title: '标题7',dataSize: '100M', price: '100', dataTime: new Date(), path: path[7], userId: 2, categoryId: 1, description:'miaoshu7'}
    ]);
  });
});

