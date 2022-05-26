$(function(){
  const windowHei = window.innerHeight,
        $minusWin = windowHei / 2,
        $container = $('.container'),
        $con1 = $('.con1').offset().top,
        $con2 = $('.con2').offset().top,
        $con3 = $('.con3').offset().top,
        $mainTit = $('.main_content .tit'),
        $mainTitSub = $('.main_content .tit span'),
        $mainTitSub2 = $('.main_content .tit span.date'),
        $con2TitSub = $('.con2 .main_content .tit span'),
        $con3TitSub = $('.con3 .main_content .tit span'),
        $mainTxt = $('.main_content p'),
        $subTit = $('.sub_content span'),
        $subTxt = $('.sub_content p');


        $(window).on('load',function(){
          $mainTit.eq(0).addClass('on');
          $mainTitSub.eq(0).addClass('on');
          $mainTitSub2.addClass('on');
          $mainTxt.eq(0).addClass('on');
          $subTit.eq(0).addClass('on');
          $subTxt.eq(0).addClass('on');
        });

        $(window).on('scroll',function(){
          if(window.scrollY > $con2 - $minusWin) {
            $mainTit.eq(1).addClass('on');
            $con2TitSub.addClass('on');
            $mainTxt.eq(1).addClass('on');
            $subTit.eq(1).addClass('on');
            $subTxt.eq(1).addClass('on');
          } else if(window.scrollY < $con2 - $minusWin) {
            $mainTit.eq(1).removeClass('on');
            $con2TitSub.removeClass('on');
            $mainTxt.eq(1).removeClass('on');
            $subTit.eq(1).removeClass('on');
            $subTxt.eq(1).removeClass('on');
          }

          if(window.scrollY > $con3 - $minusWin) {
            $mainTit.eq(2).addClass('on');
            $con3TitSub.addClass('on');
            $mainTxt.eq(2).addClass('on');
            $subTit.eq(2).addClass('on');
            $subTxt.eq(2).addClass('on');
          } else if(window.scrollY < $con3 - $minusWin) {
            $mainTit.eq(2).removeClass('on');
            $con3TitSub.removeClass('on');
            $mainTxt.eq(2).removeClass('on');
            $subTit.eq(2).removeClass('on');
            $subTxt.eq(2).removeClass('on');
          }
        });
});