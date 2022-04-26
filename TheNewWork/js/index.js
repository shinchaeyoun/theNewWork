// 서울 날씨 
$(document).ready(function() {
    
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
    })
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
    const burger = document.querySelector('.toggleMenu');
    const aside = document.querySelector('.aside_menu');
    burger.addEventListener('click', ()=> { 
        burger.classList.toggle('toggle');
        aside.classList.toggle('active');
        console.log(aside.classList[1]);
    });
};
button();
// header-burger

const body = document.querySelector("body");
const backGround = document.querySelector(".bg");
const mainTit = document.querySelectorAll(".main_tit");
const red = document.querySelectorAll(".title a .red");
const onoff = document.querySelector(".onoff");
const onoffLi = document.querySelector(".onoff ul li");
onoff.addEventListener('click', ()=> { 
    onoffLi.classList.toggle('active');
    backGround.classList.toggle('active');
    for(a=0; a < mainTit.length; a++){
        mainTit[a].classList.toggle('active'); 
    }
    for(i=0; i < red.length; i++){
    red[i].classList.toggle('active');
    }
});


// 어바웃미 이미지 영역 트리거
const aboutme =  document.querySelector('#about_me');
const aboutmeHei = aboutme.offsetTop;
const winHei = window.innerHeight;

window.addEventListener('DOMContentLoaded',function(){
   
  ScrollTrigger.name = "ScrollTrigger"; 
  gsap.registerPlugin(ScrollTrigger);

  let imgBox = gsap.timeline({ 
      scrollTrigger: {
          trigger: aboutme, 
          pin: true, 
          start: `${aboutmeHei - 170}`, 
          end: aboutme.offsetWidth, 
          scrub: 1,  
          ease: "power1",
          markers:false 
      }
  });

  imgBox.to(".black", { 
    opacity:0
  },0);
  imgBox.to(".frame_wrap", { 
    rotation:0,x:-530 ,y:0
  },1);
  imgBox.to(".frame_wrap", { 
    rotation:0,x:-1060 ,y:0
  },2);
  imgBox.to(".frame_wrap", { 
    rotation:0,x:-1590 ,y:0
  },3);
  imgBox.to(".black", { 
    opacity:1
  },4);

  

  let textBox = gsap.timeline({ 
      scrollTrigger: {
          trigger: aboutme, 
          scrub: 1,  
          pin: true, 
          start: `${aboutmeHei - 170}`, 
          end: aboutme.offsetWidth, 
          ease: "power3", 
          markers:false 
      }
  });
  textBox.to(".text_wrap", { 
      rotation:0,x:0 ,y:-480
  },1); 
  textBox.to(".text_wrap", { 
      rotation:0,x:0 ,y:-960
  },2); 
  textBox.to(".text_wrap", { 
      rotation:0,x:0 ,y:-1440
  },3); 
  textBox.to(".text_wrap", { 
      rotation:0,x:0 ,y:-1440
  },4); 
});


