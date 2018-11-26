//Getting users and loggedInUser from localStorage
var users = JSON.parse(localStorage.getItem("users"));
var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))

// Creating the html input 
function createHTML(loggedInUser){

    return "<div>"+
    "<p id='firstname'> First name: " + loggedInUser.firstname + "<p>"+
    "<p id='lastname'> Last name: " + loggedInUser.lastname + "</p>"+
    "<p id='company'> Company: " + loggedInUser.company + "</p>"+
    "<p id='description'> Description: " + loggedInUser.description + "</p>"+
    "<p id='image'> " + "<img src=" + loggedInUser.image + " />" + "</p>"+
    "</div>";
}

//Call the createHTML function for the loggedInUser 
var content = "";
    content += createHTML(loggedInUser);

//Display users at HTML - getELementById 
document.getElementById('companyProfile').innerHTML = content;


