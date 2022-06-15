var firstNameSave = document.getElementById("firstName");
var saveUser = document.querySelector("saveBtn.saveUser");
var highScores = {};
// var storedScores = JSON.parse(localStorage.getItem(highScores)

console.log(firstNameSave);
console.log(saveUser);
console.log(highScores);
// console.log(storedScores);


// run function when page loads
function init() {

};

var saveBtn = document.getElementById("saveUser");

saveBtn.addEventListener("click", function (event) {
    // added to prevent rerun
    event.stopPropagation();
    // run save score function
    saveScore();
    // console.log("Score is Saved!");
    // return to index.html home page
    // window.location.href = "index.html";
})

// save score local storage function
function saveScore() {
    // refer userName storage and set value to input
    firstNameSave = document.getElementById("firstName").value;

    // create new object with firstName and highScore
    var highScore = {
        name: firstNameSave,
        // link var from quiz.js
        score: localStorage.getItem('currentScore'),
    };
    // check if existing score or else create black array
    var storedScores = JSON.parse(localStorage.getItem("storedScores")) || [];
    // push object into storedScores array
    storedScores.push(highScore)
    // convert object into string and setItem back into local storage
    localStorage.setItem("storedScores", JSON.stringify(storedScores));

    showHighScorer();
}

function showHighScorer (){
    var tbody = document.getElementById("score-body");
    tbody.innerHTML = '';
    // this function will get value from local storage and append to table
    var storedScores = JSON.parse(localStorage.getItem("storedScores")) || [];
    storedScores.forEach(function (score) {
        // create tr elements
        var tr = document.createElement("tr");

        var tdName = document.createElement("td");
        tdName.textContent = score.name;

        var tdScore = document.createElement("td");
        tdScore.textContent = score.score;

        tr.appendChild(tdName)
        tr.appendChild(tdScore)

        tbody.appendChild(tr);
    } )
}

showHighScorer()