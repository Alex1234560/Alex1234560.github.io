var canvas = document.querySelector('canvas');

var c = canvas.getContext('2d');

let Var = 0;
// Va

function update(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;


	if (Var < canvas.width - 50){
	Var+=1;
	}
	if (Var >= canvas.width - 50){
		Var-= 1
		}
	
}

	

function draw(){
	c.fillStyle = "rgb(200 0 0)";
    c.fillRect(Var, Var/2, 50, 50);

    c.fillStyle = "rgb(0 0 200 / 50%)";
    c.fillRect(Var, Var, 50, 50);
	
}



function animate() {
	requestAnimationFrame(animate);
	
	update();
	draw();
	
	
	
	
}

animate()