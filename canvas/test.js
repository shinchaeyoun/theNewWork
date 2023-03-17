const cho = document.querySelector('#myRadio'),
      add = document.querySelector('#add1'),
      nIL = document.querySelector('#newItemLabel'),
      rmv = document.querySelector('#remove1');

let idCnt = 0;

add.addEventListener('click', function(e){
    if(!nIL.value) return;

    let id = ('000000' + idCnt.toString(16)).slice(-6);
    idCnt += 1;
    
});