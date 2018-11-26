// extracting loggedInUser from localStorage
var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))

//function to save changes made if the input is not empty
function saveChanges() {
    if (document.getElementById("firstName").value == ""){
        console.log("no input")
    }else{
    loggedInUser.firstname = document.getElementById("firstName").value;}
    if (document.getElementById("lastName").value == ""){
        console.log("no input")
    }else{
    loggedInUser.lastname = document.getElementById("lastName").value;}
    if (document.getElementById("dateOfBirth").value == ""){
        console.log("no input")
    }else{
    loggedInUser.dateOfBirth = document.getElementById("dateOfBirth").value;}
    if (document.getElementById("qualifications").value == ""){
        console.log("no input")
    }else{
    loggedInUser.qualifications = document.getElementById("qualifications").value;}
    if (document.getElementById("description").value == ""){
        console.log("no input")
    }else{
    loggedInUser.description = document.getElementById("description").value;}

 //update changes of user in users array
    // Loop over users array to find the object with the same username and set it to loggedInUser
    for(var i = 0; i < users.length; i++){
        if(loggedInUser.username === users[i].username){
            users[i] = loggedInUser;
        }
    } 

//store updated users array in local storage
    localStorage.setItem("users", JSON.stringify(users));

    //store updated loggedInUser object in local storage
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

    //Show alert that user can see that changes are saved.
    alert("Your changes have been saved!");

    window.location.href="./UserProfile.html";

}
