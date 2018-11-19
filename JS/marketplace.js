//var jobs = JSON.parse(localStorage.getItem("jobs"));

var jobs = JSON.parse(localStorage.getItem("jobs"));

// Define the buttons for submitting the Jobs 
var submit = document.getElementById('registerJobPost');


var form = document.getElementById('jobPosting');                     
if(form){
form.addEventListener('submit', emptyJobPosting); 
}
// On "Click" validate input and push new user into array users
if (submit == null){
  console.log('no submit button on page')
}

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
        jobLocation = "Other"
      }
    }
  
jobs.push(new JobPosting(jobTitle, jobDescription, qualifications, jobLocation, linkToWebsite, contact));
console.log(jobs);
localStorage.setItem('jobs',JSON.stringify(jobs));

};
}


//creating an HTML from the JS objects
function createHTML(job){
return "<div class='card' data-location-type=" + job.jobLocation + ">"+
            "<h1 class='jobtitle'>" + job.jobTitle + "</h1>"+
            "<p class='jobDescription'>" + job.jobDescription + "</p>"+
            "<p class='qualifications'>" + job.qualifications + "</p>"+
          // "<p><input type='button' onclick='console.log(job.linkToWebsite)'>Company Website</button></p>"+
           "<p><button onclick='window.location.href=`" + job.linkToWebsite + "`'>Company Website</button></p>"+
            "<p><button type='button' onclick='setCompany("+ job.jobTitle+")' data-name-type='"+job.jobTitle+"'>Contact</button></p>"+
            "<p><button type='button' onclick='addToFavourites(this)' data-id-type='"+job.jobTitle+"'>Add to Favourites</button></p>"+
          "</div>";
}
//here is the error: cannot set.innerHTML property of null, make some form of if function to fix it, s.o., do we need to fix it at all??
// liegt daran, dass dieses ELement auf der JobPosting seite nicht aufgerufen wird.. wie mach ich das so, dass es geht??

var content = "";
for(var i =0; i<jobs.length; i++){
content += createHTML(jobs[i]);
}

document.getElementById('searchDivs').innerHTML = content;

//local storage holen. das mit dem create html definieren mit loop und dann wird durch createHTML die funktion "gerufen"

//Search function for the Job Cards
function searchFunction(){
//Declare variables - getting values from the search box
var input = document.getElementById("jobInput").value.toUpperCase();
//der input funktioniert, wenn ich etwas eingebe, wird es als capital letter extrahiert
content = "";
//loop through the jobs array and the different elements within 
//i have an array of objects and not an array of arrays
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
  //wir haben index 0 bei der divElements und der location, weil wir dadurch eine Liste wiederbekommen, und das an erster Stelle steht, weil es nur ein Element hat
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

var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))

function addToFavourites(button){
console.log('works');

for(var i=0;i<users.length;i++){
    if (loggedInUser.username === users[i].username){
      //ich glaube das hatte ich eingefügt, für wenn man am anfang anfängt und keine favourites hat, dann wird das hinzugefügt, die späteren sind für wenn schon etwas in den favourites vorhanden ist
      if (loggedInUser.favourites.length == 0){
        loggedInUser.favourites.push(button.getAttribute("data-id-type"));
        alert("The job has been added to your Favourites");
        users[i].favourites = loggedInUser.favourites;
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
        return false;
      }else{
        loggedInUser.favourites = users[i].favourites
        //loopen durch einen for loop for(i=0;i<users[i].favourites.length;i++) --> mit gelöschtem User auf null, ist nichts hinterlegt, daher ist .length gleich 0 unde er looped nocht, think about how to solve this!, s.o.
        for(i=0;i<loggedInUser.favourites.length;i++){
          if(loggedInUser.favourites.includes(button.getAttribute("data-id-type"))){
            alert('Job already in Favourites')
            return false;
          }
          //das erste mal clicken läuft er durch, ohne etwas zu pushen irgendiwe, mit dem ersten click wird irgendwie wieder auf null zurückgesetzt, danach wird hinzugefügt
          //hier muss ich vom local storage holen und zu der Liste hinzufügen, weil der sonst jedes Mal wieder bei null anfängt und die überschreibt
          //schauen, ob ich favourites als this.favourites = favourites definiere und dann sage: var favourites = [] und dann this.favourites = favourites, also das array pushen und dann das array rausziehenimmer wieder, adaptieren und wieder reinpushen
          else{
            loggedInUser.favourites.push(button.getAttribute("data-id-type"));
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
    }


function setCompany(jobTitle){
for(i=0;i<jobs.length;i++){
//button is not defined right now, everything else should be working
if (jobs[i].jobTitle == jobTitle){
localStorage.setItem("contactedCompany", JSON.stringify(jobs[i]));
console.log('works')
var contactedCompany = JSON.parse(localStorage.getItem("contactedCompany"));
console.log(contactedCompany)
window.location.href="./HTML/contactPage.html";
  }
}
}
