function itostr ($num){
    return $num < 10 ? '0'+$num : $num;
};

function pageMove ($pageNum){
    changeUrl = nowUrl.replace(urlArr[urlArr.length - 1], $pageNum)+'.html';
    location.href = changeUrl;
};

function secToStr($num) {
    if ($num < 10) return "0" + $num;
    return $num;
};