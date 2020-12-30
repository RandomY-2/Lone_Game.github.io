// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Classifier Variable
let classifier;
// Model URL
let soundModelURL = 'https://teachablemachine.withgoogle.com/models/V1geI3hYG/' + 'model.json';
// To store the classification
let label = "";

let snake;
let rez = 10;
let food;
let score;

let w;
let h;

// Load the model first
function preload() {
    classifier = ml5.soundClassifier(soundModelURL);
}

function setup() {
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasContainer");
    frameRate(5);

    w = floor(width / rez);
    h = floor(height / rez);

    snake = new Snake();
    score = snake.getLen();

    foodLocation();

    classifyAudio();
}

function foodLocation() {
    let x = floor(random(w));
    let y = floor(random(h));

    while (snake.hasLoc(x, y)) {
        x = floor(random(w));
        y = floor(random(h));
    }
    food = createVector(x, y);
}

function controlSnake(label) {
    if (label === "Left") {
        snake.setDir(-1, 0);
    } else if (label === "Right") {
        snake.setDir(1, 0);
    } else if (label === "UP") {
        snake.setDir(0, -1);
    } else if (label === "Down") {
        snake.setDir(0, 1);
    }
}

function draw() {
    scale(rez);

    background(220);

    if (snake.eat(food)) {
        foodLocation();
        score = snake.getLen();
        let score_string = document.getElementById('snake-score');
        score_string.innerText = "Score: " + score;
    }
    snake.update();
    snake.show();

    if (snake.endGame()) {
        print('END GAME');
        background(255, 0, 0);
        noLoop();
    }

    noStroke();
    fill(255, 0, 0);
    rect(food.x, food.y, 1, 1);
}

function classifyAudio() {
    classifier.classify(gotResult);
}

// When we get a result
function gotResult(error, results) {
    // If there is an error
    if (error) {
        console.error(error);
        return;
    }
    // The results are in an array ordered by confidence.
    // console.log(results[0]);
    label = results[0].label;
    controlSnake(label);
}