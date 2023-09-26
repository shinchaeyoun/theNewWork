$(function () {
  const windowHei = window.innerHeight,
        $minusWin = windowHei / 2,
        $travel = $('.travel'),
        $travelHei = $('.travel').offset().top,
        $mainTit = $travel.find('.sec1 span'),
        $mainTxt = $travel.find('.sec1 p'),
        $mainImg = $travel.find('.sec1 .img_wrap'),
        $sec2 = $travel.find('.sec2').offset().top,
        $tabMenuImg = $travel.find('.sec2 .tab_content .img_wrap'),
        $tabMenuTxt = $travel.find('.sec2 .tab_content li'),
        $tabMenuTit = $travel.find('.sec2 .tab_menu span'),
        $tabMenuSub = $travel.find('.sec2 .tab_menu li'),
        $flim = $('.fliming').offset().top,
        $flimImg = $('.fliming .screen'),
        $flimSlide = $('.fliming .slide ul'),
        $flimSlideBtn = $('.fliming .slide a'),
        $flimTxt = $('.fliming .text_wrap'),
        $movies = $('.movies').offset().top,
        $mov1Mtit = $('.movies .sec1 .sub_tit'),
        $mov1Img = $('.movies .sec1 .img_wrap'),
        $mov1Tit = $('.movies .sec1 span'),
        $mov1Sub = $('.movies .sec1 p'),
        $mov2Mtit = $('.movies .sec2 .sub_tit'),
        $mov2Img = $('.movies .sec2 .img_wrap'),
        $mov2Tit = $('.movies .sec2 span'),
        $mov2Sub = $('.movies .sec2 p'),
        $mov3Mtit = $('.movies .sec3 .sub_tit'),
        $mov3img = $('.movies .sec3 .img_wrap'),
        $mov3tit = $('.movies .sec3 span'),
        $mov3sub = $('.movies .sec3 p');

  $(window).on('load', function () {
    if (window.scrollY > $travelHei - $minusWin) {
      $mainTit.addClass('on');
      $mainTxt.addClass('active');
      $mainImg.addClass('active');
    } else if (window.scrollY < $travelHei - $minusWin) {
      $mainTit.removeClass('on');
      $mainTxt.removeClass('active');
      $mainImg.removeClass('active');
    }
  });

  $(window).on('scroll', function () {
    if (window.scrollY > $sec2 - $minusWin) {
      $tabMenuImg.addClass('active');
      $tabMenuTxt.addClass('active');
      $tabMenuTit.addClass('on');
      $tabMenuSub.addClass('on');
    } else if (window.scrollY < $sec2 - $minusWin) {
      $tabMenuImg.removeClass('active');
      $tabMenuTxt.removeClass('active');
      $tabMenuTit.removeClass('on');
      $tabMenuSub.removeClass('on');
    }
  });

  $(window).resize(function () {
    if (window.innerWidth > 768) {
      minusWin = windowHei / 2;
    } else {
      minusWin = windowHei * 2.1
    };

    $(window).on('scroll', function () {
      if (window.scrollY > $flim - minusWin) {
        $flimImg.addClass('active');
        $flimSlide.addClass('active');
        $flimSlideBtn.addClass('active');
        $flimTxt.addClass('active');
      } else if (window.scrollY < $flim - minusWin) {
        $flimImg.removeClass('active');
        $flimSlide.removeClass('active');
        $flimSlideBtn.removeClass('active');
        $flimTxt.removeClass('active');
      }

      if (window.scrollY > $movies - minusWin) {
        $mov1Mtit.addClass('active');
        $mov1Img.addClass('active');
        $mov1Tit.addClass('on');
        $mov1Sub.addClass('active');
        $mov2Mtit.addClass('active');
        $mov2Img.addClass('active');
        $mov2Tit.addClass('on');
        $mov2Sub.addClass('active');
        $mov3Mtit.addClass('active');
        $mov3img.addClass('active');
        $mov3tit.addClass('on');
        $mov3sub.addClass('active');
      } else if (window.scrollY < $movies - minusWin) {
        $mov1Mtit.removeClass('active');
        $mov1Img.removeClass('active');
        $mov1Tit.removeClass('on');
        $mov1Sub.removeClass('active');
        $mov2Mtit.removeClass('active');
        $mov2Img.removeClass('active');
        $mov2Tit.removeClass('on');
        $mov2Sub.removeClass('active');
        $mov3Mtit.removeClass('active');
        $mov3img.removeClass('active');
        $mov3tit.removeClass('on');
        $mov3sub.removeClass('active');
      }
    });
  }).resize();

  travelFn ();
  flimFn ();
  musicPlayerFn ();
}); // 준비핸들러 끝

