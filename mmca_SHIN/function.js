$(function (){
  const $menu = $('nav > .gnb > li');
  const $sub = $menu.children('.sub-container');
  const $grey = $menu.children('a');

	let mnuIdx = null;

  // 서브메뉴
  $menu.hover(
    function(){
      mnuIdx = $menu.index(this);

      $menu.eq(mnuIdx).css({
        display:'block'
      }).show();
      
      // 메인메뉴 글자색 변경
      $grey.addClass('grey').eq(mnuIdx).addClass('active');

      $sub.eq(mnuIdx).show();
    }
    ,
    function(){
      $grey.removeClass('grey').removeClass('active');
      $sub.hide();
    }
  );

  // 메뉴바 검색 버튼
  const $srch = $('header .search');
  const $icon = $srch.children('header .search .srch-icon');
  
  $srch.on('click',function(){
			$('.click-show').toggleClass('active');
			$icon.toggleClass('active');
  });

  
  // 부킹 팝업 닫기
  const $btn = $('.booking .close');

  $btn.on('click',function(){
    $('.booking').slideUp();
  });



  // 메인 슬라이드
  const $indicator = $('.slides .slides-pagination > li > a');
	const $container = $('.slides .slides-container');
	const $btnPrev = $('.slides .prev');
	const $btnNext = $('.slides .next');

	let intervalKey = null;
	
	let nowIdx = 0;
	
	$indicator.on('click', function(evt){
		 evt.preventDefault();
	
		 //nowIdx 값 추출
		 nowIdx = $indicator.index(this);
	
		 //활성화표시
		 $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
		 
		 //컨테이너이동
		 $container.stop().animate({
				left : -(100 * nowIdx) + '%'
		 });
	});

	//이전버튼에 대한 클릭이벤트 구문
	$btnPrev.on('click', function(evt){
		 evt.preventDefault();
    //  alert('클릭');

		if(nowIdx>0){
			 nowIdx--;
		} else {
			 nowIdx = 4;
		}

		//인디케이터 활성화표시
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');


		//컨테이너 이동
		$container.stop().animate({
			left : -(100) + '%'
		},function(){
			$('.slides .slides-container .slide-content').last().prependTo($container);
			$container.css({
				left:-(100)+'%'
			})
		});
	});

	//다음버튼에 대한 클릭이벤트 구문
	$btnNext.on('click',function(evt){
		evt.preventDefault();
		if(nowIdx<4){
			nowIdx++;
		} else {
			nowIdx = 0;
		}

	$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on')
	
	$container.stop().animate({
			left : -(100) + '%'
	},function(){
		$('.slides .slides-container .slide-content').first().appendTo($container);
		$container.css({
			left:0
		})
	});
	});

	setInterval(() => {
		$btnNext.trigger('click');
	},3000);




  // 전시
  const $tabMnu = $('.exhibit .tab li');
  const $allTabs = $('.exhibit .slide-container .slide-content');
  const $bar = $('.exhibit .tab li a');
	const $exContainer = $('.exhibit .slide-wrap .slide-container');
	const $exBtnPrev = $('.exhibit .slide-wrap .prev');
	const $exBtnNext = $('.exhibit .slide-wrap .next');

	let exNowIdx = 0;

	$allTabs.on('click',function(e){
		e.preventDefault();
	})

	// 전시 탭 메뉴 활성화
	$tabMnu.each(function(i) {
		$(this).attr('data-tab','tab'+i);
	});

	$tabMnu.on('click',function(e){
    e.preventDefault();

    tabIdx = $tabMnu.index(this);
        
    $bar.eq(tabIdx).parent().addClass('bar').siblings().removeClass('bar');
    $tabMnu.eq(tabIdx).find('.bar').css({
      color:'#000',
      display:'block'
    }).fadeIn();

		const dataTab = $(this).data('tab');

		$allTabs.show();
		$allTabs.not('[data-tab='+dataTab+']').hide();

		$tabMnu.eq(0).on('click',function(){
			$allTabs.show();
			$exBtnPrev.show();
			$exBtnNext.show();
		});

		$exContainer.stop().animate({left:'0'});

		let count = $('.exhibit .slide-container .slide-content:visible').length;
		console.log('count =',count);

		if(count>3){
			$exBtnPrev.show();
			$exBtnNext.show();
		} else if (count<3) {
			$exBtnPrev.hide();
			$exBtnNext.hide();
		};

  });

// 전시 슬라이드
//이전버튼에 대한 클릭이벤트 구문
$exBtnPrev.on('click', function(evt){
	evt.preventDefault();

	if(exNowIdx>0){
		exNowIdx--;
	} else {
		$(this).removeClass('active');
	}

	//컨테이너 이동
	$exContainer.stop().animate({
		left : -(445 * exNowIdx) + 'px'
	});
 });

//다음버튼에 대한 클릭이벤트 구문
$exBtnNext.on('click',function(evt){
	evt.preventDefault();

	let count = $('.exhibit .slide-container .slide-content:visible').length
		
		if(count>4){
			if(exNowIdx < 3) {
				exNowIdx++;
			} else {
				exNowIdx = 0;
			}
	
			$exContainer.stop().animate({
				left : -(445 * exNowIdx) + 'px'
			});
		} else if (count===4){
		if(exNowIdx < 1) {
			exNowIdx++;
		} else {
			exNowIdx = 0;
		}

		$exContainer.stop().animate({
			left : -(445 * exNowIdx) + 'px'
		});
	};
});








  // 소장품 슬라이드
	const $cllContainer = $('.collection .slide-container');
	const $cllBtnPrev = $('.collection > .slide a.prev');
	const $cllBtnNext = $('.collection > .slide a.next');
	
	let cllNowIdx = 0;
	
	//이전버튼에 대한 클릭이벤트 구문
	$cllBtnPrev.on('click', function(evt){
		 evt.preventDefault();
    //  alert('클릭');

		if(cllNowIdx>0){
      cllNowIdx--;
    } else {
      $(this).removeClass('active');
     }
    
		//컨테이너 이동
		$cllContainer.stop().animate({
			left : -(445 * cllNowIdx) + 'px'
		});
	});


	//다음버튼에 대한 클릭이벤트 구문
	$cllBtnNext.on('click',function(evt){
		 evt.preventDefault();

		 if(cllNowIdx<1){
      cllNowIdx++;
      $cllBtnPrev.addClass('active');
		 } else {
      $(this).removeClass('active');
     }
		 
		 $cllContainer.stop().animate({
       left : -(445 * cllNowIdx) + 'px'
      });
	});





});