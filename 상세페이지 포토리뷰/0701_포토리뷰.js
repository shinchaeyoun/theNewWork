        // 포토리뷰
        const content = $('.review_content');
        let reviewImg = $('.review_img');
        let prodImg = $('.prod_img img').attr('src');
        let textBox = $('.fr-view-article');
        const naver = $('.review_content .summary .name strong');
        const pcNaver = $('.review_content .user_name .summary .name strong');
        
        function mainFn (){
            
            //console.log('prodImg',prodImg);
            
            // 제품이미지로 변경
            $('.review_img').on('error',function(){
                $(this).attr('src',prodImg);
             });

            for (let i=0; i<10; i++) {
	
                // 네이버페이 구매자 글씨 색 변경
                if(naver.eq(i).text().charAt(0) == '네'){
                    naver.eq(i).addClass('naver');
                };
                
                // 제품이미지일 경우 클릭 금지
                if (reviewImg.attr('src') == prodImg){
                	console.log('클릭 금지');
                };
                
                // 리뷰 더보기
                $('.view').eq(i).click(function(){
                    textBox.eq(i).toggleClass('active');
                    $(this).find('.more_review').toggleClass('active');
                    $(this).find('.close_review').toggleClass('active');
                });
                
                // 일반,포토 나눠보기
                
                
               
                
            };
        };
        mainFn();