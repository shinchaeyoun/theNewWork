$(function(){
    $('.wrap').load('index.html', function(){
        complete ();
    });
    $(window).load(function () {
        complete ();
    });

});

let loadCheck = 0,
    info,type,
    nowUrl;

nowUrl = location.href;
urlNum = Number(nowUrl.split('/')[4].split('.')[0].split('canvas')[1]);

function complete (){
    ++loadCheck;

    if(loadCheck == 2){
        info = new pageInfoFn();
        
        init();
        canvasResize();
        reset();
        saveImg();
        buttonEvent();
        page();
    };  
};

function page (){
    nowType = info.canvasType[urlNum - 1];

    canvasTypeFn(nowType);
};