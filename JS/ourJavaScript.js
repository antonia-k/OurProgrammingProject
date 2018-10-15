

var login = document.getElementById('login');
var attempt = 3;

function validate(){    
    var un = document.getElementById('username').value;
    var pw = document.getElementById('password').value;
    var valData = [["Company", "1234"],["Freelancer", "4321"]];
//Loop Validation
    for (var i = 0; i < valData.length; i++) {
        if ((un == valData[i][0]) && (pw == valData[i][1])) {
            alert("Login was successful");
            window.location.href="./HTML/UserProfile.html";
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
        } else {
        alert("Invalid Username and/or Password");
        attempt --;
        return true;
    }
    };
    
    
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






