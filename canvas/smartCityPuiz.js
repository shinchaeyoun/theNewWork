/********************************
	kbrainc / 4지선다형 quiz
*********************************/

var ansArr = new Array();
var qnsArr = new Array("", 0, 0, 0);
var quizType = new Array("", "A", "A", "A");  // OX : "B", 4지선다 : "A"
var pageCheck = new Array("", 1, 1, 1);		// 문제지문 한줄, 두줄인지 체크
var BogiCheck = new Array("", 1, 1, 1);		// 보기 길이에 따른 조절 : 1은 기본, 2는 길경우, 3은 더 길경우
var FeedCheck = new Array("", 0, 0, 0);    // 피드백 내용이 많을 경우 1
var subCheck = new Array("", 0, 0, 0);		// 서브(보기) 타이틀 체크
var questionNum = qnsArr.length-1;
var pageInfo = new Array(questionNum);
var pageNum = 1;													// 문제번호
var objArr = new Array();									// 텍스트
var objArr2 = new Array();								// 이미지
var tryNum = 0;
var tryMax = 1;
var isClick = true;
var isTapClick = false;
var isWrongQuiz = false;
var path = "./common/quiz_up/";
var divObj, divObj2;

var defaultTextColor = "#333333";
var mouseOverColor = "#007777";
var mouseClickColor = "#007777";
var mouseAnsColor = "#e30090";
var mouseAnsBg = "transparent";
/* ----------------------------------------------------------------------------------------------------- */

for(var i=1; i<=questionNum; i++){
	pageInfo[i] = new Array();
}


function startQuiz(ans, pageInfo){
	pageInfo = pageInfo;
	ansArr.push("");
	for(var i=0; i<ans.length; i++){
		ansArr.push(ans[i]);
	}
	//quizStartClick();
	$('#page1 .cssPage1Btn').on('click', quizStartClick);
	//log("startQuiz!!!!");

	responsive();
}

function quizStartClick(){

	$('#page1').hide();
	$('#page2').show();
	// 버튼 세팅
	if(!isClear){
		setObj();
		isClear = true;
	}

	// 문제 세팅
	setQuestion();
}

function setQuestion(){
	initCss("init");

	isClick = true;
	tryNum = 0;

	$('.cssPage2Ox').css("display", "none");
	$('.cssPage2Feed').css("display", "none");
	$('.cssPage2Btn').css("display", "none");

	qnsArr[pageNum] = 0;
	clickInit(100);
	setText();
}

/**
	문제 제목 설정
**/
function setText(){
	$('.cssPage2Question').css("background", "url("+path+"quiz_question"+pageNum+".png)");

	$('.cssPage2Title').empty();
	$('.sub_bogi').empty();
	$('.cssPage2Feed .btn2').empty();
	$('.cssPage2Bogi #bogi-1').empty();
	$('.cssPage2Bogi #bogi-2').empty();
	$('.cssPage2Bogi #bogi-3').empty();
	$('.cssPage2Bogi #bogi-4').empty();

	$('.cssPage2Bogi_ox #bogi-1').empty();
	$('.cssPage2Bogi_ox #bogi-2').empty();

	$('.cssPage2Bogi #bogi-1').append(pageInfo[pageNum][1]);
	$('.cssPage2Bogi #bogi-2').append(pageInfo[pageNum][2]);
	$('.cssPage2Bogi #bogi-3').append(pageInfo[pageNum][3]);
	$('.cssPage2Bogi #bogi-4').append(pageInfo[pageNum][4]);

	// 서브 제목
	$('.sub_bogi').append(pageInfo[pageNum][6]);

	if (subCheck[pageNum] == 1) {
		$('.cssPagesub').css("display", "block");
		$('.cssPage2Bogi').css("margin-top", "10px");
	} else {
		$('.cssPagesub').css("display", "none");
		$('.cssPage2Bogi').css("margin-top", "203px");
	}

	if(quizType[pageNum] == "B") {

		$('.cssPage2Bogi').hide();
		$('.cssPage2Bogi_ox').show();

		for(var i=1; i<=ansArr.length; i++){
		divObj = $('.cssPage2Bogi_ox #bogi-'+i);
		divObj.num = i;
		divObj.isClick = true;
		objArr.push(divObj);
		_addBtnEvent2(divObj);

		divObj2 = $('.cssPage2Bogi_ox #bogiImg-'+i);
		divObj2.num = i;
		divObj2.isClick = true;
		objArr2.push(divObj2);
		_addBtnEvent(divObj2);
		}
	} else {
		$('.cssPage2Bogi').show();
		$('.cssPage2Bogi_ox').hide();

		for(var i=1; i<=ansArr.length; i++){
		divObj = $('.cssPage2Bogi #bogi-'+i);
		divObj.num = i;
		divObj.isClick = true;
		objArr.push(divObj);
		_addBtnEvent2(divObj);

		divObj2 = $('.cssPage2Bogi #bogiImg-'+i);
		divObj2.num = i;
		divObj2.isClick = true;
		objArr2.push(divObj2);
		_addBtnEvent2(divObj2);
	}
	}

	// 제목
	if (pageCheck[pageNum] == 2) {
		$('.cssPage2Title').append(pageInfo[pageNum][0]);
		$('.cssPage2Title').css({"margin-top": "85px"});
	} else {
		$('.cssPage2Title').append(pageInfo[pageNum][0]);
		$('.cssPage2Title').css({"margin-top": "105px"});
	}

	if (BogiCheck[pageNum] == 2) {
		$('.cssPage2Bogi ul li').css({"margin-top": "8px", "font-size": "30px", "top": "-18px"});
	} else if (BogiCheck[pageNum] == 3) {
		$('.cssPage2Bogi ul li').css({"margin-top": "8px", "font-size": "30px", "top": "-26px"});
	} else {
		$('.cssPage2Bogi ul li').css({"margin-top": "8px", "font-size": "30px", "top": "0px"});
	}

	if (FeedCheck[pageNum] == 1) {
		$('.cssPage2Feed ul li').css({"width": "1100px"});
	} else {
		$('.cssPage2Feed ul li').css({"width": "1035px"});
	}

	// 피드백
	$('.cssPage2Feed ul > .btn2').append(pageInfo[pageNum][5]);

	initTab(pageNum);
}

