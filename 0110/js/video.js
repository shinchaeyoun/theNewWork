const $nextNotice = $('.next_notice'),
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
        $fullpageBtn = $('.fullSize_btn'),
        $soundBtn = $('.sound_btn'),
        $volumeSlider = $('.volume'),
        $volumeBar = $volumeSlider.find('.volume_active_bar'),
        $volumeDot = $volumeSlider.find('.volume_dot'),
        $pageBtn = $('.page_btn'),
        $prevBtn = $pageBtn.find('.prev_btn'),
        $nextBtn = $pageBtn.find('.next_btn'),
        $video = $('.video_wrap').find('video'),
        _video = $('.video_wrap').find('video').get(0);

    function autoPlay() {
        _video.play();
        $playBtn.hide();
        $pauseBtn.show();

        $playBtn.on('click', function () {
            _video.play();
            $(this).hide();
            $pauseBtn.show();
        });

        $pauseBtn.on('click', function () {
            _video.pause();
            $(this).hide();
            $playBtn.show();
        });
    };

    function controlsBtn() {
        speedArr = [1, 1.5, 2];
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
        });

        $fullpageBtn.on('click', function () {
            if (_video.requestFullscreen) {
                _video.requestFullscreen();
            } else if (_video.mozRequestFullScreen) {
                _video.mozRequestFullScreen();
            } else if (_video.webkitRequestFullScreen) {
                _video.webkitRequestFullScreen();
            } else if (_video.msRequestFullscreen) {
                _video.msRequestFullscreen();
            };
        });

        $soundBtn.on('click', function () {
            $(this).toggleClass('active')

            if ($(this).hasClass('active')) {
                console.log('if');
                _video.volume = 0;
            } else {
                console.log('else');
            }
        });


    };

    function timeUpdate() {
        $video.on('loadedmetadata', function () {
            let videoTime = parseInt(_video.duration),
                minutes = parseInt(videoTime / 60),
                seconds = (videoTime % 60);

            min = minutes < 10 ? '0' + minutes : minutes;
            sec = seconds < 10 ? '0' + seconds : seconds;

            playTime = min + ':' + sec

            $durTime.text(playTime);
        });

        $video.on('timeupdate', function () {
            curPos = _video.currentTime;
            maxDur = _video.duration;

            curMin = Math.floor(curPos / 60);
            curSec = Math.floor(curPos - curMin * 60);
            durMin = Math.floor(maxDur / 60);
            durSec = Math.floor(maxDur - durMin * 60);

            min = curMin < 10 ? '0' + curMin : curMin;
            sec = curSec < 10 ? '0' + curSec : curSec;

            percentage = 100 * curPos / maxDur;
            playingTime = min + ':' + sec;
            $curTime.text(playingTime);

            // $playDot.stop().animate({left:percentage+'%'});
            // $curBar.stop().animate({width:percentage+'%'});

            $playDot.css('left', percentage + '%');
            $curBar.width(percentage + '%');

            if (curPos == maxDur) {
                $playBtn.show();
                $pauseBtn.hide();
                $nextNotice.addClass('active');
            };
        });

        $playBar.on('mousemove', function (e) {
            seekBarPos = $(this).offset().left;
            seekT = e.clientX - seekBarPos;
            seekLoc = _video.duration * (seekT / $(this).width());

            $('.hover').width(seekT);
        });

        $playBar.on('mouseleave', function () {
            $('.hover').width(0);
        });

        $playBar.on('mousedown', function () {
            _video.currentTime = seekLoc;
        });

        $playDot.on('mousedown', function () {
            console.log('dot click')
        })
        $playDot.on('drag', function (e) {
            seekT = e.clientX - $playBar.offset().left;
            console.log('1', seekT);

            seekLoc = _video.duration * (seekT / $playBar.outerWidth());
            _video.currentTime = seekLoc;
        });

        $playDot.on('dragend', function (e) {
            seekT = e.clientX - $playBar.offset().left;
            console.log('2', seekT)

            seekLoc = _video.duration * (seekT / $playBar.outerWidth());
            _video.currentTime = seekLoc;
        });
    };

    function volumeDrag() {
        isPress = false;

        $volumeDot.on('mousedown', down);
        $volumeSlider.on('mouseup', up);
        $volumeSlider.on('mouseleave', up);
        $volumeSlider.on('mousemove', move);

        function down() {
            isPress = true;
            console.log('down')
        };

        function up() {
            isPress = false;
            console.log('up')
        };

        function move(e) {
            if (!isPress) return;

            console.log('move')

            dotPos = e.clientX - $volumeSlider.offset().left;
            barWid = $volumeSlider.width();

            dragVol = (100 / 60 * dotPos) / 100;

            barMin = dotPos < 0 ? dotPos = 0 : dotPos;
            barMax = dotPos > barWid ? dotPos = barWid : dotPos;

            dragVol < 0 ? dragVol = 0 : dragVol;
            dragVol > 1 ? dragVol = 1 : dragVol;

            $volumeDot.css('left', dotPos);
            $volumeBar.width(dotPos);
            _video.volume = dragVol;
        };
    }

    function pageBtn() {
        $nextBtn.on('click', function () {

        });
    };

    _video.volume = 0.5;

    autoPlay();
    controlsBtn();
    timeUpdate();
    pageBtn();
    volumeDrag();