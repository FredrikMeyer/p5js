function setup() {
	createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
  	fill(0);
  } else {
  	fill(255);
  }
  push();
  translate(width*0.5, height*0.5);
  rotate(frameCount / 50.0);
  polygon(mouseX, mouseY, 80, 3);
  pop();
}

function keyPressed() {
	if (keyCode == TAB) {
		saveCanvas("image" + frameCount ,"jpg");
	}
}

function polygon(x, y, radius, npoints) {
	const angle = TWO_PI / npoints;
	beginShape();
	for (var a = 0; a < TWO_PI; a += angle) {
		let sx = x + cos(a)  *  radius;
		let sy = y + sin(a)  *  radius;
		vertex(sx, sy);
	}
	endShape(CLOSE);
}