$(function () {
    init();
});

let nowPage = 1,
    resultArr = [],
    retryArr = [],
    tabMenu,
    resultLi,
    submitbtn,
    previewBtn,
    resultBtn,
    nextBtn,
    lastBtn,
    isReturn = false,
    isTabMove = false,
    wPage,
    quizPage,
    resultPage,
    dataTab,
    retryBtn,
    resultViewBtn,
    quizEndBtn,
    questionNum,
    questionTit,
    answerArea,
    ctxBackup,
    dragObjTop = [],
    dragObjLeft = [],
    ansArr = [],
    dropArr = [],
    correctAlt,
    incorrectAlt,
    chanceCount;

function init() {
    resizeFn();

    for (let i = 0; i < quizType.length; i++) {
        let pageNumber = i + 1;
        $('.questionPosition ul').append('<li class="pagePos">' + pageNumber + '</li>');

        $('.quizResult ul').append(`
            <li class="question">
                <span class="questionNum">`+ pageNumber + `</span>
                <p class="question_result"></p>
            </li>
        `);
    };

    resultBtn = $('.resultBtn');
    submitbtn = $('.submitBtn');
    previewBtn = $('.preview');
    nextBtn = $('.nextBtn');
    lastBtn = $('.lastBtn');
    tabMenu = $('.questionPosition li');
    resultLi = $('.question_result');
    quizPage = $('.quizPage');
    resultPage = $('.resultPage');
    retryBtn = $('.retry');
    resultViewBtn = $('.resultView');
    quizEndBtn = $('.quizEnd');
    questionNum = $('.quizPage .questionNum');
    questionTit = $('.quizPage .questionTitle');
    answerArea = $('.answer');
    correctAlt = $('.result .correct');
    chanceAlt = $('.result .chance');
    incorrectAlt = $('.result .incorrect');

    nextBtn.off().on('click', nextFn);
    lastBtn.on('click', function () {
        nowPage = quizType.length;
        pageMove(nowPage);
    });

    pageMove(nowPage);
};
function resizeFn() {
    const originHei = $('.container').css('height');

    defaultSet();
    $(window).on('resize', defaultSet);

    function defaultSet() {
        // var container_scale = "0.5";
        // var a = $(window).width()/800;
        // var h = $(window).height()/600;
        // var container_scale = a;
        // container_scale ? a : b
        // container_scale = b;
        // $("#content_inner").css("transform", "scale(" + container_scale + ")");

        // if ($(window).innerHeight() < 700) {
        //     $('.container').css('height', $(window).innerHeight() - 150);
        //     if ($(window).innerHeight() - 150 <= 300) {
        //         $('.container').css('height', 300)
        //     };
        // } else {
        //     $('.container').css('height', originHei);
        // };

        let wid = ($(window).width() / $('.container').width()).toFixed(1);
        let hei = ($(window).height() / $('.container').height()).toFixed(1);
        // // let wid = ($(window).width() / $('.container').width()).toFixed(2);
        // // let hei = ($(window).height() / $('.container').height()).toFixed(2);

        // console.log('wid =', wid, '// hei =', hei);

        // console.log($(window).width(), $('.container').width());
        let container_scale = (wid < hei) ? wid : hei;

        // console.log('container_scale', container_scale);
        // $('.container').css('transform', 'scale('+ container_scale +')');
        // $('.container').css("transform-origin","50% 50%");


        var wrapTop = $('.container').height()/2;
        var wrapLeft = $('.container').width()/2;

        $('.container').css("transform","scale(" + container_scale + ")");
        $('.container').css("transform-origin","50% 50%");

        $('.container').css("top",50 + "%");
        $('.container').css("left",50 + "%");
        $('.container').css("margin-top", - wrapTop+ "px");
        $('.container').css("margin-left", - wrapLeft+ "px");
    };

};
function setQuiz() {
    // ans = ans[nowPage];

    answerArea.empty();

    if (nowPage > quizType.length - 1) {
        quizPage.hide();
        resultPage.show();
        tabMenu.hide();
    } else {
        quizPage.show();
        resultPage.hide();
        tabMenu.show();

        questionNum.text(nowPage + 1);
        questionTit.text(quizTxt[nowPage][0]);
    };


    if (quizType[nowPage] == 0) {
        singleFn();
    } else if (quizType[nowPage] == 1) {
        essayFn();
    } else if (quizType[nowPage] == 2) {
        drawingFn();
    } else {
        resultPageFn();
    };

    if (isReturn) {
        if (tabMenu.eq(nowPage).hasClass('correct')) {
            resultArr.push(true);
            nextFn();
        };
    };

    if (isTabMove) {
        tabMenu.off('click').on('click', function () {
            nowPage = tabMenu.index($(this));
            pageMove(nowPage);
        });
    } else {
        tabMenu.off('click');
    };

    previewBtn.removeClass('active');
};

