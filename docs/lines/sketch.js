function setup() {
  createCanvas(720, 720);
}

// the parameter at which x and y depends is usually taken as either t or symbol of theta
let t1 = 0;
let t2 = 0;
function draw() {
  background("#0f0f0f");
  translate(width / 2, height / 2);
  strokeWeight(1.5);
  //loop for adding 100 lines
  for (let i = 0; i < 200; i++) {
    stroke("#FFE504");
    line(
      x1(t1 + i),
      y1(t1 + i),
      x2(t1 + i) + 20,
      y2(t1 + i) + 20,
      x3(t1 + i) + 30,
      y3(t1 + i) + 30,
    );
    stroke("#FF04F8");
    line(
      x1(t2 - i),
      y1(t2 - i),
      x2(t2 - i) + 20,
      y2(t2 - i) + 20,
      x3(t2 - i) + 30,
      y3(t2 - i) + 30,
    );
  }
  t1 += 0.15;
  t2 -= 0.15;
}
// function to change initial x co-ordinate of the line
function x1(t) {
  return sin(t / 10) * 125 + sin(t / 20) * 125 + sin(t / 30) * 125;
}

// function to change initial y co-ordinate of the line
function y1(t) {
  return cos(t / 10) * 125 + cos(t / 20) * 125 + cos(t / 30) * 125;
}

// function to change final x co-ordinate of the line
function x2(t) {
  return sin(t / 15) * 125 + sin(t / 25) * 125 + sin(t / 35) * 125;
}

// function to change final y co-ordinate of the line
function y2(t) {
  return cos(t / 15) * 125 + cos(t / 25) * 125 + cos(t / 35) * 125;
}

// function to change final x co-ordinate of the line
function x3(t) {
  return sin(t / 20) * 125 + sin(t / 25) * 125 + sin(t / 35) * 125;
}

// function to change final y co-ordinate of the line
function y3(t) {
  return cos(t / 20) * 125 + cos(t / 25) * 125 + cos(t / 35) * 125;
}
