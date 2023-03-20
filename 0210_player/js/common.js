$(function () {
    $('.wrap').append('<div class="index_container"></div>');
    $('.wrap').append('<div class="media_container"></div>');

    $('.index_container').load('index.html', function () {
        complete();
    });
    $('.media_container').load('media.html', function () {
        complete();
    });
});

let loadCheck = 0,
    nowPage,
    totalPage,
    tag = '',
    subTag = '',
    pageNum,
    $indexGroup,
    $mainTit,
    mainArr,
    $subTit,
    subArr,
    $prevBtn,
    $nowPagex,
    $totalPage,
    $nextBtn,
    dataPage,
    info;

nowUrl = location.href;
urlArr = nowUrl.split('/');
urlTxt = urlArr[urlArr.length - 1].split('.')[0]
urlNum = Number(urlTxt);

function complete() {
    ++loadCheck;

    if (loadCheck == 2) {
        info = new pageInfoFn();

        index();
        navFn();
        dataPageValue();
        mediaType();
    };
};


function index() {
    $('.title_group').remove();

    $.each(info.mainIndex, function (i) {
        $.each(info.subIndex[i], function (j) {
            subTag += `<div data-page="0">` + info.subIndex[i][j] + `</div>`
        });

        tag += `<ul class="title_group">
                    <li class="main_title">`+ info.mainIndex[i] + `</li>
                    <li class="sub_title">`+ subTag + `</li>
                </ul>`

        subTag = ""; // subtag가 계속 쌓이니까 비워줘야함.
    });

    $('.index_container').append(tag);
};

function dataPageValue(){
    $subTit.each(function(i){
        dataPage = i + 1;
        
        $(this).attr('data-page',itostr(dataPage));
    })
};

function mediaType(){
    pageType = info.mediaType[urlNum-1];

    if (pageType == 'mp3'){
        $('.video_content').remove();
        mediaControls = new mediaFn(pageType);
    } else {
        $('.audio_content').remove();
        mediaControls = new mediaFn(pageType);
    };
};
