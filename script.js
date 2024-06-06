function setup() {
    createCanvas(900, 800);
    fill("lightblue");
    stroke("blue");
    fractalStairs = new FractalStairs(width / 3, height / 3, 320, 80, PI / 18);
}

function draw() {
    background("lightblue");
    fractalStairs.draw();
    noLoop();
}