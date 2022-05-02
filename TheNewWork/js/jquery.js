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
  const button =()=>{
    const $burger = $('.toggleMenu');
    const $aside = $('.aside_menu');
  
    $burger.on('click', ()=> { 
        $burger.toggleClass('toggle');
        $aside.toggleClass('active');
        console.log($aside.classList[1]);
      });
  };

  button();
  // header-burger

  // 흑백 전환
  const $body = $("body");
  const $backGround = $(".bg");
  const $mainTit = $("#about_me .main_tit");
  const $red = $(".title a .red");
  const $onoff = $(".onoff");
  const $onoffLi = $(".onoff ul li");
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
      $mainTit.toggleClass('active'); 
      $red.toggleClass('active');
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

  // 어바웃미 이미지 영역 트리거
const $aboutme =  $('#about_me');
const $frameWid = $('.frame_wrap').children('li').width();
const $main =  $('#main');
const $mainHei =  $main.offset().Top;

$(window).on('resize load', function (){

  // 윈도우의 사이즈가 480px보다 큰 경우)
  if(window.innerWidth >= 480) {
    console.log('480보다 큼');

    ScrollTrigger.name = "ScrollTrigger"; 
    gsap.registerPlugin(ScrollTrigger);
    
    let imgBox = gsap.timeline({ 
        scrollTrigger: {
            trigger: '#about_me', 
            pin: true, 
            start: $main.$mainHei, 
            end: $aboutme.offsetWidth, 
            scrub: true,  
            ease: "power3",
            markers: false 
        }
    });
    
    imgBox.to(".black", { 
      opacity:0
    },0);
    imgBox.to(".frame_wrap", { 
      rotation:0,x:-$frameWid ,y:0
    },2);
    imgBox.to(".frame_wrap", { 
      rotation:0,x:-$frameWid*2 ,y:0
    },4);
    imgBox.to(".frame_wrap", { 
      rotation:0,x:-$frameWid*3 ,y:0
    },6);
    imgBox.to(".black", { 
      opacity:1
    },8);
    
    
    let textBox = gsap.timeline({ 
        scrollTrigger: {
            trigger: '#about_me', 
            scrub: true,  
            pin: true, 
            start: $main.$mainHei, 
            end: $aboutme.offsetWidth, 
            ease: "power3", 
            markers:false 
        }
    });
    textBox.to("#about_me .text_wrap", { 
        rotation:0,x:0 ,y:-480
    },2); 
    textBox.to("#about_me .text_wrap", { 
        rotation:0,x:0 ,y:-960
    },4); 
    textBox.to("#about_me .text_wrap", { 
        rotation:0,x:0 ,y:-1440
    },6); 
    textBox.to("#about_me .text_wrap", { 
        rotation:0,x:0 ,y:-1440
    },8); 
  } else {
    console.log('480보다 작음');
    ScrollTrigger.name = "ScrollTrigger"; 
    gsap.registerPlugin(ScrollTrigger);
    
    let imgBox = gsap.timeline({ 
        scrollTrigger: {
            trigger: '#about_me', 
            pin: true, 
            start: $main.$mainHei, 
            end: $aboutme.offsetWidth, 
            scrub: 1,  
            ease: "power3",
            markers: false 
        }
    });
    
    imgBox.to(".black", { 
      opacity:0
    },0);
    imgBox.to(".frame_wrap", { 
      rotation:0,x:-$frameWid ,y:0
    },2);
    imgBox.to(".frame_wrap", { 
      rotation:0,x:-$frameWid*2 ,y:0
    },4);
    imgBox.to(".frame_wrap", { 
      rotation:0,x:-$frameWid*3 ,y:0
    },6);
    imgBox.to(".black", { 
      opacity:1
    },8);
    
    console.log($frameWid);
    
    let textBox = gsap.timeline({ 
        scrollTrigger: {
            trigger: '#about_me', 
            scrub: true,  
            pin: true, 
            start: $main.$mainHei, 
            end: $aboutme.offsetWidth, 
            ease: "power3", 
            markers: false 
        }
    });
    textBox.to(".text_wrap", { 
        rotation:0,x:0 ,y:-400
    },2); 
    textBox.to(".text_wrap", { 
        rotation:0,x:0 ,y:-800
    },4); 
    textBox.to(".text_wrap", { 
        rotation:0,x:0 ,y:-1200
    },6); 
    textBox.to(".text_wrap", { 
        rotation:0,x:0 ,y:-1200
    },8); 
  }
}); // resize load end


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
  console.log('now ind = ', fslideIdx);

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
const $mScreen = $('.music .box1 .frame img');
const $mThum = $('.music .box2 .frame img');
const $music = $('#music')
const $musicTop = $music.offset().top;
const $musicHei = $music.offset().height;

console.log($musicHei);


  for(let idx = 0; idx<$mThum.length;idx++) {
    $mThum.on('click',function(){
      const mThumSrc = $(this).attr('src');
      $mScreen.attr('src',mThumSrc);
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
            start: $main.$musicTop,
            end: $('#music').offset().height, 
            end: $music.offsetWidth, 
            ease: "power3",
            markers:false ,
            id : 'right'
        }
    });

    let musicLeft = gsap.timeline({ 
        scrollTrigger: {
            trigger: '#music',
            pin: true,
            // start: $('#music').offset().top,
            // end: $('#books').offset().top,
            scrub: true,
            ease: "power3",
            markers: false,
            id : 'left'
        }
    });
    
    musicRight.to('.musicWrap', { 
      rotation:0,x:-500 ,y:0
    },1);
    musicRight.to('.musicLeft', { 
      rotation:0,x:-500 ,y:0
    },1);
    musicRight.to('.musicWrap', { 
      rotation:0,x:-500*2 ,y:0
    },2);
    musicRight.to('.musicLeft', { 
      rotation:0,x:-500*2 ,y:0
    },2);
// 음악 끝




}); // 준비핸들러 끝