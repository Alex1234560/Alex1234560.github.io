var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');



let variable = 0;
let acceleration = 10;
let angle = 45;

const radius = 30; // Radius of the circle
let x = canvas.width/2; // X-coordinate of the circle's center
let y = canvas.height/2; // Y-coordinate of the circle's center

//let balls = [{"x":30,"y":30,"radius":20,"color":"rgb(0,233,0)","acceleration":acceleration,"angle":30}]//[x,y,radius,color]
let balls = []
for (let i = 0; i < 100; i+=1) {
	dict = {}
	dict["x"] = canvas.width/2
	dict["y"] = canvas.height/2
	dict["radius"] = getRandomInt(10,40)
	dict["angle"] = getRandomInt(0,360)
	dict["acceleration"] = getRandomInt(2,12)
	dict["color"] = (getRandomInt(0,360),getRandomInt(0,360),getRandomInt(0,360))

	balls.push(dict);
}


for (let i = 0; i < balls.length; i++) {
	accelerations = splitAcceleration(balls[i]["angle"],balls[i]["acceleration"]);
	balls[i]["vx"] = accelerations.x
	balls[i]["vy"] = accelerations.y
	
}
// Va

vx = splitAcceleration(angle,acceleration).x;
vy = splitAcceleration(angle,acceleration).y;

function update(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	for (let i = 0; i < balls.length; i+=1) {

		

		if (balls[i]["x"] + radius >= canvas.width || balls[i]["x"]-radius <= 0){ //limits on x axis
			balls[i]["vx"]*=-1;}
		if (balls[i]["y"] + radius >= canvas.height || balls[i]["y"]-radius <= 0){ //limits on Y axis
			balls[i]["vy"]*=-1;

		if (balls[i]["y"] + radius >= canvas.height){balls[i]["y"] = canvas.height-radius}//so that ball cant go offscreen when rezising
		if (balls[i]["x"] + radius >= canvas.width){balls[i]["x"] = canvas.width-radius}//so that ball cant go offscreen when rezising
		}


		balls[i]["x"]+=balls[i]["vx"];
		balls[i]["y"]+=balls[i]["vy"];
		
	}
	
	if (x + radius >= canvas.width || x-radius <= 0){ //limits on x axis
		vx*=-1;}
	if (y + radius >= canvas.height || y-radius <= 0){ //limits on Y axis
		vy*=-1;
	}

	if (y + radius >= canvas.height){y = canvas.height-radius}//so that ball cant go offscreen when rezising
	if (x + radius >= canvas.width){x = canvas.width-radius}//so that ball cant go offscreen when rezising

	

	x+=vx;
	y+=vy;
	
}

	

function draw(){
    // Draw the circle

	for (let i = 0; i < balls.length; i++) {

		c.beginPath();
    	c.arc(balls[i]["x"], balls[i]["y"], balls[i]["radius"], 0, 2 * Math.PI); // Full circle (0 to 2 * PI radians)
    	c.fillStyle = balls[i]["color"]; // Fill color
    	c.fill(); // Fill the circle with color
		
	}

    c.beginPath();
    c.arc(x, y, radius, 0, 2 * Math.PI); // Full circle (0 to 2 * PI radians)
    c.fillStyle = 'rgb(0,0,255)'; // Fill color
    c.fill(); // Fill the circle with color
}



function animate() {
	requestAnimationFrame(animate);
	
	update();
	draw();
	
	
	
	
}

function splitAcceleration(angle, magnitude) {
    // Convert angle to radians if it’s in degrees
    let radians = angle * (Math.PI / 180);

    // Calculate x and y components
    let x = magnitude * Math.cos(radians);
    let y = magnitude * Math.sin(radians);

    return { x, y };
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
  }

animate()

