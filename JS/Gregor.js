

  // The constructor for our class, which will allow us to create new objects of our class
    //creating a constructor for the jobPostings so that they are not hard-coded in the HTML


  class JobPosting{

    constructor(title,description,qualifications,location,linkToWebsite,linkToContact){
        this.jobTitle = title;
        this.jobDescription = description;
        this.qualifications = qualifications;
        this.location = location; 
        //this.image = image;
        this.linkToWebsite = linkToWebsite;
        this.linkToContact = linkToContact;
    }
  } 
// Create array called jobs 
var jobs = JSON.parse(localStorage.getItem("jobs"));


// Hardcoded users in the users array
if(jobs === null){
  jobs = [];
  jobs.push(new JobPosting("Front-End Developer at Orsted", "Designing a Website for the sale of energy", "CSS, HTML, JavaScript", "Copenhagen", "https://orsted.com/en/About-us", "https://orsted.com/en/About-us"));
  jobs.push(new JobPosting("Back-End Developer at E.ON", "Developing Database for Energy sources", "Java, Ruby, Python", "Aarhus", "https://www.eon.dk/privat.html", "https://www.eon.dk/privat.html"));
}




// Define the buttons for submitting the Jobs 
var submit = document.getElementById('registerJobPos');

/*
// Loop that goes through the User Data to idetify right or wrong Username/Password
for (let i = 0; i < jobs.length; i++) {
    if (username == users[i].username && password == users[i].password) {
      {console.log (username + " is logged in!");


//Push jobpost from logged in Jobs in the local storage 
        localStorage.setItem("jobsPostCreated", jobs[i].jobTitle);

//redirect to new html side for logged in users 
        //window.location = "marketplace.html";

//Set authenticatedjobsId to jobsId to enable to change aunthenticatedjobsId = null into new value
       // aunthenticatedjobsId = jobs[i].jobsId;
        //console.log (aunthenticatedjobsId)
    }
}   
*/
// On "Click" validate input and push new user into array users
document.getElementById("registerJobPost").addEventListener("click", function() {

    jobTitle = document.getElementById("jobTitle").value;
    jobDescription = document.getElementById("jobDescription").value;
    qualifications = document.getElementById("qualifications").value;
    location = document.getElementById("location").value;
    linkToWebsite = document.getElementById("linkToWebsite").value;
    linkToContact = document.getElementById("linkToContact").value;
});
    /*
// Call validateJobtitle function   
    let validateJobTitle = checkJobTitle(jobTitle);
// Call validateJobDescription function
    let validateJobDescription = checkJobDescription (jobDescription);
    //Etc
    let validateQualifications = checkQualifications(qualifications);
    //Etc
    let validateLocation = checkLocation(location);
   // Etc   
   let validateLinkToWebsite = validateLinkToWebsite(linkToWebsite);
   // Etc   
   let validateLinkToContact = validateLinkToContact(linkToContact);

//If all input has been authenticated, welcome and redirect user to loginPage
    let redirectUser = userCreated (); 

    */

    jobs.push(new JobPosting(jobTitle, jobDescription, qualifications, location, linkToWebsite, linkToContact));
    console.log(jobs);
    localStorage.setItem('jobs',JSON.stringify(jobs));



// Redirecting when clicking on buttons 
function goToRegister () {
    window.location = "marketplace.html";
  }
  
