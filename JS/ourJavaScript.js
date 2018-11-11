
var login = document.getElementById('login');
var attempt = 3;

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
    // dateOfBirth is specific for freelancer
    this.dateOfBirth = dateOfBirth;
}};
class companyUser extends User{
    constructor(firstname, lastname, company, username, password, image){
        super(firstname, lastname, username, password, image)
    this.company = company;
}};



var users = JSON.parse(localStorage.getItem("users"));

if(users === null){
    
// Initialize an empty array***
users = [];


// Fill it up with a few users
users.push(new freelancer("Marina", "Mehling", "10.10.2010", "mame", "1010","./images/mark.jpg"));
users.push(new freelancer("Stinne", "Andersson", "09.09.2009", "stan", "0909","./images/dog.png"));
users.push(new companyUser("Antonia", "Kellerwessel", "08.08.2008", "anke", "0808","./images/Search.png"));
}
// 


//store user information 
let users_serialized = JSON.stringify(users);
localStorage.setItem("UserInfo", users_serialized);

//Validation 
function validate(){    
    var un = document.getElementById('username').value;
    var pw = document.getElementById('password').value;
    
    var tempPos = -1;

//Loop Validation
    for (var i = 0; i < users.length; i++) {
        if ((users[i].username==un) && (users[i].password==pw)) {
            if (typeof(Storage) !== "undefined") {
                sessionStorage.setItem("username", un);
            }
            alert("Login was successful");
            //redirects to Userprofile by checking subclasses 
            if (users[i] instanceof freelancer) {
                window.location.href="./UserProfile.html";
            }else if (users[i] instanceof companyUser) { //@Marina, will you take a look here, Anke 0808 can't log in :-) 
                window.location.href="https://www.google.com/";
            };
            tempPos = i;
            break;
        } else if (un == "" || pw== ""){
            alert("Username/Password required");
            return false;
        } else if (attempt ==0) {
            alert("3 failed attempts! Please reset your credentials.");
            username.disabled = true;
            password.disabled = true;
            login.disabled = true;
            return false;
        } 
    };
    if(tempPos == -1){
        alert("Invalid Username and/or Password");
        attempt --;
        return true;
    }

//Save the information for the user logged in. 
//Push username from logged in User in the local storage 
localStorage.setItem("loggedInUser", JSON.stringify(users[i]));

}


//Detect Caps Lock in Password Input
window.onload=function(){
    //Get the input field
    var input = document.getElementById("password");
    // Get the warning text
    var text = document.getElementById("caps");
    //When the user presses any key on the keyboard, run the function
    //without if error "cannot read property 'addEventListender' of null"
    if (input){
        input.addEventListener("keyup", function(event){
            //If "caps lock" is presed, display warning text
            if(event.getModifierState("CapsLock")){
                text.style.display = "block";
            } else {
                text.style.display = "none"
            };
            //Cancel the default action, if needed
            event.preventDefault();
            //Number 13 is the "Enter" key on the keyboard
            if (event.keyCode === 13) {
                //Trigger the button element with a click
                document.getElementById("login").click();
            }
    });
}};

 //Password visibility
 function pwVisibility() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
// Reset Password
function reset(){
    var fp = document.getElementById('resetPW').value;
    console.log(fp);
    if (fp == ""){
        alert('You need to enter your Email address!');
    } else {
        alert('A link to reset your Password has been sent');
    }
}

console.log(JSON.parse(localStorage.getItem("UserInfo")));





