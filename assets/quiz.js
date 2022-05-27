const question = document.getElementById("question");
const choices = document.getElementsByClassName("choice-text");
const questionProgress = document.getElementById("countdownTimer");
const scoreText = document.getElementById("scoreNum");
const scorePoints = 100;
const maxQuestions = 5;

let availableQuestions = 0;
let currentQuestion = 0;
let questionCounter = 1;
let chosenAnswer = true;
let score = 0;

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


// WHEN I click the start button
// startGame = () => {
//     questionCounter = 0
//     score = 0
//     availableQuestions = [...questions]
//     // console.log('Start Quiz!')
//     getNewQuestion()
// } 

// THEN a timer starts and I am presented with a question

var secondsLeft = 60;

function setTime() {
    var timeInterval = setInterval(function () {
        secondsLeft--;
        questionProgress.textContent = secondsLeft;
        
    if(secondsLeft === 0) {
        clearInterval(timeInterval);
        return window.location.assign('/scoreboard.html')
    }
    }, 1000);
}

setTime();

// getNewQuestion = () => {
    // for(availableQuestions.length === 0 || questionCounter > maxQuestions) {
    //     localStorage.setItem('mostRecentScore', score)

    //     return window.location.assign('/scoreboard.html')
    // }
    // questionCounter++
    // incrementScore(questionCounter);



function getNewQuestion(questionsArray) {
    for(var i = 0; i < currentQuestion.length; i++) {
        console.log(questionsArray[i]);
    }
}
    // document.body.append(JSON.stringify(questionsArray[index]));
    // var h2 = document.createElement("h2")
    // h2.textContent = questions[index].question;
    // document.body.append(h2);

// }

getNewQuestion();

    // const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    // currentQuestion = availableQuestions[questionsIndex]
    // question.innerText = currentQuestion.question

    // choices.forEach(choice => {
    //     const number = choice.dataset['number']
    //     choice.innerText = currentQuestion.question['choice' + number] 
    // } )

    // availableQuestions.splice(questionsIndex, 1)

    // chosenAnswer = true


// WHEN I answer a question
// choices.forEach(choice => {
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