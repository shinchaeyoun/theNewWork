$(function () {
    info = new pageInfoFn();

    content = $('.quiz_content');
    $('.nextBtn').hide();
    $('.lastBtn').hide();

    init();
    clickEventFn();
});

let pageNum = 0,
    resultArr = [],
    nowType, nowCnt,
    posCon, quizPos,
    content, $name,
    submitbtn, previewBtn, resultBtn, nextBtn, lastBtn,
    isTabMove = false,
    isReturn = false,
    retryBtn,
    resultViewBtn,
    quizEndBtn,
    $tabMenu,
    $tabs,
    tabNum,
    dataTab,
    wPage,
    retryArr = [],
    resultLi;

function init() {
    $tabMenu = $('.questionPosition li');
    $tabs = content;
    tabNum = pageNum;
    resultLi = $('.question_result');

    $tabs.each(function (i) {
        $(this).attr('data-tab', i);
    });
    $tabMenu.each(function (i) {
        $(this).attr('data-tab', i);
    });

    pageMove(pageNum);

};

function quizSetting() {
    // 그냥 typeDivision에 ㅗㅌㅇ합 가능하지않을까

    // if(nowType == 'single'){
    //     console.log('if***');
    // } else if (nowType == 'essay') {
    //     console.log('else***');
    // } else if (nowType == 'drawing') {
    //     console.log('drawing***');
    // }

    // 타이틀
    // for (let i = 0; i < content.length-1; i++) {
    //     
    //     content.eq(pageNum).find($('.answerTit').eq(i)).text(info.quizTxt[pageNum][i + 1]);

    //     console.log(i);
    // };

    $.each($('.questionNum'), function(i){
        
    });
    

    for (let i = 0; i < content.length-1; i++) {
        console.log(content.length-1,i);
        $('.questionNum').eq(i).text(i+1);
        $('.questionTitle').eq(i).text(info.quizTxt[i][0]);
    };

    if (info.type[pageNum] == 'single') {
        for(let i=0;i<info.quizTxt[pageNum].length-2;i++){
            console.log(pageNum);
            content.eq(pageNum).find($('.answer')).append('<div class="answerTit"></div>');
            
            $('.answerTit').eq(i).text(info.quizTxt[pageNum][i+1]);
        };

    } else if (info.type[pageNum] == 'essay') {
        console.log('nowtype', nowType);

        content.eq(pageNum).find($('.answer')).append('<input type="text" class="input">');

    } else if (info.type[pageNum] == 'drawing') {
        console.log('nowtype', nowType);

        content.eq(pageNum).find($('.answer')).append(`
            <canvas id="canvas_answer"></canvas>
            <canvas id="canvas"></canvas>

            <div class="fake">
                <div class="wrap">
                    <div class="fakeObj"></div>
                    <div class="fakeObj"></div>
                    <div class="fakeObj"></div>
                </div>
            </div>
            <div class="objContainer">
                <div class="content drag">
                    <div class="obj dragObj" data-ans="1"></div>
                    <div class="obj dragObj" data-ans="2"></div>
                    <div class="obj dragObj" data-ans="3"></div>
                </div>

                <div class="content drop">
                    <div class="obj dropObj" data-ans="2"></div>
                    <div class="obj dropObj" data-ans="1"></div>
                    <div class="obj dropObj" data-ans="3"></div>
                </div>
            </div>
        `);

    } else if (nowType == 'resultPage') {
        console.log('nowtype', nowType);
    };






    for (let i = 0; i < $('.dropObj').length; i++) {
        let type = info.type.indexOf('drawing');

        $('.dragObj').eq(i).attr('data-ans', i + 1);
        $('.dropObj').eq(i).attr('data-ans', info.ans[type][i]);
    };
};

