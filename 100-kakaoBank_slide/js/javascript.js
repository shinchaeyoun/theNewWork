$(function(){
  const $container = $('.slides > .screen > .slides-container');
  const $slides = $container.children('li');

  const $btnPrev = $('.slides > a.prev');
  const $btnNext = $('.slides > a.next');

  let nowIdx = 2;

  // 잠그는 개념을 우리 코드($btnNext 이벤트 구문)에 적용해 보세요
  let lock = false;

  $btnNext.on('click',function(e){
    e.preventDefault();

    if(lock===false) {

      lock = true; // 잠금

      // 인덱스 추출
      if(nowIdx<4){
        nowIdx++;
      } else {
        nowIdx = 0;
      }
  
      // 활성 카드 표시
      $slides.removeClass('on').eq(nowIdx).addClass('on');
  
      $container.stop().animate({
        left:-480
      },function(){
        $('.slides > .screen > .slides-container > li').eq(0).appendTo($container);
        $container.css({
          left:-240
        });

        lock = false;
      });
    }



  });


  $btnPrev.on('click',function(e){
    e.preventDefault();

    if(lock===false){

      lock = true;

      if(nowIdx>0){
        nowIdx--;
      } else {
        nowIdx = 4;
      }
  
      $slides.removeClass('on').eq(nowIdx).addClass('on');
  
      $container.stop().animate({
        left:0
      },function(){
        $('.slides > .screen > .slides-container > li').last().prependTo($container);
        $container.css({
          left:-240
        });

        lock = false;
      });
    }

  });







});