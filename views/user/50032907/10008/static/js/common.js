
$(function(){
     new WOW().init();

    // 高亮显示头部链接
    var iLi = $('ul.menu');
    var winUlr = window.location.href;
    console.log(winUlr.indexOf("contact")+"ksdjkasd");

    if( winUlr.indexOf("about") != -1 || winUlr.indexOf("culture") != -1 || winUlr.indexOf("honor") != -1){
        iLi.find("li[name='about']").addClass('active').siblings("li").removeClass("active");

    }else if( winUlr.indexOf("contact") != -1){
        iLi.find("li[name='contact']").addClass('active').siblings("li").removeClass("active");

    }else if( winUlr.indexOf("product/list-1") != -1){
        iLi.find("li[name='product1']").addClass('active').siblings("li").removeClass("active");

    }else if( winUlr.indexOf("product/list-2") != -1){
        iLi.find("li[name='product2']").addClass('active').siblings("li").removeClass("active");

    }else if( winUlr.indexOf("product") != -1){
        iLi.find("li[name='product2']").addClass('active').siblings("li").removeClass("active");

    }else if( winUlr.indexOf("case") != -1){
        iLi.find("li[name='case']").addClass('active').siblings("li").removeClass("active");

    }else if( winUlr.indexOf("news") != -1){
        iLi.find("li[name='news']").addClass('active').siblings("li").removeClass("active");

    }else{
        iLi.find("li[name='index']").addClass('active').siblings("li").removeClass("active");       
    }









    //手机端的菜单按钮动态效果
    var flagA = false;
    var flag1 = false;
    $('header .headerTop .nav').click(function(){
        if(flag1 == true){
            flag1 = false;
            $('header .call').removeClass("active");
        }
        if(flagA == false){
            flagA = true;
            $('header .headerTop .nav span').eq(0).addClass('active');
            $('header .headerTop .nav span').eq(2).addClass('active');
            $('header .headerTop .nav span').eq(1).hide();
            $('header .menu').addClass("active");  
        }else{
            flagA = false;
            $('header .headerTop .nav span').eq(0).removeClass('active');
            $('header .headerTop .nav span').eq(2).removeClass('active');
            $('header .headerTop .nav span').eq(1).show();          
            $('header .menu').removeClass("active");  
        }
    });

    //首页电话图标点击事件
    $('header .call .icon-dianhua').click(function(){
        if(flagA == true){
            flagA = false;
            $('header .headerTop .nav span').eq(0).removeClass('active');
            $('header .headerTop .nav span').eq(2).removeClass('active');
            $('header .headerTop .nav span').eq(1).show();          
            $('header .menu').removeClass("active");
        }
        if(flag1){
            flag1 = false;
            $('header .call').removeClass("active");
        }else{
            flag1 = true;
             $('header .call').addClass("active");
        }
    });

    

    //底部微信wechat鼠标移入事件
    $(".wechatA .wechatDiv").hide(0);
    
    $(".wechatA").on("mouseenter ",function(){
        $(".wechatA .wechatDiv").show();   
    });
    $(".wechatA").on("mouseleave",function(){             
        $(".wechatA .wechatDiv").hide(0);             
    });

    var flagWechat = false;
    $(".wechatA").on("click",function(){
        if( flagWechat == false){
            $(".wechatA .wechatDiv").show();
            return flagWechat = true;
        }else if(flagWechat){
            $(".wechatA .wechatDiv").hide(0);
             return flagWechat = false;
        }
    });

})







   // 首页的留言反馈
    var nickname_REG = /^[\u4e00-\u9fa5]{2,5}$/; 
    var email_REG = /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/;
    var phone_REG = /^1[3|4|5|8][0-9]\d{4,8}$/;//手机号
    var phone2_REG = /^0\d{2,3}-?\d{7,8}$/;//座机号
    var content_REG = /^[\\u4E00-\\u9FFF]+$/;
    var nickname , phone , email , content ; 

   function check(){
      nickname = $('#formIndex #nickname').val();
      phone = $('#formIndex #phone').val();
      email = $('#formIndex #email').val();
      address = $('#formIndex #address').val();
      content = $('#formIndex #content').val();
      if(nickname == ''){
            $('#nickname').siblings('p').text('必须填写姓名');
            return false;
      }else if(phone == '' && email == ''){
            alert('电话和邮箱至少填写一项');
            return false;
      }else if(content == ''){
        $('#formIndex #content').siblings('p').text('必须填写留言内容');
        return false;
      }else{
          return true;
      }
   }

   function check_nickname(value){
        if(value == ''){
            $('#formIndex #nickname').siblings('p').text('必须填写姓名');
        }else if(!nickname_REG.test(value)){
            $('#formIndex #nickname').siblings('p').text('联系人为2到5个汉字字符');
        }else{
            $('#formIndex #nickname').siblings('p').text('');
        }
   }
   function check_email(value){
       if(value != '' && !email_REG.test(value)){
        $('#formIndex #email').siblings('p').text('请填写正确的邮箱格式');    
       }else{
        $('#formIndex #email').siblings('p').text('');  
       }
   }
   function check_phone(value){
    if(value != '') {
        if(!(phone_REG.test(value) || phone2_REG.test(value))){
            $('#formIndex #phone').siblings('p').text('请填写正确的号码');  
        }else{
            $('#formIndex #phone').siblings('p').text('');  
        }
    }else{
        $('#formIndex #phone').siblings('p').text('');  
    }
   }
   function check_email(value){
       if(value != '' && !email_REG.test(value)){
        $('#email').siblings('p').text('请填写正确的邮箱格式'); 
        }else{
            $('#formIndex #phone').siblings('p').text('');  
        }
   }
    function check_address(value){
        return true;
    }

   function check_content(value){
    if(value == ''){
        $('#formIndex #content').siblings('p').text('留言内容不能为空'); 
    }else{
        $('#formIndex #content').siblings('p').text('');  
    }
   }



