var validationData = [];

var submitLogin = document.getElementById('submit');

submitLogin.onclick = function(){
  console.log("Button is clicked");
  var username = document.getElementById('inputUsername').value;
  var password = document.getElementById('inputPassword').value;
  var tempPos = -1;
  for (var i=0; i<validationData.length;i++){
      if(validationData[i][0] == username && validationData[i][1] == password){
        alert("You have successfully logged in");
        tempPos = i;
        break;
      }
  }

  if(tempPos == -1){
    alert("Password or Username is incorrect");
  }
};

var submitRegister = document.getElementById('register');

submitRegister.onclick = function(){
    var username = document.getElementById('inputUsername').value;
    var password = document.getElementById('inputPassword').value;
    console.log(username);
    console.log(password);
    var basicData = [];
    basicData.push(username);
    basicData.push(password);
    validationData.push(basicData);
    console.log(basicData);
};

/*function myFunction() {
    alert("You have inserted a value");
}*/

function PasswordVisibility() {
    var x = document.getElementById("inputPassword");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}