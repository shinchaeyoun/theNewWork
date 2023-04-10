$(function(){
    setVariable ();
    setText();
    quiz();
});

let answer,
    submit,
    ansTit,
    userAns,
    testNum = 1;

function setVariable (){
    answer = $('.answerTit');
    submit = $('.submitBtn');
    ansTit = $('.answerTit');
}

function setText (){
    $('.questionNum').empty();
    $('.questionTitle').empty();

    $('.answer1').empty();
    $('.answer2').empty();
    $('.answer3').empty();
    $('.answer4').empty();

    $('.questionNum').append(testNum);
    $('.questionTitle').append(pageInfo[testNum][0]);

    $('.answer1').append(pageInfo[testNum][1]);
    $('.answer2').append(pageInfo[testNum][2]);
    $('.answer3').append(pageInfo[testNum][3]);
    $('.answer4').append(pageInfo[testNum][4]);

    for(let i=0; i<ansTit.length; i++){
        console.log(i);
    }
};

function quiz (){
    answer.on('click', function(){
        userAns = answer.index(this) + 1;

        $(this).attr('data-ans', userAns);
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    submit.on('click', function(){
        if(userAns == '' || userAns == undefined){
            alert('please choice answer');
        } else {
            if(userAns == ans){
                answer.eq(ans-1).addClass('correct');
                console.log('정답');
                resultFn();
            } else {
                console.log('오답');
                resultFn ();
            }
        };
    });

    $('.nextBtn').on('click', function(){
        testNum++;
        reset ();
        setText ();
    });
};

function resultFn (){
    $('.resultBtn').hide();
    $('.nextBtn').show();

    answer.off('click');
};

function reset (){
    answer.removeClass('active correct');
    $('.resultBtn').show();
    $('.nextBtn').hide();
};

/* 
    
*/