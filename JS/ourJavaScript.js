

var submit = document.getElementById('submit');
var attempt = 3;

function validate(){
    var un = document.getElementById('username').value;
    var pw = document.getElementById('password').value;
    

    var unArray = ["markwalt", "jongossy", "jenndemp"];
    var pwArray = ["mark1234", "flomaygo", "jenny1234"];
//Loop Validation
    for (var i = 0; i < unArray.length; i++) {
        if ((un == unArray[i]) && (pw == pwArray[i])) {
            alert("Login was successful");
            window.location.href="https://www.google.com/";
            break;
        } else if (un == "" || pw== ""){
            alert("Username/Password requiered");
            return false;
        } else {
        alert("Invalid Username and/or Password");
        return true;
    }
    };
    
}



