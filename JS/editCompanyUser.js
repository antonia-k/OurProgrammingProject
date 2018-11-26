//the loggedInUser is extracted from localStorage
var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) 

//function to save the changes to the loggedInUser and the users in localStorage, but does not overwrite previous contents if there are no input values in the input fields
function saveChanges() {
    if (document.getElementById("firstName").value == ""){
        console.log("no input")
    }else{
    loggedInUser.firstname = document.getElementById("firstName").value;}
    if (document.getElementById("lastName").value == ""){
        console.log("no input")
    }else{
        loggedInUser.lastname = document.getElementById("lastName").value;}
        if (document.getElementById("company").value == ""){
            console.log("no input")
    }else{
    loggedInUser.company = document.getElementById("company").value;}
    if (document.getElementById("description").value == ""){
        console.log("no input")
    
    }else{
    loggedInUser.description = document.getElementById("description").value;}

 //update changes of user in users array
    // Loop over user array to find the object with the same username and set it to loggedInUser
    for(var i = 0; i < users.length; i++){
        if(loggedInUser.username === users[i].username){
            users[i] = loggedInUser;
        }
    } 

//store updated users array in local storage
    localStorage.setItem("users", JSON.stringify(users));

//store updated loggedInUser object in local storage
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

//Show alertso the user can see that changes are saved.
    alert("Your changes have been saved!");

    window.location.href="../companyProfile.html";

}

