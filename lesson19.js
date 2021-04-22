var setup=function(){
    createCanvas(1600, 800);
background(200);
//noLoop();
};

var draw=function(){
for (let outerIndex = 0; outerIndex < 10; outerIndex++) {
    for (let index = 0; index < 10; index++) {
        fill(random(255), random(255), random(255))
rect(index*140, outerIndex*140, 200)};
    }

}



