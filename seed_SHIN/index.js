$(function(){

  const imgArr = new Array();
  imgArr[0] = 'https://shinchaeyoun.github.io/shin/seed_SHIN/img/img1.JPG';
  imgArr[1] = 'https://shinchaeyoun.github.io/shin/seed_SHIN/img/img2.JPG';
  imgArr[2] = 'https://shinchaeyoun.github.io/shin/seed_SHIN/img/img3.JPG';
  imgArr[3] = 'https://shinchaeyoun.github.io/shin/seed_SHIN/img/img4.JPG';
  imgArr[4] = 'https://shinchaeyoun.github.io/shin/seed_SHIN/img/img5.JPG';
  imgArr[5] = 'https://shinchaeyoun.github.io/shin/seed_SHIN/img/img6.JPG';
  imgArr[6] = 'https://shinchaeyoun.github.io/shin/seed_SHIN/img/img7.JPG';
  imgArr[7] = 'https://shinchaeyoun.github.io/shin/seed_SHIN/img/img8.JPG';
  imgArr[8] = 'https://shinchaeyoun.github.io/shin/seed_SHIN/img/img9.JPG';
  imgArr[9] = 'https://shinchaeyoun.github.io/shin/seed_SHIN/img/img10.JPG';
  imgArr[10] = 'https://shinchaeyoun.github.io/shin/seed_SHIN/img/img11.JPG';


  // 새로고침 이미지 변경
  $(window).load(function(){
    const showImg = function(){
      const $imgNum = Math.round(Math.random()*10);
      let $objImg1 = $('#introImg');
      let $objImg2 = $('#blurImg');

      $objImg1.attr('src',imgArr[$imgNum]);
      $objImg2.attr('src',imgArr[$imgNum]);
    };

    showImg();
  });
  
  const $svg = $('#svg__circle');
  const $bgMask = $('#bg_mask');
  const $rotate = $('#rotate_text');
  
  $(window).on('scroll',function(){
  $svg.css({
    width: 100 + this.scrollY,
    height : 100 + this.scrollY
  });

  $bgMask.css({
    clipPath: `circle(${50+this.scrollY/2}px at center)`
  });

  if(window.scrollY > 0){
    $rotate.css({
      width: 150+this.scrollY *1.5,
      height:150+this.scrollY*1.5,
      transform:`translate(-50%,-50%), rotate(${this.scrollY/2}deg)`,
    });
  }
  

  });















});