function resultPageFn() {
    isReturn = false;
    isTabMove = false;

    resultLi.removeClass('true false');
    for (let i = 0; i < resultArr.length; i++) {
        if (resultArr[i] == true) {
            resultLi.eq(i).addClass('true');
        } else {
            resultLi.eq(i).addClass('false');
        };
    };

    if (!resultLi.hasClass('false')) {
        retryBtn.text('다시 풀기');
    } else {
        retryBtn.text('틀린 문제 다시 풀기');
    };

    retryBtn.off().on('click', function () {
        isReturn = true;

        for (let i = 0; i < resultArr.length; i++) {
            if (resultArr[i] == false) {
                tabMenu.removeClass('incorrect');
            } else if (resultArr[i] == true) {
                retryArr.push(true);

                if (retryArr.length == resultArr.length) {
                    tabMenu.removeClass('correct');
                };
            };

            if (tabMenu.eq(i).hasClass('incorrect')) {
                tabMenu.eq(i).removeClass('incorrect');
            };
        };

        resultArr = [];
        retryArr = [];

        resultBtn.show();
        nextBtn.hide();
        lastBtn.hide();

        nowPage = 0;
        pageMove(nowPage);
    });

    resultViewBtn.off().on('click', function () {
        isTabMove = true;

        resultBtn.hide();
        nextBtn.hide();
        lastBtn.show();

        nowPage = 0;
        pageMove(nowPage);
    });

    quizEndBtn.on('click', function () {
        $('.container').append('<div class="endPage"><span>end</span><p class="exit"></p></div>');
        $('.exit').on('click', function () {
            $('.endPage').remove();
        });
    });
};

function pageMove($nowPage) {
    tabMenu.removeClass('active');
    tabMenu.eq($nowPage).addClass('active');

    setQuiz();
};

function nextFn() {
    nowPage++;

    if (nowPage > quizType.length - 1) {
        quizPage.hide();
        resultPage.show();
    };

    resultBtn.show();
    nextBtn.hide();

    pageMove(nowPage);
};

function submitFn() {
    resultBtn.hide();
    nowPage == quizType.length - 1 ? lastBtn.show() : nextBtn.show();

    if (resultArr[nowPage] == true) {
        tabMenu.eq(nowPage).removeClass('incorrect');
        tabMenu.eq(nowPage).removeClass('correct');
        tabMenu.eq(nowPage).addClass('correct');
    } else {
        tabMenu.eq(nowPage).removeClass('incorrect');
        tabMenu.eq(nowPage).removeClass('correct');
        tabMenu.eq(nowPage).addClass('incorrect');
    };
};

function resultAlt($val) {
    $val.show();
    setTimeout(() => {
        $val.fadeOut(500);
    }, 600);
};


