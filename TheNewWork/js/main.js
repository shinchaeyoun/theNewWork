$(function(){
  const windowHei = window.innerHeight,
        $minusWin = windowHei / 2,
        $mainHei = $('#main'),
        $mainImg = $('#main_visual'),
        $firstLine = $('#first_line'),
        $firstHei = $firstLine.offset().top,
        $firstImg = $firstLine.find('.img_wrap'),
        $firstText = $firstLine.find('.text_wrap p'),
        $secon_line = $('#second_line'),
        seconHei = $secon_line.offset().top,
        $seconImg = $secon_line.find('.img_wrap'),
        $seconText = $secon_line.find('p'),
        $thirdLine = $('.third_line'),
        $thirdLineHei = $thirdLine.offset().top,
        $trio = $thirdLine.find('.content');

  $(window).on('scroll',function(){
    if(window.scrollY > $firstHei - $minusWin){
      $firstImg.addClass('active');
      $firstText.addClass('active');
    } else if (window.scrollY < $firstHei - $minusWin) {
      $firstImg.removeClass('active');
      $firstText.removeClass('active');
    }

    if(window.scrollY > seconHei - $minusWin) {
      $seconImg.addClass('active');
      $seconText.addClass('active');
    } else if (window.scrollY < seconHei - $minusWin){
      $seconImg.removeClass('active');
      $seconText.removeClass('active');
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

