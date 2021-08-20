canvas = document.getElementById("mars");
ctx = canvas.getContext("2d");

background_image_array = ["marsone.jpg", "marstwo.jpg", "marsthree.jpg", "marsfour.jpg"];
random_number = Math.floor(Math.random() * 4);
background_image = background_image_array[random_number];
rover = "rover.png";

rover_x = 10;
rover_y = 10;
rover_width = 90;
rover_height = 100;

function add() {
    back_img = new Image();
    back_img.src = background_image;
    back_img.onload = uploadBackground;
    rover_img = new Image();
    rover_img.src = rover;
    rover_img.onload = uploadRover;
}
function uploadRover() {
    ctx.drawImage(rover_img, rover_x, rover_y, rover_width, rover_height);
}
function uploadBackground() {
    ctx.drawImage(back_img, 0, 0, canvas.width, canvas.height);
}

window.addEventListener("keydown", downKey);
function downKey(e) {
    console.log(e);
    keypressed = e.keyCode;
    if(keypressed == '38') {
        console.log("upArrowKey");
        up();
    }
    if(keypressed == '40') {
        console.log("downArrowKey");
        down();
    }
    if(keypressed == '39') {
        console.log("rightArrowKey");
        right();
    }
    if(keypressed == '37') {
        console.log("leftArrowKey");
        left();
    }
}
function up() {
    if(rover_y >= 0) {
        rover_y = rover_y - 15;
        console.log("The X is equals to " + rover_x + " Y equals to" + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function down() {
    if(rover_y <= 300) {
        rover_y = rover_y + 15;
        console.log("The X is equals to " + rover_x + " Y equals to" + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right() {
    if(rover_x <= 510) {
        rover_x = rover_x + 15;
        console.log("The X is equals to " + rover_x + " Y equals to" + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function left() {
    if(rover_x >= 0) {
        rover_x = rover_x - 15;
        console.log("The X is equals to " + rover_x + " Y equals to" + rover_y);
        uploadBackground();
        uploadRover();
    }
}















