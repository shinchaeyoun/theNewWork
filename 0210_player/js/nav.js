function navFn() {
    let getDataPage;

    $indexGroup = $('.title_group');
    $mainTit = $('.main_title');
    mainArr = $mainTit;
    $subTit = $('.sub_title > div');
    subArr = $subTit;
    $prevBtn = $('.prev_btn');
    $nowPage = $('.now_page');
    $totalPage = $('.total_page');
    $nextBtn = $('.next_btn');

    totalPage = $subTit.length;
    
    $mainTit.on('click', function () {
        getDataPage = $(this).siblings().find('>div:nth-child(1)').attr('data-page');
        pageMove(getDataPage);
    });
    $subTit.on('click', function () {
        getDataPage = $(this).attr('data-page');
        pageMove (getDataPage);
    });
    $prevBtn.on('click', function () {
        urlNum--;
        if(urlNum < 1) {
            urlNum = 1;
            alert('First page');
        };
        pageNum = itostr(urlNum)
        pageMove (pageNum);
    });
    $nextBtn.on('click', function () {
        urlNum++;
        if(urlNum > totalPage){
            urlNum = totalPage;
            alert('Last page');
        };
        pageNum = itostr(urlNum)
        pageMove (pageNum);
    });

    $nowPage.text(itostr(urlNum));
    $totalPage.text(itostr(totalPage));

    $subTit.each(function(i){
        subIndex = subArr.index(this) + 1;
        let classAc = subIndex == urlNum;

        $(this).toggleClass('active', classAc);
        
        if ($(this).hasClass('active')){
            $(this).parent().siblings().toggleClass('active');
        };
    });
};