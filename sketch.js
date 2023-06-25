/*
 * Globals
 */
let picChoices = [
  "lib/eth.png",
  "lib/eth2.png",
  "lib/eth3.png",
  "lib/eth4.png",
  "lib/eth5.png",
];
let img;
let img_name;
/*
 * Preload
 * Load any assets we need for the sketch
 */
function preload() {
  img_name = hl.randomElement(picChoices);
  img = loadImage(img_name);
}

/*
 * Setup
 */
function setup() {
  createCanvas(windowWidth, windowHeight);
  image(img, 0, 0);

  // Set attributes
  hl.token.setAttributes({
    "Image": img_name,
  });
}

/*
 * Draw
 */
function draw() {
  image(img, 0, 0, windowWidth, windowHeight);
  hl.token.capturePreview();
}

/*
 * Window resize
 */
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

/*
 * Keyboard shortcuts for saving, redrawing, etc.
 */
function keyTyped() {
  switch (key) {
    case "s":
      saveCanvas();
      break;
    case "r":
      redraw();
      break;
  }
}
