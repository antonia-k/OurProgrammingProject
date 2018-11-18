//var jobs = JSON.parse(localStorage.getItem("jobs"));

var jobs = JSON.parse(localStorage.getItem("jobs"));

// Define the buttons for submitting the Jobs 
var submit = document.getElementById('registerJobPost');

// On "Click" validate input and push new user into array users
if (submit == null){
  console.log('no submit button on page')
}

function emptyJobPosting (){
  var emptyJobTitle = document.getElementById("jobTitle").value;
  var emptyJobDescription = document.getElementById("jobDescription").value;
  var emptyQualifications = document.getElementById("qualifications").value;
  var emptyLocation = document.getElementById("jobLocation").value;
  var emptyWebsite = document.getElementById("linkToWebsite").value;
  var emptyContact = document.getElementById("linkToContact").value;
 
  //if not everything is filled out it should not redirect and not save local storage 
  if (emptyJobTitle == "" || emptyJobDescription == ""|| emptyQualifications == ""|| emptyLocation == ""|| emptyWebsite == ""|| emptyContact == ""){
      alert("Please fill out all fields");

  }
  else {
    var jobTitle = document.getElementById("jobTitle").value;
    var jobDescription = document.getElementById("jobDescription").value;
    var qualifications = document.getElementById("qualifications").value;
    var jobLocation = document.getElementById("jobLocation").value;
    var linkToWebsite = document.getElementById("linkToWebsite").value;
    var linkToContact = document.getElementById("linkToContact").value;
  
    jobs.push(new JobPosting(jobTitle, jobDescription, qualifications, jobLocation, linkToWebsite, linkToContact));
    console.log(jobs);
    localStorage.setItem('jobs',JSON.stringify(jobs));
  
  window.location.href="./marketplace.html";
};
}
//we must check if the pushing still works
/*else {
  submit.addEventListener("click", function() {

  var jobTitle = document.getElementById("jobTitle").value;
  var jobDescription = document.getElementById("jobDescription").value;
  var qualifications = document.getElementById("qualifications").value;
  var jobLocation = document.getElementById("jobLocation").value;
  var linkToWebsite = document.getElementById("linkToWebsite").value;
  var linkToContact = document.getElementById("linkToContact").value;

  jobs.push(new JobPosting(jobTitle, jobDescription, qualifications, jobLocation, linkToWebsite, linkToContact));
  console.log(jobs);
  localStorage.setItem('jobs',JSON.stringify(jobs));
    }
  )
}
*/

