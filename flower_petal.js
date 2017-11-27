function setup() {
	createCanvas(640, 640);
}

const circleRadius = 50;
const n = 20;

function draw() {
	background(255);

	strokeWeight(2);
	ellipse(width / 2, height / 2, 2*circleRadius, 2*circleRadius);
	strokeWeight(1);

	push();
	translate(width*0.5, height*0.5);
	rotate( frameCount / 200);
	bezierAtAngle(5);
	
	_.range(n).map( (k) => {
		bezierAtAngle(n,k);
	});
	pop();
}

function bezierAtAngle(n,k) {
	const x1 = circleRadius * cos(TWO_PI*k/n);
	const y1 = circleRadius * sin(TWO_PI*k/n);

	const x2 = (circleRadius+100) * cos(TWO_PI*k/n);
	const y2 = (circleRadius+100) * sin(TWO_PI*k/n);

	const x3 = (circleRadius+300) * cos(TWO_PI*(k+2)/n);
	const y3 = (circleRadius+300) * sin(TWO_PI*(k+2)/n);

	const x4 = circleRadius * cos(TWO_PI*(k+1)/n);
	const y4 = circleRadius * sin(TWO_PI*(k+1)/n);

	bezier(x1,y1,x2,y2,x3,y3,x4,y4)
}

function keyPressed() {
	if (keyCode == TAB) {
		saveCanvas("image" + frameCount ,"jpg");
	}
}
