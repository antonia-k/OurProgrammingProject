var users = JSON.parse(localStorage.getItem("users"));
//Get username from loggedInUser out of the index.js file (in the logIn Loop)
var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))


// Creating the html input 
function createHTML(loggedInUser){

    return "<div>"+
    "<p id='firstname'> First name: " + loggedInUser.firstname + "<p>"+
    "<p id='lastname'> Last name: " + loggedInUser.lastname + "</p>"+
    "<p id='company'> Company: " + loggedInUser.company + "</p>"+
    "<p id='description'> Description: " + loggedInUser.description + "</p>"+
    "<p id='image'> " + "<img src=" + loggedInUser.image + " />" + "</p>"+
    
  // "<p><input type='button' onclick='console.log(job.linkToWebsite)'>Company Website</button></p>"+
  "</div>";
}

//Call the createHTML function by a loop looking through the users added 
var content = "";
//for (var i=0; i <loggedInUser.length; i++) {
    content += createHTML(loggedInUser);


//Display users at HTML - getELementByClassName because we refer to the userprofile which is a class. 
document.getElementById('companyProfile').innerHTML = content;


