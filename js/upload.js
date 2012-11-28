$(function(){
    var html = '<div id="eleme_pic_upload">'+
                 '<form id="myform" enctype="multipart/form-data">'+
                   '<input id="eleme_pic_upload_file" type="file" name="file" />'+
                   '<input id="eleme_pic_upload_button" type="submit" value="上传" />'+
                 '</form>'+ 
               '<input type="text" id="eleme_pic_text" /></div>';

    $('body').before(html);

    var host = 'http://5p.ele.me/tavern/index_json.php';

    var options = {
      url: host,
      type: 'post',
      dataType: 'json',
      beforeSubmit: function(){
        $('#eleme_pic_text').after('<span id="eleme_pic_uploading">上传中...</span>');
      },
      success: function(data,statusText,xhr){
        if(data.status){
          var img_url = '!['+data.file_original_name+']('+data.file_address+')';
          $("#eleme_pic_text").val(img_url).select();
          // copy to clipboard , but not working, may because not in background page
          //document.execCommand('copy');
          $("#eleme_pic_uploading").remove();
          $('textarea:last').val($('textarea:last').val()+img_url);
        }else {
          $("#eleme_pic_uploading").remove();
          $("#eleme_pic_text").after('<span style="color:red;">error!</span>');
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
