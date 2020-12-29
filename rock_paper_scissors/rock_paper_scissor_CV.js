// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Classifier Variable
let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/vIqbIzboA/' + 'model.json';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";

let choices = ["Rock", "Paper", "Scissor"];

var keyPressed = false;

var userFinalShape = "";
var computerFinalShape = "";

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL);
}

function setup() {
  let cnv = createCanvas(800, 600);
  cnv.parent("canvasContainer");
  document.getElementById('canvasContainer').style.display = 'none';
  document.getElementById('result-section').style.display = 'none';
  document.getElementById('playGame').style.display = 'none';
  document.getElementById('playerShape').style.display = 'none';
  document.getElementById('computerShape').style.display = 'none';
  // Create the video
  video = createCapture(VIDEO);
  video.size(800, 580);
  video.hide();

  flippedVideo = ml5.flipImage(video)
  // Start classifying
  classifyVideo();
}

function draw() {
  background(0);
  // Draw the video
  image(flippedVideo, 0, 0);

  // Draw the label
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
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
  var playerShapeText = document.getElementById('playerShape');
  if (!keyPressed) {
    playerShapeText.innerText = "Your Shape: " + results[0].label; 
  }
  // Classifiy again!
  classifyVideo();
}

document.getElementById('createCanvas').onclick=function(){
    document.getElementById('canvasContainer').style.display='';
    document.getElementById('result-section').style.display='';
    document.getElementById('playGame').style.display=''; 
    document.getElementById('playerShape').style.display = '';
    document.getElementById('computerShape').style.display = '';
    document.getElementById('createCanvas').style.display='none';
    document.getElementById('rock_footer').classList.remove('fixed-bottom');
};

document.getElementById('playGame').onclick=function() {
    keyPressed = !keyPressed;
    var computerShapeText = document.getElementById('computerShape');
    var resText = document.getElementById('resultText');
    
    if (!keyPressed) {
        computerShapeText.innerText = "Computer's Shape: ???";
        resText.innerText = "Result: ";
    } else {
        var index = Math.floor(Math.random() * Math.floor(3));
        computerShapeText.innerText = "Computer's Shape: " + choices[index];
        var playerFinalText = document.getElementById('playerShape').innerText;
        userFinalShape = playerFinalText.substring(12, playerFinalText.length);
        computerFinalShape = choices[index];

        if (userFinalShape === "Rock") {
            if (computerFinalShape === "Rock") {
                resText.innerText = "Result: Tie";
            }

            if (computerFinalShape === "Paper") {
                resText.innerText = "Result: Computer Wins";
            }

            if (computerFinalShape === "Scissor") {
                resText.innerText = "Result: You Win";
            }
        }

        if (userFinalShape === "Paper") {
            if (computerFinalShape === "Rock") {
                resText.innerText = "Result: You Win";
            }

            if (computerFinalShape === "Paper") {
                resText.innerText = "Result: Tie";
            }

            if (computerFinalShape === "Scissor") {
                resText.innerText = "Result: Computer Wins";
            }
        }

        if (userFinalShape === "Scissors") {
            if (computerFinalShape === "Rock") {
                resText.innerText = "Result: Computer Wins";
            }

            if (computerFinalShape === "Paper") {
                resText.innerText = "Result: You Win";
            }

            if (computerFinalShape === "Scissor") {
                resText.innerText = "Result: Tie";
            }
        }
    }
}