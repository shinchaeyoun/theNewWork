// 전역 변수 선언
let canvas,
    div,
    ctx,
    startDot,
    endDot,
    dragObj,
    dropObj,
    drawble = false,
    dropble = false,
    lineble = false,
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
    dragBal = false,
    dropBal = true,
    defaultX,
    defaultY,
    startX,
    startY,
    endArea,
    defaultendX,
    defaultendY,
    stIdx,
    edIdx,
    originX,
    originY,
    dropNum,
    ogX, ogY,
    overNum,
    test,
    restoreArr, arrIndex,
    lineArr, lineIdx,
    eventX,
    eventY;
;

$(window).load(function () {
    // 전역 변수 객체 등록; 캔버스 오브젝트 가져오기;
    canvas = $("#canvas");
    div = $(".canvas_container");
    ctx = canvas[0].getContext("2d");
    startDot = $('.start .move_dot');
    endDot = $('.end .dot');
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

    dropNum = 0;

    startX = new Array();
    startY = new Array();
    endX = new Array();
    endY = new Array();
    endEachX = [];
    endEachY = [];
    originX = [];
    originY = [];

    dropIdx = [];

    test = [];

    restoreArr = [];
    arrIndex = -1;


    lineArr = [];
    lineIdx = -1;

    actions = [];
    

    // 이벤트 함수 호출
    init();
    canvasResize();
    saveImg();
    buttonEvent();
});

//이벤트 함수
function init() {
    // 그림판
    // canvas.on('mousedown', drawPc);
    // canvas.on('mousemove', drawPc);
    // canvas.on('mouseup', drawPc);
    // canvas.on('mouseout', drawPc);

    // 직선그리기-------------
    // canvas.on('mousedown', drawingPc);
    // canvas.on('mousemove', drawingPc);
    // canvas.on('mouseup', drawingPc);
    // canvas.on('mouseup',drawingPc);

    // 모바일
    // canvas.on('touchstart', drawMo);
    // canvas.on('touchend', drawMo);
    // canvas.on('touchcancle', drawMo);
    // canvas.on('touchmove', drawMo);

    // 선긋기
    dragdropable();
    // ddable();




    colorChange();
    lineChange();
};


function ddable() {
    dragBox.each(function (e) {
        radius = $(this).width() / 2;

        $(this).attr('data-originalLeft', $(this).position().left);
        $(this).attr('data-originalTop', $(this).position().top);

        defaultX = $(this).attr('data-originalLeft');
        defaultY = $(this).position().top;

        startX[e] = ((Number(defaultX) + radius) + dragCon.offset().left) - canvas.offset().left;
        startY[e] = ((Number(defaultY) + radius) + dragCon.offset().top) - canvas.offset().top;

        originX[e] = $(this).find('.dragObj').offset().left;
        originY[e] = $(this).find('.dragObj').offset().top;

        dragObj.draggable({
            start: function (e, ui) {
                stIdx = dragObj.index(this);
                backup = ctx.getImageData(0, 0, canvas.width(), canvas.height());
                
                // if(!$(this).hasClass('hi')){
                // } else {
                //     dropObj.droppable('option', 'disabled', false)
                //     ctx.clearRect(0, 0, canvas.width(), canvas.height())
                // };
            },
            drag: function (e, ui) {
                lineToY = (e.clientY - canvas.offset().top);
                lineToX = (e.clientX - canvas.offset().left);
    
                ctx.putImageData(backup, 0, 0);
                ctx.beginPath();
                ctx.moveTo(startX[stIdx], startY[stIdx]);
                ctx.lineTo(lineToX, lineToY);
                ctx.stroke();
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
            },
            revert: function (e, ui) {
                if (e == false) {
                    isRevert = false;
                    
                    // $(this).offset({
                    //     top: originY[stIdx],
                    //     left: originX[stIdx]
                    // });

                    console.log('revert if');
                    return true;
                } else {
                    isRevert = true;
                };
                console.log('revert');
            },
            // revertDuration: 100,
            stop: function (e, ui){
                // $(this).addClass('restart');

                if (!isRevert) {
                    $(this).offset({
                        top: originY[stIdx],
                        left: originX[stIdx]
                    });
                }
                // console.log('stop');
            }
        });
    });


    dropObj.each(function(e){
        dropObj.droppable({
            activate: function(e, ui){
                
            },
            over: function (e, ui) {
                $(this).find('.dropObj').addClass('active');

                dropy = $(this).find('.dropObj').offset().top;
                dropx = $(this).find('.dropObj').offset().left;

                ui.draggable.addClass('hi');
            },
            out: function (e, ui) {
                $(this).find('.dropObj').removeClass('active');
                $(this).removeClass('test');
                $(this).removeClass('enter');
                ui.draggable.removeClass('hi');
            },
            drop: function (e, ui) {
                $(this).addClass('dragFinish');
                ui.draggable.addClass('hi');

                ui.draggable.offset({
                    top: dropy,
                    left: dropx
                });

                if($(this).hasClass('enter')){
                    ui.draggable.draggable('option','revert',true);
                    console.log('has class enter');
                };

                // console.log($(this))
                // console.log($(this).find(ui.draggable))

                // $(this).droppable('option', 'disabled', true)
            },
            deactivate: function (e, ui){
                // create: function (e, ui){
                if($(this).hasClass('dragFinish')){
                    $(this).addClass('enter');
                };

                // console.log(ui.draggable.data());
                // console.log($(this));
            },
            
        });

    });

    
};


