/*
    페이지 정보
    목차 내용, 현 페이지 미디어 타입

    미디어 타입 넣는거 여쭤봐야지
    name[i] = {mediaType : mp4}
*/
function pageInfo() {
    let pageIndex = [],
        mainIndex = [],
        pageType = [],
        subTag = "";

    mainIndex[0] = '인트로';
    mainIndex[1] = '학습하기';
    mainIndex[2] = '마무리하기';

    pageIndex = new Array();
    pageIndex[0] = new Array();
    pageIndex[0][0] = '학습목표1';
    pageIndex[0][1] = '학습목표2';
    pageIndex[0][2] = '학습목표2';

    pageIndex[1] = new Array();
    pageIndex[1][0] = '소주제1';
    pageIndex[1][1] = '소주제2';

    pageIndex[2] = new Array();
    pageIndex[2][0] = '아웃트로1';
    pageIndex[2][1] = '아웃트로2';

    pageType[0] = 'mp3';
    pageType[1] = 'mp4';
    pageType[2] = 'mp3';
    pageType[3] = 'mp4';
    pageType[4] = 'mp3';
    pageType[5] = 'mp4';


    // pageInfoIndex(mainIndex, pageIndex);

    // titleIndex($mainTit, mainIndex);
    // titleIndex($subTit, pageIndex);

    // console.log(pageIndex[i].length);

    $('.main_title').remove();
    $.each(mainIndex, function(i){
        tag += `<ul class="main_title">
                    <li>`+ mainIndex[i] + `</li>
                    <ul class="sub"></ul>
                </ul>`

        // console.log(tag);
    });
    $.each(pageIndex, function(i,j){
        // pageIndex[i][j];

        console.log(pageIndex[i][j]);


    });

    $('.nav').append(tag)


};