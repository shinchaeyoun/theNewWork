let stageWidth, stageHeight;
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');


window.addEventListener('resize', resize.bind(), false);
resize();
function resize(){
    stageWidth = document.body.clientWidth;
    stageHeight = document.body.clientHeight;
    canvas.width = stageWidth;
    canvas.height = stageHeight;
}

class Ball{
    constructor(x, y, radius, speed, color){
        this.x = x;
        this.y = y;
        this.vx = speed;
        this.vy = speed;
        this.radius = radius;
        this.color = color;
        
        this.draw();
    }
    draw(){
        const minX = this.radius;
        const maxX = stageWidth - this.radius;
        const minY = this.radius;
        const maxY = stageHeight - this.radius;

        if(this.x<=minX || this.x>=maxX){
            if((this.x-this.vx)>=maxX){
                this.x = maxX;
            }else if((this.x-this.vx)<=minX){
                this.x = minX;
            }
            this.vx *= -1;
            this.x += this.vx;
        }else if(this.y<=minY || this.y>=maxY){
            if((this.y-this.vy)>=maxY){
                this.y = maxY;
            }else if((this.y-this.vy)<=minY){
                this.y = minY;
            }
            this.vy *= -1;
            this.y += this.vy;
        }else{
            this.x += this.vx;
            this.y += this.vy;
        }

        ctx.beginPath();
        ctx.fillStyle=this.color;
        ctx.arc(this.x, this.y, this.radius, Math.PI*2, false);
        ctx.fill();
    }
}



const box = new Ball(50, 50, 20, 5, 'red');
function render(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    box.draw();
    requestAnimationFrame(render);
}

render();