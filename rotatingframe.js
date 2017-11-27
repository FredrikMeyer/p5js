function setup() {
	createCanvas(640, 640);
//	noLoop();
}

const circleRadius = 50;
const n = 20;

function draw() {
		push();
	translate(width*0.5, height*0.5);
	rotate( frameCount);

	ellipse(width / 2, height / 2, 2*circleRadius, 2*circleRadius);
	bezierAtAngle(5);
	_.range(n).map( (k) => {
		bezierAtAngle(n,k);
	});
	pop();
}

// Return four points, two at the circle
function bezierAtAngle(n,k) {
	x1 = circleRadius * cos(TWO_PI*k/n) + width / 2;
	y1 = circleRadius * sin(TWO_PI*k/n)  + height / 2;

	x2 = (circleRadius+100) * cos(TWO_PI*k/n) + width / 2;
	y2 = (circleRadius+100) * sin(TWO_PI*k/n) + width / 2;

	x3 = (circleRadius+300) * cos(TWO_PI*(k+1)/n) + width / 2;
	y3 = (circleRadius+300) * sin(TWO_PI*(k+1)/n) + width / 2;

	x4 = circleRadius * cos(TWO_PI*(k+1)/n) + width / 2;
	y4 = circleRadius * sin(TWO_PI*(k+1)/n) + width / 2;

	bezier(x1,y1,x2,y2,x3,y3,x4,y4)
}

function keyPressed() {
	if (keyCode == TAB) {
		saveCanvas("image" + frameCount ,"jpg");
	}
}
