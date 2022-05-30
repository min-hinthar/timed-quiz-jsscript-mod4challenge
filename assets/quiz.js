var question = document.querySelectorAll("#question");
var choices = document.querySelectorAll(".choice-text");
var countdownEl = document.getElementById("#countdownTimer");
var scoreTextEl = document.getElementById("#scoreNum");
var currentQuestionEl = document.getElementById("#questionNum");

console.log(question);
console.log(choices);
console.log(countdownEl);
console.log(scoreText);
console.log(currentQuestionEl);

var availableQuestions = 0;
var currentQuestion = 0;
// this counter tells use which question user is on
var questionCounter = 0;
var chosenAnswer = true;
var score = 0;
var scorePoints = 100;
var maxQuestions = 5;

var questionsArray = [
    {
        question: "JavaScript is the programming language of the [______]",
        possibleAnswers: [
            "Desktop", "Mobile", "Web", "Server"
        // NEED TO USE Comma "," after possibleAnswer Array!!
        ],
        answer: 3
    },
        // NEED TO USE Comma "," to seperate each object array !!
    {
        question: "Which type of JavaScript language is [_____]?",
        possibleAnswers: [
            "Object-oriented", "Object-based", "Functional programming", "All of the above"
        ],
        answer: 2
    },
    {
        question: "Which of the following statement(s) is true about the JavaScript?",
        possibleAnswers: [ 
            "It is a scripting language used to make the website interactive", "It is an advanced version of Java for Desktop and Mobile application development", "It is a markup language of Java to develop the webpages", "All of the above"
        ],
        answer: 1
    },
    {
        question: "In which HTML element, we put the JavaScript code?",
        possibleAnswers: [ 
            "<javascript>...</javascript>", "<js>...</js>", "<script>...</script>", "<css>...</css>"
        ],
        answer: 3
    },
    {
        question: "JavaScript code can be written in [_____]",
        possibleAnswers: [ 
            "JavaScript file (.js file)", "HTML document directly", "JavaScript file and in HTML document directly", "In style sheets (.css file)"
        ],
        answer: 3
    },
    // NEED TO USE SEMIcolon ";" to end declaration of questions Array !!
];

    // {
    //     question: "Which symbol is used separate JavaScript statements?",
    //     choice1: "Comma (,)",
    //     choice2: "Colon (:)",
    //     choice3: "Hyphen (_)",
    //     choice4: "Semicolon (;)",
    //     answer: 4,
    // },


// console.log(questionsArray);
function init () {
    getWins();
};

const startBtn = document.getElementById("btnStart")
const choicesEl = document.getElementById("choices")

startBtn.addEventListener('click', startGame);
// startBtn.onclick = startGame
// WHEN I click the start button
function startGame() {
    // reset score to 0
    score = 0;
    // reset question counter to 0
    questionCounter = 0;
    // assign var var to array objects
    // availableQuestions = [questionsArray];
    console.log('Game Started');
    // setTimer();
    getNewQuestion();
};

//     questionCounter = 0;
//     score = 0;
//     availableQuestions = [questionsArray];
//     console.log('Start Quiz!');
//     getNewQuestion()


// // THEN a timer starts and I am presented with a question
// function setTimer() {    
//         var secondsLeft = 60;
//         timer = setInterval(function () {
//             secondsLeft--;
//             countdownEl.textContent = secondsLeft;
//             console.log(secondsLeft);
            
//         if (secondsLeft === 0 ) {
//             clearInterval(timeInterval);
//             alert("Time is up! Please input your name to save your scores on local scoreboard!")
//             return window.location.assign('/scoreboard.html')
//         }
//         }, 1000);
//     };


const getNewQuestion = () => {
    questionCounter++;
    var currentQuestion = questionsArray[questionCounter]
    var questionTitle = document.getElementById("questionTitle")
    questionTitle.textContent = currentQuestion.question
    
    currentQuestion.possibleAnswers.forEach(function (possibleAnswer, i) {
        var choicecontainer = document.createElement("div")
        choicecontainer.setAttribute("class", "choice-container" )

        var choiceP = document.createElement("p");
        choiceP.setAttribute("class", "choice-prefix" )
        choiceP.textContent = `( ${i + 1} )`
        

        var choice = document.createElement("button")
        choice.setAttribute("class", "choice-text" )
        choice.setAttribute("data-number", i+1)
        choice.textContent = possibleAnswer

        choicecontainer.appendChild(choiceP)
        choicecontainer.appendChild(choice)

        choice.onclick = selectedAnswer;


        choicesEl.appendChild(choicecontainer)
    })
    

};


function selectedAnswer() {
    // check if correct
    console.log("user selected value", this.dataset.number)
    console.log("correct answer", questionsArray[questionCounter].answer)

    if (questionsArray[questionCounter].answer == this.dataset.number) {
        // increment score by 100 points 
        // scoreText.textContent = score
        score = scorePoints
        scoreText.textContent = score
        console.log("100 Points to Griffindor!");
    }
    else {
        //
    }

    // we want to change the question
    questionCounter++;
    getNewQuestion();
};

function incrementScore () {
    
};

// getNewQuestion = () => {
    // for(availableQuestions.length === 0 || questionCounter > maxQuestions) {
    //     localStorage.setItem('mostRecentScore', score)

    //     return window.location.assign('/scoreboard.html')
    // }
    // questionCounter++
    // incrementScore(questionCounter);
    // var questions = document.querySelector("#question");
    // var choices = document.querySelectorAll(".choice-text");
    // console.log(question);
    // console.log(choices);

// function getNewQuestion(index) {
//     // console.log(questionsArray[index]);
//         var h3 = questions;
//         h3.textContent = questionsArray[index].question;
//         document.body.append(h3);


//     for(var i = 0; i < questionsArray[index].possibleAnswers.length; i++) {
//         var p = choices;
//         p.textContent = questionsArray[index].choices[i];
//         document.body.append(p);
//         // console.log(questionsArray[i].possibleAnswers[i]);
//         // console.log(questionsArray[index].possibleAnswers[i]);
//     // }
//     }
// }

// getNewQuestion(0);

//     var questionsIndex = Math.floor(Math.random() * availableQuestions.length)
//     currentQuestion = availableQuestions[questionsIndex]
//     question.innerText = currentQuestion.

//     choices.forEach(choices => {
//         const number = choice.dataset['number']
//         choice.innerText = currentQuestion.question['choice' + number] 
//     } )

//     availableQuestions.splice(questionsIndex, 1)

//     chosenAnswer = true


// // WHEN I answer a question
// choices.forEach(choices => {
//     choice.addEventListener('click', e => {
//         if(!chosenAnswer) return
        
//         chosenAnswer = false
//         const selectedChoice = e.target
//         const selectedAnswer = selectedChoice.dataset['number']
        
//         if(selectedChoice == true ) {
//             incrementScore(scorePoints)
//         }
//     })
// })

// incrementScore = num => {
//     score +=num
//     scoreText.innerText = score
// }

// startGame ()


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