function setObj(){
	objArr.push('');
	objArr2.push('');

	if(quizType[pageNum] == "B") {
		for(var i=1; i<=ansArr.length; i++){
		divObj = $('.cssPage2Bogi_ox #bogi-'+i);
		divObj.num = i;
		divObj.isClick = true;
		objArr.push(divObj);
		_addBtnEvent2(divObj);

		divObj2 = $('.cssPage2Bogi_ox #bogiImg-'+i);
		divObj2.num = i;
		divObj2.isClick = true;
		objArr2.push(divObj2);
		_addBtnEvent(divObj2);
		}
	} else {
		for(var i=1; i<=ansArr.length; i++){
		divObj = $('.cssPage2Bogi #bogi-'+i);
		divObj.num = i;
		divObj.isClick = true;
		objArr.push(divObj);
		_addBtnEvent2(divObj);

		divObj2 = $('.cssPage2Bogi #bogiImg-'+i);
		divObj2.num = i;
		divObj2.isClick = true;
		objArr2.push(divObj2);
		_addBtnEvent2(divObj2);
	}
	}

	$('.cssPage2Btn .btn2').on("click", {data:"next"}, handleNextClick);
	$('.cssPage2Btn .btn3').on("click", {data:"result"}, handleNextClick);

	// 정답버튼
	//$('.cssPage2Submit').on("click", answer);

	// 학습종료
	$('.cssPage3Btn .btn3').on("click",handleEndClick);

	// 다시풀기
	$('.cssPage3Btn .btn4').on("click",handleRetryClick);

	// 틀린문제 다시풀기
	$('.cssPage3Btn .btn2').on("click",handleWrongClick);

	// 정답 및 해설보기
	$('.cssPage3Btn .btn1').on("click",handleResultClick);

	// 창닫기
	$('.chasi_close').on("click",closeTabClick);

	for(var k=1; k<=3; k++){
		$('.cssPage2QuestionPosition .cssPage2Q'+k).on("mouseover", {data:k}, handleTabOver);
		$('.cssPage2QuestionPosition .cssPage2Q'+k).on("mouseout", {data:k}, handleTabOut);
		$('.cssPage2QuestionPosition .cssPage2Q'+k).on("click", {data:k}, handleTabClick);
	}
}

// 학습종료
function handleEndClick(e){
	playS("button click");
	$("#page4").css("display", "block");
	$("#page3").css("display", "none");

}

