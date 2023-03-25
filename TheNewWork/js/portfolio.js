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
        
  let nowIdx,
      top = [];

  for(let i=0;i<$content.length;i++){
    top[i] = $content.eq(i).offset().top;
  };

  nowIdx = $content.index(this);

  $(window).on('load',function(){
    for(let i=0;i<top.length;i++){
      if(window.scrollY > top[i] - $minusWin){
        $mainTit.eq(i).addClass('on');
        $subTit.eq(i).addClass('on');
        $img.eq(i).addClass('on');
        $txt.eq(i).addClass('on');
      } else if (window.scrollY < top[i] - $minusWin){
        $mainTit.eq(i).removeClass('on');
        $subTit.eq(i).removeClass('on');
        $img.eq(i).removeClass('on');
        $txt.eq(i).removeClass('on');
      }
    };
  });

  $(window).on('scroll',function(){
    nowIdx = $content.index(this);

    for(let i=1;i<top.length;i++){
      if(window.scrollY > top[i] - $minusWin){
        $mainTit.eq(i).addClass('on');
        $subTit.eq(i).addClass('on');
        $img.eq(i).addClass('on');
        $txt.eq(i).addClass('on');
      } else if (window.scrollY < top[i] - $minusWin){
        $mainTit.eq(i).removeClass('on');
        $subTit.eq(i).removeClass('on');
        $img.eq(i).removeClass('on');
        $txt.eq(i).removeClass('on');
      };
    };
  });
});
