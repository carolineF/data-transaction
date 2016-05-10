'use strict';

$(function () {
  var id = $.cookie('id');
  if (!id) {
    return;
  }

  $('.userInfo').prepend('你好：', id);
  //var $dropdownMenu = $('.dropdown-menu');
  //$dropdownMenu.empty().prepend('<li><a id="exit" href="/logout">注销</a></li>');

  $('.offline').toggle();
  $('.online').toggle();
});
