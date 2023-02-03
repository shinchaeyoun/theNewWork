// index.html 파일을 불러오는 방식
    $(".main_title").remove();
    $('.nav .sub li').remove();
    for(var i = 0; i<mainIndex.length; i++){
        var temp = testCopy.clone();
        temp.attr("id", "test"+i)
        $(".nav").append(temp);

        for( var j=0; j<pageIndex[i].length; j++){
            var temp2 = testCopy2.clone();
            temp2.attr("data-id", "test"+i+"-"+j);
            // $(".main_title").eq(i).find(".sub").append(temp2);
            $(".sub").eq(i).append(temp2);
        }
    }
    $mainTit = $(".main_title>li");
    $subTit = $(".nav").find('.sub li'),




    // append 방식
    var aa = '<ul class="main_title">' + mainIndex[i] + '</ul>'
        // append(aa)
    $.each(mainIndex, function () {
        $('.nav').append('<ul class="main_title"></ul>');
        $mainTit = $('.main_title');
    });


    // append 방식2
    var tag = "";

    $('.main_title').remove();
    for (var i = 0; i < mainIndex.length; i++) {
        tag += `<ul class="main_title">
                    <li>`+ mainIndex[i] + `</li>
                </ul>`

        for (let j = 0; j < pageIndex[i].length; j++) {
            tag += `<div class="sub">
                        <li data-page="0">`+ pageIndex[i][j] + `</li>
                    </div>`;
        };
    };
    $(".nav").append(tag);