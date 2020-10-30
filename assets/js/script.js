// ----------------------------------------- Select CVS
const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");

// ----------------------------------------- background images 
var buildings = new Image();
buildings.src = "assets/images/buildings.png";

var black = new Image();
black.src = "assets/images/black.png";

var star = new Image();
star.src = "assets/images/star.png";


// ----------------------------------------- DRAW

function draw(){
    ctx.fillStyle = "#3B6CB5";
    ctx.fillRect(0, 0, cvs.width, cvs.height);

    ctx.drawImage(buildings, 0, 122, 130, 16)
    ctx.drawImage(buildings, 125, 122, 130, 16)
    ctx.drawImage(buildings, 250, 122, 130, 16)
    ctx.drawImage(black, 0, 135, 400, 18)
    ctx.drawImage(star, 20, 20, 10, 10)
    ctx.drawImage(star, 90, 5, 10, 10)
    ctx.drawImage(star, 250, 20, 10, 10)

   
}

// ----------------------------------------- LOOP

function loop () {

    draw()

    requestAnimationFrame(loop);
}

loop();