function singleFn() {
    chanceCount = 1;

    for (let i = 0; i < quizTxt[nowPage].length - 1; i++) {
        answerArea.append('<div class="answerTit">' + quizTxt[nowPage][i + 1] + '</div>');
    };

    let userAns,
        answer = $('.answerTit'),
        userAnsIdx,
        userAnsArr = [];

    answer.off().on('click', function () {
        $(this).toggleClass('active');
        userAns = answer.index(this) + 1;
        userAnsIdx = userAnsArr.indexOf(userAns);

        if ($(this).hasClass('active')) {
            userAnsArr.push(userAns);
        } else {
            userAnsArr.splice(userAnsIdx, 1);
        };
    });

    submitbtn.off().on('click', function () {
        if (isAll()) {
            alert('please choice answer');
        } else {
            if (isAns()) {
                resultAlt(correctAlt);
                lastSet(true);
            } else {
                if (chanceCount > 0) {
                    resultAlt(chanceAlt);
                    chanceCount--;
                    answer.removeClass('active');
                    userAnsArr = [];
                } else {
                    resultAlt(incorrectAlt);
                    lastSet(false);
                };
            };

        };
    });
    previewBtn.off().on('click', function () {
        $(this).toggleClass('active');
        for (let i = 0; i < ans.length; i++) {
            answer.eq(ans[nowPage][i] - 1).toggleClass('correct');
        };
    });

    if (isReturn) {
        answer.eq(ans[nowPage][0] - 1).removeClass('correct');
        answer.removeClass('active');
    };
    if (isTabMove) {
        answer.eq(ansArr[0]).addClass('active');
        answer.eq(ans[nowPage][0] - 1).addClass('correct');
        answer.off('click');
    };

    function isAll() {
        return userAnsArr.length < ans.length;
    };
    function isAns() {
        let correctArr = [];

        if (userAnsArr.length <= ans.length) {
            for (let i = 0; i < ans.length; i++) {
                for (let e = 0; e < userAnsArr.length; e++) {
                    if (userAnsArr[e] == ans[i]) {
                        correctArr.push(true);
                    };
                };
            };
        };
        return correctArr.length == ans.length;
    };
    function lastSet($bool) {
        for (let i = 0; i < ans.length; i++) {
            answer.eq(ans[nowPage][i] - 1).addClass('correct');
        };
        ansArr[nowPage] = new Array();
        ansArr[nowPage].push(userAns);
        resultArr.push($bool);
        answer.off('click');
        submitFn();
    };
};
function essayFn() {
    chanceCount = 1;

    for (let i = 0; i < ans[nowPage].length; i++) {
        answerArea.append('<input type="text" class="input">');
    };

    let userAns,
        ansArea = $('.input'),
        userAnsArr = [];

    ansArea.attr('placeholder', '내용을 입력 해주세요.');

    submitbtn.off().on('click', function () {
        userAnsArr = [];

        for (let i = 0; i < ansArea.length; i++) {
            userAns = ansArea.eq(i).val();
            userAnsArr.push(userAns);
        };

        if (isAll()) {
            alert('please enter the answer');
        } else {
            if (isAns()) {
                resultAlt(correctAlt);
                lastSet(true, 'blue')
            } else {
                if (chanceCount > 0) {
                    resultAlt(chanceAlt);
                    chanceCount--;

                    ansArea.val('');
                    for (let i = 0; i < ansArea.length; i++) {
                        for (let e = 0; e < ansArea.length; e++) {
                            if (userAnsArr[i] == ans[e]) {
                                ansArea.eq(i).val(userAnsArr[i]);
                            };
                        };
                    };
                } else {
                    resultAlt(incorrectAlt);
                    for (let i = 0; i < ans.length; i++) {
                        ansArea.eq(i).val(ans[nowPage][i]);
                    };
                    lastSet(false, 'red');
                };
            };

            ansArr[nowPage] = new Array();
            ansArr[nowPage].push(userAns);
        };
    });

    previewBtn.off().on('click', function () {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            for (let i = 0; i < ans.length; i++) {
                ansArea.eq(i).attr('placeholder', ans[nowPage][i]);
            };
        } else {
            ansArea.attr('placeholder', '내용을 입력 해주세요.');
        };
    });

    if (isReturn) {
        ansArea.css('color', '#000');
        ansArea.val('');
        ansArea.attr('placeholder', '');
        ansArea.attr('readonly', false);
    };

    if (isTabMove) {
        ansArea.attr('readonly', true);
        ansArea.val(ans[nowPage][0]);
        ansArea.css('color', 'red');
    };

    function isAll() {
        return userAns == '';
    };
    function isAns() {
        let correctArr = [];

        for (let i = 0; i < ans.length; i++) {
            for (let e = 0; e < userAnsArr.length; e++) {
                if (userAnsArr[e] == ans[i]) {
                    correctArr.push(true);
                    console.log(userAnsArr,'if');
                    break;
                } else {
                    console.log(userAnsArr,'else');
                };
            };
        };
        return correctArr.length == ans.length;
    };
    function lastSet($bool, $color) {
        ansArea.css('color', $color);
        ansArea.attr('readonly', true);
        resultArr.push($bool);
        submitFn();
    };
};


