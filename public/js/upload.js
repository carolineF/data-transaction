'use strict';

$(function() {
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

  //var fileName = filePath[filePath.length-1];
  console.log(file[0].size);
  console.log(file[0].name);
  console.log(file[0].type);
  //console.log(filePath);
  //$('input[name="showName"]:last').val(fileName);
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
    console.log(isNull + '---------' + !isChecked);
    return false;
  }

  console.log(!isChecked + '--------------------------' + isNull);
  return true;
}