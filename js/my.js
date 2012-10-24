  $(function(){
    var html = '<div id="eleme_pic_upload"><form id="myform" enctype="multipart/form-data"> <input id="eleme_pic_upload_file" type="file" name="file" /> <input id="eleme_pic_upload_button" type="submit" value="上传" /> </form> <input type="text" id="text" /></div>';

    $('body').before(html);

    var file = document.getElementById('myform');  // file to upload
    
    //var input_select = $('#text');  // input select
    var eleme_pic_upload = $('#eleme_pic_upload');


    //ajax_upload();
    console.log('start---------------------------');

    // ajax upload
    $('#eleme_pic_upload_button').live('click',function(e){
      e.preventDefault();
      var formData = new FormData(file);  // make to formdata


      console.log(formData);

      $.ajax({
        type: 'POST',
        url: 'http://u.com/test/upload.php',
        dataType: 'json',
        data: formData,
        processData: false,
        contentType: false,
        success: function(response){
          console.log('suc');
          if(response.status){

            delete formData; // delete formData
            var img_url = 'http://u.com/test/upload/'+response.file_name;
            console.log(img_url);

            copy(img_url);
            //input_select.val(img_url).select();
            //console.log(1);
            //document.execCommand('copy');  // why?
            //console.log(2);



            console.log('---------------------------end');
            $('#eleme_pic_upload').remove();
          }
        }
      });

    });

    function copy(val){
      var clipboard = $("#text").val(val).select();
      document.execCommand('cut');
      clipboard.val('');
    }
  });
