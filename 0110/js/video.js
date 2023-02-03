function video() {
    const $nextNotice = $('.next_notice'),
        $skipBtn = $('.skipBtn'),
        $downBtn = $('.down_btn'),
        $speedBtn = $('.speed_btn'),
        $speedBTxt = $speedBtn.find('span'),
        $playBar = $('.play_bar'),
        $durBar = $playBar.find('.duration_bar'),
        $curBar = $playBar.find('.current_bar'),
        $playDot = $playBar.find('.play_dot'),
        $bHover = $playBar.find('.bar_hover'),
        $durTime = $('.duration_time'),
        $curTime = $('.current_time'),
        $playBtn = $('.play_btn'),
        $pauseBtn = $('.pause_btn'),
        $returnBtn = $('.return_btn'),
        $captionArea = $('.video_caption'),
        $scrollCaption = $('.scroll_caption'),
        $captionBtn = $('.caption_btn'),
        $fullpageBtn = $('.fullSize_btn'),
        $controlsBar = $('.controls_bar'),
        $controlsBarBtn = $('.controlsBarHide'),
        $soundBtn = $('.sound_btn'),
        $volumeSlider = $('.volume'),
        $volumeBar = $volumeSlider.find('.volume_active_bar'),
        $volumeDot = $volumeSlider.find('.volume_dot'),
        $videoWrap = $('.video_wrap'),
        $video = $videoWrap.find('video'),
        _video = $videoWrap.find('video')[0];
    _video.volume = 0.5;

    // caption
    let videoCaption = _video.textTracks[0];
    videoCaption.mode = 'hidden',
        scale = false,
        sVal = 1,
        fullScrnCheck = false;

        let nowUrl = location.href,
    urlArr = location.href.split('/'),
    urlHtml = urlArr[urlArr.length - 1].split('.'),
    nurNum = Number(urlHtml[0]);

    function playBtn() {
        _video.play();
        $playBtn.hide();
        $pauseBtn.show();
    };
    function pauseBtn() {
        _video.pause();
        $playBtn.show();
        $pauseBtn.hide();
    };
    // 음소거
    function soundMute() {
        if ($soundBtn.hasClass('active') == true) {
            _video.volume = 0;
            $volumeDot.css('left', 0);
            $volumeBar.width(0);
        } else {
            videoVol = loadData('vol');
            pxVal = loadData('volPos');

            _video.volume = videoVol;
            $volumeDot.css('left', pxVal + 'px');
            $volumeBar.width(pxVal + 'px');
        };
    };
    // 자동재생
    function autoPlay() {
        playBtn();

        $playBtn.on('click', function () {
            playBtn();
        });
        $pauseBtn.on('click', function () {
            pauseBtn();
        });
        $video.on('click', function () {
            $(this).toggleClass('active');
            $(this).hasClass('active') ? pauseBtn() : playBtn();
        });
    };
    // 자막
    function vttCaption() {
        const $vttCaption = $captionArea.find('li');

        $vttCaption.each(function (i) {
            $(this).attr('data-start', captionStart[i]);
            $(this).attr('data-end', captionEnd[i]);
            $(this).text(captionText[i]);

            let start = $(this).attr('data-start'),
                end = $(this).attr('data-end');

            if (start == playingTime && playingTime < end) {
                $(this).show();
            } else if (playingTime > end) {
                $(this).hide();
            };
        });
    };
    // 통자막
    function scrollCaptionFn() {
        scrollCap = scrollCaption.toString().replaceAll('<br>', '<br/>')
        $scrollCaption.html(scrollCaption);
    };
    // 전체 화면
    function fullScreen() {
        $(document).on('fullscreenchange', function () {
            if (document.fullscreenElement) {
                $videoWrap.addClass('active');
                $controlsBarBtn.addClass('active');
            } else {
                $videoWrap.removeClass('active');
                $controlsBarBtn.removeClass('active');
            };
        });
    };

    // skip button
    $video.on('mousemove', function (e) {
        skipX = e.clientX - $video.offset().left;
        skipY = e.clientY - $video.offset().top;

        $skipBtn.css({ 'left': skipX + 'px', 'top': skipY + 'px' });

        $skipBtn.on('mousemove', function (e) {
            skipX = e.clientX - $video.offset().left;
            skipY = e.clientY - $video.offset().top;

            $skipBtn.css({ 'left': skipX + 'px', 'top': skipY + 'px' });
        });

        $skipBtn.on('click', function () {
            _video.currentTime = _video.duration;
            $(this).hide();
            $nextNotice.addClass('active');
        });
    });

    // 하단 컨트롤 바
    function controlsBtn() {
        // 파일 다운로드
        $downBtn.on('click', function () {
            let fileUrl = './img/down_btn.png'
            window.open(fileUrl, "_blank");
        });

        // 스피드 조절 버튼
        speedArr = [1.0, 1.5, 2.0];
        speedIdx = 0;

        $speedBtn.on('click', function () {
            speedIdx++;

            if (speedIdx > 2) { speedIdx = 0; }
            speedLength = speedArr[speedIdx].toString().length;
            speedTxt = speedLength < 3 ? speedArr[speedIdx] + '.0x' : speedArr[speedIdx] + 'x';

            _video.playbackRate = speedArr[speedIdx];
            $speedBTxt.text(speedTxt);
        });

        $returnBtn.on('click', function () {
            _video.currentTime = 0
            playBtn();
            $nextNotice.removeClass('active');
        });

        // caption button
        $captionBtn.on('click', function () {
            if (captionType == 1) {
                videoCaption.mode == 'hidden' ? videoCaption.mode = 'showing' : videoCaption.mode = 'hidden';
            } else if (captionType == 2) {
                $scrollCaption.toggleClass('active');
            } else if (captionType == 3) {
                $captionArea.toggleClass('active');
            };

            // 실시간 자막 
            // if ($captionArea.hasClass('active')) {
            //     $captionArea.show();
            //     $captionArea.stop().animate({ opacity: 0.7 }, 100);
            // } else {
            //     $captionArea.stop().animate({ opacity: 0 }, 100);
            //     setTimeout(function () {
            //         $captionArea.hide();
            //     }, 300);
            // };

            // // 통자막
            // if ($scrollCaption.hasClass('active')) {
            //     $scrollCaption.show();
            //     $scrollCaption.stop().animate({ opacity: 0.7 }, 100);
            // } else {
            //     $scrollCaption.stop().animate({ opacity: 0 }, 100);
            //     setTimeout(function () {
            //         $scrollCaption.hide();
            //     }, 300);
            // };

            name($scrollCaption)
            name($captionArea)
        });


        function name($name) {
            if ($name.hasClass('active')) {
                $name.show();
                $name.stop().animate({ opacity: 0.7 }, 100);
            } else {
                $name.stop().animate({ opacity: 0 }, 100);
                setTimeout(function () {
                    $name.hide();
                }, 300);
            };
        }

        // 전체 페이지
        $fullpageBtn.off("click").on('click', function () {
            $videoWrap.toggleClass('active');
            $controlsBarBtn.toggleClass('active');

            $controlsBarBtn.on('click', function () {
                $controlsBar.toggleClass('active');
                $controlsBar.hasClass('active') ? $(this).toggleClass('on') : $(this).removeClass('on');
            });

            if ($videoWrap.hasClass('active')) {
                scale = true;
                sVal = 1.5;
                if (_video.requestFullscreen) {
                    document.body.requestFullscreen();
                } else if (_video.mozRequestFullScreen) {
                    document.body.mozRequestFullScreen();
                } else if (_video.webkitRequestFullScreen) {
                    document.body.webkitRequestFullScreen();
                } else if (_video.msRequestFullscreen) {
                    document.body.msRequestFullscreen();
                };
            } else {
                scale = false;
                sVal = 1;
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

        // 음소거 버튼
        $soundBtn.on('click', function () {
            $(this).toggleClass('active');
            soundMute();
        });
    };

    // 재생 시간
    function timeControls() {
        $video.on('loadedmetadata', function () {
            let videoTime = parseInt(_video.duration),
                minutes = parseInt(videoTime / 60),
                seconds = (videoTime % 60);

            min = minutes < 10 ? '0' + minutes : minutes;
            sec = seconds < 10 ? '0' + seconds : seconds;

            playTime = min + ':' + sec;

            $durTime.text(playTime);
        });

        $video.on('timeupdate', function () {
            curPos = _video.currentTime;
            maxDur = _video.duration;
            hideTime = maxDur - 3;

            curMin = Math.floor(curPos / 60);
            curSec = Math.floor(curPos - curMin * 60);
            durMin = Math.floor(maxDur / 60);
            durSec = Math.floor(maxDur - durMin * 60);

            min = curMin < 10 ? '0' + curMin : curMin;
            sec = curSec < 10 ? '0' + curSec : curSec;

            playingTime = min + ':' + sec;
            percentage = 100 * curPos / maxDur;

            $curTime.text(playingTime);
            $playDot.css('left', percentage + '%');
            $curBar.width(percentage + '%');

            if (curPos == maxDur) {
                pauseBtn();
                $nextNotice.addClass('active');
            };
            if (nurNum == $('.sub li').length) {
                $nextNotice.addClass('last');
            };
            if (nurNum == 1) {
                $skipBtn.show();
                hideTime < curPos ? $skipBtn.hide() : $skipBtn.show();
            } else {
                $skipBtn.hide();
            };

            vttCaption();
        });

        $playBar.on('mousemove', function (e) {
            seekBarPos = $(this).offset().left;
            seekT = (e.clientX - seekBarPos) / sVal;
            seekLoc = _video.duration * (seekT / $(this).width());

            $bHover.width(seekT);
        });
        $playBar.on('mouseleave', function () {
            $bHover.width(0);
        });
        $playBar.on('mousedown', function () {
            _video.currentTime = seekLoc;
            playBtn();

            if ($nextNotice.hasClass('active')) {
                $nextNotice.removeClass('active')
            };
        });
        $playDot.on('drag', function (e) {
            playDrag(e);
        });
        $playDot.on('dragend', function (e) {
            playDrag(e);
        });

        function playDrag(e) {
            seekT = e.clientX - $playBar.offset().left;
            seekLoc = _video.duration * (seekT / $playBar.outerWidth());
            _video.currentTime = seekLoc;
        };
    };

    function volumeDrag() {
        let isPress = false;

        soundMute();

        $volumeDot.on('mousedown', down);
        $volumeSlider.on('mousedown', down);
        $volumeSlider.on('mouseup', up);
        $volumeSlider.on('mouseleave', up);
        $volumeSlider.on('mousemove', move);

        function down(e) {
            isPress = true;
            volControls(e);
            saveData('volPos', dotPos);
            videoVolume(dotPos);
        };
        function up() {
            isPress = false;
        };
        function move(e) {
            if (!isPress) return;
            volControls(e);
            saveData('volPos', dotPos);
            videoVolume();
        };
        function volControls(e) {
            dotPos = (e.clientX - $volumeSlider.offset().left) / sVal;
            barWid = $volumeSlider.width();

            dragVol = (100 / barWid * dotPos) / 100;

            barMin = dotPos < 0 ? dotPos = 0 : dotPos;
            barMax = dotPos > barWid ? dotPos = barWid : dotPos;

            dragVol < 0 ? dragVol = 0 : dragVol;
            dragVol > 1 ? dragVol = 1 : dragVol;

            $volumeDot.css('left', dotPos);
            $volumeBar.width(dotPos);
            _video.volume = dragVol;
        };
    };

    autoPlay();
    scrollCaptionFn();
    controlsBtn();
    fullScreen();
    timeControls();
    volumeDrag();
};

function saveData($key, $val) {
    localStorage.setItem($key, $val);
};

function loadData($key) {
    let loadVal = localStorage.getItem($key);
    return loadVal;
};

function videoVolume() {
    videoVol = $('video')[0].volume;
    saveData('vol', videoVol);
    loadData('vol');
};