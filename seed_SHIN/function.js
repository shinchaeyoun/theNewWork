var imgArray1 = new Array();
imgArray1[0] = "https://kyohyunkim.github.io/recruit/img/a1.jpg"; 
imgArray1[1] = "https://kyohyunkim.github.io/recruit/img/b1.jpg"; 
imgArray1[2] = "https://kyohyunkim.github.io/recruit/img/c1.jpg"; 
imgArray1[3] = "https://kyohyunkim.github.io/recruit/img/d1.jpg"; 
imgArray1[4] = "https://kyohyunkim.github.io/recruit/img/e1.jpg"; 
imgArray1[5] = "https://kyohyunkim.github.io/recruit/img/f1.jpg"; 
imgArray1[6] = "https://kyohyunkim.github.io/recruit/img/j1.jpg"; 
imgArray1[7] = "https://kyohyunkim.github.io/recruit/img/h1.jpg"; 
imgArray1[8] = "https://kyohyunkim.github.io/recruit/img/i1.jpg"; 
imgArray1[9] = "https://kyohyunkim.github.io/recruit/img/j1.jpg"; 
imgArray1[10] = "https://kyohyunkim.github.io/recruit/img/k1.jpg"; 

var imgArray2 = new Array();
imgArray2[0] = "https://kyohyunkim.github.io/recruit/img/a2.jpg"; 
imgArray2[1] = "https://kyohyunkim.github.io/recruit/img/b2.jpg"; 
imgArray2[2] = "https://kyohyunkim.github.io/recruit/img/c2.jpg"; 
imgArray2[3] = "https://kyohyunkim.github.io/recruit/img/d2.jpg"; 
imgArray2[4] = "https://kyohyunkim.github.io/recruit/img/e2.jpg"; 
imgArray2[5] = "https://kyohyunkim.github.io/recruit/img/f2.jpg"; 
imgArray2[6] = "https://kyohyunkim.github.io/recruit/img/j2.jpg"; 
imgArray2[7] = "https://kyohyunkim.github.io/recruit/img/h2.jpg"; 
imgArray2[8] = "https://kyohyunkim.github.io/recruit/img/i2.jpg"; 
imgArray2[9] = "https://kyohyunkim.github.io/recruit/img/j2.jpg"; 
imgArray2[10] = "https://kyohyunkim.github.io/recruit/img/k2.jpg"; 

function showImage(){
    var imgNum = Math.round(Math.random()*10);
    var objImg1 = document.getElementById("introImg");
    var objImg2 = document.getElementById("blurImg");
    objImg1.src = imgArray1[imgNum];
    objImg2.src = imgArray2[imgNum];   
}
    


let pos = {y:0, y2:0, state:''}

window.addEventListener('scroll',function(){

    let yy = this.scrollY;
    pos.y = window.scrollY;
    if(pos.y > pos.y2){
        pos.state = true;                
    }else{
        pos.state = false;
    }
    pos.y2 = pos.y;

    if(pos.state){
        yy = yy/this.scrollY;
    }else{
        yy = yy/this.scrollY;
    }
    
    svg__circle.style = `width:${100 + this.scrollY}px;height:${100+this.scrollY}px;`;
    bg_mask.style = `clip-path: circle(${50 + this.scrollY/2}px at center);`
    
    // console.log(yy)
    // console.log(this.scrollY)

    if(window.scrollY > 0){
        rotate_text.style = `
        width:${150 + this.scrollY * 1.5}px;height:${150 + this.scrollY * 1.5}px;
        transform:translate(-50%,-50%) rotate(${this.scrollY / 2}deg);
        animation-play-state: paused;
    `;
    }else{
        rotate_text.style = "animation-play-state: start;"
    }
    
});
