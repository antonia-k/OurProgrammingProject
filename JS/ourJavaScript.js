

var submit = document.getElementById('submit');
var attempt = 3;

function validate(){
    var un = document.getElementById('username').value;
    var pw = document.getElementById('password').value;
    

    var validationData = [["Company", "1234"],["Freelancer","4321"]];
    
//Loop Validation
submitLogin.onclick = function(){
    for (var i = 0; i < validationData.length; i++) {
        if (validationData[i][0] == un && validationData[i][1] == pw) {
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






