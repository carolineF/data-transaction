'use strict';

$(function() {
  $('#signIn').on('click', function(){
    console.log($('#email').val());
    console.log($('#password').val());
    $.ajax({
      type: "POST",
      url: "/login",
      data: {
        email: $('#email').val(),
        password: $('#password').val()
      },
      dataType: "json",
      complete: function(data) {
        console.log(data.responseJSON.isTrue);
        if(data.responseJSON.isTrue){
          location.href = '/';
        }
      }
    });
  });
});