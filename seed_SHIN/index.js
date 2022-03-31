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


  // function showImg(){
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
  

















});