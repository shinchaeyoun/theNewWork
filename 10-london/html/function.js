$(document).ready(function(){
  const $menu = $('header>.header-wrap>nav>ul>li>a');

  const arrTopVal = [];
  let nowIdx = null;

  // 각 아티클의 오프셋().톱 배열에 저장
  for(let i=0;i<$menu.length;i++){
    arrTopVal[i] = $('article').eq(i).offset().top;
  };

  if (matchMedia('screen and (max-width: 320px)').matches) {
    $(window).scroll(function(){
      const scroll = $(this).scrollTop();
      if (scroll > arrTopVal[1]-81) {
        $('header').addClass('top-active');
        
      } else {
        $('header').removeClass('top-active');
      }
      const lastScroll = scroll;
    });

    $menu.on('click',function(evt){
      evt.preventDefault();
  
      nowIdx = $menu.index(this);
  
      $('html,body').stop().animate({
        scrollTop : arrTopVal[nowIdx]-80
      });
    });
    
    // 헤더 스크롤 클래스 추가 삭제    
    $(window).scroll(function(event){
      const scroll = $(this).scrollTop();
      if (scroll > arrTopVal[1]-81) {
        $('header .header-wrap').addClass('remove');
      } else {
        $('header .header-wrap').removeClass('remove');
      }
      const lastScroll = scroll;
    });

    $(window).on('scroll',function(){
      const scrollTop = $(this).scrollTop();
  
      for(let i=0;i<arrTopVal.length;i++){
        if(scrollTop>=arrTopVal[i]-101){
  
          // 활성화 표시
          $menu.eq(i).parent().addClass('on').siblings().removeClass('on');
        } else {
          $menu.eq(i).parent().removeClass('on');
        }
      };
    });

  } else if (matchMedia("screen and (max-width: 375px)").matches) {
    $(window).scroll(function(){
      const scroll = $(this).scrollTop();
      if (scroll > arrTopVal[1]-101) {
        $('header').addClass('top-active');
        
      } else {
        $('header').removeClass('top-active');
      }
      const lastScroll = scroll;
    });

    $menu.on('click',function(evt){
      evt.preventDefault();
  
      nowIdx = $menu.index(this);
  
      $('html,body').stop().animate({
        scrollTop : arrTopVal[nowIdx]-100
      });
    });
    
    // 헤더 스크롤 클래스 추가 삭제    
    $(window).scroll(function(event){
      const scroll = $(this).scrollTop();
      if (scroll > arrTopVal[1]-101) {
        $('header .header-wrap').addClass('remove');
        $('header .header-wrap h1').addClass('top-a-active');
        $('header .header-wrap ul li').addClass('top-ul-a-active');
      } else {
        $('header .header-wrap').removeClass('remove');
        $('header .header-wrap h1').removeClass('top-a-active');
        $('header .header-wrap ul li').removeClass('top-ul-a-active');

      }
      const lastScroll = scroll;
    });

    $(window).on('scroll',function(){
      const scrollTop = $(this).scrollTop();
  
      for(let i=0;i<arrTopVal.length;i++){
        if(scrollTop>=arrTopVal[i]-101){
  
          // 활성화 표시
          $menu.eq(i).parent().addClass('on').siblings().removeClass('on');
        } else {
          $menu.eq(i).parent().removeClass('on');
        }
      };
    });



  } else if (matchMedia("screen and (max-width: 425px)").matches) {
    // 헤더에 배경 클래스 추가
    $(window).scroll(function(){
      const scroll = $(this).scrollTop();
      if (scroll > arrTopVal[1]-101) {
        $('header').addClass('top-active');        
      } else {
        $('header').removeClass('top-active');
      }
      const lastScroll = scroll;
    });

    $menu.on('click',function(evt){
      evt.preventDefault();
  
      nowIdx = $menu.index(this);
  
      $('html,body').stop().animate({
        scrollTop : arrTopVal[nowIdx]-100
      });
    });
  
    $(window).scroll(function(event){
      const scroll = $(this).scrollTop();
      if (scroll > arrTopVal[1]-101) {
        $('header > .header-wrap nav').addClass('nav-remove');
      } else {
        $('header > .header-wrap nav').removeClass('nav-remove');
      }
      const lastScroll = scroll;
    });
  
    // 브라우저 스크롤 이벤트 구문
    $(window).on('scroll',function(){
      const scrollTop = $(this).scrollTop();
  
      for(let i=0;i<arrTopVal.length;i++){
        if(scrollTop>=arrTopVal[i]-101){
  
          // 활성화 표시
          $menu.eq(i).parent().addClass('on').siblings().removeClass('on');
        } else {
          $menu.eq(i).parent().removeClass('on');
        }
      };
    });

  } else {
    const lastScroll = 0;

    $(window).scroll(function(){
      const scroll = $(this).scrollTop();
      if (scroll > arrTopVal[1]-81) {
        $('header').addClass('top-active');
        
      } else {
        $('header').removeClass('top-active');
      }
      const lastScroll = scroll;
    });

    $menu.on('click',function(evt){
      evt.preventDefault();
  
      nowIdx = $menu.index(this);
  
      $('html,body').stop().animate({
        scrollTop : arrTopVal[nowIdx]-80
      });
    });
    
    // 헤더 스크롤 클래스 추가 삭제    
    $(window).scroll(function(event){
      const scroll = $(this).scrollTop();
      if (scroll > arrTopVal[1]-81) {
        $('header .header-wrap').addClass('remove');
      } else {
        $('header .header-wrap').removeClass('remove');
      }
      const lastScroll = scroll;
    });

    $(window).on('scroll',function(){
      const scrollTop = $(this).scrollTop();
  
      for(let i=0;i<arrTopVal.length;i++){
        if(scrollTop>=arrTopVal[i]-101){
  
          // 활성화 표시
          $menu.eq(i).parent().addClass('on').siblings().removeClass('on');
        } else {
          $menu.eq(i).parent().removeClass('on');
        }
      };
    });
  }

  // 랜드마크
    const $wrapper = $('.tab-wrap'),
          $allTabs = $wrapper.find('.tab-content > div'),
          $tabMenu = $wrapper.find('.tab-menu li'),
          $line = $('<div class="line"></div>').appendTo($tabMenu);
    
    $allTabs.not(':first-of-type').hide();  
    $tabMenu.filter(':first-of-type').find(':first').width('100%')
    
    $tabMenu.each(function(i) {
      $(this).attr('data-tab', 'tab'+i);
    });
    
    $allTabs.each(function(i) {
      $(this).attr('data-tab', 'tab'+i);
    });
    
    $tabMenu.on('click', function() {
      
      const dataTab = $(this).data('tab'),
          $getWrapper = $(this).closest($wrapper);
      
      $getWrapper.find($tabMenu).removeClass('active');
      $(this).addClass('active');
      
      $getWrapper.find('.line').width(0);
      $(this).find($line).animate({'width':'100%'}, 'fast');
      $getWrapper.find($allTabs).hide();
      $getWrapper.find($allTabs).filter('[data-tab='+dataTab+']').show();
    });
    // 랜드마크 끝

    // 공원 시작
    const scr1 = $('#park > .park-content:nth-of-type(1) > .screen > #photo');
    const scr2 = $('#park > .park-content:nth-of-type(2) > .screen > #photo');
    const scr3 = $('#park > .park-content:nth-of-type(3) > .screen > #photo');
    const $thmbs1 = $('#park > .park-content:nth-of-type(1) .thmbs > li > img');
    const $thmbs2 = $('#park > .park-content:nth-of-type(2) .thmbs > li > img');
    const $thmbs3 = $('#park > .park-content:nth-of-type(3) .thmbs > li > img');
    
    for(let idx=0;idx<$thmbs1.length;idx++){
      $thmbs1[idx].addEventListener('click', function(){   
        const imgSrc = this.getAttribute('src');
        scr1.attr('src',imgSrc);
      });
    };
    
    for(let idx=0;idx<$thmbs2.length;idx++){
      $thmbs2[idx].addEventListener('click', function(){   
        const imgSrc = this.getAttribute('src');
        scr2.attr('src',imgSrc);
      });
    };
    
    for(let idx=0;idx<$thmbs3.length;idx++){
      $thmbs3[idx].addEventListener('click', function(){   
        const imgSrc = this.getAttribute('src');
        scr3.attr('src',imgSrc);
      });
    };
    // 공원 끝
  
  
  
    // 축제
    const $indicator = $('.slides > .slides-pagination > li > a');
    const $container = $('.slides > .slides-container');
  
    let nowIndex = 0;
  
    if (matchMedia('screen and (max-width: 320px)').matches) {
      $indicator.on('click',function(evt){
        evt.preventDefault();
      
        nowIndex = $indicator.index(this);
        // alert(nowIdx);
      
        // 활성화표시
        $indicator.eq(nowIndex).parent().addClass('on').siblings().removeClass('on');
      
        // 컨테이너 이동
        $container.stop().animate({
            left : -320*nowIndex
          });
      });

    } else if (matchMedia('screen and (max-width: 425px)').matches) {
      $indicator.on('click',function(evt){
        evt.preventDefault();
      
        nowIndex = $indicator.index(this);
        // alert(nowIdx);
      
        // 활성화표시
        $indicator.eq(nowIndex).parent().addClass('on').siblings().removeClass('on');
      
        // 컨테이너 이동
        $container.stop().animate({
            left : -375*nowIndex
          });
      });

    } else if (matchMedia('screen and (max-width: 425px)').matches) {
      $indicator.on('click',function(evt){
        evt.preventDefault();
      
        nowIndex = $indicator.index(this);
        // alert(nowIdx);
      
        // 활성화표시
        $indicator.eq(nowIndex).parent().addClass('on').siblings().removeClass('on');
      
        // 컨테이너 이동
        $container.stop().animate({
            left : -425*nowIndex
          });
      });

    } else if (matchMedia('screen and (max-width: 768px)').matches) {
      $indicator.on('click',function(evt){
        evt.preventDefault();
        
        nowIndex = $indicator.index(this);
        // alert(nowIdx);
    
        // 활성화표시
        $indicator.eq(nowIndex).parent().addClass('on').siblings().removeClass('on');
    
        // 컨테이너 이동
        $container.stop().animate({
          left : -768*nowIndex
        });
      });
    } else {
      $indicator.on('click',function(evt){
        evt.preventDefault();
        
        nowIndex = $indicator.index(this);
        // alert(nowIdx);
    
        // 활성화표시
        $indicator.eq(nowIndex).parent().addClass('on').siblings().removeClass('on');
    
        // 컨테이너 이동
        $container.stop().animate({
          left : -1024*nowIndex
        });
      });
    }
    // 축제 끝
      
      
      
        





      
  // 근교여행지
  const $tabWrap = $('.suburd-wrap'),
        $tabsAll = $tabWrap.find('.tab__content > div'),
        $tab_menu = $tabWrap.find('.tab__menu li'),
        $tabLine = $('<div class="line"></div>').appendTo($tab_menu);

  $tabsAll.not(':first-of-type').hide();  
  $tab_menu.filter(':first-of-type').find(':first').width('100%')

  $tab_menu.each(function(i) {
  $(this).attr('data-tab', 'tab'+i);
  });

  $tabsAll.each(function(i) {
  $(this).attr('data-tab', 'tab'+i);
  });

  $tab_menu.on('click', function() {

  const dataTab = $(this).data('tab'),
    $gettabWrap = $(this).closest($tabWrap);

  $gettabWrap.find($tab_menu).removeClass('tab__active');
  $(this).addClass('tab__active');

  $gettabWrap.find('.line').width(0);
  $(this).find($tabLine).animate({'width':'100%'}, 'fast');
  $gettabWrap.find($tabsAll).hide();
  $gettabWrap.find($tabsAll).filter('[data-tab='+dataTab+']').show();
  
  });
// 근교여행지 끝


      });