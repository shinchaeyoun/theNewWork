$(function(){
  const windowHei = window.innerHeight,
        $minusWin = windowHei / 2,
        $container = $('.container'),
        $mainTit = $('.main_content .tit'),
        $mainTitSub = $('.main_content .tit span'),
        $mainTitSub2 = $('.main_content .tit span.date'),
        $mainTxt = $('.main_content p'),
        $subTit = $('.sub_content span'),
        $subTxt = $('.sub_content p');
  let top = [];

  for(let i=0; i<$container.length; i++){
    top[i] = $container.eq(i).offset().top;
  };

  $(window).on('load scroll',function(){
    for(let i = 0; i<top.length; i++){
      console.log(i, top[i]);
      if(window.scrollY > top[i] - $minusWin) {
        $mainTit.eq(i).addClass('on');
        $container.eq(i).find($mainTitSub).addClass('on');
        $container.eq(i).find($mainTitSub2).addClass('on');
        $mainTxt.eq(i).addClass('on');
        $subTit.eq(i).addClass('on');
        $subTxt.eq(i).addClass('on');
      }
    };
  });
});