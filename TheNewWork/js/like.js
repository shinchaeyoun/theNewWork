$(function(){

  // 서울 날씨
  let weatherIcon = {
    '01' : 'fas fa-sun',
    '02' : 'fas fa-cloud-sun',
    '03' : 'fas fa-cloud',
    '04' : 'fas fa-cloud-meatball',
    '09' : 'fas fa-cloud-sun-rain',
    '10' : 'fas fa-cloud-showers-heavy',
    '11' : 'fas fa-poo-storm',
    '13' : 'far fa-snowflake',
    '50' : 'fas fa-smog'
    };

    $.ajax({
    url:'http://api.openweathermap.org/data/2.5/weather?q=seoul&APPID=ee538e4ef0558df86ec8ca228598e2d2&units=metric',
    dataType:'json',
    type:'GET',
    success:function(data){
    var $Icon = (data.weather[0].icon).substr(0,2);
    var $Temp = Math.floor(data.main.temp) + 'º';
    var $city = data.name;
    $('.CurrIcon').append('<i class="' + weatherIcon[$Icon] +'"></i>');
    $('.CurrTemp').prepend($Temp);
    $('.City').append($city, ", KR");
    }
  });


  // 날짜 시간 분 초 실시간
  var week = new Array('Sunday,', 'Monday,', 'Tuesday,', 'Wednesday,', 'Thursday,', 'Friday,', 'Saturday,'); 
  var month = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'); 
  date = new Date();
  year = date.getFullYear();
  day = date.getDate();
  document.getElementById("current_date").innerHTML = 
  "<span style='padding-right:5px;'>" + 
  week[date.getDay()] + 
  "</span>" + 
  month[date.getMonth()] + 
  "<span style='padding-left:5px;'>" + 
  day + 
  "</span>" + 
  "," + 
  "<span style='padding-left:5px;'>"+
  year +
  "</span>"; 
  var Target = document.getElementById("clock");
  var Target_apm = document.getElementById("apm");

  function clock() {
      var time = new Date();
      var hours = time.getHours();
      var minutes = time.getMinutes();
      var seconds = time.getSeconds();
      var AmPm ="AM";
      if(hours > 12){   
          var AmPm ="PM";
          hours %= 24;
      }

      Target.innerText = 
      `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

      Target_apm.innerText = `${AmPm}`;

  }
  clock();
  setInterval(clock, 1000);

  // header-burger메뉴 토글
  const $burger = $('.toggleMenu');
  const $topBurger = $('.top_menu .burger');
  const $aside = $('.aside_menu');
  
  const button =()=>{
    $burger.on('click', ()=> { 
      $burger.toggleClass('toggle');
      $aside.toggleClass('active');
    });

    $topBurger.on('click', ()=> { 
      $burger.toggleClass('toggle');
      $aside.toggleClass('active');
    });
  };
    
  button();
  // header-burger

  // aside
  const $asideLi = $('.aside_menu .li');
  const $asideOi = $('.aside_menu .li ol');

  
  $asideLi.on('click',function(e){
    let asideIdx = $(this).index();
    e.preventDefault();

    $asideOi.eq(asideIdx).slideDown().parent().siblings().children('ol').slideUp();
  });

  // aside end


  // 흑백 전환
  const $body = $("body");
  const $backGround = $(".bg");
  const $red = $(".title a .red");
  const $onoff = $(".onoff");
  const $onoffLi = $(".onoff ul li");
  const $mainTit = $('#main h2');
  const $asideBg = $('.aside_menu');
  const $asideTit = $('.aside_menu > ul > li > a');
  const $aboutmeTit = $("#about_me .main_tit");
  const $workTit = $('#work .main_tit');
  const $footerRed = $('footer .logo .red');
  const $topBg = $('.top_menu');
  const $topLogo = $('.top_menu .logo a');
  const $workMainTit = $('#portfolio .main_tit');
  const $workSpan = $('#portfolio .text_box span');
  const $likeTit = $('#like .like_tab .title');
  const $travelTit = $('#like .travel .sec1 .text_wrap span');
  const $flimArrow = $('#like .fliming a');
  const $moviesTit = $('#like .movies span');
  const $musicTit = $('#like .music span');
  const $booksTit = $('#like .books span');

  $onoff.on('click', function (){ 
      $onoffLi.toggleClass('active');
      $backGround.toggleClass('active');
      $red.toggleClass('active');
      $mainTit.toggleClass('active'); 
      $asideBg.toggleClass('aside_bg'); 
      $asideTit.toggleClass('active'); 
      $aboutmeTit.toggleClass('active'); 
      $workTit.toggleClass('active');
      $footerRed.toggleClass('active');
      $topBg.toggleClass('active');
      $topLogo.toggleClass('active');
      $workMainTit.toggleClass('active');
      $workSpan.toggleClass('active');
      $likeTit.toggleClass('active');
      $travelTit.toggleClass('active');
      $flimArrow.toggleClass('active');
      $moviesTit.toggleClass('active');
      $musicTit.toggleClass('active');
      $booksTit.toggleClass('active');
  });

  
  // top menu show hide
  const $topMenu = $('.top_menu');
  const $headerHei = $('header').height();

  $(window).on('scroll',function (){
    const scrollTop = $(document).scrollTop();
    if($headerHei < scrollTop) {
      $topMenu.slideDown(200);
    } else {
      $topMenu.slideUp(200);
    }
  });

// travel 
const $wrapper = $('#like .travel .tab_wrap');
const $allTabs = $('#like .travel .tab_wrap .tab_content');
const $tabMenu = $('#like .travel .sec2 .tab_menu ul li');

$allTabs.not(':first-of-type').hide();  
$tabMenu.filter(':first-of-type').find(':first').height('100%')

$tabMenu.each(function(i) {
  $(this).attr('data-tab', 'tab'+i);
  console.log('menu');
});

$allTabs.each(function(i) {
  $(this).attr('data-tab', 'tab'+i);
  console.log('tab');
});


$tabMenu.on('click', function(e) {
  e.preventDefault();
  
  const dataTab = $(this).data('tab'),
        $getWrapper = $(this).closest($wrapper);
  
  $getWrapper.find($tabMenu).removeClass('active');
  $(this).addClass('active');
  
  $getWrapper.find($allTabs).slideUp();
  $getWrapper.find($allTabs).filter('[data-tab='+dataTab+']').slideDown();
});
// travel end

// 필름 슬라이드
const $fcontainer = $('#like .fliming .slide .slide_container ul');
const $fscreen = $('#like .fliming .screen');
const $fPrev = $('#like .fliming .fliming_wrap .slide .prev');
const $fNext = $('#like .fliming .fliming_wrap .slide .next');
const $fImg = $fcontainer.children('.slide_content').children('img');

let fslideIdx = 1; // 1~4


// 6번째 이미지 
const fNextImg = function (){
  const imgSrc = $('#like .fliming .slide_content').eq(10).children('img').attr('src');
  const imgAlt = $('#like .fliming .slide_content').eq(10).children('img').attr('alt');
  
  $fscreen.children('img').css({opacity:'0.6'}).stop().attr({
    src: imgSrc,
    alt: imgAlt
  }).animate({opacity:1},300);
};

const fPrevImg = function (){
  const imgSrc = $('#like .fliming .slide_content').eq(0).children('img').attr('src');
  const imgAlt = $('#like .fliming .slide_content').eq(0).children('img').attr('alt');
  
  $fscreen.children('img').css({opacity:'0.6'}).stop().attr({
    src: imgSrc,
    alt: imgAlt
  }).animate({opacity:1},300);
};

const fNextSlide = function(){
  if(fslideIdx < 4) {
    fslideIdx++;
  } else {
    fslideIdx=1;
  }

  $fcontainer.stop().animate({
    left:-1600
  },function(){
    $('#like .fliming .slide .slide_container ul li').slice(0,5).appendTo($fcontainer);
    $fcontainer.css({
      left:-800
    });
  });

}

const fPrevSlide = function(){
  console.log('now ind = ', fslideIdx);
  if(fslideIdx > 0) {
    fslideIdx--;
  } else {
    fslideIdx = 4;
  }

  $fcontainer.stop().animate({
    left: 0
  },function(){
    $('#like .fliming .slide .slide_container ul li').slice(15,20).prependTo($fcontainer);
    $fcontainer.css({
      left:-800
    });
  });
}

// 다음 버튼 클릭
$fNext.on('click',function (e){
  e.preventDefault();
  fNextSlide();
  fNextImg();
});

// 이전 버튼 클릭
$fPrev.on('click',function (e){
  e.preventDefault();
  fPrevSlide();
  fPrevImg();
});

// 이미지 클릭시 스크린 이미지 변경
$fImg.on('click',function(){
  const imgSrc = $(this).attr('src');
  const imgAlt = $(this).attr('alt');

  $fscreen.children('img').css({opacity:'0.6'}).stop().attr({
    src: imgSrc,
    alt: imgAlt
  }).animate({opacity:1},300);

});

// 필름 슬라이드 끝

// 음악 
const $mScreen = $('.music .box1 .frame .music_or_img');
const $mThum = $('.music .box2 .frame img');

const $music = $('#music');
const $musicTop = $music.offset().top;

  for(let idx = 0; idx<$mThum.length;idx++) {
    $mThum.on('click',function(){
      const mThumSrc = $(this).attr('src');
      $mScreen.attr('src',mThumSrc);
      $('.music_cover').css({
        opacity:0
      })
    });
  };

  // 음악 스크롤 트리거
  ScrollTrigger.name = "ScrollTrigger"; 
    gsap.registerPlugin(ScrollTrigger);
    
    let musicRight = gsap.timeline({ 
        scrollTrigger: {
            trigger: '#music', 
            scrub: true,  
            pin: true, 
            start: 'top',
            end: $music.offsetWidth, 
            ease: "power3",
            markers: false ,
            id : 'music'
        }
    });
    
    musicRight.to('.musicWrap', { 
      rotation:0,x:-500 ,y:0
    },1);
    musicRight.to('.musicLeft', { 
      rotation:0,x:-500 ,y:0
    },1);
    musicRight.to('.music_cover', { 
      opacity:1
    },1);
    musicRight.to('.musicWrap', { 
      rotation:0,x:-500*2 ,y:0
    },2);
    musicRight.to('.musicLeft', { 
      rotation:0,x:-500*2 ,y:0
    },2);
    musicRight.to('.music_cover', { 
      opacity:1
    },2);
// 음악 끝




}); // 준비핸들러 끝