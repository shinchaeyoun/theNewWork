console.log('canvas load');

// 전역 변수 선언
let canvas,
    div,
    ctx,
    drawble = false,
    $url,
    $picture,
    $delete,
    $color;


$(function () {
    
});

$(window).load(function(){
    console.log('ready handler');

    // 전역 변수 객체 등록; 캔버스 오브젝트 가져오기;
    canvas = $("#canvas");
    div = $(".canvas_container");
    ctx = canvas[0].getContext("2d");

    $url = $('.url_container');
    $picture = $('.picture_container');
    $delete = $('.delete_container');
    $color = $('.color');

    
    
    console.log(ctx);

    // 이벤트 함수 호출
    init();
    buttonEvent ();

    // test();
    
})

//이벤트 함수
function init() {
    canvas[0].width = div.width();
    canvas[0].height = div.height();

    canvas.on('mousedown', draw);
    canvas.on('mousemove', draw);
    canvas.on('mouseup', draw);
    canvas.on('mouseout', draw);

    // ctx.strokeStyle = 'orange';
    ctx.lineWidth="5";

    colorChange ();
    lineChange ();
};

// 화면 조절 함수
function canvasResize() {
    canvas[0].width = div.width();
    canvas[0].height = div.height();
};

// draw 이벤트 함수
function draw(e) {
    switch (e.type) {
        case "mousedown": {
            drawble = true;
            ctx.beginPath();
            ctx.moveTo(getPosition(e).X, getPosition(e).Y);
            
        }
        break;
        
        case "mousemove": {
            if (drawble) {
                ctx.lineTo(getPosition(e).X, getPosition(e).Y);
                ctx.stroke();
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

function getPosition(e) {
    let x = e.pageX - canvas.offset().left;
    let y = e.pageY - canvas.offset().top;

    return { X: x, Y: y };
};

function buttonEvent (){
    $url.on('click', function (){
        console.log(canvas[0].toDataURL());
    });

    $picture.on('click', function (){
        let link = document.createElement('a');

        link.href = canvas[0].toDataURL('image/png');
        link.download = 'image.png';

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
    });

    $delete.on('click', function (){
        canvasResize();
    });
};




function colorChange (){
    $color.on('click', function (){
        let chColor = $(this).css('background-color');

        console.log(chColor);

        ctx.strokeStyle = chColor;
    });
};

function lineChange (){

};