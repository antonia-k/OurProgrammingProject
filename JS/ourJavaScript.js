

var login = document.getElementById('login');
var attempt = 3;

function validate(){    
    var un = document.getElementById('username').value;
    var pw = document.getElementById('password').value;
    var valData = [["Company", "1234"],["Freelancer", "4321"]];
    var tempPos = -1;
//Loop Validation
    for (var i = 0; i < valData.length; i++) {
        if ((valData[i][0]==un) && (valData[i][1])==pw) {
            alert("Login was successful");
            //redirects to Userprofile
            if (un =="Freelancer") {
                window.location.href="./UserProfile.html";
            }else if(un == "Company") {
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






