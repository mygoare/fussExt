$(function(){
    var html = '<div id="eleme_pic_upload"><form id="myform" enctype="multipart/form-data"> <input id="eleme_pic_upload_file" type="file" name="file" /> <input id="eleme_pic_upload_button" type="submit" value="上传" /> </form> <input type="text" id="text" /></div>';

    $('body').before(html);


    var options = {
      url: 'http://u.com/test/upload.php',
      type: 'post',
      dataType: 'json',
      beforeSubmit: function(){
        $('#text').after('<p id="uploading">上传中...</p>');
      },
      success: function(responseText,statusText,xhr){
        if(responseText.status){
        //console.log(responseText.file_name);
        var img_url = 'http://u.com/test/upload/'+responseText.file_name;
        $("#text").val(img_url);
        $('#text')[0].select();
        document.execCommand('copy');
        console.log(img_url);
        $("#uploading").remove();

        //chrome.tabs.getCurrent(function(tab){
          //chrome.tabs.remove(tab.id);
        //});

        //document.execCommand('paste');
        //console.log(1);

        }
      }
    };
    $("#myform").ajaxForm(options);
});