// 다시 풀기 evt
function handleRetryClick(e){
	playS("button click");
	$("#page2").css("display", "block");
	$("#page3").css("display", "none");

	pageNum = 1;
	isTapClick = false;
	isWrongQuiz = false;

	$('.cssPage2QuestionPosition .cssPage2Q1 em').css("display","none");
	$('.cssPage2QuestionPosition .cssPage2Q2 em').css("display","none");
	$('.cssPage2QuestionPosition .cssPage2Q3 em').css("display","none");


	setQuestion();
}

// 틀린문제 다시풀기
function handleWrongClick(e){
	playS("button click");
	var mPage = 0;
	pageNum = 0;
	isWrongQuiz = true;
	isTapClick = false;

	for(var i=1; i<ansArr.length; i++){
		if(ansArr[i] != qnsArr[i]){
			$('.cssPage2QuestionPosition .cssPage2Q'+i+' em').css("display","none");
		}
	}

	wrongQuestion();
}

function wrongQuestion(){
	for(var i=(pageNum+1); i<ansArr.length; i++){
		if(ansArr[i] != qnsArr[i]){
			if(pageNum != i){
				mPage = i;
				break;
			}
		}
	}
	pageNum = mPage;

	$("#page2").css("display", "block");
	$("#page3").css("display", "none");

	initCss("init");
	setQuestion();
	$('.cssPage2QuestionPosition .cssPage2Q'+pageNum+' em').css("display","none");
}



// 정답 및 해설보기 evt
function handleResultClick(e){
	playS("button click");
	isTapClick = true;
	$("#page2").css("display", "block");
	$("#page3").css("display", "none");

	pageNum = 1;

	resultViewPage(pageNum);
}

// 탭 클릭
function handleTabClick(e){
	if(isTapClick){
		var position = e.data.data;
		resultViewPage(position);
		playS("button click");
	}
}

function handleTabOver(e){
	if(isTapClick){
		$(this).css("cursor", "pointer");
	}
}

function handleTabOut(e){
	if(isTapClick){
		$(this).css("cursor", "default");
	}
}

// 정답 및 해설보기 page
function resultViewPage(_pageNum){
	playS("button click");
	pageNum = _pageNum

	initCss("init");
	setText();

	if(ansArr[pageNum] == qnsArr[pageNum]){
		$('.cssPage2Ox').css({"display":"block", "background":"url("+path+"quiz_result_o.png)"});
	}else{
		$('.cssPage2Ox').css({"display":"block", "background":"url("+path+"quiz_result_x.png)"});

		if(quizType[pageNum] == "B") {
			$('.cssPage2Bogi_ox #bogiImg-'+qnsArr[pageNum]).css("background", "url("+path+"oxquiz_num"+qnsArr[pageNum]+"_u.png)");
		} else {
			$('.cssPage2Bogi #bogi-'+qnsArr[pageNum]).css("color",mouseClickColor); //보기 마우스 오버시 색상
			$('.cssPage2Bogi #bogiImg-'+qnsArr[pageNum]).css("background", "url("+path+"quiz_num"+qnsArr[pageNum]+"_u.png)");
		}
		//$('.cssPage2Bogi #odap'+qnsArr[pageNum]).css("display", "block");

	}

	if(quizType[pageNum] == "B") {
		$('.cssPage2Bogi_ox #bogiImg-'+ansArr[pageNum]).css("background", "url("+path+"oxquiz_num"+ansArr[pageNum]+"_c.png)");
		$('.cssPage2Bogi_ox #oxdap'+ansArr[pageNum]).css("display", "block");
		$(".cssPage2Bogi_ox #oxbogiCheck"+qnsArr[pageNum]).show();
	} else {
		$('.cssPage2Bogi #bogi-'+ansArr[pageNum]).css("color",mouseAnsColor); // 보기 클릭 후 정답색상
		$('.cssPage2Bogi #bogi-'+ansArr[pageNum]).css("background-color",mouseAnsBg); // 보기 클릭 후 정답색상
		$('.cssPage2Bogi #bogiImg-'+ansArr[pageNum]).css("background", "url("+path+"quiz_num"+ansArr[pageNum]+"_c.png)");
		$('.cssPage2Bogi #dap'+ansArr[pageNum]).css("display", "block");
		$(".cssPage2Bogi #bogiCheck"+qnsArr[pageNum]).show();
	}

	questionFeedBack();

	$('.cssPage2Btn .btn2').css("display", "none");
	$('.cssPage2Btn .btn3').css("display", "block");
}


