const question = document.querySelector('#question');
const choices = document.querySelectorAll('.choice-text');
const questionProgress = document.querySelector('#questionNum');
const scoreText = document.querySelector('#scoreNum');

let availableQuestions = 0;
let currentQuestion = {};
let questionCounter = 0;
let chosenAnswer = true;
let score = 0;

let question = [
    {
        question: "Javascript is an [_______] language?",
        choice1: 
    }
]


// WHEN I click the start button -->
// <!-- href to game.html page to start game function -->
// <!-- THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score -->

























// $(document).ready(function () {
//     var $el = $('div > h1') //select all h1
//         text = $el.text(), //select text values
//         speed = 1000; //display speed
//     $el.empty();

//     var wordArray = text.split(' '),
//         i = 0;

//     INV = setInterval(function () {
//         if (i >= wordArray.length -1) {
//             clearInterval(INV);
//         }
//         $el.append(wordArray[i] + ' ');
//         i++;
//     }, speed);
// });