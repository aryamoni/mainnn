var bg, backgroundImg;
var iron

function preload() {
    backgroundImg = loadImage("images/bg.jpg");
    ironImg = loadImage("images/iron.png")
}

function setup() {
    createCanvas(1000, 600);
    bg = createSprite(580, 300);
    bg.addImage(backgroundImg)
    bg.scale = 3
    iron = createSprite(300, 400, 50, 50)
    iron.addImage("running", ironImg)
    iron.scale = 0.3
}

function draw() {
    bg.velocityY = 4
    if (bg.y > 1000) {
        bg.y = 0
    }
    if (keyDown("up")) {
        iron.velocityY = -4
    }
    if (keyDown("left")) {
        iron.x = iron.x - 4
    }
    if (keyDown("right")) {
        iron.x = iron.x + 4
    }
    iron.velocityY = iron.velocityY + 0.5
    drawSprites();

}