function drawingFn() {
    chanceCount = 1;

    answerArea.append(`
        <canvas id="canvas_answer"></canvas>
        <canvas id="canvas"></canvas>

        <div class="fake">
            <div class="wrap"></div>
        </div>
        <div class="objContainer">
            <div class="content drag"></div>
            <div class="content drop"></div>
        </div>
    `);

    for (let i = 0; i < ans[nowPage].length; i++) {
        $('.fake .wrap').append('<div class="fakeObj"></div>');
        $('.drag').append('<div class="obj dragObj"></div>');
        $('.drop').append('<div class="obj dropObj"></div>');
    };

    let canvas = $("#canvas"),
        canvasAns = $("#canvas_answer"),
        canDiv = $(".answer"),
        ctx = canvas[0].getContext("2d"),
        ctxAns = canvasAns[0].getContext("2d"),
        dragCon = $('.drag'),
        dragObj = $('.dragObj'),
        dropObj = $('.dropObj'),
        fakeObj = $('.fakeObj'),
        radius,
        defaultX,
        defaultY,
        startX = [],
        startY = [],
        originX = [],
        originY = [],
        dragAns = [],
        dropAns = [],
        checkArr = [],
        lineArr = [],
        positionX = [],
        positionY = [],
        stIdx,
        otherObj,
        isRevert = false,
        answerPadding = parseInt(answerArea.css('padding')),
        containerPadding = parseInt($('.container').css('padding')),
        totalPagging = answerPadding + containerPadding,
        maxNum = dragObj.length,
        tBool = false,
        that;

    dropObj.each(function (e) {
        $(this).attr('data-ans', ans[nowPage][e]);
    });
    dragObj.each(function (e) {
        $(this).attr('data-ans', e + 1);
    });
    fakeObj.each(function (e) {
        positionX[e] = $(this).offset().left;
        positionY[e] = $(this).offset().top;
    });

    $(window).resize(function () {
        console.log('??');
        fakeObj.each(function (e) {
            positionX[e] = $(this).offset().left;
            positionY[e] = $(this).offset().top;
        });

        if ($(window).innerWidth() < 480) {
            dragObj.each(function (e) {
                radius = $(this).width() / 2;

                defaultX = fakeObj.eq(e).position().left + radius;
                defaultY = fakeObj.eq(e).position().top + radius;

                startX[e] = (dragCon.offset().left + defaultX) - canvas.offset().left;
                startY[e] = (dragCon.offset().top + defaultY) - canvas.offset().top;
            });
        } else {
            fakeObj.each(function (e) {
                radius = $(this).width() / 2;

                defaultX = $(this).position().left + radius;
                defaultY = $(this).position().top + radius;

                startX[e] = (dragCon.offset().left + defaultX) - canvas.offset().left;
                startY[e] = (dragCon.offset().top + defaultY) - canvas.offset().top;
            });
        };

        canvasInit();

        if (previewBtn.hasClass('active')) {
            ansPreview();
        };

        if (resultArr[nowPage] == true) {
            ctxAns.strokeStyle = '#0071ff';
            draw(ctxAns, dropObj, dropAns);
        } else if (resultArr[nowPage] == false) {
            ansPreview();
        };

        dragObj.each(function (e) {
            if ($(this).attr('start') == 'false') {
                let idx = Number($(this).attr('data-index'));
                $(this).offset({
                    top: dropObj.eq(idx).offset().top,
                    left: dropObj.eq(idx).offset().left
                });
            };
        });

        if (isTabMove) {
            draw(ctx, dropObj, dropAns);
        };

        draw(ctx, dragObj, dragAns);
    });

    objSet();
    canvasInit();
    dragDropFn();

    function objSet() {
        dragObj.each(function (e) {
            radius = $(this).width() / 2;

            $(this).attr('start', true);
            $(this).attr('data-originalLeft', $(this).position().left);
            $(this).attr('data-originalTop', $(this).position().top);

            defaultX = Number($(this).attr('data-originalLeft')) + radius;
            defaultY = Number($(this).attr('data-originalTop')) + radius;

            startX[e] = (dragCon.offset().left + defaultX) - canvas.offset().left;
            startY[e] = (dragCon.offset().top + defaultY) - canvas.offset().top;

            originX[e] = $(this).offset().left;
            originY[e] = $(this).offset().top;

            dragAns[e] = dragObj.eq(e).attr('data-ans') - 1;
            dropAns[e] = dropObj.eq(e).attr('data-ans') - 1;
        });
    };
    function canvasInit() {
        canvas[0].width = canDiv.width();
        canvas[0].height = canDiv.height();
        canvasAns[0].width = canDiv.width();
        canvasAns[0].height = canDiv.height();

        ctx.strokeStyle = '#000';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctxAns.lineWidth = 6;
        ctxAns.lineCap = 'round';
        ctxAns.lineJoin = 'round';
    };
    function dragDropFn() {
        let dropX;
        let dropY;
        let bool = false;
        let dragIdx,
            dropIdx;

        dragObj.draggable({
            start: function () {
                stIdx = dragObj.index(this);
                otherObj = dragObj.not($(this));
                checkArr[stIdx] = 'start';

                draw(ctx, dragObj, dragAns);
            },
            drag: function () {
                draw(ctx, dragObj, dragAns);

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

                dragIdx = dragObj.index(this);

                if ($(this).hasClass('return')) {
                    $(this).removeClass('return');
                    $(this).offset({
                        top: originY[stIdx],
                        left: originX[stIdx]
                    });
                    $(this).attr('start', true);
                };

                if (tBool) {
                    dropX = dropObj.eq(dropIdx).offset().left;
                    dropY = dropObj.eq(dropIdx).offset().top;

                    $(this).offset({
                        top: dropY,
                        left: dropX
                    });

                } else {
                    $(this).offset({
                        top: positionY[stIdx],
                        left: positionX[stIdx]
                    });
                };

                draw(ctx, dragObj, dragAns);
                tBool = false;
            },
        });
        dropObj.droppable({
            drop: function (e, ui) {
                tBool = true;
                dropIdx = dropObj.index(this);
                let uiDrag = ui.draggable;
                let dropAns = $(this).attr('data-ans');

                uiDrag.attr('data-index', dropObj.index(this));

                uiDrag.attr('data-user-ans', dropAns);

                for (let i = 0; i < otherObj.length; i++) {
                    if (uiDrag.hitTestObject(otherObj.eq(i))) {
                        hitTest(uiDrag);
                    } else {
                        uiDrag.draggable({
                            revert: function (e, ui) {
                                if (e == false) {
                                    $(this).offset({
                                        top: originY[stIdx],
                                        left: originX[stIdx]
                                    });
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
    function draw($ctx, $obj, $arr) {
        $ctx.clearRect(0, 0, canvas.width(), canvas.height());

        for (let i = 0; i < $obj.length; i++) {
            endX = ($obj.eq($arr[i]).offset().left + radius) - canvas.offset().left;
            endY = ($obj.eq($arr[i]).offset().top + radius) - canvas.offset().top;

            if (checkArr[i] == 'start') {
                $ctx.beginPath();
                $ctx.moveTo(startX[i], startY[i]);
                $ctx.lineTo(endX, endY);
                $ctx.stroke();
            } else {
                $ctx.beginPath();
                $ctx.moveTo(startX[i], startY[i]);
                $ctx.lineTo(endX, endY);
                $ctx.stroke();
            };
        };
    };
    function answerCheck() {
        let correctArr = [],
            incorrectArr = [];

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

            dropArr.push(userAns);
        });

        if (isAll()) {
            if (isAns(correctArr, maxNum)) {
                resultAlt(correctAlt);
                correct();
                lastSet();
            } else if (isAns(incorrectArr, 1)) {
                if (chanceCount > 0) {
                    resultAlt(chanceAlt);
                    chanceCount--;
                    dragObj.attr('start', true);
                    ctx.clearRect(0, 0, canvas.width(), canvas.height());
                    for (let i = 0; i < dragObj.length; i++) {
                        dragObj.eq(i).offset({
                            top: positionY[i],
                            left: positionX[i]
                        });
                    };
                } else {
                    resultAlt(incorrectAlt);
                    incorrect();
                    lastSet();
                };
            };

            ctxBackup = ctx.getImageData(0, 0, canvas.width(), canvas.height());

            ansArr[nowPage] = new Array();
            ansArr[nowPage].push(ctxBackup);
        } else {
            alert('drawing line');
        };

        lineArr = [];
    };
    function ansPreview() {
        if (isTabMove) {
            ctxAns.strokeStyle = '#0071ff';
        } else {
            ctxAns.strokeStyle = '#eb0000';
        };
        draw(ctxAns, dropObj, dropAns);
    };
    function correct() {
        ctxAns.strokeStyle = '#0071ff';
        resultArr.push(true);
        draw(ctxAns, dropObj, dropAns);
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

    submitbtn.off().on('click', answerCheck);
    previewBtn.off().on('click', function () {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            ansPreview();
        } else {
            ctxAns.clearRect(0, 0, canvas.width(), canvas.height());
        };
    });
    nextBtn.off().on('click', function () {
        for (let i = 0; i < dragObj.length; i++) {
            dragObj.eq(i).offset({
                top: originY[i],
                left: originX[i]
            });
        };

        resultBtn.show();
        nextBtn.hide();

        nowPage++;
        pageMove(nowPage);
    });

    if (isTabMove) {
        dragObj.draggable('disable', true);
        dragObj.attr('start', false);

        draw(ctx, dropObj, dropAns);
        ansPreview();

        for (let i = 0; i < dragObj.length; i++) {
            let dropNum = Number(dropArr[i]) - 1;

            dragObj.eq(i).offset({
                top: dropObj.eq(dropNum).offset().top,
                left: dropObj.eq(dropNum).offset().left
            });
        };
    };

    function isAll() {
        return lineArr.length >= maxNum;
    };
    function isAns($arr, $num) {
        return $arr.length >= $num;
    };
    function lastSet() {
        dragObj.draggable('disable', true);
        submitFn();
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