function handleNextClick(e){
	playS("button click");
	var type = e.data.data;
	if(type == "next"){
		if(isWrongQuiz){
			wrongQuestion();
		}else{
			pageNum++;
			setQuestion(pageNum);
		}
	}else if(type == "result"){
		// 결과 화면
		$("#page2").css("display", "none");
		$("#page3").css("display", "block");
		var score = 0;
		for(var i=1; i<=qnsArr.length-1; i++){
				if(ansArr[i] == qnsArr[i]){
					$('.cssPage3OX .ox'+i).css("background", "url("+path+"quiz_final_o.png)");
					score++;
				}else{
					$('.cssPage3OX .ox'+i).css("background", "url("+path+"quiz_final_x.png)");
				}
		}

		$('#page3 .cssPage3Txt_sub').text(score);

		/**
			btn1 정답 및 해설보기
			btn2 틀린문제 다시풀기
			btn3 학습종료
		**/

		// 다 맞았을 경우
		if(score == qnsArr.length-1){
			$('.cssPage3Btn .btn4').css("display", "inline-block");
			$('.cssPage3Btn .btn2').css("display", "none");
		}else{
			$('.cssPage3Btn .btn4').css("display", "none");
			$('.cssPage3Btn .btn2').css("display", "inline-block");
		}
	}
}


//ox용 보기
function _addBtnEvent(_target){
	_target.on("mouseover", function(evt){
		var num = _target.num;
		var type = $(this).attr("id").split("-");
		if(isClick){
			log("$(this).isClick : " + _target.isClick);
			if(_target.isClick){
				$(this).css("cursor","pointer");
				if(type[0] == "oxbogi"){
					$('.cssPage2Bogi_ox #bogiImg-'+num).css("background", "url("+path+"oxquiz_num"+num+"_u.png)");
				}else if(type[0] == "bogiImg"){
					$(this).css("background", "url("+path+"oxquiz_num"+num+"_u.png)");
				}
			}
		}
	});

	_target.on("mouseout", function(evt){
		var num = _target.num;
		var type = $(this).attr("id").split("-");
		if(isClick){
			if(_target.isClick){
				$(this).css("cursor","default");
				if(type[0] == "oxbogi"){
					$('.cssPage2Bogi_ox #bogiImg-'+num).css("background", "url("+path+"oxquiz_num"+num+"_d.png)");
				}else if(type[0] == "bogiImg"){
					$(this).css("background", "url("+path+"oxquiz_num"+num+"_d.png)");
				}
			}
		}
	});

	_target.on("click", function(evt){
		if(isClick){
			//answer(_target.num);
			clickInit(_target.num);
			playS("button click");
		}
		answer();
	});
}// end function _addBtnEvent(_target){



// 4지선다 용 보기
function _addBtnEvent2(_target){
	_target.on("mouseover", function(evt){
		var num = _target.num;
		var type = $(this).attr("id").split("-");
		if(isClick){
			log("$(this).isClick : " + _target.isClick);
			if(_target.isClick){
				$(this).css("cursor","pointer");
				if(type[0] == "bogi"){
					$(this).css("color",mouseClickColor); //보기 마우스 오버시 색상
					$('.cssPage2Bogi #bogiImg-'+num).css("background", "url("+path+"quiz_num"+num+"_u.png)");
				}else if(type[0] == "bogiImg"){
					$('.cssPage2Bogi #bogi-'+num).css("color",mouseClickColor); //보기 마우스 오버시 색상
					$(this).css("background", "url("+path+"quiz_num"+num+"_u.png)");
				}
			}
		}
	});

	_target.on("mouseout", function(evt){
		var num = _target.num;
		var type = $(this).attr("id").split("-");
		if(isClick){
			if(_target.isClick){
				$(this).css("cursor","default");
				if(type[0] == "bogi"){
					$(this).css("color", defaultTextColor); //보기 텍스트 색상
					$(this).css("background-color", "transparent"); //보기 텍스트 색상
					$('.cssPage2Bogi #bogiImg-'+num).css("background", "url("+path+"quiz_num"+num+"_d.png)");
				}else if(type[0] == "bogiImg"){
					$('.cssPage2Bogi #bogi-'+num).css("color",defaultTextColor); //보기 텍스트 색상
					$('.cssPage2Bogi #bogi-'+num).css("background-color", "transparent"); //보기 텍스트 색상
					$(this).css("background", "url("+path+"quiz_num"+num+"_d.png)");
				}
			}
		}
	});

	_target.on("click", function(evt){
		if(isClick){
			//answer(_target.num);
			clickInit(_target.num);
			playS("button click");
		}
		answer();
	});
}// end function _addBtnEvent2(_target){


