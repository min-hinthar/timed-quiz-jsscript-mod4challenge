var question = document.querySelectorAll("#question");
var choices = document.querySelectorAll(".choice-text");
var countdownEl = document.getElementById("countdownTimer");
var scoreTextEl = document.getElementById("scoreNum");
var currentQuestionEl = document.getElementById("questionNum");

// console.log(question);
// console.log(choices);
// console.log(countdownEl);
// console.log(scoreText);
// console.log(currentQuestionEl);

var availableQuestions = 0;
var currentQuestion = 0;
// this counter tells use which question user is on
var questionCounter = 0;
var chosenAnswer = true;
var userScore = 0;
var scorePoints = 100;


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
    {
        question: "Which symbol is used separate JavaScript statements?JavaScript code can be written in [_____]",
        possibleAnswers: [ 
            "Comma (,) file (.js file)", "Colon (:)", "Hyphen (_)", "Semicolon (;)"
        ],
        answer: 4
    },
];

var maxQuestions = questionsArray.length;

// console.log(questionsArray);
function init () {
    // getWins();
};

var startBtn = document.getElementById("btnStart");
if(startBtn){
    startBtn.addEventListener('click', startGame);
    // Solved null error by following code fix: 
    //https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null
}
var choicesEl = document.getElementById("choices");

// console.log(startBtn);
// console.log(choicesEl);

// startBtn add Event Listner to start game
// WHEN I click the start button

// startBtn.addEventListener("click", startGame)

function startGame() {
    // reset score to 0
    userScore = 0;
    // reset question counter to 0
    questionCounter = 0;
    // assign var var to array objects
    // availableQuestions = [questionsArray];
    console.log('Game Started');
    // setTimer();
    setTimer();
    getNewQuestion();
};

//     questionCounter = 0;
//     score = 0;
//     availableQuestions = [questionsArray];
//     console.log('Start Quiz!');
//     getNewQuestion()

// set variable for game time start at 60 seconds 
var secondsLeft = 60;
// // THEN a timer starts and I am presented with a question
function setTimer() {    
    var countdown = setInterval(function () {
        // minus -1 per every 1000 ms
        secondsLeft--;
        countdownEl.textContent = secondsLeft;
        console.log(secondsLeft);
        
    if (secondsLeft === 0 || questionCounter >= maxQuestions) {
        clearInterval(countdown);
        alert("Time is up! Please input your name to save your scores on local scoreboard!")
        localStorage.setItem('currentScore', userScore)
        return window.location.assign('scoreboard.html', userScore)
    }
    }, 1000);
};

function getNewQuestion() {
    // increase question counter number by 1
    questionCounter++;
    // currentQuestionEl link to counter
    currentQuestionEl.textContent = questionCounter;

    var currentQuestion = questionsArray[questionCounter]
    var questionTitle = document.getElementById("questionTitle")
    questionTitle.textContent = currentQuestion.question
    
    choicesEl.innerHTML='';
    
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
        
        choicesEl.appendChild(choicecontainer);
    });
};


function selectedAnswer() {
    // check if correct
    console.log("user selected value", this.dataset.number)
    console.log("correct answer", questionsArray[questionCounter].answer)

    if (questionsArray[questionCounter].answer == this.dataset.number) {
        // increment score by 100 points 
        // scoreText.textContent = score
        incrementScore(scorePoints);
    }
    else {
        //deduct time from countdownTimer
        
        secondsLeft = (secondsLeft-5);
        }
        // we want to change the question
        getNewQuestion();
    };


// reset questions array state
function clearQuestions () {
    choicesEl.innerHTML = "";
}
// clearQuestionsDisplay = () =>
//             choicesEl.remove(choicecontainer);

var scoreTextEl = document.getElementById("scoreNum");
// console.log(scoreTextEl);

function incrementScore () {
    // increment score by 100 points 
        // scoreText.textContent = score
        userScore = (userScore+scorePoints);
        var scoreText = document.createElement("h2");
        scoreText.setAttribute("class", "hud-score-text");
        scoreTextEl.textContent = userScore;
        console.log("100 Points to Griffindor!");
    };

