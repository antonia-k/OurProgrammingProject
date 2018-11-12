

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
      this.status = "<button class='removeFromCart' name='add to cart' data-object='" + JSON.stringify(this) + "'>Remove Course</button>";
    }

    createHTML(){
        return "<td> <img height='65px' src='" + this.firstname + "'></td><td>" + this.lastname + "</td><td>" + this.dateOfBirth + "</td><td>" + this.username + "</td><td>" + this.password + "</td><td>" + this.image + "</td><td>" + this.price + "</td>";
    }
};


var users = JSON.parse(localStorage.getItem("users"));

if(users === null){
  users = [];

// Fill it up with a few users
users.push(new User("Marina", "Mehling", "10.10.2010", "mame", "1010","./images/mark.jpg"));
users.push(new User("Stinne", "Andersson", "09.09.2009", "stan", "0909","./images/dog.png"));
users.push(new User("Antonia", "Kellerwessel", "08.08.2008", "anke", "0808","./images/Search.png"));

// Creating the html input 
function createHTML(user){
    return "<div class='col-sm-6' id='col-sm-6'></br>" +
    "<h4 id='profileName' style='color:#00b1b1;' ></h4>" +
      "<span><p>Freelancer</p></span>" +            
    "</div>" +
    
    "<div align ='center'> <img alt='User Pic'src='https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg' id='profile-image1' width='300px'><br>" + 
    "<input id='profile-image-upload' class='hidden' type='file'>" + 
    "<div style='color:#999;'>click here to change profile image</div>" +
    "<h4 style='color:#00b1b1;'>" + user.firstname + " " + user.lastname + "</h4></span>" + 
    "<span><p>Freelancer</p></span>" +           
    "<hr>" +
    "<div>" + user.dateOfBirth + "</div>" + 
    "<div>Email:</div><div align='center'>" + user.username + "/div>" + 
    "<div align='center'>" + user.image + "</div>" 
            
}




//Call the createHTML function by a loop looking through the users added 
var html = "";
for (i=0; i < users.length; i++) {
    html += users[i].createHTML();
}
//Display users at HTML 
users = document.getElementById('col-sm-6').innerHTML = content;
users.innerHTML = html;



/*if (typeof(Storage) !== "undefined") {
    localStorage.setItem(constructor, valData);
}*/
//Turn it into a string 
let valData_serialized = JSON.stringify(valData);

localStorage.setItem("valData", valData_serialized);



function validate(){    
    var un = document.getElementById('username').value;
    var pw = document.getElementById('password').value;
    
    var tempPos = -1;
//Loop Validation
    for (var i = 0; i < valData.length; i++) {
        if ((valData[i].username==un) && (valData[i].password==pw)) {
            if (typeof(Storage) !== "undefined") {
                sessionStorage.setItem("username", un);
            }
            alert("Login was successful");
            //redirects to Userprofile
            if (un =="mame") {
                window.location.href="./UserProfile.html";
            }else if(un == "stan") {
                window.location.href="http://www.google.com/";
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
    
}
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



