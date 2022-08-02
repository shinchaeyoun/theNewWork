$(function(){
    $('.slide-container').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        dots: true,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
    });
    
    // 메인 페이지네이션
    $(window).scroll(function(){
        if(window.scrollY > $('.event_banner .image-wrap').offset().top ){
        	$('.event_banner .image-wrap').addClass('active');
        } else {
        	$('.event_banner .image-wrap').removeClass('active')
        }
    });
    
    $('.main_best').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        nextArrow: $('.slick-next'),
        prevArrow: $('.slick-prev'),
        responsive: [ // 반응형 웹 구현 옵션

            {
                breakpoint: 1024, //화면 사이즈 960px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480, //화면 사이즈 768px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 1
                }
            }
        ]
    });
    
    // 헉슬리
    $('.prod-wrap .slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        dots: true,
        arrows:false, 
        
    });
    
    const $jq = jQuery.noConflict();
    $jq(document).ready(function(){
       $jq('a').click(function(e){
    		$jq(this).hide();
            e.preventDefault();
        });                 	
    });
    
    // tab menu
    $('.prod-wrap .tab-menu div').click(function(){
            var $this = $(this);
            var index = $this.index();
            
            $this.addClass('active');
            $this.siblings('div.active').removeClass('active');
            
            var $outer = $this.closest('.prod-wrap');
            var $current = $outer.find(' > .tabs-wrap > .tab.active');
            var $post = $outer.find(' > .tabs-wrap > .tab').eq(index);
            
            $current.removeClass('active');
            $post.addClass('active');
            
            $('.prod-wrap .slider').slick({
            	setPosition:0,
                
            });
            // 탭 페이지 안에서 slick 사용시 – slick이 첫페이지에 있지 않으면 slick의 첫번째 이미지가 보이지 않고 2번째 부터 도는것을 확인 할 수 있다. 해당 문제는 탭이 active가 된 후 그 페이지에 slick이 있다면 = slick의 위치를 수동으로 새로 고쳐줘야 한다.
        
        });
    
    // 헉슬리
    
    // footer
    $(window).scroll(function() {
        if( $(window).scrollTop() + $(window).height() > $(document).height() - 300 ) {
            $('#left, .mbi-simpletalk-kakao').removeClass('hide_bg').fadeOut(500);
            $('#bottom , .ec-base-lookbook').removeClass('move_Top_Out2').addClass('move_Top_In2');
        } else {
            $('#left, .mbi-simpletalk-kakao').fadeIn(500);
            $('#bottom , .ec-base-lookbook').removeClass('move_Top_In2').addClass('move_Top_Out2');   
        }    
    });
    // 모바일 반응형
    $(window).resize(function(){ 
        if (window.innerWidth < 1024) { 
            const mo_skin = '/AURA/main/mo_skin.jpg';
            const mo_serum = '/AURA/main/mo_rebalancing_serum.jpg';
            const mo_cream = '/AURA/main/mo_cream.jpg';
            
            $('.skin .img-wrap img').attr('src',mo_skin);
            $('.serum .img-wrap img').attr('src',mo_serum);
            $('.cream .img-wrap img').attr('src',mo_cream);
        };
        
        // 메인페이지네이션
        const windowHei = window.innerHeight,
              $minusWin = windowHei / 2,
              $content1 = $('.slide').offset().top,
              $content2 = $('.event_banner').offset().top,
              $content3 = $('.product').offset().top,
              $philosophy = $('.philosophy').offset().top,
              $tabItem = $('.prod-wrap').offset().top,
              $main_pagination = $('.pagination li a');
    
        
        if ( window.innerWidth < 768 ){
        	//모바일 페이지네이션 추가
            $('#main_wrap .pagination li').removeClass('hide');
            
            $(window).scroll(function() {
                
                if( window.scrollY > $content3 - $minusWin) {
                    $main_pagination.eq(4).parent().addClass('active').siblings().removeClass('active');


                } else if( window.scrollY > $content2 - $minusWin) {
                    $main_pagination.eq(3).parent().addClass('active').siblings().removeClass('active');


                } else if( window.scrollY > $tabItem - $minusWin) {
                    $main_pagination.eq(2).parent().addClass('active').siblings().removeClass('active');


                } else if( window.scrollY > $philosophy - $minusWin) {
                    $main_pagination.eq(1).parent().addClass('active').siblings().removeClass('active');


                } else if ( window.scrollY > $content1 - $minusWin) {
                    $main_pagination.eq(0).parent().addClass('active').siblings().removeClass('active');

                }    
            });
        } else {
            $('#main_wrap .pagination li').eq(3).addClass('hide');
            $('#main_wrap .pagination li').eq(4).addClass('hide');

        	$(window).scroll(function() {
                if( window.scrollY > $content3 - $minusWin) {
                    $main_pagination.eq(2).parent().addClass('active').siblings().removeClass('active');


                } else if( window.scrollY > $content2 - $minusWin) {
                    $main_pagination.eq(1).parent().addClass('active').siblings().removeClass('active');


                } else if ( window.scrollY > $content1 - $minusWin) {
                    $main_pagination.eq(0).parent().addClass('active').siblings().removeClass('active');

                }    
            });
        }
    }).resize(); 
    
    

})