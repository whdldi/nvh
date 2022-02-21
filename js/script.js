
$(document).ready(function(){


    $(function () {
          //햄버거 아이콘 클릭하면 .mobile이 좌측에서 우측으로(left:0)
          $('.fa-bars').click(function () {
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
            $('.mobile').css({
              'left': '-100%'
            });
            $('.fa-bars').show();
            $('.fa-times').hide();
          });

});  

        /* 헤더고정 스크롤 했을때 */
        $(function(){
          var headerTop = $('header').offset().top;
          $(window).scroll(function(){
               var scrollTop = $(window).scrollTop();
               if(headerTop < scrollTop){
                    $('header').addClass('fixed').stop(); 
               } else {
                    $('header').removeClass('fixed'); 
               }
          });
        })

});

  /* 메인이미지 슬라이드 */
  $(function(){
    $('.serv_wrap').slick({
         dots: true,
         infinite: true,
         speed: 1000,
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay:false,
         responsive: [
           {
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