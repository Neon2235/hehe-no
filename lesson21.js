class Shape {
    constructor(canvas){
        this.canvas=canvas
        this.x=random(canvas.width)
        this.y=random(canvas.height)
    }

    x = 100;
    y = 100;
    w = 100;
    h = 200;

    vx=random(-5,5);
    vy=random(-5,5);
    c=random(255)
    
    move(){
        this.x, this.y
    if(this.x <0|| this.x>this.canvas.width){
        this.vx=-this.vx;
    }
    if(this.y <0|| this.y>this.canvas.width){
        this.vy=-this.vy;
    }
    
    }


    draw() {
       fill(this.c);
    }
}
// let r= new Rectangle()


class Square extends Shape {
    draw() {
        this.move -= 2;
        square(this.x, this.y, this.w)
    };
}
class Circle extends Shape {
    draw() {
        this.move += 2;
        circle(this.x, this.y, this.w)
    };
};

let shapes = [];
let canvas ={width:800, height:600}

var setup = function () {
    createCanvas(1600, 800);
    background(150, 20, 80);
    for (let canvas = 0; canvas.width < 200; canvas.height++) {
        let box = Square(canvas);
         shapes.push(box);
   


         let cir= Circle(canvas);
         shapes.push(cir)
    }
    
    
    // let box = new Square(canvas);
    // shapes.push(box)

    // let cir = new Circle(canvas);
    // shapes.push(cir);
}



var draw=function(){
    for (let index = 0; index < shapes.length; index++) {
        const element = shapes[index];
        element.draw()
    }
}