function clickInit(num){
	for(var i=1; i<=4; i++){
		if(i != num){
			objArr[i].isClick = true;
			objArr2[i].isClick = true;

			$('.cssPage2Bogi #bogi-'+i).css("color",defaultTextColor); //보기 텍스트 색상
			$('.cssPage2Bogi #bogi-'+i).css("background-color","transparent"); //보기 텍스트 색상
			$('.cssPage2Bogi #bogiImg-'+i).css("background", "url("+path+"quiz_num"+i+"_d.png)");

			$('.cssPage2Bogi_ox #bogiImg-'+i).css("background", "url("+path+"oxquiz_num"+i+"_d.png)");
			//$('.cssPage2Bogi #odap'+num).css("display", "block");

			$("#bogiCheck"+i).hide();
			$(".cssPage2Bogi_ox #oxbogiCheck"+i).hide();
		}
	}

	if(num == 100){
		return;
	}else{

		qnsArr[pageNum] = num;
		objArr[num].isClick = false;
		$('.cssPage2Bogi #bogi-'+num).css("cursor","default");

		objArr2[num].isClick = false;
		$('.cssPage2Bogi #bogiImg-'+num).css("cursor", "default");
		$('.cssPage2Bogi_ox #bogiImg-'+num).css("cursor", "default");

		$("#bogiCheck"+num).show();
		$(".cssPage2Bogi_ox #oxbogiCheck"+num).show();
	}

	log("qnsArr : " + qnsArr);
}

/**
	정답체크
**/
function answer(){
	num = qnsArr[pageNum];

	if(num != 0){
		tryNum++;
		//qnsArr[pageNum] = num;

		log("정답 : " + ansArr[pageNum] + "  사용자 정답 : " + num);
		if(tryNum < tryMax){
			if(ansArr[pageNum] == num){
				if(quizType[pageNum] == "B") {
					$('.cssPage2Bogi_ox #bogiImg-'+ansArr[pageNum]).css("background", "url("+path+"oxquiz_num"+ansArr[pageNum]+"_c.png)");
					$('.cssPage2Bogi_ox #oxdap'+ansArr[pageNum]).css("display", "block");
				} else {
					$('.cssPage2Bogi #bogi-'+ansArr[pageNum]).css("color",mouseAnsColor); // 보기 클릭 후 정답색상
					$('.cssPage2Bogi #bogi-'+ansArr[pageNum]).css("background-color",mouseAnsBg); // 보기 클릭 후 정답색상
					$('.cssPage2Bogi #bogiImg-'+ansArr[pageNum]).css("background", "url("+path+"quiz_num"+ansArr[pageNum]+"_c.png)");
					$('.cssPage2Bogi #dap'+ansArr[pageNum]).css("display", "block");
				}

				$('.cssPage2Ox').css({"display":"block", "background":"url("+path+"quiz_result_o.png)"});
				$('.cssPage2QuestionPosition .cssPage2Q'+pageNum+' em').css({"display":"block","background":"url("+path+"quiz_p_o.png)"});
				questionFeedBack();
				playS("quiz_right");
			}else{
				$(".cssPage2Retry").fadeIn().delay(1000).fadeOut();
				qnsArr[pageNum] = 0;
				clickInit(100);
				playS("quiz_wrong");
			}
		}else if(tryNum == tryMax){
			if(ansArr[pageNum] == num){
				$('.cssPage2Ox').css({"display":"block", "background":"url("+path+"quiz_result_o.png)"});
				$('.cssPage2QuestionPosition .cssPage2Q'+pageNum+' em').css({"display":"block","background":"url("+path+"quiz_p_o.png)"});
				playS("quiz_right");
			}else{
				$('.cssPage2Ox').css({"display":"block", "background":"url("+path+"quiz_result_x.png)"});
				$('.cssPage2QuestionPosition .cssPage2Q'+pageNum+' em').css({"display":"block","background":"url("+path+"quiz_p_x.png)"});
				playS("quiz_wrong");
			}
			if(quizType[pageNum] == "B") {
				$('.cssPage2Bogi_ox #bogiImg-'+ansArr[pageNum]).css("background", "url("+path+"oxquiz_num"+ansArr[pageNum]+"_c.png)");
				$('.cssPage2Bogi_ox #oxdap'+ansArr[pageNum]).css("display", "block");
			} else {
				$('.cssPage2Bogi #bogi-'+ansArr[pageNum]).css("color",mouseAnsColor); // 보기 클릭 후 정답색상
				$('.cssPage2Bogi #bogi-'+ansArr[pageNum]).css("background-color",mouseAnsBg); // 보기 클릭 후 정답색상
				$('.cssPage2Bogi #bogiImg-'+ansArr[pageNum]).css("background", "url("+path+"quiz_num"+ansArr[pageNum]+"_c.png)");
				$('.cssPage2Bogi #dap'+ansArr[pageNum]).css("display", "block");
			}

			questionFeedBack();
		}
	}else{
		 log("선택해라!!");
		 $(".cssPage2Check").fadeIn().delay(1000).fadeOut();
		 playS("warning");

	}
}
/**
	피드백 화면
**/
function questionFeedBack(){

	isClick = false;
	//$('.cssPage2Submit').hide();
	$('.cssPage2Feed').css("display", "block");
	$('.cssPage2Feed .btn1').css("background", "url("+path+"quiz_feed"+ansArr[pageNum]+".png) no-repeat");

	$('.cssPage2Btn').css("display", "block");
	//$('.cssPage2Bogi #odap'+ansArr[pageNum]).hide();
	if(pageNum == 3){
		$('.cssPage2Btn .btn2').css("display", "none");
		$('.cssPage2Btn .btn3').css("display", "block");
	}else{
		$('.cssPage2Btn .btn2').css("display", "block");
		$('.cssPage2Btn .btn3').css("display", "none");
	}
	if(isWrongQuiz){
		var score = 0;
		for(var i=1; i<ansArr.length; i++){
			if(ansArr[i] == qnsArr[i]){
				score++;
			}
		}
		var mPage = 0;
		for(var k=pageNum; k<ansArr.length; k++){
			if(ansArr[k] != qnsArr[k]){
				if(k != pageNum){
					mPage = k;
					break;
				}
			}
		}

		if(mPage == 0){
			$('.cssPage2Btn .btn2').css("display", "none");
			$('.cssPage2Btn .btn3').css("display", "block");
			return;
		}
		if(score == 3){
			$('.cssPage2Btn .btn2').css("display", "none");
			$('.cssPage2Btn .btn3').css("display", "block");
		}else{
			$('.cssPage2Btn .btn2').css("display", "block");
			$('.cssPage2Btn .btn3').css("display", "none");
		}
	}

	initCss();
}


