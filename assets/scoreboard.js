var firstNameSave = document.querySelector("#firstName");
var saveUser = document.getElementById('saveBtn');
var highScores = [];

// run function when page loads
function init() {
    var storedScores = JSON.parse(localStorage.getItem(highScores))
}

saveUser.addEventListener("click", funtion(event) {
    console.log("Save Btn Clicked!");
    event.preventDefault();

// create a new user var from click of save button
var user = {
    firstName: firstNameSave.value.trim(),
};

// setItem of submitted firstName to local 
localStorage.setItem("user", JSON.stringify(user));

});