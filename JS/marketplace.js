//extract jobs from localStorage
var jobs = JSON.parse(localStorage.getItem("jobs"));

// Define the buttons for submitting the Jobs 
var submit = document.getElementById('registerJobPost');

var form = document.getElementById('jobPosting');                     
if(form){
form.addEventListener('submit', emptyJobPosting); 
}
// On "Click" validate input and push new user into array users
if (submit == null){
  console.log('no submit button on page');
}

//prevent empty jobs from being posted
function emptyJobPosting (){
  var jobTitle = document.getElementById("jobTitle").value;
  var jobDescription = document.getElementById("jobDescription").value;
  var qualifications = document.getElementById("qualifications").value;
  var jobLocation = document.getElementById("jobLocation").value;
  var linkToWebsite = document.getElementById("linkToWebsite").value;
  var contact = document.getElementById("contact").value;

  if (jobLocation !== "Copenhagen"){
    console.log("location not Copenhagen")
    if (jobLocation !== "Aarhus"){
      console.log("location not Aarhus")
      if (jobLocation !== "Odense"){
        console.log("location not Odense")
        jobLocation = "Other";
      }
    }
  };
jobs.push(new JobPosting(jobTitle, jobDescription, qualifications, jobLocation, linkToWebsite, contact));
console.log(jobs);
localStorage.setItem('jobs',JSON.stringify(jobs));

}


//creating an HTML from the jobs JS objects
function createHTML(job){
return "<div class='card' data-location-type=" + job.jobLocation + ">"+
            "<h1 class='jobtitle'>" + job.jobTitle + "</h1>"+
            "<p class='jobDescription'>" + job.jobDescription + "</p>"+
            "<p class='qualifications'>" + job.qualifications + "</p>"+
           "<p><button onclick='window.location.href=`" + job.linkToWebsite + "`'>Company Website</button></p>"+
           "<p><button type='button' onclick='setCompany(`"+job.jobTitle+"`)'>Contact</button></p>"+
           "<p><button type='button' onclick='addToFavourites(`"+job.jobTitle+"`)'>Add to Favourites</button></p>"+
          "</div>";
}

var content = "";
for(var i =0; i<jobs.length; i++){
content += createHTML(jobs[i]);
}

document.getElementById('searchDivs').innerHTML = content;

//Search function for the Job Cards
function searchFunction(){
//Declare variables - getting values from the search box
var input = document.getElementById("jobInput").value.toUpperCase();
//der input funktioniert, wenn ich etwas eingebe, wird es als capital letter extrahiert
content = "";
//loop through the jobs array and the different objects within 
for (var i=0; i<jobs.length; i++){
  if(jobs[i].jobTitle.toUpperCase().includes(input) || jobs[i].qualifications.toUpperCase().includes(input)){
    content += createHTML(jobs[i]);
    }
  }
  document.getElementById('searchDivs').innerHTML = content;

}

// filter function by location
function filterFunction(checkbox){
console.log(checkbox);
var jobAds = document.getElementById("searchDivs");
var divElements = jobAds.getElementsByClassName("card");
//loop through the divs
for(var i=0; i<divElements.length; i++){
  //we have index 0 for divElements and location, because we get an array and because it contains only one value, we look for the element at index 0
  if (divElements[i].getAttribute("data-location-type") == checkbox.getAttribute("data-location-type")){
    //if all boxes unchecked, this is easier because then all are not displayed
    if (checkbox.checked == false){
      divElements[i].style.display = "none";
      }
    else{
      divElements[i].style.display = "";
    }
}
}
}

var users = JSON.parse(localStorage.getItem("users"));

var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

//function that adds the selected job to the favourites property of the user and loggedInUser
function addToFavourites(jobTitle){
console.log('works');

for(var i=0;i<users.length;i++){
    if (loggedInUser.username === users[i].username){
      //This part is relevant if the user does not have any favourites at all, because then there cannot be a loop, it goes into the other conditions, if the user does already have favourites saved
      if (loggedInUser.favourites.length == 0){
        loggedInUser.favourites.push(jobTitle);
        alert("The job has been added to your Favourites");
        users[i].favourites = loggedInUser.favourites;
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
        return false;
      }else{
        loggedInUser.favourites = users[i].favourites
        for(i=0;i<loggedInUser.favourites.length;i++){
          if(loggedInUser.favourites.includes(jobTitle)){
            alert('Job already in Favourites')
            return false;
          }
          else{
            loggedInUser.favourites.push(jobTitle);
            alert("The job has been added to your Favourites");
            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
            return false;
          }
        }
        //now we must also push it into local storage
                }
            }
            for(var i = 0; i < users.length; i++){
              if(loggedInUser.username === users[i].username){
                  users[i] = loggedInUser;
              }
          } 
        }     
    };


//function that sets the company upon the push of the button similarly to the loggedInUser, for the contactCompnay form
function setCompany(jobTitle){
for(i=0;i<jobs.length;i++){
if (jobs[i].jobTitle == jobTitle){
localStorage.setItem("contactedCompany", JSON.stringify(jobs[i]));
console.log('works');
var contactedCompany = JSON.parse(localStorage.getItem("contactedCompany"));
console.log(contactedCompany);
window.location.href="./HTML/contactPage.html";
    }
  }
}