function initCss(type){
	for(var i=1; i<=ansArr.length; i++){
		if(type == "init"){
			$('.cssPage2Bogi #bogi-'+i).css("color", defaultTextColor); //보기 텍스트 색상
			$('.cssPage2Bogi #bogi-'+i).css("background-color","transparent"); //보기 텍스트 색상
			$('.cssPage2Bogi #bogiImg-'+i).css("background", "url("+path+"quiz_num"+i+"_d.png)");
			$(".cssPage2Bogi #bogiCheck"+i).hide();
			$('.cssPage2Bogi #dap'+i).css("display", "none");

			$('.cssPage2Bogi_ox #bogiImg-'+i).css("background", "url("+path+"oxquiz_num"+i+"_d.png)");
			$(".cssPage2Bogi_ox #oxbogiCheck"+i).hide();
			$('.cssPage2Bogi_ox #oxdap'+i).css("display", "none");
		}
		$('.cssPage2Bogi #bogi-'+i).css("cursor", "default");
		$('.cssPage2Bogi #bogiImg-'+i).css("cursor", "default");

		$('.cssPage2Bogi_ox #bogiImg-'+i).css("cursor", "default");

		objArr[i].isClick = true;
		objArr2[i].isClick = true;
	}
}

function initTab(num){
	for(var i=1; i<=3; i++){
		if(i != num){
			$('.cssPage2QuestionPosition .cssPage2Q'+i).css("background", "url("+path+"quiz_q"+i+"_d.png)");
		}
	}
	$('.cssPage2QuestionPosition .cssPage2Q'+num).css("background", "url("+path+"quiz_q"+num+"_u.png)");
}


//--------------------- 포팅 후 테스트 필요 ------------
// 창닫기
function closeTabClick(){
	playS("button click");
	$("#page4").css("display", "none");
	$("#page3").css("display", "block");
	return false;
}