// 선긋기, 드래그 드랍
function dragdropable() {
    $('.button_container').append('<div class="test"></div>');
    $('.test').on('click', function(){
        console.log(lineArr,lineIdx);
        ctx.putImageData(lineArr[lineIdx], canvas.width(), canvas.height())
    });

    dragBox.each(function (e) {
        radius = $(this).width() / 2;
        
        $(this).find('.dragObj').attr('data-drag',true);

        $(this).attr('data-originalLeft', $(this).position().left);
        $(this).attr('data-originalTop', $(this).position().top);

        defaultX = $(this).attr('data-originalLeft');
        defaultY = $(this).position().top;

        startX[e] = ((Number(defaultX) + radius) + dragCon.offset().left) - canvas.offset().left;
        startY[e] = ((Number(defaultY) + radius) + dragCon.offset().top) - canvas.offset().top;

        originX[e] = $(this).find('.dragObj').offset().left;
        originY[e] = $(this).find('.dragObj').offset().top;
    });

    dragObj.draggable({
        start: function () {
            stIdx = dragObj.index(this);
        },
        drag: function (e, ui) {
            lineToY = (e.clientY - canvas.offset().top);
            lineToX = (e.clientX - canvas.offset().left);

            ctx.clearRect(0, 0, canvas.width(), canvas.height());
            // ctx.putImageData(lineArr[lineIdx],0,0);
            
            redraw ();
        },
        revert: function (e, ui) {
            if (e == false) {
                isRevert = false;
                ctx.clearRect(0, 0, canvas.width(), canvas.height());
                lineIdx -= 1;
                lineArr.pop();
                console.log('revert line arr -');
                // ctx.putImageData(lineArr[lineIdx],0,0);

                console.log('return');
                return true;
            } else {
                isRevert = true;
            };
        },
        // revertDuration: 100,
        stop: function (e) {
            $(this).addClass('restart');

            if (!isRevert) {
                $(this).offset({
                    top: originY[stIdx],
                    left: originX[stIdx]
                });
            };

            $(this).attr('data-line',lineIdx);

            lineArr.push(ctx.getImageData(0,0,canvas.width(), canvas.height()));
            lineIdx += 1;
            // ctx.putImageData(lineArr[lineIdx],0,0);
            
            console.log('stop line arr +');

            if($(this).hasClass('remove')){
                console.log('remove classs');
                lineIdx -= 1;
                lineArr.pop();
                // $(this).removeClass('remove');
            };

            if($(this).attr('data-drag')=='false'){
                // $(this).draggable('disable');
                console.log($(this).attr('data-drag'));
            }
        },
    });
    dropObj.droppable({
        over: function (e, ui) {
            ey = $(this).find('.dropObj').offset().top;
            ex = $(this).find('.dropObj').offset().left;
        },
        out: function (e, ui) {
            $(this).removeClass('dropfinish');
            $(this).removeClass('dontEnter');
        },
        create: function (e, ui) { // road
            edIdx = dropObj.index(this);
        },
        drop: function (e, ui) {

            // lineArr.push(ctx.getImageData(0,0,canvas.width(), canvas.height()));
            // lineIdx += 1;
            
            // ctx.putImageData(lineArr[lineIdx],0,0);

            // ctx.clearRect(0, 0, canvas.width(), canvas.height());
            // draw ();

            ui.draggable.offset({
                top: ey,
                left: ex
            });
            
            $(this).addClass('dropfinish');

            if($(this).hasClass('dontEnter')){
                // ui.draggable.draggable('option','revert', true);
                ui.draggable.draggable('option','revert',function(){
                    // console.log('drop return');
                    // lineIdx -= 1;
                    // lineArr.pop();
                    // // ctx.putImageData(lineArr[lineIdx],0,0);
                    // ctx.clearRect(0, 0, canvas.width(), canvas.height());
                    // // ctx.putImageData(backup, 0, 0);
                    return true;
                });

            };
        },
        deactivate: function (e, ui) { // end stop
            if($(this).hasClass('dropfinish')){
                $(this).addClass('dontEnter');
            };
        },
    });

    $('.return_container').on('click', function(){
        if(lineIdx <= 0){
            ctx.fillStyle = '#fff';
            ctx.clearRect(0,0,canvas.width(), canvas.height());
            ctx.fillRect(0,0,canvas.width(), canvas.height());

            lineArr=[];
            lineIdx =-1;
        } else {
            lineIdx -= 1;
            //lineArr.pop();
             lineArr.shift();

            ctx.putImageData(lineArr[lineIdx],0,0);
        };
    });

    function restore(){
        if(lineIdx <= 0){
            ctx.fillStyle = '#fff';
            ctx.clearRect(0,0,canvas.width(), canvas.height());
            ctx.fillRect(0,0,canvas.width(), canvas.height());

            lineArr=[];
            lineIdx =-1;
        } else {
            lineIdx -= 1;
            lineArr.pop();
            ctx.putImageData(lineArr[lineIdx],0,0);
        };
    };
};

