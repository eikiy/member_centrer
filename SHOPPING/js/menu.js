
 $(function(){
  $(".main_contents .sideMenu ul li.btn_more").click(function(){
        $(this).find("ul.subMenu").slideToggle({duration: 'slow', queue: false});
    return false;
    });
  $("ul.userBox li.noticeBox").click(function(){
        $(this).find(".notificationBox").stop(true, true).fadeToggle(0);
    return false;
    });
  $("ul.userBox li.profile_photo").click(function(){
        $(this).find(".theUserBox").stop(true, true).fadeToggle(0);
    return false;
    });
 });


 $(function(){
  var body = $("body");
  var width = body.width()

  if(width < 1000)
  {
      $(".sideMenu").mouseleave(function(){
        $(this).find("ul.mainMenu li ul.subMenu").stop(true, true).hide();
    return false;
    });
  }
  return false;
 });


//點右邊top
 $(function(){
  $(window).scroll(function(){
    if( $(window).scrollTop() > 400 ){
      $(".shoppingcar_icon a.btn_go_up").stop(true,false).animate({opacity:1},);
    }else{
      $(".shoppingcar_icon a.btn_go_up").stop(true,false).animate({opacity:0},);
    }
  });
  $(".shoppingcar_icon a.btn_go_up").click(function goTop(){
    $("html,body").stop(true,false).animate({scrollTop:0},900);
  });
  return false;
 });

// 分享按鈕 + 動態
$(function() {
    var moved = 0;
    var body = $("body");
    var width = body.width()
    $(document).on('click', '.shoppingcar_icon .btn_share', function(e){
      e.preventDefault();
        if (moved == 0) {
          $(this).find("ul.share_web_list").animate({'right': '0px'}, 0.5);
          if(width < 499) {
              $(this).find("ul.share_web_list").animate({'right': '50px', 'opacity':'1'});
          } else {
              $(this).find("ul.share_web_list").animate({'right': '60px', 'opacity':'1'});
          }
          moved = 1;
        }
        else{
            moved = 0;
            $(this).find("ul.share_web_list").animate({'right': '0px', 'opacity':'0'});
            $(this).find("ul.share_web_list").animate({'right': '-160px'});
        }
    });
});


