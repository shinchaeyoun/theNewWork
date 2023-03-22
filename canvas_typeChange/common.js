$(function () {
    $('.wrap').load('index.html', function () {
        complete();
    });
    $(window).load(function () {
        complete();
    });

});

let loadCheck = 0,
    info, type,
    nowUrl,
    pagePrev, pageNext,
    totalPage,
    canvas,
    div,
    ctx,
    dragObj,
    dropObj,
    drawble = false,
    isRevert = true,
    $save,
    $url,
    $picture,
    $delete,
    $color,
    $colorPicker,
    $range,
    $dashLine,
    chColor,
    inputColor,
    saveColor,
    backup,
    sy, sx, ex, ey,
    dragCon,
    defaultX,
    defaultY,
    startX,
    startY,
    endX, endY,
    stIdx,
    originX,
    originY,
    lineArr,
    dropX, dropY,
    otherObj;

nowUrl = location.href;
urlNum = Number(nowUrl.split('/')[5].split('.')[0].split('canvas')[1]);

function complete() {
    ++loadCheck;

    if (loadCheck == 2) {
        info = new pageInfoFn();

        pagePrev = $('.page_controls .prev');
        pageNext = $('.page_controls .next');

        totalPage = info.canvasType.length;

        canvas = $("#canvas");
        div = $(".canvas_container");
        ctx = canvas[0].getContext("2d");
        dragBox = $('.start .dot');
        dragObj = $('.start .dragObj');
        dropObj = $('.end .dot');
        $save = $('.save_container');
        $url = $('.url_container');
        $picture = $('.picture_container');
        $delete = $('.delete_container');
        $color = $('.color');
        $colorPicker = $('.colorIp');
        $range = $('#lineRange');
        $dashLine = $('.dash_line');
        dragCon = $('.dot_container');
        startX = new Array();
        startY = new Array();
        originX = [];
        originY = [];
        lineArr = [];
        otherObj = [];

        init();
        canvasResize();
        reset();
        // saveImg();
        buttonEvent();
        page();
        pageControls();
    };
};

function page() {
    nowType = info.canvasType[urlNum - 1];

    canvasTypeFn(nowType);
};



function pageControls() {
    pagePrev.on('click', function () {
        urlNum--;
        if (urlNum < 1) {
            urlNum = 1;
            alert('First page');
        };
        pageNum = itostr(urlNum)
        pageMove(pageNum)
    });

    pageNext.on('click', function () {
        urlNum++;
        if (urlNum > totalPage) {
            urlNum = totalPage;
            alert('Last page');
        };
        pageNum = itostr(urlNum)
        pageMove(pageNum);
    });
};

function pageMove($pageNum) {
    changeUrl = nowUrl.replace(nowUrl.split('/')[5].split('.')[0].split('canvas')[1], $pageNum);
    location.href = changeUrl;
    console.log('');
};

function itostr($num) {
    return $num < 10 ? '0' + $num : $num;
};