function addAction (idx, dX, dY, eX, eY, opt){
    actions[idx] = {};
    actions[idx].defaultX = dX;
    actions[idx].defaultY = dY;
    actions[idx].eventX = eX;
    actions[idx].eventY = eY;
    actions[idx].color = opt.color ? opt.color : "#000" ;
    actions[idx].size = opt.size ? opt.size : 2 ;

}

function draw (){
    ctx.beginPath();
    ctx.moveTo(startX[stIdx], startY[stIdx]);
    ctx.lineTo(lineToX, lineToY);
    ctx.stroke();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
};

function redraw(){
    ctx.clearRect(0, 0, canvas.width(), canvas.height());

    $.each($(this),function(){
        draw();
    });
};

function clearDraw(){
    ctx.clearRect(0,0,canvas.width(), canvas.height());
    // lineIdx -= 1;
    // lineArr.pop();
    ctx.putImageData(lineArr[lineIdx],0,0);
};


























// pc draw 이벤트 함수
function drawPc(e) {
    switch (e.type) {
        case "mousedown": {
            drawble = true;
            ctx.beginPath();
            ctx.moveTo(getPosition(e).X, getPosition(e).Y);
            ctx.lineTo(getPosition(e).X, getPosition(e).Y);
            ctx.stroke();
        }
            break;

        case "mousemove": {
            if (drawble) {
                ctx.lineTo(getPosition(e).X, getPosition(e).Y);
                ctx.stroke();
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
            }
        }
            break;

        case "mouseup":
        case "mouseout": {
            drawble = false;
            ctx.closePath();
        }
            break;
    };
};

// 직선그리기
function drawingPc(e) {
    switch (e.type) {
        case "mousedown": {
            backup = ctx.getImageData(0, 0, canvas.width(), canvas.height());
            drawble = true;

            // 출발 값 저장
            sx = e.clientX - canvas.offset().left;
            sy = e.clientY - canvas.offset().top;
        };
            break;

        case "mouseover":
        case "mousemove": {
            if (drawble) {
                ctx.putImageData(backup, 0, 0);
                ctx.beginPath();
                ctx.moveTo(sx, sy);
                ctx.lineTo(getPosition(e).X, getPosition(e).Y);
                ctx.stroke();
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
            };

            $('.x').text('x: ' + e.clientX);
            $('.y').text('y: ' + e.clientY);
        };
            break;

        case "mouseup":
        case "mouseout": {
            drawble = false;

            console.log(drawble);
        };
            break;
        case "mouseover": {
            drawble = true;

            console.log(drawble);
        };
            break;
    };
};

