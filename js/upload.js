$(function(){
    var html = '<div id="eleme_pic_upload"><form id="myform" enctype="multipart/form-data"> <input id="eleme_pic_upload_file" type="file" name="file" /> <input id="eleme_pic_upload_button" type="submit" value="上传" /> </form> <input type="text" id="eleme_pic_text" /></div>';

    $('body').before(html);


    var options = {
      url: 'http://u.com/test/upload.php',
      type: 'post',
      dataType: 'json',
      beforeSubmit: function(){
        $('#eleme_pic_text').after('<span id="eleme_pic_uploading">上传中...</span>');
      },
      success: function(responseText,statusText,xhr){
        if(responseText.status){
        //console.log(responseText.file_name);
        var img_url = '!['+responseText.file_original_name+'](http://u.com/test/upload/'+responseText.file_name+')';
        $("#eleme_pic_text").val(img_url).select();
        document.execCommand('copy'); // not working, may because not in background page
        console.log(img_url);
        $("#eleme_pic_uploading").remove();
        $('textarea').val($('textarea').val()+img_url); // only one textarea

        }
      }
    };
    $("#myform").ajaxForm(options);

    $('#eleme_pic_upload').hover(function(){
      $(this).animate({'left':'10px'});
    },function(){
      $('#eleme_pic_upload_button').click(function(){
        $('#eleme_pic_upload').animate({'left':'-150px'});
      });
    });
});
