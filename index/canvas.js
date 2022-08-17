function draw(){
    const canvas = $('canvas');
    
    if(canvas.getContext){
        let ctx = canvas.getContext('2d');

        ctx.fillRect = (10,10,50,50);
    }
}