function travelFn(){
    // travel 
    const $wrapper = $('#like .travel .tab_wrap');
    const $allTabs = $('#like .travel .tab_wrap .tab_content');
    const $tabMenu = $('#like .travel .tab_wrap .tab_menu li');

    $allTabs.not(':first-of-type').hide();
    $tabMenu.filter(':first-of-type').find(':first').height('100%')

    $tabMenu.each(function (i) {
        $(this).attr('data-tab', 'tab' + i);
    });

    $allTabs.each(function (i) {
        $(this).attr('data-tab', 'tab' + i);
    });


    $tabMenu.on('click', function (e) {
        e.preventDefault();
        console.log('click');
        const dataTab = $(this).data('tab'),
            $getWrapper = $(this).closest($wrapper);

        $getWrapper.find($tabMenu).removeClass('active');
        $(this).addClass('active');

        $getWrapper.find($allTabs).slideUp();
        $getWrapper.find($allTabs).filter('[data-tab=' + dataTab + ']').slideDown();
    });
    // travel end
};

function flimFn(){
    // 필름 슬라이드
    const $fcontainer = $('#like .fliming .slide .slide_container ul');
    const $fscreen = $('#like .fliming .screen');
    const $fPrev = $('#like .fliming .fliming_wrap .slide .prev');
    const $fNext = $('#like .fliming .fliming_wrap .slide .next');
    const $fItemWid = $fcontainer.find('.slide_content').eq(0).width();
    const $fImg = $fcontainer.children('.slide_content').children('img');

    let fslideIdx = 1; // 1~4
console.log('hi',);

    // 6번째 이미지 
    const fNextImg = function () {
        const imgSrc = $('#like .fliming .slide_content').eq(10).children('img').attr('src');
        const imgAlt = $('#like .fliming .slide_content').eq(10).children('img').attr('alt');

        $fscreen.children('img').css({ opacity: '0.6' }).stop().attr({
            src: imgSrc,
            alt: imgAlt
        }).animate({ opacity: 1 }, 300);
    };

    const fPrevImg = function () {
        const imgSrc = $('#like .fliming .slide_content').eq(0).children('img').attr('src');
        const imgAlt = $('#like .fliming .slide_content').eq(0).children('img').attr('alt');

        $fscreen.children('img').css({ opacity: '0.6' }).stop().attr({
            src: imgSrc,
            alt: imgAlt
        }).animate({ opacity: 1 }, 300);
    };

    const fNextSlide = function () {
      if (fslideIdx < 4) {
        fslideIdx++;
      } else {
        fslideIdx = 1;
      }

      console.log($fItemWid);
      $fcontainer.stop().animate({
        left: -$fItemWid
      }, function () {
        $('#like .fliming .slide .slide_container ul li').slice(0, 5).appendTo($fcontainer);
        $fcontainer.css({
          left: -800
        });
      });
    }

    const fPrevSlide = function () {
        console.log('now ind = ', fslideIdx);
        if (fslideIdx > 0) {
            fslideIdx--;
        } else {
            fslideIdx = 4;
        }

        $fcontainer.stop().animate({
            left: 0
        }, function () {
            $('#like .fliming .slide .slide_container ul li').slice(15, 20).prependTo($fcontainer);
            $fcontainer.css({
                left: -800
            });
        });
    }

    // 다음 버튼 클릭
    $fNext.on('click', function (e) {
        e.preventDefault();
        fNextSlide();
        fNextImg();
    });

    // 이전 버튼 클릭
    $fPrev.on('click', function (e) {
        e.preventDefault();
        fPrevSlide();
        fPrevImg();
    });

    // 이미지 클릭시 스크린 이미지 변경
    $fImg.on('click', function () {
        const imgSrc = $(this).attr('src');
        const imgAlt = $(this).attr('alt');

        $fscreen.children('img').css({ opacity: '0.6' }).stop().attr({
            src: imgSrc,
            alt: imgAlt
        }).animate({ opacity: 1 }, 300);

    });
};


