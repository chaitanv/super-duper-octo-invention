canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");//refernce for canvas

greencar_width = 75;
greencar_height = 100; //width and height of car

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 225; //intial position of car

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground; //add background image
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar; //add car image
	background_imgTag.src = greencar_image;
}

function uploadBackground() {
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)	;
//upload background
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_width)	;
	//upload car
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0){
		greencar_y = greencar_y - 10;
		console.log("when up arrow is pressed, x="+ greencar_x + "| y =" + greencar_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward
}

function left()
{
	//Define function to move the car left side
}

function right()
{
	if(greencar_x<= 700){
        greencar_x = greencar_x + 10;
        console.log("when right arrow is pressed x=" + greencar_x + "| y=" + greencar_y); //defining right function
        uploadBackground();
        uploadgreencar();
    }

}

