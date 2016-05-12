'use strict';

$(function() {
  $('#signIn').on('click', function(){
    if(checkInput()){
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
    }
  });
});

function checkInput() {
  var $email = $('#email');
  var $password = $('#password');
  var EMAIL_VERIFY = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$/;
  var PASSWORD_VERIFY = /^(\w){6,16}$/;

  if(!$email.val() || !$password.val() || !EMAIL_VERIFY.test($email.val()) || !PASSWORD_VERIFY.test($password.val())) {
    return false;
  }

  return true;
}