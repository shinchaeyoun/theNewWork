// $(function(){
//     // 어바웃미 이미지 영역 트리거
// const $aboutme =  $('#about_me');
// const $frameWid = $('.frame_wrap').children('li').width();
// const $main =  $('main');
// const $mainHei =  $main.offset().top;

// $(window).on('resize load', function (){

//   // 윈도우의 사이즈가 480px보다 큰 경우)
//   if(window.innerWidth >= 480) {
//     console.log('480보다 큼');

//     ScrollTrigger.name = "ScrollTrigger"; 
//     gsap.registerPlugin(ScrollTrigger);
    
//     let imgBox = gsap.timeline({ 
//         scrollTrigger: {
//             trigger: '#about_me', 
//             pin: true, 
//             start: $mainHei, 
//             end: $aboutme.offsetWidth, 
//             scrub: true,  
//             ease: "power3",
//             markers: false,
//             id:'abot me' 
//         }
//     });
    
//     imgBox.to(".black", { 
//       opacity:0
//     },0);
//     imgBox.to(".frame_wrap", { 
//       rotation:0,x:-$frameWid ,y:0
//     },2);
//     imgBox.to(".frame_wrap", { 
//       rotation:0,x:-$frameWid*2 ,y:0
//     },4);
//     imgBox.to(".frame_wrap", { 
//       rotation:0,x:-$frameWid*3 ,y:0
//     },6);
//     imgBox.to(".black", { 
//       opacity:1
//     },8);
    
    
//     let textBox = gsap.timeline({ 
//         scrollTrigger: {
//             trigger: '#about_me', 
//             scrub: true,  
//             pin: true, 
//             start: $main.$mainHei, 
//             end: $aboutme.offsetWidth, 
//             ease: "power3", 
//             markers:false 
//         }
//     });
//     textBox.to("#about_me .text_wrap", { 
//         rotation:0,x:0 ,y:-480
//     },2); 
//     textBox.to("#about_me .text_wrap", { 
//         rotation:0,x:0 ,y:-960
//     },4); 
//     textBox.to("#about_me .text_wrap", { 
//         rotation:0,x:0 ,y:-1440
//     },6); 
//     textBox.to("#about_me .text_wrap", { 
//         rotation:0,x:0 ,y:-1440
//     },8); 
//   } else {
//     console.log('480보다 작음');
//     ScrollTrigger.name = "ScrollTrigger"; 
//     gsap.registerPlugin(ScrollTrigger);
    
//     let imgBox = gsap.timeline({ 
//         scrollTrigger: {
//             trigger: '#about_me', 
//             pin: true, 
//             start: $main.$mainHei, 
//             end: $aboutme.offsetWidth, 
//             scrub: 1,  
//             ease: "power3",
//             markers: false 
//         }
//     });
    
//     imgBox.to(".black", { 
//       opacity:0
//     },0);
//     imgBox.to(".frame_wrap", { 
//       rotation:0,x:-$frameWid ,y:0
//     },2);
//     imgBox.to(".frame_wrap", { 
//       rotation:0,x:-$frameWid*2 ,y:0
//     },4);
//     imgBox.to(".frame_wrap", { 
//       rotation:0,x:-$frameWid*3 ,y:0
//     },6);
//     imgBox.to(".black", { 
//       opacity:1
//     },8);
    
//     console.log($frameWid);
    
//     let textBox = gsap.timeline({ 
//         scrollTrigger: {
//             trigger: '#about_me', 
//             scrub: true,  
//             pin: true, 
//             start: $main.$mainHei, 
//             end: $aboutme.offsetWidth, 
//             ease: "power3", 
//             markers: false 
//         }
//     });
//     textBox.to(".text_wrap", { 
//         rotation:0,x:0 ,y:-400
//     },2); 
//     textBox.to(".text_wrap", { 
//         rotation:0,x:0 ,y:-800
//     },4); 
//     textBox.to(".text_wrap", { 
//         rotation:0,x:0 ,y:-1200
//     },6); 
//     textBox.to(".text_wrap", { 
//         rotation:0,x:0 ,y:-1200
//     },8); 
//   }
// }); // resize load end
// });