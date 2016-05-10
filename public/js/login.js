'use strict';

$(function() {
  $('#submit').on('click', function(){
    $.ajax({
      type: "POST",
      url: "/login",
      data: {
        name: $('#name').val(),
        password: $('#password').val()
      },
      dataType: "json",
      complete: function(data) {
        if(data.responseJSON.isTrue){
          location.href = '/';
        }
      }
    });
  });
});