function saveChanges() {

    loggedInUser.firstname = document.getElementById("firstName").value;
    loggedInUser.lastname = document.getElementById("lastName").value;
    loggedInUser.dateOfBirth = document.getElementById("qualifications").value;
    loggedInUser.qualifications = document.getElementById("qualifications").value;
    loggedInUser.description = document.getElementById("description").value;

    window.location.href="./UserProfile.html";
}