//creating an HTML from the JS objects
function createHTML(job){
  return "<div class='card' data-location-type=" + job.jobLocation + ">"+
                "<h1 class='jobtitle'>" + job.jobTitle + "</h1>"+
                "<p class='jobDescription'>" + job.jobDescription + "</p>"+
                "<p class='qualifications'>" + job.qualifications + "</p>"+
              // "<p><input type='button' onclick='console.log(job.linkToWebsite)'>Company Website</button></p>"+
               "<p><button onclick='window.location.href=`" + job.linkToWebsite + "`'>Company Website</button></p>"+
                "<p><button onclick='window.location.href=`" + job.linkToContact + "`'>Contact</button></p>"+
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

//local storage holen. das mit dem create html definieren mit loop und dann wird durch createHTML die funktion "gerufen", brauche noch window.loc.ref zum marketplace
//createHTML();

//Search function for the Job Cards
function searchFunction(){
  //Declare variables - getting values from the search box
    var input = document.getElementById("jobInput").value.toUpperCase();
    //der input funktioniert, wenn ich etwas eingebe, wird es als capital letter extrahiert, muss ich das auch unten einfügen? wrs bei der if funktion in irgendeiner form!
    //var filter = input.value.toUpperCase(); das habe ich oben inkludiert, ist das richtig??
    //call the jobs function previously defined to be parsing the JSON
    content = "";
    //loop through the jobs array and the different elements within 
    //i have an array of objects and not an array of arrays
    for (var i=0; i<jobs.length; i++){
    //das Extrahieren der inputs geht, es wird das richtige extrahiert, wieso erkennt er das nicht durch den input? liegt das am toUpperCase?, aber er erkennt das nicht und geht immer nur direkt in den ganzen array, nicht das einzelne Element bzw. die property, wieso?
    //cannot read undefined of undefined or cannot read undefined of 1 ist der fehler, wie mach ich das mit dem extrahieren, davor hatte ich == input
      if(jobs[i].jobTitle.toUpperCase().includes(input) || jobs[i].qualifications.toUpperCase().includes(input)){
        //maybe use the .foreach method to use only those that are actually there
        //content = "";
        //for(var i =0; i<jobs.length; i++){
        content += createHTML(jobs[i]);
        }
        //PROBLEM: ER MACHT JETZT ALLES MIT DEM i!!!! also baut er die gesamte HTML, das ist das problem
        //document.getElementById('searchDivs').innerHTML = content;
      }//else{
//this works, i.e. if it does not contain the element, it will hide it, now I just have to figure out how exactly to look for stuff within the object and then display it 
      //content = "";}
      //console.log('no valid search parameters');
      document.getElementById('searchDivs').innerHTML = content;

  }

  /* muss wieder eingecoded werden evtl, das ist der Originalcode für die Suche hinter var filter definition 
  //Declare variables - getting values from the div elements
    var jobAds = document.getElementById("searchDivs");
    var divElements = jobAds.getElementsByClassName("card");
  //loop through the divs to search for the elements, and hide those that do not match the search query
  for (var i=0; i<divElements.length; i++){
    var qual = divElements[i].getElementsByClassName("qualifications"); 
    var jobTitle = divElements[i].getElementsByClassName("jobTitle"); 
    //wir haben index 0 bei der qual und dem jobTitle, weil wir dadurch ne Liste wiederbekommen, und das an erster Stelle steht, weil es nur ein Element hat
    if(qual[0].innerHTML.toUpperCase().includes(filter) || jobTitle[0].innerHTML.toUpperCase().includes(filter)){
      divElements[i].style.display = "";
    }else{
      divElements[i].style.display = "none";
    }
  }

}*/

// filter function by location
function filterFunction(checkbox){
  console.log(checkbox);
  var jobAds = document.getElementById("searchDivs");
  var divElements = jobAds.getElementsByClassName("card");
  //var jobs = JSON.parse(localStorage.getItem("jobs"));
  //loop through the divs
    for(var i=0; i<divElements.length; i++){
      //wir haben index 0 bei der divElements und der location, weil wir dadurch eine Liste wiederbekommen, und das an erster Stelle steht, weil es nur ein Element hat
      if (divElements[i].getAttribute("data-location-type") == checkbox.getAttribute("data-location-type")){
        //if all boxes unchecked, this is easier because then all are not displayed
        if (checkbox.checked == false){
          // we have to tell it to NOT display the unchecked ones HERE IS THE ERROR!!!!! 
          divElements[i].style.display = "none";
          }
        else{
          divElements[i].style.display = "";
        }
    }
  }
}

 /*// filter function by location
function filterFunction(checkbox){
  var jobAds = document.getElementById("searchDivs");
  var divElements = jobAds.getElementsByClassName("card");
  //loop through the divs
    for(var i=0; i<divElements.length; i++){
      //wir haben index 0 bei der divElements und der location, weil wir dadurch eine Liste wiederbekommen, und das an erster Stelle steht, weil es nur ein Element hat
      if (divElements[i].getElementsByClassName("location")[0].getAttribute('data-location-type') == checkbox.getAttribute('data-location-type')){
        //if all boxes unchecked
        if (checkbox.checked == false){
          divElements[i].style.display = "none";
        }else{
          divElements[i].style.display = "";
        }
      }
      document.getElementById('searchDivs').innerHTML = content;

    }
  } 
*/
/*
//creating an HTML from the JS objects
    function createHTML(){

        var html = "<div class='card'><h1 class='jobtitle'>" + this.title + "</h1><p class='jobDescription'>" + this.jobDescription + "</p><p class='qualifications'>" + this.qualifications + "</p><p class='location' data-location-type=" + this.location + "></p><p><button onclick='window.location.href=`" + this.linkToWebsite + "`>Company Website</button></p><p><button onclick='window.location.href=`" + this.linkToContact + "`>Contact</button></p></div>";

        return html;
    }




var postings = [new JobPosting("First"), new JobPosting("Second")];

var content = "";

for(i=0; i < postings.length; i++){
    content += postings[i].createHTML;
}

document.getElementById("searchDivs").innerHTML = content;
*/
/*
//Local storage with JSON 

   var content= JSON.stringify(jobPostings);

   localStorage.setItem("jobPosting", content);

   // Turn into an object 
   var content = JSON.parse(localStorage.getItem("jobPosting"));
   console.log(content);

   document.getElementById("JobTitle").innerText = content.jobTitle;

function jobPost(){
  document.getElementById("jobTitle")

}
*/



var users = JSON.parse(localStorage.getItem("users"));

var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))

//var favouriteJobs = [];


