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
    nowUrl,
    pagePrev, pageNext,
    totalPage;

nowUrl = location.href;
urlNum = Number(nowUrl.split('/')[4].split('.')[0].split('canvas')[1]);

function complete (){
    ++loadCheck;

    if(loadCheck == 2){
        info = new pageInfoFn();

        pagePrev = $('.page_controls .prev');
        pageNext = $('.page_controls .next');

        totalPage = info.canvasType.length;

        console.log(totalPage);
        
        init();
        canvasResize();
        reset();
        saveImg();
        buttonEvent();
        page();
        pageControls();
    };  
};

function page (){
    nowType = info.canvasType[urlNum - 1];

    canvasTypeFn(nowType);
};



function pageControls(){
    pagePrev.on('click', function(){
        urlNum--;
        if(urlNum < 1) {
            urlNum = 1;
            alert('First page');
        };
        pageNum = itostr(urlNum)
        pageMove(pageNum)
    });

    pageNext.on('click', function(){
        urlNum++;
        if(urlNum > totalPage){
            urlNum = totalPage;
            alert('Last page');
        };
        pageNum = itostr(urlNum)
        pageMove (pageNum);
    });
};

function pageMove ($pageNum){
    changeUrl = nowUrl.replace(nowUrl.split('/')[4].split('.')[0].split('canvas')[1],$pageNum);
    location.href = changeUrl;
    console.log('');
};

function itostr ($num){
    return $num < 10 ? '0'+$num : $num;
};