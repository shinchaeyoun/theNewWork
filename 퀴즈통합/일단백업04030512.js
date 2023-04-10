$(function () {
    content = $('.quiz_content');
    $('.nextBtn').hide();
    $('.lastBtn').hide();

    typeDivision();
});

let pageNum = 0,
    content,
    resultArr = [],
    posCon,
    quizPos,
    nowCnt,
    resultBtn,
    nextBtn,
    lastBtn,
    $name,
    nowType,
    isTabMove = false;

function typeDivision() {
    nowType = content.eq(pageNum).attr('data-type');
    nowCnt = content.eq(pageNum);
    posCon = $('.questionPosition');
    quizPos = $('.questionPosition li');

    $name = content.eq(pageNum);
    resultBtn = $name.find($('.resultBtn'));
    nextBtn = $name.find($('.nextBtn'));
    lastBtn = $name.find($('.lastBtn'));

    content.hide();
    content.eq(pageNum).show();

    quizPos.removeClass('active');
    quizPos.eq(pageNum).addClass('active');

    if (nowType == 'single') {
        singleFn();
    } else if (nowType == 'essay') {
        essayFn();
    } else if (nowType == 'drawing') {
        drawingFn();
    } else if (nowType == 'resultPage') {
        resultPageFn();
    };


    lastBtn.on('click', function () {
        isTabMove = false;
        pageNum = content.length - 2;
        content.hide();
        content.eq(pageNum).show();
        posCon.hide();

        console.log('last btn click', isTabMove);
    });

    
    console.log('now page',pageNum);
};










function singleFn() {
    let userAns,
        // $name = content.eq(pageNum),
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
        //     if (userAns == ans[pageNum][0]) {
        //         resultArr.push(true);
        //         quizPos.eq(pageNum).addClass('correct');
        //     } else {
        //         resultArr.push(false);
        //         quizPos.eq(pageNum).addClass('incorrect');
        //     };

        //     answer.eq(ans[pageNum][0] - 1).addClass('correct');

        submitFn();
        // };
    });

    previewBtn.on('click', function () {
        answer.eq(ans[pageNum][0] - 1).addClass('correct');
    });

    nextBtn.on('click', nextQuiz);
};

function essayFn() {
    let ansArea = $name.find($('.input')),
        submitbtn = $name.find($('.submitBtn')),
        resultBtn = $name.find($('.resultBtn')),
        previewBtn = $name.find($('.preview')),
        nextBtn = $name.find($('.nextBtn'));

    submitbtn.on('click', function () {
        // userAns = ansArea.val();

        // if (userAns == '') {
        //     alert('please enter thr answer');
        // } else {
        //     if (userAns == ans[pageNum][0]) {
        //         resultArr.push(true);
        //         ansArea.css('color', 'blue');
        //         quizPos.eq(pageNum).addClass('correct');
        //     } else {
        //         resultArr.push(false);
        //         ansArea.css('color', 'red');
        //         quizPos.eq(pageNum).addClass('incorrect');
        //     };

        //     ansArea.val(ans[pageNum][0]);

        submitFn()
        // };
    });

    previewBtn.on('click', function () {
        ansArea.attr('placeholder', ans[pageNum][0]);
    });

    nextBtn.on('click', nextQuiz);
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
    nextBtn.on('click', nextQuiz);


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
        // if (correctArr.length >= maxNum) {
        //     correct();
        //     quizPos.eq(pageNum).addClass('correct');
        // } else if (incorrectArr.length >= 1) {
        //     incorrect();
        //     quizPos.eq(pageNum).addClass('incorrect');
        // };

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
        quizPos.eq(pageNum).addClass('correct');
    } else {
        quizPos.eq(pageNum).addClass('incorrect');
    };
};

function nextQuiz() {
    pageNum++;
    console.log(pageNum, 'next fn');
    typeDivision();
};

function resultPageFn() {
    posCon.hide();

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

    // 다시풀기
    retrtyBtn.on('click', function () {
        posCon.show();
        // 틀린 문제 다시 풀기. 모두 맞았으면 다시 풀기 버튼

        function wrongQu(e) {
            if (e == false) {
                return true;
            };
        };

        let wrongQ = resultArr.filter(wrongQu);

        for (let i = 0; i < wrongQ.length; i++) {
            mPage = i;
            break;
        };

        pageNum = mPage;
        typeDivision();
    });

    // 정답 보기
    resultBtn.on('click', function () {
        posCon.show();
        // 정답 및 해설보기. 첫번째 문제로 이동, 상단 버튼으로 탭 이동 그냥 볼 수 만 있움~ 다시 풀기 금지~ 
        isTabMove = true;
        
        pageNum = 0;

        tabMove();
        typeDivision();
        $('.nextBtn').hide();
        $('.lastBtn').show();
    });

    // 끝
    quizEndBtn.on('click',nextQuiz);

    console.log('isTabMove',isTabMove);
};

function tabMove() {
    console.log('tabMove fn',isTabMove);
    if (isTabMove) {
        console.log('tabMove fn if',isTabMove);
        quizPos.removeClass('active');
        quizPos.eq(pageNum).addClass('active');
    
        quizPos.on('click', function () {
            mPage = quizPos.index(this);
            pageNum = mPage;
            console.log('tab move fn pagenum = pipip', pageNum);
            typeDivision();
        });
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