function musicPlayerFn (){
    // 음악 플레이어
    const $player = $('.music_wrap');
    const $playerTrack = $player.find('.player_track');
    const $albumCover = $player.find('.left_container .album_cover img');
    const $trackName = $player.find('.left_container .track_name');
    const $artistName = $player.find('.left_container .artist_name');
    const $sArea = $player.find('.slider');
    const $insTime = $player.find('#ins-time');
    const $sHover = $player.find('#s-hover');
    const $seekBar = $player.find('#seek-bar');
    const $dot = $player.find('.dot');
    const $trackTime = $player.find('.track_time');
    const $tProgress = $player.find('.current_time');
    const $trackLength = $player.find('.track_length');
    const $prevBtn = $player.find('.control_bar .prev');
    const $playBtn = $player.find('.control_bar .play');
    const $nextBtn = $player.find('.next');
    const $list = $player.find('.list .content');
    const trackNames = ['shine your light', 'sunshine', '너의 바다', 'love is all', '백년해로', 'Day 1', 'Outrunning Karma', 'Gooey', 'Morning Coffee', 'On hold'];
    const artistNames = ['박효신', '짙은', '호피폴라', '검정치마', '선우정아', 'HONNE', 'Alec Benjamin', 'Glass Animals', 'Jesper Munk', 'The xx'];

    const audio = new Audio(
        'https://raw.githubusercontent.com/shinchaeyoun/shin/tree/main/TheNewWork/audio/1.mp3',
        'https://raw.githubusercontent.com/shinchaeyoun/shin/tree/main/TheNewWork/audio/2.mp3',
        'https://raw.githubusercontent.com/shinchaeyoun/shin/tree/main/TheNewWork/audio/3.mp3',
        'https://raw.githubusercontent.com/shinchaeyoun/shin/tree/main/TheNewWork/audio/4.mp3',
        'https://raw.githubusercontent.com/shinchaeyoun/shin/tree/main/TheNewWork/audio/5.mp3',
        'https://raw.githubusercontent.com/shinchaeyoun/shin/tree/main/TheNewWork/audio/6.mp3',
        'https://raw.githubusercontent.com/shinchaeyoun/shin/tree/main/TheNewWork/audio/7.mp3',
        'https://raw.githubusercontent.com/shinchaeyoun/shin/tree/main/TheNewWork/audio/8.mp3',
        'https://raw.githubusercontent.com/shinchaeyoun/shin/tree/main/TheNewWork/audio/9.mp3',
        'https://raw.githubusercontent.com/shinchaeyoun/shin/tree/main/TheNewWork/audio/10.mp3'
    );

    let playIdx = 1;
    audio.src = '../audio/' + playIdx + '.mp3';
    const buffInterval = null;

    // 플레이
    function play() {
        audio.volume = 0.1;
        audio.loop = false;
        audio.src = '../audio/' + playIdx + '.mp3';
        audio.play();
    };

    // 리스트 활성화
    function listActive() {
        $list.removeClass('active');
        $list.eq(playIdx - 1).addClass('active');
    };

    // 왼쪽 정보 변경
    function lifeInfo() {
        $albumCover.attr('src', './img/like/music/' + playIdx + '.jpeg');
        $trackName.text(trackNames[playIdx - 1]);
        $artistName.text(artistNames[playIdx - 1]);
    };

    function btnAdd() {
        $playBtn.addClass('active');
        $dot.addClass('active');
    };

    function btnToggle() {
        $playBtn.toggleClass('active');
        $dot.toggleClass('active');
    };

    // 자동 넘김
    function autoNext() {
        audio.onended = function () {
            if (playIdx < 10) { playIdx++; } else { playIdx = 1; }

            audio.src = '../audio/' + playIdx + '.mp3';
            audio.play();

            // 왼쪽 정보 변경
            lifeInfo();
            // 리스트 활성화
            listActive();
        };
    };

    function list (){
        playIdx = $list.index(this)+1;
        
        console.log('listIdx is', playIdx);
    
        // 음악 바로 재생
        play();
    
        // 재생버튼, 플레이 바 활성화
        btnAdd ()
    
        // 왼쪽 정보 변경
        lifeInfo ()
    
        // 리스트 활성화
        listActive ()
    
        // 자동 넘김
        audio.onended = function(){
          if(playIdx<10) {
            playIdx++;
          } else {
            playIdx=1;
          }
          console.log('넘어감',playIdx);
      
          audio.src = '../audio/'+playIdx+'.mp3';
          audio.play();
    
          // 왼쪽 정보 변경
          lifeInfo ()
    
          // 리스트 활성화
          listActive ()
        }
      };

    // 재생
    function playBtn() {
        // 재생버튼, 플레이 바  활성화
        btnToggle();

        if (audio.paused) {
            audio.volume = 0.3;
            audio.loop = false;
            audio.play();
        } else {
            audio.pause();
        }

        // 리스트 활성화
        listActive();
        // 자동 넘김
        autoNext();
    };

    // 다음
    function nextBtn() {
        if (playIdx < 10) {
            playIdx++;
        } else {
            playIdx = 1;
        }

        playFn();
    };

    // 이전
    function prevBtn() {
        if (playIdx > 1) {
            playIdx--;
        } else {
            playIdx = 10;
        }

        playFn();
    };

    function playFn(){
        play();
        btnAdd();
        lifeInfo();
        listActive();
        autoNext();
    };

    // 재생 바

    // 재생시간
    function time() {
        curMin = Math.floor(audio.currentTime / 60);
        curSec = Math.floor(audio.currentTime - curMin * 60);

        durMin = Math.floor(audio.duration / 60);
        durSec = Math.floor(audio.duration - durMin * 60);

        playProgress = (audio.currentTime / audio.duration) * 100;

        if (curMin < 10) { curMin = '0' + curMin; };
        if (curSec < 10) { curSec = '0' + curSec; };

        if (durMin < 10) { durMin = '0' + durMin; };
        if (durSec < 10) { durSec = '0' + durSec; };

        if (isNaN(curMin) || isNaN(curSec)) {
            $tProgress.text('00:00');
        } else {
            $tProgress.text(curMin + ':' + curSec);
        };

        if (isNaN(durMin) || isNaN(durSec)) {
            $trackLength.text('00:00');
        } else {
            $trackLength.text(durMin + ':' + durSec);
        }

        $seekBar.width(playProgress + '%');
        $dot.css({ left: playProgress + '%' });

        if (playProgress == 100) {
            $seekBar.width(0);
            $dot.css({ left: playProgress + '%' });
            $tProgress.text('00:00');
        };
    }


    // 재생 바 마우스 오버
    $sArea.mouseover(function (e) {
        seekBarPos = $sArea.offset();
        seekT = event.clientX - seekBarPos.left;
        seekLoc = audio.duration * (seekT / $sArea.outerWidth());

        $sHover.width(seekT);

        cM = seekLoc / 60;

        ctMin = Math.floor(cM);
        ctSec = Math.floor(seekLoc - ctMin * 60);

        if ((ctMin < 0) || (ctSec < 0))
            return;

        if ((ctMin < 0) || (ctSec < 0))
            return;

        if (ctMin < 10)
            ctMin = '0' + ctMin;
        if (ctSec < 10)
            ctSec = '0' + ctSec;

        if (isNaN(ctMin) || isNaN(ctSec))
            $insTime.text('--:--');
        else
            $insTime.text(ctMin + ':' + ctSec);

        $insTime.css({ 'left': seekT, 'margin-left': '-21px' }).fadeIn(0);
    });

    // 재생 바 마우스 리브
    function hideHover() {
        $sHover.width(0);
        $insTime.text('00:00').css({ 'left': '0px', 'margin-left': '0px' }).fadeOut(0);
    };
    $sArea.mouseleave(function () {
        hideHover();
    });

    // 재생 바 클릭
    $sArea.on('click', function () {
        audio.currentTime = seekLoc
        $seekBar.width(seekT);
        $dot.css({
            left: seekT
        });
        hideHover();
    });


    function initPlayer() {
        time();
        $list.on('click', list);
        $playBtn.on('click', playBtn);
        $nextBtn.on('click', nextBtn);
        $prevBtn.on('click', prevBtn);
        $(audio).on('timeupdate', time);
    };

    initPlayer();
};
