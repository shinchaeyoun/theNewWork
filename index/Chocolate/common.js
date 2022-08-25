$(function(){

  // 모바일 버거
  $('.burger').click(function(){
    $(this).toggleClass('active');
    $('.side_menu').toggleClass('active');
    $('body').toggleClass('noneScroll');

  });

  $('.side_menu li a').click(function(){
    $('.burger').removeClass('active');
    $('.side_menu').removeClass('active');
    $('body').removeClass('noneScroll');
  });

  // 메뉴 노출
  $('.right_nav .menu ul > li').mouseover(function(){
    console.log('??what')
    $(this).addClass('active').siblings().removeClass('active')
  });

  $('.right_nav .menu ul > li').mouseout(function(){
    $(this).removeClass('active')
  });
});
