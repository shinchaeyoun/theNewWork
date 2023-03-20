function pageInfoFn (){
    let _info = this;

    _info.completNum = 80;
    
    _info.mainIndex = [];
    _info.subIndex = [];
    _info.mediaType = [];
    _info.captionType = [];
    _info.subIndex = new Array();
    
    _info.mainIndex[0] = 'Main Title 1';
    _info.mainIndex[1] = 'Main Title 2';
    _info.mainIndex[2] = 'Main Title 3';
    _info.mainIndex[3] = 'Main Title 4';
    
    _info.subIndex[0] = new Array();
    _info.subIndex[0][0] = 'Sub Title 1-1';

    _info.subIndex[1] = new Array();
    _info.subIndex[1][0] = 'Sub Title 2-1';
    _info.subIndex[1][1] = 'Sub Title 2-2';
    _info.subIndex[1][2] = 'Sub Title 2-3';

    _info.subIndex[2] = new Array();
    _info.subIndex[2][0] = 'Sub Title 3-1';
    _info.subIndex[2][1] = 'Sub Title 3-1';

    _info.subIndex[3] = new Array();
    _info.subIndex[3][0] = 'Sub Title 4-1';
    _info.subIndex[3][1] = 'Sub Title 4-1';

    _info.mediaType = ['mp4','mp3','mp3','mp4','mp3','mp4','mp3','mp4'];
    _info.captionType = ['1','2','3','1','2','3','1','2'];
};