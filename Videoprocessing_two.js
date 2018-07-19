function setup() {
  createCanvas(320, 240);
  video = createCapture(VIDEO);
  video.size(320, 240);
}

function draw() {
  background(51);
  var snapshot = get(0,0,100,100);
  image(snapshot, 0, 0);
}