// mobile draw 이벤트 함수
function drawMo(e) {
    switch (e.type) {
        case "touchstart": {
            // BodyScrollDisAble();
            drawble = true;
            ctx.beginPath();
            ctx.moveTo(getMobilePosition(e).X, getMobilePosition(e).Y);
            // ctx.stroke();
        }
            break;
        case "touchmove": {
            if (drawble) {
                e.preventDefault();

                ctx.lineTo(getMobilePosition(e).X, getMobilePosition(e).Y);
                ctx.stroke();
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
            }
        }
            break;
        case "touchend":
        case "touchcancel": {
            drawble = false;
            ctx.closePath();
        }
            break;
    };
};

function getPosition(e) {
    let x = e.pageX - canvas.offset().left;
    let y = e.pageY - canvas.offset().top;

    return { X: x, Y: y };
};

function getMobilePosition(e) {
    var x = e.originalEvent.changedTouches[0].pageX - canvas.offset().left;
    var y = e.originalEvent.changedTouches[0].pageY - canvas.offset().top;
    return { X: x, Y: y };
};


function colorChange() {
    $color.on('click', function () {
        chColor = $(this).css('background-color');
        ctx.strokeStyle = chColor;

        $colorPicker.attr('value', rgb2hex(chColor));

        localStorage.setItem('color', rgb2hex(chColor));
    });

    $colorPicker.on('change keyup paste', function () {
        inputColor = $(this).val();
        ctx.strokeStyle = inputColor;

        localStorage.setItem('color', rgb2hex(inputColor));
    });

    let saveColor = rgb2hex(localStorage.getItem('color'));

    ctx.strokeStyle = saveColor;
    $colorPicker.attr('value', saveColor);
};

function lineChange(e) {
    $range.on('input', function (e) {
        let size = e.target.value;
        ctx.lineWidth = size;

        localStorage.setItem('lineWeight', size);
    });

    if (localStorage.getItem('lineWeight') == null) {
        localStorage.setItem('lineWeight', 5);
        let defultLine = localStorage.getItem('lineWeight');
        ctx.lineWidth = defultLine;
    }
    ctx.lineWidth = localStorage.getItem('lineWeight');
    ctx.lineWidth = 5;
};

// 화면 조절 함수
function canvasResize() {
    canvas[0].width = div.width();
    canvas[0].height = div.height();

    ctx.lineWidth = "5";
};

function saveImg() {
    let saveData = localStorage.getItem('saveCanvas');

    let img = new Image;
    img.src = saveData;
    img.onload = function () {
        ctx.drawImage(img, 0, 0);
    };
};

function rgb2hex($val) {
    if ($val == null) { $val = '#000000'; };

    if ($val.indexOf("rgb") == -1) {
        return $val;
    } else {
        $val = $val.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
        function hex(x) {
            return ("0" + parseInt(x).toString(16)).slice(-2);
        }
        return "#" + hex($val[1]) + hex($val[2]) + hex($val[3]);
    };
};

function reset() {
    canvas[0].width = div.width();
    canvas[0].height = div.height();

    // localStorage.setItem('saveCanvas', canvas[0].toDataURL());
    ctx.clearRect(0, 0, canvas.width(), canvas.height())
    $dashLine.removeClass('active');
    ctx.setLineDash([]);

    ctx.strokeStyle = rgb2hex(localStorage.getItem('color'));
    ctx.lineWidth = localStorage.getItem('lineWeight');

    location.reload();
};

function buttonEvent() {
    $dashLine.on('click', function (e) {
        $(this).toggleClass('active');

        if ($dashLine.hasClass('active')) {
            ctx.setLineDash([10, 20]);
            console.log(ctx.getLineDash());
        } else {
            ctx.setLineDash([]);
        }
    });

    $save.on('click', function () {
        localStorage.setItem('saveCanvas', canvas[0].toDataURL());
    });
    $url.on('click', function () {
        console.log(canvas[0].toDataURL());
        $url.append('<textarea class="hide">' + canvas[0].toDataURL() + '</textarea>');

        $('.hide').select();
        let copy = document.execCommand('copy');

        console.log(copy);

        $('.hide').remove();
    });

    $picture.on('click', function () {
        let link = document.createElement('a');

        link.href = canvas[0].toDataURL('image/png');
        link.download = 'image.png';

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
    });

    $delete.on('click', function () {
        reset();
    });
};