function clickEventFn() {
    $name = content.eq(pageNum);
    submitbtn = $('.submitBtn');
    resultBtn = $('.resultBtn');
    nextBtn = $('.nextBtn');
    lastBtn = $('.lastBtn');
    retryBtn = $('.retry');
    resultViewBtn = $('.resultView');
    quizEndBtn = $('.quizEnd');

    nextBtn.off().on('click', nextFn);
    retryBtn.off().on('click', function () {
        isReturn = true;

        for (let i = 0; i < resultArr.length; i++) {
            if (resultArr[i] == false) {
                $tabMenu.removeClass('incorrect');
                wPage = i;
                break;
            } else if (resultArr[i] == true) {
                retryArr.push(true);

                if (retryArr.length == resultArr.length) {
                    wPage = 0;
                    $tabMenu.removeClass('correct');
                };
            };

            if ($tabMenu.eq(i).hasClass('incorrect')) {
                $tabMenu.eq(i).removeClass('incorrect');
            };
        };

        resultArr.splice($.inArray(false, resultArr));
        retryArr = [];

        pageNum = wPage;
        pageMove(pageNum);

        resultBtn.show();
        nextBtn.hide();
        lastBtn.hide();
    });
    resultViewBtn.off().on('click', function () {
        isTabMove = true;

        resultBtn.hide();
        nextBtn.hide();
        lastBtn.show();

        pageNum = 0;
        pageMove(pageNum);
    });
    lastBtn.on('click', function () {
        pageNum = content.length - 1;
        pageMove(pageNum);
    });
    quizEndBtn.on('click', function () {
        $('.container').append('<div class="endPage"><span>end</span><p class="exit"></p></div>');
        $('.exit').on('click', function () {
            $('.endPage').remove();
        });
    });
};

function nextFn() {
    pageNum++;
    pageMove(pageNum);

    resultBtn.show();
    nextBtn.hide();
};


function pageMove($pageNum) {
    nowType = content.eq($pageNum).attr('data-type');

    content.hide();
    content.eq($pageNum).show();

    $tabMenu.removeClass('active');
    $tabMenu.eq($pageNum).addClass('active');

    typeDivision();
};

function submitFn() {
    resultBtn.hide();
    nextBtn.show();

    if (resultArr[pageNum] == true) {
        $tabMenu.eq(pageNum).removeClass('incorrect');
        $tabMenu.eq(pageNum).removeClass('correct');
        $tabMenu.eq(pageNum).addClass('correct');
    } else {
        $tabMenu.eq(pageNum).removeClass('incorrect');
        $tabMenu.eq(pageNum).removeClass('correct');
        $tabMenu.eq(pageNum).addClass('incorrect');
    };
};


function typeDivision() {
    quizSetting();

    $tabMenu.show();

    if (nowType == 'single') {
        singleFn();
    } else if (nowType == 'essay') {
        essayFn();
    } else if (nowType == 'drawing') {
        drawingFn();
    } else if (nowType == 'resultPage') {
        resultPageFn();
    };

    if (isReturn) {
        if ($tabMenu.eq(pageNum).hasClass('correct')) {
            nextFn();
        };
    };

    if (isTabMove) {
        $tabMenu.off().on('click', function () {
            dataTab = $(this).data('tab');
            $tabMenu.removeClass('active');
            $tabMenu.filter('[data-tab=' + dataTab + ']').addClass('active');
            $tabs.hide();
            $tabs.filter('[data-tab=' + dataTab + ']').show();
        });
    } else {
        $tabMenu.off('click');
    };

    
};











function resultPageFn() {
    $tabMenu.hide();
    isReturn = false;
    isTabMove = false;

    for (let i = 0; i < resultArr.length; i++) {
        resultLi.eq(i).removeClass('true false');

        if (resultArr[i] == true) {
            resultLi.eq(i).addClass('true');
        } else {
            resultLi.eq(i).addClass('false');
        };
    };

    if (!resultLi.hasClass('false')) {
        retryBtn.text('다시 풀기');
    };
};

