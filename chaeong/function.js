$(function(){

  // header 날짜 시간
  function setClock (){
    let now = new Date();

    const week = new Array ('Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday');
    const Month = new Array('January','February','March','April','May','June','July','August','September','October','November','December');

    let year = now.getFullYear(); //연  
    let month = now.getMonth();//월
    let monthLabel = Month[month];
    let date = now.getDate(); // 일
    date = date >= 10 ? date : '0' + date;
    let day = now.getDay(); // 요일
    let dayLabel = week[day];
    let hr = now.getHours(); // 시간
    hr = hr >= 10 ? hr : '0' + hr;
    let min = now.getMinutes(); // 분
    min = min >= 10 ? min : '0' + min;
    let sec = now.getSeconds(); // 초
    sec = sec >= 10 ? sec : '0' + sec;

    $('.day').text(dayLabel);
    $('.date').text(date);
    $('.month').text(monthLabel);
    $('.year').text(year);
    $('.clock').text(hr +':'+ min +':'+ sec)
  
  };

  $(window).on('load',function(){
    setClock();
    setInterval(setClock,1000);
  });





  const $mainMenu = $('header .main_nav ul li a');
  const $sideMenu = $('.scroll_down_nav ul li a');
  const $sideNav = $('.scroll_down_nav');
  const $moMenu = $('.main_nav');
  const $hideLi = $moMenu.children('ul').children('.hide');
  const $hideSpan = $hideLi.children('span');
  
  const arrTopval = [];
  let menuIdx = null;
  
  for (let i=0;i<$sideMenu.length;i++){
    arrTopval[i] = $('section').eq(i).offset().top;
  };
  
  // 메인 메뉴 클릭 이동
  $mainMenu.on('click',function(e){
    e.preventDefault();
    mainNowIdx = $mainMenu.index(this)+1;

    $('html,body').stop().animate({
      scrollTop : arrTopval[mainNowIdx]
    });
  });

  // 사이드 메뉴 클릭 이동
  $sideMenu.on('click',function(e){
    e.preventDefault();
    sideNowIdx = $sideMenu.index(this);

    $('html,body').stop().animate({
      scrollTop : arrTopval[sideNowIdx]+1
    });
  });


  // 스크롤 이벤트 구문
  $(window).on('resize load', function (){

    // 윈도우의 사이즈가 768px보다 큰 경우
    if(window.innerWidth >= 768) {
      console.log('768보다 큼');
      // 스크롤 이벤트 구문
      $(window).on('scroll',function(){    
        const scrollTop = $(this).scrollTop();
    
        for(let i=0;i<arrTopval.length;i++){
          // 사이드 메뉴 활성화표시
          if(scrollTop>=arrTopval[i]-10){
            $sideMenu.eq(i).parent().addClass('active').siblings().removeClass('active');
          } else if(scrollTop<arrTopval[0]){
            $sideMenu.parent().removeClass('active');
          }

          // 사이드 메뉴 & 어사이드 보이기
          if (scrollTop>=265){
            $sideNav.slideDown(300);
            $('aside').fadeIn(500);
          } else {
            $sideNav.slideUp(300);
            $('aside').fadeOut(300);
          }
        }
      });

      // 윈도우 사이즈가  768보다 작은 경우
    } else if(window.innerWidth <= 768) {
      console.log('768보다 작음');

      // 메인 메뉴 클릭 이동
      $mainMenu.on('click',function(e){
        e.preventDefault();
        mainNowIdx = $mainMenu.index(this)+1;

        $('html,body').stop().animate({
          scrollTop : arrTopval[mainNowIdx]-70
        });
      });
      
      // 스크롤 이벤트 구문
      $(window).on('scroll',function(){    
        const scrollTop = $(this).scrollTop();
    
        for(let i=0;i<arrTopval.length;i++){
          
          // 메뉴 활성화표시
          if(scrollTop>=arrTopval[i]-10){
            $mainMenu.eq(i).parent().addClass('active').siblings().removeClass('active');
          } else if(scrollTop<arrTopval[0]){
            $mainMenu.parent().removeClass('active');
          }
    
          // 메인 메뉴 & 어사이드 상단에 붙이기
          if (scrollTop>=126){
            $moMenu.css({
              position: 'fixed',
              top:0,
              width:100+'%'
            });
            
            $hideLi.show();
          } else {
            $moMenu.css({
              position: 'initial'
            });
            $hideLi.hide();
          };

          // li span 누르면 상단으로 올라가기
          $hideSpan.on('click',function(){
            $('html,body').stop().animate({
              scrollTop:0
            },500)
          });
        }
      });
    }
  });


  // aside click
  $('aside').on('click',function(){
    $('html,body').stop().animate({
      scrollTop:0
    })
  });



  // about me slide
  const $container = $('#about_me > .slide > .slide_container');
  const $nextBtn = $('#about_me > .slide .next');
  const $prevBtn = $('#about_me > .slide .prev');
  
  $nextBtn.on('click',function(e){
    e.preventDefault();
    console.log('click');
    $container.stop().animate({
      left:-(100)+'%'
    },function(){
      $('.slide > .slide_container > .slide_content').first().appendTo($container);
      console.log('move')
      $container.css({
        left:0
      });
    });
  });

  $prevBtn.on('click',function(){
    
    $container.stop().animate({
      left: 100+'%'
    },function(){
      $('.slide > .slide_container > .slide_content').last().prependTo($container);
      $container.css({
        left:0
      });
    });
  });


  // 포트폴리오 첫 페이지

  // 가로 스크롤 구문
  


  // gif 움직이게 하기
  $('.gif_img').mouseover(function() {
    $(this).attr("src", $(this).data("animated"))
  }),
  $('.gif_img').mouseout(function() {
    $(this).attr("src", $(this).data("static"))
  });
  
  // span hover
  const $hoverFrame = $('#portfolio .right');
  const $frame = $hoverFrame.children('.frame');
  const $hSpan = $hoverFrame.children('.span_bg').children('span');

  $hSpan.on('monseover',function(){
    console.log('ha');
  })
  $frame.hover(
    function(){
     
      console.log('click');
      $hSpan.css({
        'font-weight': 600,
        'transform': 'rotateY(' + 370 + 'deg)',
        color:'#f76202'
      });
    }
    ,
    function(){
      $hSpan.css({
        'font-weight': 'normal',
        'transform': 'rotateY(' + 0 + 'deg)',
        color:'#707070'
      });
    }
  )







});