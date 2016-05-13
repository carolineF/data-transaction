'use strict';

$(function() {

  $('#price').on('blur', function() {
    console.log(isNaN($(this).val()));
    if(isNaN($(this).val())){
      alert('数据标价请输入数字！');
      $(this).val('');
    }
  });

  $('#upload').on('click', function(){

    if(checkFile() && checkInput()) {
      console.log(checkFile() + '   ' + checkInput());
      $('form').submit();
      $.ajax({
        type: 'POST',
        url: '/data/create',
        data: $('form').serialize(),
        complete: function(data) {}
      });
    }
  });
  $("#file").on('change',function(){
    showFileName();
  });
});

function showFileName(){
  var file = document.getElementById('file').files;
  var $fileMess = $('#fileMess');

  $fileMess.html(file[0].name);
  $fileMess.css('fontSize', '16px');
}

function checkFile() {
  var file = $('#file');
  if(!file.val()) {
    alert('请选择要上传的压缩文件!');
    return false;
  }
  var nameArray = file.val().split('.');
  var postfix = nameArray[nameArray.length-1].toLowerCase();

  if(!(postfix == 'rar' || postfix == 'zip')) {
    alert('文件类型不正确，请选择.rar或者.zip文件!');
    return false;
  }

  return true;
}

function checkInput() {
  var isNull = !$('#name').val() || !$('#intro').val() || !$('#price').val();
  var isChecked = $(":radio:checked").length > 0;
  if(isNull || !isChecked){
    return false;
  }

  return true;
}