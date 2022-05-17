$(function(){
  const windowHei = window.innerHeight,
        $minusWin = windowHei / 2,
        $mainHei = $('#main'),
        $mainImg = $('#main_visual'),
        $firstLine = $('#first_line'),
        $firstHei = $firstLine.offset().top,
        $firstImg = $firstLine.find('.img_wrap'),
        $firstSpan = $firstLine.find('.text_wrap span'),
        $firstP = $firstLine.find('.text_wrap p'),
        $secon_line = $('#second_line'),
        seconHei = $secon_line.offset().top,
        $seconImg = $secon_line.find('.img_wrap'),
        $seconSpan = $secon_line.find('span'),
        $seconP = $secon_line.find('p'),
        $thirdLine = $('.third_line'),
        $thirdLineHei = $thirdLine.offset().top,
        $trio = $thirdLine.find('.content');

  $(window).on('scroll',function(){
    if(window.scrollY > $firstHei - $minusWin){
      $firstImg.addClass('active');
      $firstSpan.addClass('on');
      $firstP.addClass('active');
    } else if (window.scrollY < $firstHei - $minusWin) {
      $firstImg.removeClass('active');
      $firstSpan.removeClass('on');
      $firstP.removeClass('active');
    }

    if(window.scrollY > seconHei - $minusWin) {
      $seconImg.addClass('active');
      $seconSpan.addClass('on');
      $seconP.addClass('active');
    } else if (window.scrollY < seconHei - $minusWin){
      $seconImg.removeClass('active');
      $seconSpan.removeClass('on');
      $seconP.removeClass('active');
    }

    if(window.scrollY > $thirdLineHei - $minusWin) {
      $trio.addClass('active');
    } else if(window.scrollY < $thirdLineHei - $minusWin) {
      $trio.removeClass('active');
    }
  });

  $(window).on('load',function(){
        $mainImg.addClass('active');
      
        if (window.scrollY < $mainHei.offset().top){
          $seconImg.removeClass('active');
        }
  });
});

