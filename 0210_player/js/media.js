function mediaFn(pageType) {
    const $speedBtn = $('.speed_btn'),
        $playBtn = $('.play_btn'),
        $pauseBtn = $('.pause_btn'),
        $returnBtn = $('.return_btn'),
        $fullScreenBtn = $('.fullsize_btn'),
        $soundBtn = $('.sound_btn'),
        $startArea = $('.start_btn'),
        $mediaBox = $('.media_box'),
        $durTime = $('.duration_time'),
        $curTime = $('.current_time'),
        $curBar = $('.current_bar'),
        $curPoint = $('.play_pointer'),
        $playBarArea = $('.play_bar'),
        $durBar = $('.duration_bar'),
        $bHover = $('.hover_bar'),
        $bWatch = $('.watch_bar'),
        $mediacon = $('.media_container'),
        $skipIcon = $('.skip_btn'),
        $volArea = $('.volume_controls'),
        $volBar = $('.vol_active'),
        $volDot = $('.vol_pointer'),
        $nextNotice = $('.next_notice'),
        $barHide = $('.controlsBarHide'),
        $index = $('.index_container'),
        $conBox = $('.controls_box');

    let $contentBox,
        $media,
        _media,
        mediaTime,
        speedIdx = 0,
        speedArr = [1, 2, 3],
        scaleVal = 1,
        scale = false;
    // 여기까지 변수 선언

    if (pageType == 'mp3') {
        $contentBox = $('.audio_content');
        $media = $('audio');
        _media = $('audio')[0];
    } else {
        $contentBox = $('.video_content');
        $media = $('video');
        _media = $('video')[0];
    };
    // 미디어 타입 구분, 변수 선언 

    clickEvent();
    playBarSet();
    volumeSet();
    fullScreen();
    // 클릭 이벤트, 재생바 묶어둔 함수 호출

    function playSet() {
        $playBtn.hide();
        $pauseBtn.show();
        _media.play();
    };
    function pauseSet() {
        $playBtn.show();
        $pauseBtn.hide();
        _media.pause();
    };
    function returnSet() {
        _media.currentTime = 0;
    };
    function muteSet() {
        $soundBtn.hasClass('active') ? _media.volume = 0 : _media.volume = 1;
    };
    function skipPos(e) {
        skipX = e.clientX - $mediacon.offset().left;
        skipY = e.clientY - $mediacon.offset().top;

        $skipIcon.css({
            'top': skipY,
            'left': skipX,
        });
    };
    function fullScreen() {
        $(document).on('fullscreenchange', function () {
            if (document.fullscreenElement) {
                // $mediaWrap.addClass('active');
                $barHide.show();

            } else {
                // $mediaWrap.removeClass('active');
                $barHide.hide();
            };
        });
    };



    $media.on('loadedmetadata', function () {
        mediaTime = parseInt(_media.duration);

        let minutes = parseInt(mediaTime / 60);
        let seconds = mediaTime % 60;

        let min = secToStr(minutes);
        let sec = secToStr(seconds);

        durationTime = min + ':' + sec;

        $durTime.text(min + ':' + sec);
        $durTime.text(durationTime);

        if (urlNum == 1) {
            $skipIcon.show();
        };
    });
    $media.on('timeupdate', function () {
        let curPos = _media.currentTime,
            maxDur = mediaTime,
            curMin = Math.floor(curPos / 60),
            curSec = Math.floor(curPos % 60),
            min = secToStr(curMin),
            sec = secToStr(curSec),
            percentage = 100 * curPos / maxDur,
            hideTime = maxDur - 3;

        curTime = min + ':' + sec;

        $curTime.text(curTime);
        $curBar.width(percentage + '%');
        $curPoint.css('left', percentage + '%');

        if (hideTime < curPos) $skipIcon.hide();
    });
    $media.on('ended', function () {
        $skipIcon.hide();
        $pauseBtn.hide();
        $playBtn.show();
        $nextNotice.show();
    });


    $contentBox.on('mousemove', function (e) {
        skipPos(e);
    });
    $skipIcon.on('mousemove', function (e) {
        skipPos(e);
    });


    function playBarSet() {
        let barPos, barLoc;

        $playBarArea.on('mousedown', playDown);
        $playBarArea.on('mousemove', playMove);
        $playBarArea.on('mouseleave', playLeave);
        $curPoint.on('drag', playDotDrag);
        $curPoint.on('dragend', playDotDrag);

        function playDown(e) {
            seekT (e)
            _media.currentTime = barLoc;
        };
        function playMove(e) {
            seekT(e);
            $bHover.width(barPos);
        };
        function playLeave() {
            $bHover.width(0);
        };
        function playDotDrag(e) {
            seekT (e)
            _media.currentTime = barLoc;
        };

        function seekT (e){
            barPos = (e.clientX - $playBarArea.offset().left) / scaleVal;
            barLoc = _media.duration * (barPos / $playBarArea.outerWidth());
            
            if (barPos < 0) barPos = 0;
            if (barPos > $playBarArea.width()) barPos = $playBarArea.width();
        };
    };

    function volumeSet() {
        let isPress = false;

        $volDot.on('mousedown', volumeDown);
        $volArea.on('mousedown', volumeDown);
        $volArea.on('mouseup', volumeUp);
        $volArea.on('mouseleave', volumeUp);
        $volArea.on('mousemove', volumeMove);
        $volDot.on('mouseup', volumeUp);
        $volDot.on('mouseleave', volumeUp);

        function volumeDown() {
            isPress = true;
        };
        function volumeMove(e) {
            if (!isPress) return;
            volControls(e);
        };
        function volumeUp() {
            isPress = false;
        };
        function volControls(e) {
            dotPos = (e.clientX - $volArea.offset().left) / scaleVal;
            volWid = $volArea.width();

            dragVol = (100 / volWid * dotPos) / 100;

            barMin = dotPos < 0 ? dotPos = 0 : dotPos;
            barMax = dotPos > volWid ? dotPos = volWid : dotPos;

            dragVol < 0 ? dragVol = 0 : dragVol;
            dragVol > 1 ? dragVol = 1 : dragVol;

            $volDot.css('left', dotPos);
            $volBar.width(dotPos);
            _media.volume = dragVol;
        };
    };

    // click event function
    function clickEvent() {
        $speedBtn.on('click', function () {
            speedIdx++;

            if (speedIdx >= speedArr.length) speedIdx = 0;

            speedLength = speedArr[speedIdx].toString().length;
            speedTxt = speedLength < 3 ? speedArr[speedIdx] + '.0x' : speedArr[speedIdx] + 'x';

            _media.playbackRate = speedArr[speedIdx];
            $(this).text(speedTxt);
        });
        $playBtn.on('click', function () {
            playSet();
        });
        $pauseBtn.on('click', function () {
            pauseSet();
        });
        $returnBtn.on('click', function () {
            returnSet();
            console.log('return click');
        });
        $startArea.on('click', function () {
            playSet();
            $startArea.hide();
        });
        $mediaBox.on('click', function () {
            if (_media.paused) {
                playSet();
            } else {
                pauseSet();
            };
        });
        $fullScreenBtn.on('click', function () {
            $mediacon.toggleClass('active');
            $index.toggleClass('active');

            if ($mediacon.hasClass('active')) {
                scale = true;
                scaleVal = 1.5;
                if (_media.requestFullscreen) {
                    document.body.requestFullscreen();
                } else if (_media.mozRequestFullScreen) {
                    document.body.mozRequestFullScreen();
                } else if (_media.webkitRequestFullScreen) {
                    document.body.webkitRequestFullScreen();
                } else if (_media.msRequestFullscreen) {
                    document.body.msRequestFullscreen();
                };
            } else {
                scale = false;
                scaleVal = 1;
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                };
            };
        });
        $soundBtn.on('click', function () {
            $soundBtn.toggleClass('active');
            muteSet();
        });
        $skipIcon.on('click', function () {
            _media.currentTime = mediaTime;
        });
        $barHide.on('click', function (){
            $(this).toggleClass('active');
            $conBox.toggleClass('off');
        })
    };
    // click event function end
};