// 전역 변수 선언
let canvas,
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
    stIdx,
    originX,
    originY,
    lineArr, lineIdx,
    dropX, dropY,
    otherObj;

$(window).load(function () {
    // 전역 변수 객체 등록; 캔버스 오브젝트 가져오기;
    canvas = $("#canvas");
    div = $(".canvas_container");
    ctx = canvas[0].getContext("2d");
    dragBox = $('.start .dot');
    dragObj = $('.start .dragObj');
    dropObj = $('.end .dropObj');

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
    lineIdx = -1;

    otherObj = [];

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

    // 직선그리기
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

    colorChange();
    lineChange();
};

// 선긋기, 드래그 드랍
function dragdropable() {
    dragBox.each(function (e) {
        radius = $(this).width() / 2;

        $(this).attr('data-originalLeft', $(this).position().left);
        $(this).attr('data-originalTop', $(this).position().top);

        defaultX = $(this).attr('data-originalLeft');
        defaultY = $(this).attr('data-originalTop');

        startX[e] = ((Number(defaultX) + radius) + dragCon.offset().left) - canvas.offset().left;
        startY[e] = ((Number(defaultY) + radius) + dragCon.offset().top) - canvas.offset().top;

        originX[e] = $(this).find('.dragObj').offset().left;
        originY[e] = $(this).find('.dragObj').offset().top;
    });

    dragObj.draggable({
        start: function (e, ui) {
            stIdx = dragObj.index(this);
            otherObj = dragObj.not($(this));

            if ($(this).hasClass('restart')) {
                let thisIdx = Number($(this).attr('data-index'));
                lineArr.splice(thisIdx, 1);
                lineIdx -= 1;
            };
        },
        drag: function (e, ui) {
            lineToY = (e.clientY - canvas.offset().top);
            lineToX = (e.clientX - canvas.offset().left);

            draw(e);
        },
        revert: function (e, ui) {
            if (e == false) {
                isRevert = false;
                return true;
            } else {
                isRevert = true;
            };
        },
        revertDuration: 10,
        stop: function (e, ui) {
            backup = ctx.getImageData(0, 0, canvas.width(), canvas.height());
            lineArr.push(backup);
            lineIdx += 1;
            
            $(this).attr('data-index', lineIdx);

            console.log('stop lineIdx',lineIdx);

            if (lineIdx > dragObj.length) {
                console.log('over the dragObj length', lineIdx);
            } else {
                console.log('low the dragObj length', lineIdx);
            };

            if (!isRevert) {
                lineIdx -= 1;
                lineArr.pop();
                lineArrIdx();
            };

            if ($(this).hasClass('return')) {
                $(this).removeClass('return');
                $(this).offset({
                    top: originY[stIdx],
                    left: originX[stIdx]
                });
            };
        },
    });

    dropObj.droppable({
        over: function (e, ui) {
            dropX = $(this).offset().left;
            dropY = $(this).offset().top;
        },
        drop: function (e, ui) {
            ui.draggable.offset({
                top: dropY,
                left: dropX
            });

            function hittest() {
                console.log('hit test fn');
                isRevert = false;
                ui.draggable.addClass('return');
                ui.draggable.removeClass('restart');
                ui.draggable.draggable({
                    revert: true,
                    revertDuration: 10
                });
            };

            if (ui.draggable.hitTestObject(otherObj.eq(0))) {
                hittest();
                // console.log('other object 01');
            } else if (ui.draggable.hitTestObject(otherObj.eq(1))) {
                hittest();
                // console.log('other object 02');
            } else {
                ui.draggable.draggable({
                    revert: function (e, ui) {
                        if (e == false) {
                            hittest();
                            // console.log('other object 03');
                        } else {
                            isRevert = true;
                            $(this).addClass('restart');
                            // console.log('other object 04');
                        };
                    }
                });
            };
        },
    });

    $('.button_container').append('<div class="lineArrTest"></div>');

    $('.lineArrTest').on('click', function () {
        console.log('lineArr', lineArr, lineIdx);
    });

    $('.return_container').on('click', function () {
        ctx.putImageData(lineArr[lineIdx], 0, 0);
        console.log(lineArr, lineIdx);
    });
};

function lineArrIdx() {
    if (lineIdx < 0) {
        lineArr = [];
        lineIdx = -1;
        ctx.clearRect(0, 0, canvas.width(), canvas.height());
    } else {
        ctx.putImageData(lineArr[lineIdx], 0, 0);
    };
};

function draw(e) {
    lineToY = (e.clientY - canvas.offset().top);
    lineToX = (e.clientX - canvas.offset().left);

    lineArrIdx();

    ctx.beginPath();
    ctx.moveTo(startX[stIdx], startY[stIdx]);
    ctx.lineTo(lineToX, lineToY);
    ctx.stroke();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
};

function redraw(e) {
    if (lineIdx <= 0) {
        ctx.clearRect(0, 0, canvas.width(), canvas.height());
        lineArr = [];
        lineIdx = -1;
    } else {
        lineIdx -= 1;
        lineArr.pop();

        ctx.putImageData(lineArr[lineIdx], 0, 0);
    };

    draw(e);
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
    canvasResize();

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


$.fn.hitTestObject = function (obj) {
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    var compare = obj.offset();
    compare.right = compare.left + obj.outerWidth();
    compare.bottom = compare.top + obj.outerHeight();
    return (!(compare.right < bounds.left || compare.left > bounds.right || compare.bottom < bounds.top || compare.top > bounds.bottom));
}