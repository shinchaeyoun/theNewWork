$(function(){
    const $gnb = $('nav .gnb > li > a');
    const arrTop = [];
    let gnbIdx = null;

    for(let i=0; i<$gnb.length; i++){
        arrTop[i] = $('section').eq(i).offset();
    };


    $gnb.click(function(e){
        e.preventDefault();

        gnbIdx = $gnb.index(this);

        $('html,body').stop().animate({
            scrollTop : arrTop[gnbIdx+1].top
        });
    });

});