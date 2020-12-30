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

// Load the model first
function preload() {
    classifier = ml5.soundClassifier(soundModelURL);
}

function setup() {
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasContainer");

    snake = new Snake();

    classifyAudio();
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        snake.setDir(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
        snake.setDir(1, 0);
    } else if (keyCode === UP_ARROW) {
        snake.setDir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snake.setDir(0, 1);
    }
}

function draw() {
    background(220);

    snake.update();
    snake.show();
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
    console.log(label);
}