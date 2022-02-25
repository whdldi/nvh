$(document).ready(function () {


  $(function () {
    //햄버거 아이콘 클릭하면 .mobile이 좌측에서 우측으로(left:0)
    $('.fa-bars').click(function () {
      $('.mobile').addClass('bk');
      //배경필터추가
      $('.mobile').css({
        'left': '0'
      });
      $('.fa-bars').hide();
      $('.fa-times').show();
      //$('.mobile').css('left','0');
      // 햄버거 아이콘숨김 hide()
      //닫기 아이콘 보임 show()
    });

    $('.fa-times').click(function () {
      $('.bk').removeClass('bk');
      $('.bk').hide(0);
      $('.mobile').css({
        'left': '-100%'
      });
      $('.fa-bars').show();
      $('.fa-times').hide();
      $('.bk').hide();
    });

  });

  /* 헤더고정 스크롤 했을때 */
  $(function () {
    var headerTop = $('header').offset().top;
    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      if (headerTop < scrollTop) {
        $('header').addClass('fixed').stop();
      } else {
        $('header').removeClass('fixed');
      }
    });
  })


});

/* 메인이미지 슬라이드 */
$(function () {
  $('.serv_wrap').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});


// /* 24시간 팝업 */
$(function () {
  // 쿠키 가져오기
  var getCookie = function (cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1);
      if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
  }

  // 24시간 기준 쿠키 설정하기  
  var setCookie = function (cname, cvalue, exdays) {
    var todayDate = new Date();
    todayDate.setTime(todayDate.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + todayDate.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }

  var couponClose = function () {
    if ($("input[name='chkbox']").is(":checked") == true) {
      setCookie("close", "Y", 1); //기간( ex. 1은 하루, 7은 일주일)
    }
    $("#pop").fadeOut(0);
  }

  $(document).ready(function () {
    var cookiedata = document.cookie;
    console.log(cookiedata);
    if (cookiedata.indexOf("close=Y") < 0) {
      $("#pop").show();
    } else {
      $("#pop").fadeOut(200);
    }
    $(".btnClose").click(function () {
      couponClose();
      $("#sli").hide();
      $(".pop").fadeOut(200);
      //모든 팝업에서 X눌렀을때 닫기
    });
    $("#close_ok").click(function () {
      couponClose();
    });
    $("#close_letsee").click(function () {
      couponClose();
      $("#popserv").show();
      //볼래요 눌렀을때 서비스팝업3가지중 첫번째팝업
    });


    //이하 다음버튼/이전버튼 이동
    $("#next_1").click(function () {
      couponClose();
      $("#popserv").hide();
      $('#popserv2').show();
    });

    $("#prev_2").click(function () {
      couponClose();
      $("#popserv2").hide();
      $('#popserv').show();
    });

    $("#next_2").click(function () {
      couponClose();
      $("#popserv2").hide();
      $('#popserv3').show();
    });

    $("#prev_3").click(function () {
      couponClose();
      $("#popserv3").hide();
      $('#popserv2').show();
    });

    $("#next_3").click(function () {
      couponClose();
      $("#popserv3").hide();
      $('#popserv4').show();
    });


  });
});
