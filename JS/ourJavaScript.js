
//var login = document.getElementById('login');
var attempt = 3;

var users = null;

//function to reassign the objectTypes to the users after being deleted through storing it in localStorage
function getUsers(list){
    // I define what I get from localStorage as "list" here, "list" is my array of objects that I got from localStorage
    var retList = [];
    for(var i=0; i<list.length; i++){
        if(list[i].objectType === "Freelancer"){
            console.log(list[i].favourites)
            retList.push(new Freelancer(list[i].firstname, list[i].lastname, list[i].username, list[i].password, list[i].dateOfBirth, list[i].image, list[i].qualifications, list[i].description));
            console.log(list[i].favourites)
        }
        else{
            retList.push(new CompanyUser(list[i].firstname, list[i].lastname, list[i].username, list[i].password, list[i].company, list[i].image, list[i].description));
        }
    }
    console.log(retList)
    return retList;
}


users = getUsers(JSON.parse(localStorage.getItem("users")));

// function that reassigns the favourittes to the users
function updateFavourites(){
    var updateFavourites = JSON.parse(localStorage.getItem("users"))
    for (var i=0; i<updateFavourites.length; i++){
        if(updateFavourites[i].objectType == "Freelancer"){
        console.log(updateFavourites[i])
        console.log(users[i])

        users[i].favourites = updateFavourites[i].favourites

        console.log(updateFavourites[i].favourites)
        console.log(users[i].favourites)    
        }
    }
}

updateFavourites.call()

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
            if (users[i] instanceof Freelancer) {
                window.location.href="./UserProfile.html";
            }else if (users[i] instanceof CompanyUser) { 
                window.location.href="./companyProfile.html";
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
        return false;
    }

//Save the information for the user logged in. 
//Push username from logged in User in the local storage 
console.log(users[tempPos])
localStorage.setItem("loggedInUser", JSON.stringify(users[tempPos]));
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

console.log(JSON.parse(localStorage.getItem("users")));





