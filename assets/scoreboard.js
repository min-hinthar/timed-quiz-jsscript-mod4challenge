var firstNameSave = document.getElementById("firstName");
var saveUser = document.querySelector("saveBtn.saveUser");
var highScores = [];
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
        score: userScore,
    };
    // check if existing score or else create black array
    var storedScores = JSON.parse(localStorage.getItem("storedScores"));
    // push object into storedScores array
    storedScores.push(highScore)
    // convert object into string and setItem back into local storage
    localStorage.setItem("storedScores", JSON.stringify(storedScores));
}

// event listener for save button
// saveBtn.addEventListener("click", funtion(event {
//     console.log("Save Btn Clicked!");
//     event.preventDefault();

// create a new user var from click of save button
// var user = {
//     firstName: firstNameSave.value.trim(),
// };

// // setItem of submitted firstName to local 
// localStorage.setItem("user", JSON.stringify(user));
// });