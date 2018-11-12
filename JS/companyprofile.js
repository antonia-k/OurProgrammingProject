// Creating a class 
// We create a user class, so we have an easy way to create users and further implement features at a later stage
class User {
    // The constructor for our class, which will allow us to create new objects of our class
    constructor(firstname, lastname, dateOfBirth, username, password, image) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.dateOfBirth = dateOfBirth;
      this.username = username;
      this.password = password;
      this.image = image;
    }

};

//sub-classes
class freelancer extends User{
    constructor(firstname, lastname, dateOfBirth, username, password, image){
        super(firstname, lastname, dateOfBirth, username, password, image);

}};
class companyUser extends User{
    constructor(firstname, lastname, dateOfBirth, company, username, password, image){
        super(firstname, lastname, dateOfBirth, username, password, image)
    this.company = company;
}};

var users = JSON.parse(localStorage.getItem("users"));

if(users === null){
    
// Initialize an empty array***
users = [];


// Fill it up with a few users
users.push(new freelancer("Marina", "Mehling", "10.10.2010", "mame", "1010","./images/mark.jpg"));
users.push(new freelancer("Stinne", "Andersson", "09.09.2009", "stan", "0909","./images/dog.png"));
users.push(new companyUser("Antonia", "Kellerwessel", "08.08.2008", "Goodiebox", "anke", "0808","./images/Search.png"));
} 

//Get username from loggedInUser out of the index.js file (in the logIn Loop)
var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))


// Creating the html input 
function createHTML(loggedInUser){

    return "<div>"+
    "<p id='firstname'> First name: " + loggedInUser.firstname + "<p>"+
    "<p id='lastname'> Last name: " + loggedInUser.lastname + "</p>"+
    "<p id='dateOfBirth'> Date of Birth: " + loggedInUser.dateOfBirth + "</p>"+
    "<p id='company'> Company: " + loggedInUser.company + "</p>"+
    "<p id='image'> " + "<img src=" + loggedInUser.image + "/>" + "</p>"+


  // "<p><input type='button' onclick='console.log(job.linkToWebsite)'>Company Website</button></p>"+
  "</div>";
}

//Call the createHTML function by a loop looking through the users added 
var content = "";
//for (var i=0; i <loggedInUser.length; i++) {
    content += createHTML(loggedInUser);


//Display users at HTML - getELementByClassName because we refer to the userprofile which is a class. 
document.getElementById('userProfile').innerHTML = content;