$(function(){
    
   $('#submit0').click(function(){
       var flag = check();
        
       if(flag){
        var message = 'nickname='+nickname  + '&email=' + email + '&phone=' + phone + '&address=' + address + '&content=' + content ;
        console.log(message)
        var postUrl = window.location.href+"/feedback.html";
        $.post( postUrl + "?" + message, function(res) {
            console.log(res);
            if(res.code == 1){
                alert('留言成功');
                $('#formIndex input[type="text"]').val("");
                $('#formIndex #content').val("");

            }else if(res.code == 0 && res.msg == 'ILLEGAL_CONTENT'){
                $('#formIndex #content').siblings('p').text('留言内容至少包含一个汉字'); 
            }else{
                alert('留言失败！');
            }
        })
       }
   })
})



$(function(){
    //产品show页面的轮播效果


    var Bigswiper = new Swiper('.Bigswiper', {  
        centeredSlides:true,
        navigation: {nextEl: '.big-button-next',prevEl: '.big-button-prev',},
        allowTouchMove: false,
        on:{
            slideChangeTransitionEnd: function() {
                if(Math.abs(Bigswiper.activeIndex - Smallswiper.activeIndex) > 3){
                Smallswiper.slideTo(Bigswiper.activeIndex,500);
                }
            }
        }
    });
    var Smallswiper = new Swiper('.Smallswiper',{
      slidesPerView:'auto',
      spaceBetween:10,
      navigation: {nextEl: '.small-button-next',prevEl: '.small-button-prev',},
      on:{
            tap: function() {
                Bigswiper.slideTo(Smallswiper.clickedIndex,500)
                $('.Smallswiper .swiper-slide').removeClass('active-nav');
                $('.Smallswiper .swiper-slide').eq(Smallswiper.clickedIndex).addClass('active-nav');
            }
        }
    });
})





    //多语言切换
    $(function(){
        var flaglang = false;
        $(".top .icon-fanyi-full").on("click",function(e){
            //阻止事件=冒泡
            if( e && e.stopPropagation )
                e.stopPropagation();
            else{
                    window.event.cancelBubble = true;
            }

            //语言切换
            if( flaglang == false){
                $(".top_r").slideDown();
                flaglang = true;
            }else if( flaglang == true){
                $(".top_r").slideUp();
                flaglang = false;
            }
        
        });
        $("body").on('click',function(){
            $(".top_r").slideUp();
            flaglang = false;
        })
        
    })
    