//find out why the local storage does not work for login page and profile page, and see if we get it to work in the create HTML either way
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
            //loopen durch einen for loop for(i=0;i<users[i].favourites.length;i++) --> mit gelöschtem User auf null, ist nichts hinterlegt, daher ist .length gleich 0 unde er looped nocht, think about how to solve this!
            for(i=0;i<loggedInUser.favourites.length;i++){
              if(loggedInUser.favourites.includes(button.getAttribute("data-id-type"))){
                alert('Job already in Favourites')
                return false;
                //users[i].favourites.push(button.getAttribute("data-id-type"));
              }
              //favouriteJobs.push(button.getAttribute("data-id-type"));
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
            //die sachen speichern, werden aber auf der login seite und dem profil nicht angezeigt, wenn man versucht, sie zu ziehen.. wieso?
            //users[i].favourites.push(favouriteJobs); 
            //we must prevent the thing from being pushed into the list of favourites more than once, make an alert or sth, "this job is already in your favourites"
            //try with a for loop that goes through the favourites array and checks if it is already in, if yes, then alert 'already saved to your favourites', otherwise push to the favourites list
            /*
            //now we must also push it into local storage
                    }
                }
                for(var i = 0; i < users.length; i++){
                  if(loggedInUser.username === users[i].username){
                      users[i] = loggedInUser;
                  }
              } 
            */
            //the local storage pushing does not work yet!!! check why!  
          }     
        }
      }
}

//speichert er nicht oder wird es immer wieder überschrieben??? --> wahrscheinlich wird es immer durch das var users = null überschrieben
//problem im UserProfile und im Login, überall anders sind die sachen gespeichert, wenn ich nicht den local storage cleare




/*I need to extract the users
I need to extract the loggedInUser
i have to access the favourites array of the loggedInUser
I have to push the title of the JobPosting Object into the favourites array
I have to save the loggedInUser as a user of users and stringify to save into local storage

then I need a new website, in which I need to parse the users and loggedInUsers again
I have to then access the array, if element i of the array equals the title of the jobPosting objects, then I have to display it with the create Html, now I need a delete button however, not an add to favourites button 

when I click the delete button, I need to get the users and loggedInUser from local storage
I have to delete the jobPosting title from the favourites array, then I have to save the array back to loggedInUser and to users, then the page must refresh to no longer portray the array, which might be done by a normal redirect at the end of the function to the same website, i.e. the favourites list html


function addToWishlist(item(in our case jobPosting)){
    
    var loggedInUser = localStorage.getItem('loggedInUser') --> assumes that there is a key and value pair that matches loggedInUser otherwise there will be an error, we could tell it to redirect to login or sth if there is an error
    console.log(loggedInUser)

    for(i=0;i<users.length;i++){
        if (loggedInUser.firstName = users[i].firstName){
            users[i].wishlist.push(postCard--> this is our jobPosting)
        }
        
        Alternatively: 
        var postcard{
            title: postCard.title
            body: postCard.body
            id: users[i].firstName
            }--> fill this with the info of the postcard and the info relevant to add it to the user, i.e. a form of ID, then display like with our createHTML
            wishlist.push(postcard)
        }
    }
    
}

addToWishlist(postCards[0])

console.log(users)

Alternatively:
we could create an array with an ID and a postcard to the wishlist, and then loop over the wishlist and then take the id of the logged in user and display that










class User {
    constructor(firstName, lastName){
        this.firstName = firstName,
        this.lastName = lastName,
        this.wishList = []
    }
}

class PostCard{
    constructor(title, body){
        this.title,
        this.body
    }
}

var me = new User('Marten','Sievers')
var you = new User('Henrik','Thorn')

var users = [me, you]

consle.log(users)

var post1 = new PostCard('Greeting from Copenhagen','bla')
var post2 = new PostCard('Greeting from Lisbon','bla')

var postCards = [post1,post2]

console.log(postCards)



function addToWishlist(item)){
    
    var loggedInUser = localStorage.getItem('loggedInUser') --> assumes that there is a key and value pair that matches loggedInUser otherwise there will be an error, we could tell it to redirect to login or sth if there is an error
    console.log(loggedInUser)

    for(i=0;i<users.length;i++){
        if (loggedInUser.firstName = users[i].firstName){
            users[i].wishlist.push(postCard--> this is our jobPosting)
        }
        
        Alternatively: 
        var postcard{
            title: postCard.title
            body: postCard.body
            id: users[i].firstName
            }--> fill this with the info of the postcard and the info relevant to add it to the user, i.e. a form of ID, then display like with our createHTML
            wishlist.push(postcard)
        }
    }
    
}

addToWIshlist(postCards[0])

console.log(users) */