# Web_AI_Game

## Description 

This website includes a series of games that the user can play with an AI. Currently the avaliable games are rock paper scissors that the user can play using camera and snake game using voice control. The UI is done using HTML, CSS, Bootstrap 4, and font-awesome toolkit. The machine learning models are created using Google's Teachable Machine platform and connected to the website using Javascript and p5 ml5 library. 

Github Page: https://randomy-2.github.io/Web_AI_Game.github.io/

## Reach Version

I have also created a React version of the website(https://github.com/RandomY-2/React_Web_AI_Game). The layout is also accomplished using React Bootstrap. However, since p5 ml5 library is currently not supported, the actual games cannot be migrated currently. I am looking at ways to use Tensorflow.js in React application. 

React-version View: https://lucid-poincare-e00695.netlify.app/#game-start-id

## Rock Paper Scissors

In this game, the users can open a canvas that is connected to the computer's camera by clicking on the Show Canvas button. Then, they can use one hand to make the shape of rock/paper/scissor. The program will try to recognize the shape and show it on the screen. When the users is satisfied with the printed shape, they can click on the start Game button to see what shape the computer gives and the result. By clicking start Game again a new round will start. 

## Snake Game

In this game, the user can use voice command of "Up", "Down", "Left", and "Right" to control the snake to move on the board and eat the points. The length of the snake will also be displayed on the screen. When the snake either reaches the border of the board or eat itself, the game will end and the board will become red. To restart the game the user can refresh the page. 
