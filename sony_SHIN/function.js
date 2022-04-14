$(function(){
  const $gnb = $('.header-container > ul');
  const $lnb = $gnb.children('li');

  const $lnbBg = $('header > .bg_lnb');

  // 내비게이션
  $lnb.hover(
    function(){
      $(this).addClass('bar').addClass('active');
      $lnbBg.stop().slideDown();
      $lnb.children('ol').stop().slideDown();
    }
    ,
    function(){
      $(this).removeClass('bar').removeClass('active');
      $lnbBg.stop().slideUp();
      $lnb.children('ol').stop().slideUp();
    }
  )

  // 메인 슬라이드
  const $container = $('.sec1 > .slide-container');
  const $slides = $container.children('.slide-content');

  const $prevBtn = $('.sec1 > .prev');
  const $nextBtn = $('.sec1 > .next');

  const $current = $('.sec1 > .slide-pagination > .current');

  
  let nowIdx = 1;
  
  let lock = false;

  $(window).on('load',function(){
    setInterval(function(){
      $nextBtn.trigger('click')
    },10000);
  });

  // 다음 버튼
  $nextBtn.on('click',function(e){
    e.preventDefault();


    if(lock===false) {
      lock = true;
    
    if (nowIdx < 5) {
			nowIdx++;
		} else {
			nowIdx = 1;
		}

    $current.text('0' + (nowIdx));

    // 컨테이너 이동
    $container.stop().animate({
      left : -(100)+'%'
    },function(){
      $('.slide > .slide-container > .slide-content').first().appendTo($container);
      $container.css({
        left : 0
      });
      lock = false;
    });

    };

  });

  // 이전 버튼
  $prevBtn.on('click',function(){

    if(lock===false){
      lock = true;
    
    if (nowIdx > 0) {
			nowIdx--;
		} else {
			nowIdx = 4;
		}

    $current.text('0' + (nowIdx + 1));
    
    $container.stop().animate({
      left : 0
    },function(){
      $('.slide > .slide-container > .slide-content').last().prependTo($container);
      $container.css({
        left : -(100)+'%'
      });

      lock=false;
    });
    };

  });
  // 메인 슬라이드 끝

  // 메인 추천 제품
  const $s2Next = $('.sec2 > .right-container > .next');
  const $s2RContainer = $('.sec2 .right-container .slide-container');
  const $s2NowOn = $s2RContainer.children('.slide-content');
  const $s2LContainer = $('.sec2 .left-container .img-slide');
  const $bar = $('.sec2 .slide-pagination');

  let s2Idx = 0;
  
  
  
  // 자동 슬라이드
  
  
  // 다음 버튼 클릭 이벤트
  $s2Next.on('click',function(e){
    e.preventDefault();
    
    // intervalKey = 

    if(lock===false) {
      lock = true;

    if(s2Idx<3) {
      s2Idx++;
    } else {
      s2Idx=0;
    }

    // 인디케이터 바
    const barWidth = $bar.children('.bar').width();

    $bar.children('.bar').stop().animate({
      left: barWidth*s2Idx
    })
    
    // 텍스트 숨김, 나타나기
    setTimeout(function(){
      $s2NowOn.eq(s2Idx).removeClass('text_hide').siblings().addClass('text_hide');
    },200);

    // 오른쪽 슬라이드
    $s2RContainer.stop().animate({
      left:-489
    },function(){
      $('.sec2 > .right-container > ul.slide-container > li.slide-content').first().appendTo($s2RContainer);
      $s2RContainer.css({
        left:0
      });
    });

    // 왼쪽 슬라이드
    $s2LContainer.stop().animate({
      left : -(100)+'%'
    },function(){
      $('.sec2 .left-container .img-slide .img_slide_content').first().appendTo($s2LContainer);
      $s2LContainer.css({
        left: 0
      });

      lock = false;
    });

  }

  });
  // 메인 추천 제품 슬라이드 종료


  // event slide
  const $evtCont = $('.sec3 .slide .slide_container');
  const $evtNext = $('.sec3 .slide .next');
  const $evtPrev = $('.sec3 .slide .prev');

  $evtNext.on('click',function(e){
    e.preventDefault();

    $evtCont.stop().animate({
      left:-350
    },function(){
      $('.sec3 .slide .slide_container li').first().appendTo($evtCont);
      $evtCont.css({
        left:0
      });
    });

  });

  $evtPrev.on('click',function(e){
    e.preventDefault();
   
    $evtCont.stop().animate({
      left:0
    },function(){
      $('.sec3 .slide .slide_container li').last().prependTo($evtCont);
      $evtCont.css({
        left:-350
      });
    });

  });
  // footre

  // footer sony family menu
  const $familyBtn = $('footer .button .menu_btn');
  const $familyMenu = $('footer .button .menu');

  let click = 0;


  $familyBtn.on('click',function(){
    
    if (click <= 0 ) {
      $familyMenu.slideUp();
      click ++;
    } else {
      $familyMenu.slideDown();
      click = 0;
    }
  });

  // 사이드 아이콘
  const $sideMenu = $('aside > button');
  const $menuIcon = $sideMenu.children('img');
  const $sideIcon = $('aside > .side_icon');
  const $hoverIcon = $sideIcon.children('.hover');
  const $topIcon = $sideIcon.children('.go_top');
  const $sideKakao = $sideIcon.children('.kakao');
  const $sideCustomer = $sideIcon.children('.customer');
  const $sideBtn = $('aside .button_wrap');

  
  $sideMenu.on('click',function(){

    if(lock===false) {
      lock = true;

    if(click<=0){
      $menuIcon.stop().animate({
        rotate:'135deg'
      },200);
      
      // $sideIcon.fadeIn(200);
      
      $sideIcon.css({
        display:'flex'
      });

      click++;
    } else {
      $menuIcon.stop().animate({
        rotate:0
      },200);

      $sideIcon.fadeOut(200);

      // $sideIcon.css({
      //   display:'none'
      // });

      click=0;
    }
      
    lock = false;
    }

    $hoverIcon.hover(function(){
      $(this).stop().animate({
        width:145 
      },200);
    }, function (){
      console.log('leave');
      $(this).stop().animate({
        width:60
      },200)
    });


  });
  // 사이드 아이콘 end

  // 사이드 아이콘 구문 시작

  // 카카오
  $sideKakao.on('click',function(e){
    e.preventDefault();
    
    $('aside > .kakao_pop').fadeIn(100);

    $sideBtn.children('.cancel').on('click',function(){
      $('aside > .kakao_pop').fadeOut(100);
    });
    $sideBtn.children('.check').on('click',function(){
      alert('로그인 페이지로 이동');
    });
  });

  // 고객센터
  $sideCustomer.on('click',function(e){
    e.preventDefault();
    // alert('고객센터 클릭함');

    $('aside > .customer_pop').fadeIn(100);

    $sideBtn.children('.check').on('click',function(){
      $('aside > .customer_pop').fadeOut(100);
    });
  });

  // 상단 올라가기
  $topIcon.on('click',function(e){
    e.preventDefault();

    $('html,body').stop().animate({
      scrollTop:0
    });
  });
  // 상단 올라가기 끝
  // 사이드 아이콘 구문 끝
  
  // 스크롤 이벤트 구문
  //왜 넣었는지 모르겠네??
  // $(window).on('scroll',function(){
  //   const scrollTop = $(this).scrollTop();    
  // });

}); // 준비핸들러