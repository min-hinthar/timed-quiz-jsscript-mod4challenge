const question = document.querySelectorAll('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const questionProgress = document.querySelectorAll('#questionNum');
const scoreText = document.querySelectorAll('#scoreNum');

let availableQuestions = 0;
let currentQuestion = {};
let questionCounter = 0;
let chosenAnswer = true;
let score = 0;

let questions = [
    {
        question: "JavaScript is the programming language of the [______]",
        choice1: "Desktop",
        choice2: "Mobile",
        choice3: "Web",
        choice4: "Server",
        answer: 3,
    },
    {
        question: "Which type of JavaScript language is [_____]?",
        choice1: "Object-oriented",
        choice2: "Object-based",
        choice3: "Functional programming",
        choice4: "All of the above",
        answer: 2,
    },
    {
        question: "Which of the following statement(s) is true about the JavaScript?",
        choice1: "It is a scripting language used to make the website interactive",
        choice2: "It is an advanced version of Java for Desktop and Mobile application development",
        choice3: "It is a markup language of Java to develop the webpages",
        choice4: "All of the above",
        answer: 1,
    },
    {
        question: "In which HTML element, we put the JavaScript code?",
        choice1: "<javascript>...</javascript>",
        choice2: "<js>...</js>",
        choice3: "<script>...</script>",
        choice4: "<css>...</css>",
        answer: 3,
    },
    {
        question: "JavaScript code can be written in [_____]",
        choice1: "JavaScript file (.js file)",
        choice2: "HTML document directly",
        choice3: "JavaScript file and in HTML document directly",
        choice4: "In style sheets (.css file)",
        answer: 3,
    },
    // {
    //     question: "Which symbol is used separate JavaScript statements?",
    //     choice1: "Comma (,)",
    //     choice2: "Colon (:)",
    //     choice3: "Hyphen (_)",
    //     choice4: "Semicolon (;)",
    //     answer: 4,
    // },
]

const scorePoints = 100;
const maxQuestions = 5;
// WHEN I click the start button
startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    // console.log('Start Quiz!')
    getNewQuestion()
} 

// THEN a timer starts and I am presented with a question
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > maxQuestions) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/scoreboard.html')
    }

    // questionCounter++
    // incrementScore(questionCounter)

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion.question['choice' + number] 
    } )

    availableQuestions.splice(questionsIndex, 1)

    chosenAnswer = true
}

// WHEN I answer a question
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!chosenAnswer) return
        
        chosenAnswer = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']
        
        if(selectedChoice == true ) {
            incrementScore(scorePoints)
        }
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame ()


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