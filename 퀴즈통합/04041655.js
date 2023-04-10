$(function () {
    content = $('.quiz_content');
    $('.nextBtn').hide();
    $('.lastBtn').hide();

    init();
    clickEventFn();

});

let pageNum = 0,
    resultArr = [],
    nowType,
    nowCnt,
    posCon,
    quizPos,
    content,
    $name,
    submitbtn,
    previewBtn,
    resultBtn,
    nextBtn,
    lastBtn,
    isTabMove = false,
    isRetry = false,
    retryBtn,
    resultViewBtn,
    quizEndBtn,
    $tabMenu,
    $tabs,
    tabNum,
    dataTab,
    test;

function clickEventFn() {
    submitbtn = $('.submitBtn');
    resultBtn = $('.resultBtn');
    nextBtn = $('.nextBtn');
    lastBtn = $('.lastBtn');
    retryBtn = $('.retry');
    resultViewBtn = $('.resultView');
    quizEndBtn = $('.quizEnd');

    submitbtn.on('click', function () {
        // resultBtn.hide();
        // nextBtn.show();

        // if (resultArr[pageNum] == true) {
        //     quizPos.eq(pageNum).addClass('correct');
        // } else {
        //     quizPos.eq(pageNum).addClass('incorrect');
        // };
    });

    nextBtn.on('click', function () {
        pageNum++;
        pageMove(pageNum);

        resultBtn.show();
        nextBtn.hide();
    });

    retryBtn.on('click', function () {
        for(let i=0;i<$tabMenu.length;i++){
            if($tabMenu.eq(i).hasClass('incorrect')){
                $tabMenu.eq(i).removeClass('incorrect');
                resultArr[i] == null;
            };
        };

        for (let i = 0; i < resultArr.length; i++) {
            if (resultArr[i] == null) {
                // resultLi.eq(i).addClass('true');
                // $tabMenu.eq(i).addClass('correct');
                console.log(resultArr[i]);
            };
        };
        

        // isReturn = true;
        
        // pageNum = 0;
        // pageMove(pageNum);
    //     content.hide();
    // content.eq(pageNum).show();

        // console.log('ans[pageNum][0]',ans[pageNum][0]);
    });

    resultViewBtn.on('click', function () {
        isTabMove = true;

        resultBtn.hide();
        nextBtn.hide();
        lastBtn.show();

        pageNum = 0;
        init();
    });

    lastBtn.on('click', function () {
        isTabMove = false;
        pageMove(3);
    });

    quizEndBtn.on('click', function () {
        $('.container').append('<div class="endPage"><span>end</span><p class="exit"></p></div>');
        $('.exit').on('click', function () {
            console.log('exit click');
            $('.endPage').remove();
        });
    });


};


function pageMove($pageNum) {
    nowType = content.eq($pageNum).attr('data-type');
    $name = content.eq($pageNum);

    // $tabs.hide();
    // $tabs.filter('[data-tab=' + $pageNum + ']').show();
    // $tabMenu.removeClass('active');
    // $tabMenu.filter('[data-tab=' + $pageNum + ']').addClass('active');

    content.hide();
    content.eq($pageNum).show();

    $tabMenu.removeClass('active');
    $tabMenu.eq($pageNum).addClass('active');

    typeDivision();
};

function init() {
    $tabMenu = $('.questionPosition li'),
    $tabs = content,
    tabNum = pageNum;

    resultLi = $('.question_result');


    $tabs.each(function (i) {
        $(this).attr('data-tab', i);
    });

    $tabMenu.each(function (i) {
        $(this).attr('data-tab', i);
    });
    

    pageMove(pageNum);


    // position click move
    if (isTabMove) {
        $tabMenu.on('click', function () {
            dataTab = $(this).data('tab');
            console.log(dataTab);

            $tabMenu.removeClass('active');
            $tabMenu.filter('[data-tab=' + dataTab + ']').addClass('active');
            $tabs.hide();
            $tabs.filter('[data-tab=' + dataTab + ']').show();
        });
    };
};

