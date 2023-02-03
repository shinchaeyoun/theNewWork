function nav() {
    pageMax;

    // const $navWrap = $('.nav_wrap'),
    //     $mainTit = $navWrap.find('.main_title'),
    //     $subTit = $navWrap.find('.sub li'),
    //     subTitArr = $subTit,
    //     $pageBtn = $('.page_btn'),
    //     $prevBtn = $pageBtn.find('.prev_btn'),
    //     $nextBtn = $pageBtn.find('.next_btn'),
    //     $nowPageNum = $('.page_now'),
    // $totalPageNum = $('.page_total');

let subTitArr = $subTit;
    $subTit.each(function (i) {
        nowIdx = subTitArr.index(this) + 1;
        let activeCls = nowIdx == urlNum;

        $(this).attr('data-page', i + 1);
        $(this).toggleClass('active', activeCls);

        // if ($(this).hasClass('active'))
        //     return $(this).closest($mainTit).find('>li').addClass('active');

        if($(this).hasClass('active')){

        }
        // console.log($(this).attr('data-page'),nowIdx,urlNum);
    });

    // $mainTit.find('>li').on('click', function () {
    //     let subIdx = $(this).siblings().find('>li:nth-child(1)').attr('data-page');
    //     pageNum = itostr(subIdx);
    //     pageMove(pageNum)
    // });

    // $subTit.on('click', function () {
    //     let subIdx = $(this).attr('data-page');
    //     pageNum = itostr(subIdx);
    //     pageMove(pageNum)
    // });


    // 여기부턴 작동 됨
    $prevBtn.on('click', function () {
        pageIdx--;

        if (pageIdx < 1) {
            alert('First page');
            pageIdx = 1;
        }
        pageNum = itostr(pageIdx);
        pageMove(pageNum);
    });

    $nextBtn.on('click', function () {
        pageIdx++;

        if (pageIdx > pageMax) {
            alert('Last page');
            pageIdx = pageMax;
        }
        pageNum = itostr(pageIdx);
        pageMove(pageNum);
    });

    $nowPageNum.text(pageIdx);
    $totalPageNum.text(itostr(pageMax));


    function pageMove($pageNum) {
        changeUrl = nowUrl.replace(urlArr[urlArr.length - 1], $pageNum) + '.' + urlHtml[1];
        location.href = changeUrl;
    };
};