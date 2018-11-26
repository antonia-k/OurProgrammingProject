var users = JSON.parse(localStorage.getItem("users"));

var favourites = [];

//Get username from loggedInUser out of the localStorage
var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))


// Creating the html input 
function createHTML(loggedInUser){

    return "<div>"+
    "<p id='firstname'> First name: " + loggedInUser.firstname + "<p>"+
    "<p id='lastname'> Last name: " + loggedInUser.lastname + "</p>"+
    "<p id='dateOfBirth'> Date of Birth: " + loggedInUser.dateOfBirth + "</p>"+
    "<p id='image'> " + "<img src=" + loggedInUser.image + " />" + "</p>" +
    "<p id='qualifications'> Qualifications: " + loggedInUser.qualifications + "</p>"+
    "<p id='description'> Description: " + loggedInUser.description + "</p>"+
  "</div>";
}

//Call the createHTML function for the loggedInUser
var content = "";
    content += createHTML(loggedInUser);

//Display user info at HTML - getELementById because we refer to the userProfile
document.getElementById('userProfile').innerHTML = content;
