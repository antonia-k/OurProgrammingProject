var users = JSON.parse(localStorage.getItem("UserInfo"));

if(users === null || users === undefined){
    
// Initialize an empty array***
users = [];


// Fill it up with a few users
users.push(new freelancer("Marina", "Mehling", "10.10.2010", "mame", "1010","./images/mark.jpg"," "," ",[1,2,3]));
users.push(new freelancer("Stinne", "Andersson", "09.09.2009", "stan", "0909","./images/dog.png"," "," ",[1,2,3]));
users.push(new companyUser("Antonia", "Kellerwessel", "Goodiebox", "anke", "0808","./images/Search.png"));
}

var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))

function saveChanges() {

    loggedInUser.firstname = document.getElementById("firstName").value;
    loggedInUser.lastname = document.getElementById("lastName").value;
    loggedInUser.dateOfBirth = document.getElementById("dateOfBirth").value;
    loggedInUser.qualifications = document.getElementById("qualifications").value;
    loggedInUser.description = document.getElementById("description").value;

 //update changes of user in users array
    // Loop over jobs array to find the object with the same username and set it to loggedInUser
    for(var i = 0; i < users.length; i++){
        if(loggedInUser.username === users[i].username){
            users[i] = loggedInUser;
        }
    } 

//store updated users array in local storage, make sure keyName is always String!
    //keyName --> you need it to recall it later!
    localStorage.setItem("UserInfo", JSON.stringify(users));

    //store updated loggedInUser object in local storage, make sure keyName is always String! 
    //keyName --> you need it to recall it later!
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

    //Show message in result Span, to user can see that changes are saved.
    alert("Your changes have been saved!");

    //Return true to jump out of the function, since we now have all we need.
    //return true;

    window.location.href="./UserProfile.html";

}