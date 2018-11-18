var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))

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
    // Loop over jobs array to find the object with the same username and set it to loggedInUser
    for(var i = 0; i < users.length; i++){
        if(loggedInUser.username === users[i].username){
            users[i] = loggedInUser;
        }
    } 

//store updated users array in local storage, make sure keyName is always String!
    //keyName --> you need it to recall it later!
    localStorage.setItem("users", JSON.stringify(users));

    //store updated loggedInUser object in local storage, make sure keyName is always String! 
    //keyName --> you need it to recall it later!
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

    //Show message in result Span, to user can see that changes are saved.
    alert("Your changes have been saved!");

    //Return true to jump out of the function, since we now have all we need.
    //return true;

    window.location.href="./UserProfile.html";

}

