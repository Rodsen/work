
   var nickname_REG = /^[\u4e00-\u9fa5]{2,5}$/; 
   var email_REG = /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/;
   var phone_REG = /^1[3|4|5|8][0-9]\d{4,8}$/;//手机号
   var phone2_REG = /^0\d{2,3}-?\d{7,8}$/;//座机号
    var content_REG = /^[\\u4E00-\\u9FFF]+$/;
    var nickname , phone , email , content ;

   function check(){
      nickname = $('#form #nickname').val();
      phone = $('#form #phone').val();
      email = $('#form #email').val();
      content = $('#form #content').val();
      if(nickname == ''){
            $('#nickname').siblings('p').text('必须填写姓名');
            return false;
      }else if(phone == '' && email == ''){
            alert('电话和邮箱至少填写一项');
            return false;
      }else if(content == ''){
        $('#form #content').siblings('p').text('必须填写留言内容');
        return false;
      }else{
          return true;
      }
   }
   function check_nickname(value){
        if(value == ''){
            $('#form #nickname').siblings('p').text('必须填写姓名');
        }else if(!nickname_REG.test(value)){
            $('#form #nickname').siblings('p').text('联系人为2到5个汉字字符');
        }else{
            $('#form #nickname').siblings('p').text('');
        }
   }
   function check_email(value){
       if(value != '' && !email_REG.test(value)){
        $('#form #email').siblings('p').text('请填写正确的邮箱格式');    
       }else{
        $('#form #email').siblings('p').text('');  
       }
   }
   function check_phone(value){
    if(value != '') {
        if(!(phone_REG.test(value) || phone2_REG.test(value))){
            $('#form #phone').siblings('p').text('请填写正确的短号或者手机号码');  
        }else{
            $('#form #phone').siblings('p').text('');  
        }
    }else{
        $('#form #phone').siblings('p').text('');  
    }
   }
   function check_email(value){
       if(value != '' && !email_REG.test(value)){
        $('#email').siblings('p').text('请填写正确的邮箱格式'); 
        }else{
            $('#form #phone').siblings('p').text('');  
        }
   }
   function check_content(value){
    if(value == ''){
        $('#form #content').siblings('p').text('留言内容不能为空'); 
    }else{
        $('#form #content').siblings('p').text('');  
    }
   }
   $('#submit').click(function(){
       var flag = check();
        
       if(flag){
        var message = 'nickname='+nickname + '&phone=' + phone + '&email=' + email + '&content=' + content ;
        console.log(message)
        $.post(window.location.href + "?" + message, function(res) {
            console.log(res);
            if(res.code == 1){
                alert('留言成功');
                $('#form #nickname').val("");
                $('#form #phone').val("");
                $('#form #email').val("");
                $('#form #content').val("");
            }
            if(res.code == 0 && res.msg == 'ILLEGAL_CONTENT'){
                $('#form #content').siblings('p').text('留言内容至少包含一个汉字'); 
            }
        })
       }
   })
