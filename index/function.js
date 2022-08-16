$(function(){
    const $gnb = $('nav .gnb > li > a');
    const arrTop = [];
    let gnbIdx = null;

    for(let i=0; i<$gnb.length; i++){
        arrTop[i] = $('section').eq(i).offset().top;
    };

    $gnb.click(function(e){
        gnbIdx = $gnb.index(this);

        $('html,body').stop().animate({
            scrollTop : arrTop[gnbIdx]
        });
    });

    // pc 페이지네이션
    $(window).scroll(function(){
        const scrollTop = $(this).scrollTop();

        for(let i=0; i<arrTop.length;i++){
            if(scrollTop >= arrTop[i] -100 ){
                $gnb.eq(i).parent().addClass('active').siblings().removeClass('active')
            }  else {
                $gnb.eq(i).parent().removeClass('active');
            }
        }
    });

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


    // 반응형
    $(window).resize(function(){ 
        
        if (window.innerWidth < 768) {  
            // 메인 페이드슬라이드
            $('.main_visual .frame').hide();
            $('.main_visual .frame:first-child').show();

            setInterval(() => {
                $('.main_visual .frame:first-child').fadeOut().next().fadeIn().end().appendTo('.main_visual');

            }, 3000);
        } 
    
    }).resize();
    // 반응형 끝 


});

