let WIDTH = 800;
let HEIGHT = 800;

let squareSize = WIDTH / 8;

function setup() {
  createCanvas(WIDTH+100, HEIGHT+100);
}

function draw() {
  background(220);

  let boardX = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  let boardY = ['8', '7', '6', '5', '4', '3', '2', '1'];
  textSize(32);

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      let x = col * squareSize + (squareSize / 2);
      let y = row * squareSize + (squareSize / 2);

      if ((row + col) % 2 === 0) {
        fill(255);
      } else {
        fill(0);
      }

      rect(col * squareSize+100, row * squareSize, squareSize, squareSize);
    }

    fill(0);
    text(boardX[row], 100 * (row + 1) + 40, HEIGHT+50);
    text(boardY[row], 50, 100 * (row + 1) - 40);
  }
}
