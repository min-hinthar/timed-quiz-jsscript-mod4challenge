var firstNameSave = document.querySelector("#firstName");
var saveUser = document.querySelector('#saveUser');

saveUser.addEventListener("click", funtion(Event), {
    Event.preventDefault()

var user = {
    firstName: firstNameSave.value.trim(),
};

localStorage.setItem("user", JSON.stringify(user))
});