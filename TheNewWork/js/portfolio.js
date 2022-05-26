 $(function(){
  const windowHei = window.innerHeight,
        $minusWin = windowHei / 2,
        $port = $('#portfolio'),
        $content = $('.content_wrap'),
        $mainTit = $('.main_tit'),
        $subTit = $('.sub_tit'),
        $img = $('.img_box'),
        $txt = $('.text_box'),
        $contentHei = $('.content_wrap').offset().top;
        
        let nowIdx = null;
        const top = [];

        for(let i=0;i<$content.length;i++){
          top[i] = $content.eq(i).offset().top;
        }

        nowIdx = $content.index(this);

        console.log(nowIdx);
        
        $(window).on('load',function(){
          for(let i=0;i<top.length;i++){

            if(window.scrollY > top[0] - $minusWin){
              $mainTit.eq(0).addClass('on');
              $subTit.eq(0).addClass('on');
              $img.eq(0).addClass('on');
              $txt.eq(0).addClass('on');
            } else if (window.scrollY < top[0] - $minusWin){
              $mainTit.eq(0).removeClass('on');
              $subTit.eq(0).removeClass('on');
              $img.eq(0).removeClass('on');
              $txt.eq(0).removeClass('on');
            }
          };
        });

        $(window).on('scroll',function(){
          nowIdx = $content.index(this);

          for(let i=0;i<top.length;i++){
            if(window.scrollY > top[1] - $minusWin){
              $mainTit.eq(1).addClass('on');
              $subTit.eq(1).addClass('on');
              $img.eq(1).addClass('on');
              $txt.eq(1).addClass('on');
            } else if (window.scrollY < top[1] - $minusWin){
              $mainTit.eq(1).removeClass('on');
              $subTit.eq(1).removeClass('on');
              $img.eq(1).removeClass('on');
              $txt.eq(1).removeClass('on');
            }
            if(window.scrollY > top[2] - $minusWin){
              $mainTit.eq(2).addClass('on');
              $subTit.eq(2).addClass('on');
              $img.eq(2).addClass('on');
              $txt.eq(2).addClass('on');
            } else if (window.scrollY < top[2] - $minusWin){
              $mainTit.eq(2).removeClass('on');
              $subTit.eq(2).removeClass('on');
              $img.eq(2).removeClass('on');
              $txt.eq(2).removeClass('on');
            }
            if(window.scrollY > top[3] - $minusWin){
              $mainTit.eq(3).addClass('on');
              $subTit.eq(3).addClass('on');
              $img.eq(3).addClass('on');
              $txt.eq(3).addClass('on');
            } else if (window.scrollY < top[3] - $minusWin){
              $mainTit.eq(3).removeClass('on');
              $subTit.eq(3).removeClass('on');
              $img.eq(3).removeClass('on');
              $txt.eq(3).removeClass('on');
            }
            if(window.scrollY > top[4] - $minusWin){
              $mainTit.eq(4).addClass('on');
              $subTit.eq(4).addClass('on');
              $img.eq(4).addClass('on');
              $txt.eq(4).addClass('on');
            } else if (window.scrollY < top[4] - $minusWin){
              $mainTit.eq(4).removeClass('on');
              $subTit.eq(4).removeClass('on');
              $img.eq(4).removeClass('on');
              $txt.eq(4).removeClass('on');
            }
            if(window.scrollY > top[5] - $minusWin){
              $mainTit.eq(5).addClass('on');
              $subTit.eq(5).addClass('on');
              $img.eq(5).addClass('on');
              $txt.eq(5).addClass('on');
            } else if (window.scrollY < top[5] - $minusWin){
              $mainTit.eq(5).removeClass('on');
              $subTit.eq(5).removeClass('on');
              $img.eq(5).removeClass('on');
              $txt.eq(5).removeClass('on');
            }
          }

          // if(window.scrollY > scrollTop){
          //   $mainTit.addClass('on');
          //   $subTit.addClass('on');
          //   $img.addClass('on');
          //   $txt.addClass('on');
          // } else if (window.scrollY < $contentHei - $minusWin){
          //   $mainTit.removeClass('on');
          //   $subTit.removeClass('on');
          //   $img.removeClass('on');
          //   $txt.removeClass('on');
          // }

          
        });
});