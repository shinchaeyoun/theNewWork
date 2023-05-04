$(function () {
    const windowHei = window.innerHeight,
        $minusWin = windowHei / 2,
        $name = $('#name'),
        $email = $('#email'),
        $message = $('#message'),
        $button = $('button'),
        $span = $('span'),
        $a = $('a'),
        $kakaoQr = $('.kakao_qr'),
        $qrImg = $('.kakao');

    $(window).on('load', function () {
        $name.addClass('on');
        $email.addClass('on');
        $message.addClass('on');
        $button.addClass('on');
        $span.addClass('on');
        $a.addClass('on');
    });

    $kakaoQr.on('click', function () {
        $qrImg.toggleClass('active');
    });
});
