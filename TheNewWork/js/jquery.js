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

  $onoff.on('click', function (){ 
      $onoffLi.toggleClass('active');
      $backGround.toggleClass('active');
      $mainTit.toggleClass('active'); 
      $red.toggleClass('active');
      $workTit.toggleClass('active');
      $footerRed.toggleClass('active');
  });
  

  // 어바웃미 이미지 영역 트리거
const $aboutme =  $('#about_me');
const $frameWid = $('.frame_wrap').children('li').width();
const $main =  $('#main');
const $mainHei =  $main.offsetTop;

$(window).on('resize load', function (){

  // 윈도우의 사이즈가 480px보다 큰 경우
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
            scrub: 1,  
            ease: "power3",
            markers:true 
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
            scrub: 1,  
            pin: true, 
            start: $main.$mainHei, 
            end: $aboutme.offsetWidth, 
            ease: "power3", 
            markers:false 
        }
    });
    textBox.to(".text_wrap", { 
        rotation:0,x:0 ,y:-480
    },2); 
    textBox.to(".text_wrap", { 
        rotation:0,x:0 ,y:-960
    },4); 
    textBox.to(".text_wrap", { 
        rotation:0,x:0 ,y:-1440
    },6); 
    textBox.to(".text_wrap", { 
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
            markers:true 
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
            scrub: 1,  
            pin: true, 
            start: $main.$mainHei, 
            end: $aboutme.offsetWidth, 
            ease: "power3", 
            markers:false 
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




}); // 준비핸들러 끝