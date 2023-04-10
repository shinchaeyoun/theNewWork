function pageInfoFn(){
    let _info = this;

    /* type 0=single, 1=essay, 2=drawing */
    _info.type = ['single','essay','drawing'];
    _info.ans = [];
    _info.quizTxt = [];

    _info.ans[0] = [];
    _info.ans[0][0] = 3;
    
    _info.ans[1] = [];
    _info.ans[1][0] = 'hi';
    
    _info.ans[2] = [];
    _info.ans[2][0] = 3;
    _info.ans[2][1] = 2;
    _info.ans[2][2] = 1;
    
    _info.quizTxt[0] = [];
    _info.quizTxt[0][0] = 'single question title';
    _info.quizTxt[0][1] = 'single 1';
    _info.quizTxt[0][2] = 'single 2';
    _info.quizTxt[0][3] = 'single 3';
    _info.quizTxt[0][4] = 'single 4';
    _info.quizTxt[0][5] = 'question'

    _info.quizTxt[1] = [];
    _info.quizTxt[1][0] = 'essay question title';
    _info.quizTxt[1][1] = 'essay 1';
    _info.quizTxt[1][2] = 'essay 2';
    _info.quizTxt[1][3] = 'essay 3';
    _info.quizTxt[1][4] = 'essay 4';
    _info.quizTxt[1][5] = 'question'

    _info.quizTxt[2] = [];
    _info.quizTxt[2][0] = 'drawing question title';
    _info.quizTxt[2][1] = 'drawing 1';
    _info.quizTxt[2][2] = 'drawing 2';
    _info.quizTxt[2][3] = 'drawing 3';
    _info.quizTxt[2][4] = 'drawing 4';
    _info.quizTxt[2][5] = 'question';
};