class Shape {
    constructor(canvas) {
      this.canvas = canvas;
      this.x = random(canvas.width);
      this.y - random(canvas.height);
    }
  
    x = 100;
    y = 100;
    w = 50;
    h = 50;
  
    vx = random(-2, 2);
    vy = random(-2, 2);
  
    c = random(255);
  
    move() {
      this.x += this.vx;
      this.y += this.vy;
  
      if (this.x < 0  ||this.x > this.canvas.width) {
        this.vx = -this.vx;
      }
      if (this.y < 0 || this.draw.y > this.canvas.height) {
        this.vy = -this.vy;
      }
    }
  
    draw() {
      this.move();
      fill(this.c);
    }
  }
  
  class Square extends Shape {
    draw() {
      super.draw();
      square(this.x, this.y, this.w);
    }
  }
  
  class Circle extends Shape {
    draw() {
      super.draw();
      this.move();
      circle(this.x, this.y, this.w);
    }
  }
  
  // let s = new Square();
  
  // let square = new Square();
  // s.x = 200;
  // s.draw();
  
  let shapes = [];
  let canvas = { width: 800, height: 600 };
  
  var setup = function () {
    createCanvas(800, 600);
    background(100, 20, 58);
    for (let index = 0; index < 200; index++) {
      let box = new Square(canvas);
      shapes.push(box);
  
      let cir = new Circle(canvas);
      shapes.push(cir);
    }
  };
  
  var draw = function () {
    background(200);
    for (let index = 0; index < shapes.length; index++) {
      let shape = shapes[index];
      shape.draw();
    }
  };