$(function () {
    $('.wrap').load('01.html > .wrap', function () {
        pageMax = 6;
        setVideoPlay();
        setNav();
        linkIdx();
        pageBtn();
    });
});

function setVideoPlay() {
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
        $video = $('.video_wrap').find('video'),
        _video = $('.video_wrap').find('video').get(0);
        _video.volume = 0.5;

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
        $video.on('click', function () {
            $(this).toggleClass('active')

            if ($(this).hasClass('active')) {
                _video.pause();
                $pauseBtn.hide();
                $playBtn.show();
            } else {
                _video.play();
                $playBtn.hide();
                $pauseBtn.show();
            };
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

            $bHover.width(seekT);
        });
        $playBar.on('mouseleave', function () {
            $bHover.width(0);
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

        function down() {isPress = true;};
        function up() {isPress = false;};

        function move(e) {
            if (!isPress) return;

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

    // autoPlay();
    controlsBtn();
    timeUpdate();
    volumeDrag();
};

// side menu
function setNav() {
    const $navWrap = $('.nav_wrap'),
        $mainTit = $navWrap.find('.main_title');

    let nowUrl = location.href;
    let url = location.href.split('/');
    let url1 = url[url.length - 1].split('.');
    let url2 = Number(url1[0]);
    
    let subTitArr = $('.sub_title li');
    let subTitArrIdx = subTitArr[url2-1];

    $mainTit.find('.sub_title li').each(function () {
        let t = subTitArr[2] == $(this);

        if(!t){
            console.log('if')
        } else {
            console.log('else')
        }

        $(this).toggleClass('active',t);

        if ($(this).hasClass('active')) {
            $(this).closest($mainTit).find('li').addClass('active');
        };
    });


    let test1 = $('.sub_title li');

    console.log(test1.length)

    $('.sub_title li').on('click', function(){
        now = 5;
        console.log('click',test1.index());

        $(this).css('color','#f00');
    });
    



};


function pageBtn() {
    const $pageBtn = $('.page_btn'),
        $prevBtn = $pageBtn.find('.prev_btn'),
        $nextBtn = $pageBtn.find('.next_btn');

    $prevBtn.on('click', function () {
        pageIdx--;

        if (pageIdx < 1) {
            alert('first page');
            pageIdx = 1;
        }

        pageNum = pageIdx < 10 ? '0' + pageIdx : pageIdx;

        $('.page_now').text(pageNum)

        location.href = 'http://127.0.0.1:5500/0110/' + pageNum + '.html';
    });

    $nextBtn.on('click', function () {
        pageIdx++;

        if (pageIdx > pageMax) {
            alert('last page');
            pageIdx = pageMax;
        }
        pageNum = pageIdx < 10 ? '0' + pageIdx : pageIdx;
        $('.page_now').text(pageNum)

        location.href = 'http://127.0.0.1:5500/0110/' + pageNum + '.html';
    });
};



function linkIdx() {
    pageLink = location.href;
    let linkArr = pageLink.split('/');
    pageIdx = linkArr[linkArr.length - 1].split('.html')[0];
    totalPage = pageMax < 10 ? '0' + pageMax : pageMax;

    $('.page_now').text(pageIdx);
    $('.page_total').text(totalPage);
};