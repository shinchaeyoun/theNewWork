$(function(){
// 흑백 전환
const $onoff = $(".onoff");

const $likeTit = $('#like .like_tab .title');
const $travelTit = $('#like .travel .sec1 .text_wrap span');
const $flimArrow = $('#like .fliming a');
const $moviesTit = $('#like .movies span');
const $musicTit = $('#like .music span');
const $booksTit = $('#like .books span');

$onoff.on('click', function (){ 
  $likeTit.toggleClass('active');
  $travelTit.toggleClass('active');
  $flimArrow.toggleClass('active');
  $moviesTit.toggleClass('active');
  $musicTit.toggleClass('active');
  $booksTit.toggleClass('active');
});

}); // 준비핸들러 끝