$(function () {
    $('.wrap').append('<div class="nav"></div>');
    $('.wrap').append('<div class="video_wrap"></div>');

    $('.nav').load('index.html', function () {
        complete();
    });
    $('.video_wrap').load('video.html', function () {
        complete();
    });
});

let loadCheck = 0,
    $mainTit,
    pageMax,
    tag = "",
    subTag = "",
    nowUrl = location.href,
    urlArr = nowUrl.split('/'),
    urlHtml = urlArr[urlArr.length - 1].split('.'),
    urlNum = Number(urlHtml[0]),
    totalPage = itostr(pageMax),
    pageIdx = urlArr[urlArr.length - 1].split('.html')[0];


function complete() {
    ++loadCheck;

    if (loadCheck == 2) {
        $mainTit = $('.nav .main_title > li'),
        mainTitArr = $mainTit,
        $subTit = $('.nav').find('.sub li'),
        subTitArr = $subTit,
        $navWrap = $('.nav'),
        $pageBtn = $('.page_btn'),
        $prevBtn = $pageBtn.find('.prev_btn'),
        $nextBtn = $pageBtn.find('.next_btn'),
        $nowPageNum = $('.page_now'),
        $totalPageNum = $('.page_total');
        
        nav();
        pageInfo();
        video();
    };
};


function itostr($num) {
    if ($num < 10) return "0" + $num;
    return $num;
};

function titleIndex($titleName, $val) {
    $titleName.each(function (i) {
        $(this).text($val[i]);
    });
};

/*
1. index.html 로드
2. main_title를 copy; -> 변수에 담아두기
3. main_title를 삭제 하고
4. 필요 한 갯수 만큼 copy한거 apppend

*/

function pageInfoIndex($main,$sub) {
    $('.main_title').remove();

    for (var i = 0; i < $main.length; i++) {
        tag += `<ul class="main_title">
                    <li>`+ $main[i] + `</li>
                    <ul class="sub"></ul>
                </ul>`
        
        for (let j = 0; j < $sub.length; j++) {
            subTag += `<li data-page="0">`+ $sub[i][j] + `</li>`;

            console.log($sub[i][j].length);
        };
    };

    $(".nav").append(tag);
    $(".sub").append(subTag);
};