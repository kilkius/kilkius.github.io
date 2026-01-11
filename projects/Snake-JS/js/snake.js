const canvas = document.getElementById("canvas");
const contx = canvas.getContext("2d");
let d;
let score = 0;

//size of each game pixel
let box = 10;

//snake array and initial position
let snake = [];
snake[0] = {x : 9 * box, y : 9 * box};
snake[1] = {x : 10 * box, y : 9 * box};

//food
let food = {
    x : Math.floor(Math.random() * 40) * box,
    y : Math.floor(Math.random() * 40) * box
    };

//control the direction of the snake
document.addEventListener("keydown", direction);

function direction(event){
    if (event.keyCode == 37 && d != "RIGHT"){
        d = "LEFT";
    }
    else if (event.keyCode == 38 && d != "DOWN"){
        d = "UP";
    }
    else if (event.keyCode == 39 && d != "LEFT"){
        d = "RIGHT";
    }
    else if (event.keyCode == 40 && d != "UP"){
        d = "DOWN";
    }
}

document.getElementById("up").onclick = function(){
    if (d != "DOWN"){
        d = "UP";
    }
};

document.getElementById("left").onclick = function(){
    if (d != "RIGHT"){
        d = "LEFT";
    }
};

document.getElementById("right").onclick = function(){
    if (d != "LEFT"){
        d = "RIGHT";
    }
};

document.getElementById("down").onclick = function(){
    if (d != "UP"){
        d = "DOWN";
    }
};


function colision(head, array){
    for (let i = 1; i < array.length; i++){
        if (head[0].x == array[i].x && head[0].y == array[i].y){
            return true;
        }    
    }
    return false;    
}

function draw(){
    //draw the board
    contx.fillStyle = "#a8c2a5";
    contx.fillRect(0, 0, 400, 400);

    //draw snake
    for (i = 0; i < snake.length; i++){
        contx.fillStyle = "black";
        contx.strokeStyle = "#a8c2a5";
        contx.strokeRect(snake[i].x, snake[i].y, box +1, box +1);
        contx.fillRect(snake[i].x, snake[i].y, box, box);

    }

    //draw food
    contx.fillStyle = "red";
    contx.fillRect(food.x, food.y, box, box);

    //old head
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //new head
    if (d == "LEFT"){ 
        snakeX -= box;
    }
    else if (d == "UP")
    { 
        snakeY -= box;
    }
    else if (d == "RIGHT"){
        snakeX += box;
    }
    else if (d == "DOWN"){
        snakeY += box
    }

    if (snakeX == food.x && snakeY == food.y){
        score ++;
        food = {
            x : Math.floor(Math.random() * 40) * box,
            y : Math.floor(Math.random() * 40) * box
            };
    }
    else
    {
        snake.pop();
    }

    let newHead = {
        x : snakeX,
        y : snakeY
    }

    // //game over
    if (snakeX < 0 || snakeX > 39 * box || snakeY < 0 || snakeY > 39 * box || colision(snake, snake)){
        contx.font = "50px Courier new";
        contx.fillText("Game Over", 65,200);
        clearInterval(game);
    }

    snake.unshift(newHead);

    //display score
    document.getElementById("score").innerHTML = score;

}

//call game every 100ms
let game = setInterval(draw, 100);