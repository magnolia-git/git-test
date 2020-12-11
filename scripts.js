function popup(){
	alert('You win!');
}

function changeText(){
	let d1 = document.getElementById("d1");
	d1.innerHTML = "Text changed.";
}

function reveal() {
	let marioImage = document.getElementById("mario");
	let marioTXT = document.getElementById("marioText");
	let marioReveal = document.getElementById("reveal");
	marioImage.src = "mario2.png";
	marioTXT.innerHTML = "Change it back! CHANGE IT BACK!!!";
	marioReveal.value = "Hide the Truth";
	marioReveal.setAttribute("onclick", "hide()");
	marioReveal.id = "hide";
	document.getElementById("marioDivision").style.backgroundColor = "grey";
}

function hide() {
	let marioImage = document.getElementById("mario");
	let marioTXT = document.getElementById("marioText");
	let marioHide = document.getElementById("hide");
	marioImage.src = "mario1.png";
	marioTXT.innerHTML = "Are you brave enough???";
	marioHide.value = "Reveal True Nature";
	marioHide.setAttribute("onclick", "reveal()");
	marioHide.id = "reveal";
	document.getElementById("marioDivision").style.backgroundColor = "beige";
}

function turnBlue() {
	let cnvs = document.getElementById("myCanvas");
	cnvs.style.backgroundColor = "blue";
	let ctx = cnvs.getContext("2d");
	ctx.clearRect(0,0,cnvs.width, cnvs.height);
	ctx.fillStyle = "white";
	ctx.fillRect(10, 10, 40, 40);
	ctx.font = "30px Arial";
	ctx.fillText("Wow", 10, 80);
}

function turnRed() {
	let cnvs = document.getElementById("myCanvas");
	cnvs.style.backgroundColor = "red";
}

function docolor() {
	let cnvs = document.getElementById("myCanvas");
	let colorer = document.getElementById("clr");
	let color = colorer.value;
	cnvs.style.backgroundColor = color;
}

function dosquare() {
	let cnvs = document.getElementById("myCanvas");
	let slide = document.getElementById("slider");
	let slideVal = slide.value;
	let ctx = cnvs.getContext("2d");
	ctx.clearRect(0,0,cnvs.width, cnvs.height);
	ctx.fillStyle = "white";
	ctx.fillRect(60, 10, slideVal, slideVal);
}