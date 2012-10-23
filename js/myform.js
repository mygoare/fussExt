$(function(){
    var options = {
      url: 'http://u.com/test/upload.php',
      type: 'post',
      dataType: 'json',
      beforeSubmit: function(){
        $('#text').after('<p>上传中...</p>');
      },
      success: function(responseText,statusText,xhr){
        if(responseText.status){
        console.log(responseText.file_name);
        var img_url = 'http://u.com/test/upload/'+responseText.file_name;
        $("#text").val(img_url);
        $('#text')[0].select();
        document.execCommand('copy');

        chrome.tabs.getCurrent(function(tab){
          chrome.tabs.remove(tab.id);
        });

        document.execCommand('paste');
        console.log(1);

        }
      }
    };
    $("#myform").ajaxForm(options);
});