function typeDivision() {
    // $tabMenu.show();

    if (nowType == 'single') {
        singleFn();
    } else if (nowType == 'essay') {
        essayFn();
    } else if (nowType == 'drawing') {
        drawingFn();
    } else if (nowType == 'resultPage') {
        resultPageFn();
        // $tabMenu.hide();
    };

    for (let i = 0; i < resultArr.length; i++) {
        if (resultArr[i] == true) {
            resultLi.eq(i).addClass('true');
            $tabMenu.eq(i).addClass('correct');
        } else {
            resultLi.eq(i).addClass('false');
            $tabMenu.eq(i).addClass('incorrect');
        };
    };
};



































let isReturn = false;


function singleFn() {
    let userAns,
        answer = $name.find($('.answerTit')),
        submitbtn = $name.find($('.submitBtn')),
        previewBtn = $name.find($('.preview'));

    answer.on('click', function () {
        userAns = answer.index(this) + 1;

        $(this).attr('data-ans', userAns);

        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    submitbtn.on('click', function () {
        // if (userAns == undefined) {
        //     alert('please choice answer')
        // } else {
            if (userAns == ans[pageNum][0]) {
                resultArr.push(true);
            } else {
                resultArr.push(false);
            };

            answer.eq(ans[pageNum][0] - 1).addClass('correct');

            submitFn();
        // };
    });

    previewBtn.on('click', function () {
        answer.eq(ans[pageNum][0] - 1).addClass('correct');
    });

    if(isReturn){
        console.log(pageNum);
        answer.eq(ans[pageNum][0] - 1).removeClass('correct');
    };
};

function essayFn() {
    let ansArea = $name.find($('.input')),
        submitbtn = $name.find($('.submitBtn')),
        previewBtn = $name.find($('.preview'));


    submitbtn.on('click', function () {
        userAns = ansArea.val();

        // if (userAns == '') {
        //     alert('please enter thr answer');
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

            submitFn();
        // };
    });

    previewBtn.on('click', function () {
        ansArea.attr('placeholder', ans[pageNum][0]);
    });

    
    if(isReturn){
        console.log('ssss');
        ansArea.css('color','#000');
        ansArea.val('');
        ansArea.attr('placeholder', '');
    };
};

function drawingFn() {
    let $name = $('.page3'),
        resultBtn = $name.find($('.resultBtn')),
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

    submitbtn.on('click', answerCheck);
    previewBtn.on('click', ansPreview);

    if(isReturn){
        console.log(isReturn,'isReturn false');
    }

    function canvasInit() {
        canvas[0].width = canDiv.width();
        canvas[0].height = canDiv.height();
        canvasAns[0].width = canDiv.width();
        canvasAns[0].height = canDiv.height();

        ctx.strokeStyle = '#000';
        ctx.lineWidth = 3;
        ctxAns.lineWidth = 3;
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
                otherObj = dragObj.not($(this)); // hit test

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
        // ctx.clearRect(0, 0, canvas.width(), canvas.height());
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

            submitFn();
        // } else {
        //     alert('drawing line');
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
};

function submitFn() {
    resultBtn.hide();
    nextBtn.show();

    if (resultArr[pageNum] == true) {
        $tabMenu.eq(pageNum).addClass('correct');
    } else {
        $tabMenu.eq(pageNum).addClass('incorrect');
    };
};

function nextQuiz() {
    pageNum++;
    console.log(pageNum, 'next fn');
    typeDivision();
};

function resultPageFn() {
    // posCon.hide();

    let resultLi = $('.question_result'),
        retrtyBtn = $('.retry'),
        resultBtn = $('.resultView'),
        quizEndBtn = $('.quizEnd'),
        mPage;


    //  정답 체크
    for (let i = 0; i < resultArr.length; i++) {
        if (resultArr[i] == true) {
            resultLi.eq(i).addClass('true');
        } else {
            resultLi.eq(i).addClass('false');
        };
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