
let colors = [
  "#ffbe0b",
  "#ff006e",
  "#8338ec",
  "#3a86ff"
];

let fps = 30;
// let seconds = frameCount / fps;
let moonSize;
let blackMoonOffset;
let moonColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  background(0);
  moonSize = 1;
  blackMoonOffset = 0;
  moonColor = "white";

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background("black");
}

function draw() {
  noStroke();
  drawMoon();
  drawDarkMoon();
}

function drawMoon() {
  push();
  if (moonSize <= windowHeight * 0.4) {
    moonSize++;
  }
  fill(moonColor);
  circle(windowWidth / 2, windowHeight / 3, moonSize);
  pop();
}

function drawDarkMoon() {
  push();
  fill("#000000AA");
  blackMoonOffset++;
  if (blackMoonOffset > windowWidth * 3 / 4) {
    console.log("ciao");
    blackMoonOffset = windowWidth / 4;
  }
  circle(windowWidth - blackMoonOffset, windowHeight / 3, moonSize);
  pop();
}