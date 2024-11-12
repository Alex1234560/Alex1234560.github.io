var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

const radius = 15; // Radius of the circle
let BallsOnClick = 10;

//let balls = [{"x":30,"y":30,"radius":20,"color":"rgb(0,233,0)","acceleration":acceleration,"angle":30}]//[x,y,radius,color]
let balls = []

MoreBalls = MakeBalls(0)
balls = balls.concat(MoreBalls)

document.addEventListener('click', function(event) {
	MoreBalls = MakeBalls(BallsOnClick)
	balls = balls.concat(MoreBalls);

});

function MakeBalls(num) {

	array = []
	for (let i = 0; i < num; i+=1) {
		dict = {}
		dict["x"] = canvas.width/2
		dict["y"] = canvas.height/2
		dict["radius"] = radius//getRandomInt(10,10)
		dict["angle"] = getRandomInt(0,360)
		dict["acceleration"] = getRandomInt(3,10)

		VariableColor = 255
		if (balls.length < 255){VariableColor=balls.length}
		
		dict["color"] = [VariableColor,getRandomInt(0,255),VariableColor,1]//[getRandomInt(0,255),getRandomInt(0,255),getRandomInt(0,255),.8]
	
		accelerations = splitAcceleration(dict["angle"],dict["acceleration"]);
		dict["vx"] = accelerations.x
		dict["vy"] = accelerations.y

		array.push(dict)
	
	}

	return array
  }

 
function update(){ 
	if (balls.length <= 0){
	ClickToStart.textContent = 'Click To Start';}
	else{ClickToStart.textContent = '';}

	NumberOfBalls.textContent = 'Current Balls: ' + balls.length;
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

	
	

	
}

//let bla = `${Math.random() *256},${Math.random() *256},${Math.random() *256}`

function draw(){
	c.fillStyle = "rgba(0, 0, 0,1)"; // Change to any color you prefer
    c.fillRect(0, 0, canvas.width, canvas.height); // Fill the entire canvas with the background color
    // Draw the circle

	for (let i = 0; i < balls.length; i++) {

		c.beginPath();
    	c.arc(balls[i]["x"], balls[i]["y"], balls[i]["radius"], 0, 2 * Math.PI); // Full circle (0 to 2 * PI radians)
		col = balls[i]["color"]
    	c.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${col[3]})`; // Corrected syntax
    	c.fill(); // Fill the circle with color
		
	}
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

