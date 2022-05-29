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
        $second = $('#second_line'),
        $seconHei = $second.offset().top,
        $seconImg = $second.find('.img_wrap'),
        $seconSpan = $second.find('span'),
        $seconP = $second.find('p'),
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

    if(window.scrollY > $seconHei){
      console.log('seond 어디니??');
      $seconImg.addClass('active');
      $seconSpan.addClass('on');
      $seconP.addClass('active');
    } else if (window.scrollY < $seconHei){
      $seconImg.removeClass('active');
      $seconSpan.removeClass('on');
      $seconP.removeClass('active');
    }

    if(window.scrollY > $thirdLineHei){
      console.log('third 어디니??');
      $trio.addClass('active');
    } else if(window.scrollY < $thirdLineHei){
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

