var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

const radius = 12; // Radius of the circle
let BallsOnClick = 12;
let BounceFactor = 1;//.99;
let Gravity = 0;//.5;

//let balls = [{"x":30,"y":30,"radius":20,"color":"rgb(0,233,0)","acceleration":acceleration,"angle":30}]//[x,y,radius,color]
let balls = []

MoreBalls = MakeBalls(0,canvas.width/2, canvas.height/2)
balls = balls.concat(MoreBalls)

//Remove later 

// balls[0]["angle"] = 0
// balls[1]["angle"] = 180

// accelerations = splitAcceleration(balls[0]["angle"],balls[0]["acceleration"]);
// balls[0]["vx"] = accelerations.x
// balls[0]["vy"] = accelerations.y
// balls[0]["x"] = 40

// accelerations = splitAcceleration(balls[1]["angle"],balls[1]["acceleration"]);
// balls[1]["vx"] = accelerations.x
// balls[1]["vy"] = accelerations.y
// balls[1]["x"] = 200

//remove later ^^


canvas.addEventListener('click', SpawnBalls);
canvas.addEventListener('touchstart', SpawnBalls);

function SpawnBalls(event) {
    // Prevent default touch behavior (e.g., scrolling)
    event.preventDefault();

    const rect = canvas.getBoundingClientRect();
    let x, y;

    if (event.type === 'touchstart') {
        // Get touch position from the first touch point
        x = event.touches[0].clientX - rect.left;
        y = event.touches[0].clientY - rect.top;
    } else {
        // Get mouse click position
        x = event.clientX - rect.left;
        y = event.clientY - rect.top;
    }

	MoreBalls = MakeBalls(BallsOnClick,x,y)
	balls = balls.concat(MoreBalls);

}

// document.addEventListener('click', function(event) {
// 	MoreBalls = MakeBalls(BallsOnClick)
// 	balls = balls.concat(MoreBalls);

// });

function MakeBalls(num,x,y) {

	array = []
	for (let i = 0; i < num; i+=1) {
		dict = {}
		dict["x"] = x
		dict["y"] = y
		dict["radius"] = radius//getRandomInt(10,10)
		dict["angle"] = getRandomInt(0,360)
		dict["acceleration"] = 7//getRandomInt(5,5)

		VariableColor = 255
		if (balls.length < 255){VariableColor=balls.length}
		
		dict["color"] = [getRandomInt(0,255),getRandomInt(0,255),getRandomInt(0,255),.8]//[VariableColor,getRandomInt(0,255),VariableColor,1]
	
		accelerations = splitAcceleration(dict["angle"],dict["acceleration"]);
		dict["vx"] = accelerations.x
		dict["vy"] = accelerations.y 

		

		array.push(dict)
	
	}

	return array
  }

 
function update(){ 
	if (balls.length <= 0){
	ClickToStart.textContent = 'Click Anywhere To Start';}
	else{ClickToStart.textContent = '';}

	NumberOfBalls.textContent = 'Current Balls: ' + balls.length;
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	for (let i = 0; i < balls.length; i+=1) {
		ball = balls[i]

		// accelerations = splitAcceleration(ball["angle"],ball["acceleration"]);
		// ball["vx"] = accelerations.x * Math.sign(ball["vx"])
		// ball["vy"] = accelerations.y * Math.sign(ball["vy"])

		if (ball["x"] + radius >= canvas.width || ball["x"]-radius <= 0){ //limits on x axis
			ball["vx"]*=-1;}
		if (ball["y"] + radius >= canvas.height || ball["y"]-radius <= 0){ //limits on Y axis
			ball["vy"]*=-BounceFactor;}

		if (ball["y"] + radius >= canvas.height){ball["y"] = canvas.height-radius}//so that ball cant go offscreen when rezising
		if (ball["x"] + radius >= canvas.width){ball["x"] = canvas.width-radius}//so that ball cant go offscreen when rezising
		if (ball["y"] - radius <= 0){ball["y"] = radius}//so that ball cant go offscreen when rezising
		if (ball["x"] - radius <= 0){ball["x"] = radius}//so that ball cant go offscreen when rezising
		


		ball["x"]+=ball["vx"];
		ball["y"]+=ball["vy"];

		ball["vy"] += Gravity
		
		
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

function ResetSimulation(){
	balls = []
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

