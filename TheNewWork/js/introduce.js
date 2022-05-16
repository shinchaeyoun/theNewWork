$(function(){
  const windowHei = window.innerHeight,
        $minusWin = windowHei / 2,
        $mainWrap = $('.main_wrap'),
        $mainHei = $('.main_wrap').offset().top,
        $side = $mainWrap.find('.side_wrap'),
        $center = $mainWrap.find('.center_wrap'),
        $hashtag = $('.hashtag_story'),
        $hashtagHei = $hashtag.offset().top,
        $hashtagBox = $hashtag.find('.content .img_wrap'),
        $hashtagTxtBox = $hashtag.find('.content .text_wrap'),
        $message = $('.message_motto'),
        $messageHei = $message.offset().top,
        $just = $message.find('.message'),
        $love = $message.find('.motto');

        $(window).on('load',function(){
          if(window.scrollY > $mainHei - $minusWin){
            $side.addClass('active');
            $center.addClass('active');
          } else if (window.scrollY < $mainHei - $minusWin) {
            $side.removeClass('active');
            $center.removeClass('active');
          }
        });

        $(window).on('scroll',function(){
          if(window.scrollY > $hashtagHei - $minusWin){
            $hashtagBox.addClass('active');
            $hashtagTxtBox.addClass('active');
          } else if (window.scrollY < $hashtagHei - $minusWin) {
            $hashtagBox.removeClass('active');
            $hashtagTxtBox.removeClass('active');
          }
          
          if(window.scrollY > $messageHei - $minusWin){
            $just.addClass('active');
            $love.addClass('active');
          } else if (window.scrollY < $messageHei - $minusWin) {
            $just.removeClass('active');
            $love.removeClass('active');
          }
        });
});