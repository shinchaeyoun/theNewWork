$(function(){
    const $gnb = $('nav .gnb > li > a');
    const arrTop = [];
    let gnbIdx = null;

    for(let i=0; i<$gnb.length; i++){
        arrTop[i] = $('section').eq(i).offset().top;
    };


    $gnb.click(function(e){
        //e.preventDefault();

        gnbIdx = $gnb.index(this);

        //$(this).parent().addClass('active').siblings().removeClass('active')

        $('html,body').stop().animate({
            scrollTop : arrTop[gnbIdx]
        });
    });

    $(window).scroll(function(){
        const scrollTop = $(this).scrollTop();

        for(let i=0; i<arrTop.length;i++){
            if(scrollTop >= arrTop[i] -100 ){
                $gnb.eq(i).parent().addClass('active').siblings().removeClass('active')
            }  else {
                $gnb.eq(i).parent().removeClass('on');
            }
        }
    });

});