function singleFn() {
    let $name = content.eq(pageNum),
        userAns,
        answer = $name.find($('.answerTit')),
        submitbtn = $name.find($('.submitBtn')),
        previewBtn = $name.find($('.preview'));

    answer.off().on('click', function () {
        userAns = answer.index(this) + 1;

        $(this).attr('data-ans', userAns);
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    submitbtn.off().on('click', function () {
        // if (userAns == undefined) {
            // alert('please choice answer');
        // } else {
            if (userAns == ans[pageNum][0]) {
                resultArr.push(true);
            } else {
                resultArr.push(false);
            };
            answer.eq(ans[pageNum][0] - 1).addClass('correct');

            answer.off('click');
            submitFn();
        // };
    });

    previewBtn.off().on('click', function () {
        answer.eq(ans[pageNum][0] - 1).addClass('correct');
    });

    if (isReturn) {
        answer.eq(ans[pageNum][0] - 1).removeClass('correct');
        answer.removeAttr('data-ans');
        answer.removeClass('active');
    };

    if (isTabMove) {
        answer.off('click');
    };
};

function essayFn() {
    let $name = content.eq(pageNum),
        ansArea = $name.find($('.input')),
        submitbtn = $name.find($('.submitBtn')),
        previewBtn = $name.find($('.preview'));

    submitbtn.off().on('click', function () {
        userAns = ansArea.val();

        // if (userAns == '') {
            // alert('please enter thr answer');
        // } else {
            if (userAns == ans[pageNum][0]) {
                resultArr.push(true);
                ansArea.css('color', 'blue');
                $tabMenu.eq(pageNum).addClass('correct');
            } else {
                resultArr.push(false);
                ansArea.css('color', 'red');
                $tabMenu.eq(pageNum).addClass('incorrect');
            };

            ansArea.val(ans[pageNum][0]);
            ansArea.attr('readonly', true);
            submitFn();
        // };
    });

    previewBtn.off().on('click', function () {
        ansArea.attr('placeholder', ans[pageNum][0]);
    });

    if (isReturn) {
        ansArea.css('color', '#000');
        ansArea.val('');
        ansArea.attr('placeholder', '');
        ansArea.attr('readonly', false);
    };

    if (isTabMove) {
        ansArea.attr('readonly', true);
    };
};

function drawingFn() {
    let $name = content.eq(pageNum),
        submitbtn = $name.find($('.submitBtn')),
        previewBtn = $name.find($('.preview')),
        nextBtn = $name.find($('.nextBtn'));

    let canvas = $name.find($("#canvas"));
    let canvasAns = $name.find($("#canvas_answer"));
    let canDiv = $name.find($(".answer"));
    let ctx = canvas[0].getContext("2d");
    let ctxAns = canvasAns[0].getContext("2d");

    let dragObj = $name.find($('.dragObj')),
        dropObj = $name.find($('.dropObj')),
        objCon = $name.find($('.objContainer')),
        radius,
        startX = [],
        startY = [],
        originX = [],
        originY = [],
        checkArr = [],
        edAns = [],
        stIdx,
        otherObj,
        isRevert = false;

    canvasInit();
    dragDropFn();

    submitbtn.off().on('click', answerCheck);
    previewBtn.off().on('click', ansPreview);

    nextBtn.off().on('click', function () {
        for (let i = 0; i < dragObj.length; i++) {
            dragObj.eq(i).offset({
                top: originY[i],
                left: originX[i]
            });
        };

        pageNum++;
        pageMove(pageNum);

        resultBtn.show();
        nextBtn.hide();
    });

    function canvasInit() {
        canvas[0].width = canDiv.width();
        canvas[0].height = canDiv.height();
        canvasAns[0].width = canDiv.width();
        canvasAns[0].height = canDiv.height();

        ctx.strokeStyle = '#000';
        ctx.lineWidth = 3;
        ctxAns.lineWidth = 6;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctxAns.lineCap = 'round';
        ctxAns.lineJoin = 'round';
    };

    function dragDropFn() {
        dragObj.each(function (e) {
            radius = $(this).width() / 2;

            $(this).attr('start', true);
            $(this).attr('data-originalLeft', $(this).position().left);
            $(this).attr('data-originalTop', $(this).position().top);

            defaultX = Number($(this).attr('data-originalLeft')) + $(this).width();
            defaultY = Number($(this).attr('data-originalTop')) + $(this).width();

            startX[e] = ((defaultX + radius) - objCon.offset().left) + canvas.offset().left;
            startY[e] = ((defaultY + radius) - objCon.offset().top) + canvas.offset().top;

            originX[e] = $(this).offset().left;
            originY[e] = $(this).offset().top;

            edAns[e] = dropObj.eq(e).attr('data-ans') - 1;
        });

        dragObj.draggable({
            start: function () {
                stIdx = dragObj.index(this);
                otherObj = dragObj.not($(this));
                checkArr[stIdx] = 'start';

                drawFn();
            },
            drag: function () {
                drawFn();
            },
            revert: function (e) {
                if (e == false) {
                    isRevert = false;
                    return true;
                } else {
                    isRevert = true;
                };
            },
            revertDuration: 10,
            stop: function () {
                if ($(this).hasClass('return')) {
                    $(this).removeClass('return');
                    $(this).offset({
                        top: originY[stIdx],
                        left: originX[stIdx]
                    });
                    $(this).attr('start', true);
                };

                drawFn();
            },
        });
        dropObj.droppable({
            drop: function (e, ui) {
                let uiDrag = ui.draggable;
                let dropAns = $(this).attr('data-ans');

                uiDrag.attr('data-user-ans', dropAns);

                let dropX = $(this).offset().left;
                let dropY = $(this).offset().top;

                uiDrag.offset({
                    top: dropY,
                    left: dropX
                });

                for (let i = 0; i < otherObj.length; i++) {
                    if (uiDrag.hitTestObject(otherObj.eq(i))) {
                        hitTest(uiDrag);
                    } else {
                        uiDrag.draggable({
                            revert: function (e, ui) {
                                if (e == false) {
                                    hitTest($(this));
                                } else {
                                    $(this).attr('start', false);
                                    isRevert = true;
                                };
                            }
                        });
                    };
                };
            }
        });

        if (isReturn) {
            dragObj.draggable('enable');
        };
    };


    function drawFn() {
        ctx.clearRect(0, 0, canvas.width(), canvas.height());

        for (let i = 0; i < dragObj.length; i++) {
            endX = (dragObj.eq(i).offset().left + radius) - canvas.offset().left;
            endY = (dragObj.eq(i).offset().top + radius) - canvas.offset().top;

            if (checkArr[i] == 'start') {
                ctx.beginPath();
                ctx.moveTo(startX[i], startY[i]);
                ctx.lineTo(endX, endY);
                ctx.stroke();
            };
        };
    };

    function correctDraw() {
        ctxAns.clearRect(0, 0, canvas.width(), canvas.height());

        for (let i = 0; i < dragObj.length; i++) {
            let correntX = (dropObj.eq(edAns[i]).offset().left + radius) - canvas.offset().left;
            let correntY = (dropObj.eq(edAns[i]).offset().top + radius) - canvas.offset().top;

            ctxAns.beginPath();
            ctxAns.moveTo(startX[i], startY[i]);
            ctxAns.lineTo(correntX, correntY);
            ctxAns.stroke();
        };
    };

    function answerCheck() {
        let correctArr = [],
            incorrectArr = [],
            lineArr = [],
            maxNum = dragObj.length;

        dragObj.each(function () {
            let dataAns = $(this).attr('data-ans');
            let userAns = $(this).attr('data-user-ans');

            if (dataAns == userAns) {
                correctArr.push(true);
            } else {
                incorrectArr.push(false);
            };

            if ($(this).attr('start') == 'false') {
                lineArr.push($(this).attr('start'));
            };
        });

        // if (lineArr.length >= maxNum) {
            if (correctArr.length >= maxNum) {
                correct();
                $tabMenu.eq(pageNum).addClass('correct');
            } else if (incorrectArr.length >= 1) {
                incorrect();
                $tabMenu.eq(pageNum).addClass('incorrect');
            };

            dragObj.draggable('disable', true);
            submitFn();
        // } else {
            // alert('drawing line');
        // };
    };

    function ansPreview() {
        ctxAns.strokeStyle = '#eb0000';
        correctDraw();
    };
    function correct() {
        ctxAns.strokeStyle = '#0071ff';
        resultArr.push(true);
        correctDraw();
    };
    function incorrect() {
        resultArr.push(false);
        ansPreview();
    };
    function hitTest($obj) {
        isRevert = false;
        $(this).attr('start', true);
        $obj.addClass('return');
        $obj.draggable({
            revert: true,
            revertDuration: 10
        });
    };

    if (isTabMove) {
        dragObj.draggable('disable', true);
    };

};

$.fn.hitTestObject = function (obj) {
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    var compare = obj.offset();
    compare.right = compare.left + obj.outerWidth();
    compare.bottom = compare.top + obj.outerHeight();
    return (!(compare.right < bounds.left || compare.left > bounds.right || compare.bottom < bounds.top || compare.top > bounds.bottom));
};