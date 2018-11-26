//extracting jobs from localStorage
var jobs = JSON.parse(localStorage.getItem("jobs"));

// function to create the HTML for all jobs in the favourites of the loggedInUser
  function createHTML(job){
    return "<div class='card' data-location-type=" + job.jobLocation + ">"+
                  "<h1 class='jobtitle'>" + job.jobTitle + "</h1>"+
                  "<p class='jobDescription'>" + job.jobDescription + "</p>"+
                  "<p class='qualifications'>" + job.qualifications + "</p>"+
                 "<p><button onclick='window.location.href=`" + job.linkToWebsite + "`'>Company Website</button></p>"+
                  "<p><button onclick='window.location.href=`" + job.linkToContact + "`'>Contact</button></p>"+
                  "<p><button type='button' onclick='DeleteFromFavourites(this)' data-id-type='"+job.jobTitle+"'>Delete from Favourites</button></p>"+
                "</div>";
  }
 
var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  var content = "";
  for(var i =0; i<jobs.length; i++){
   if(loggedInUser.favourites.includes(jobs[i].jobTitle)){
      content += createHTML(jobs[i]);
    }
  }
  
  document.getElementById('favouritesList').innerHTML = content;


//deleting the Job from the Favourites List
  function DeleteFromFavourites(button){
    console.log('works');

    for(var i=0;i<users.length;i++){
        if (loggedInUser.username === users[i].username){
          //if (loggedInUser.favourites.length == 0){
            console.log(loggedInUser.favourites)
            var index = loggedInUser.favourites.indexOf(button.getAttribute("data-id-type"));
            if (index > -1) {
            loggedInUser.favourites.splice(index, 1);
            } 
            //loggedInUser.favourites.splice(button.getAttribute("data-id-type"));
            console.log(loggedInUser.favourites)
            alert("The job has been deleted from your Favourites");
            users[i].favourites = loggedInUser.favourites;
            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
            //redirect to the same website to reload!!!
            window.location.href="./favouritesList.html"
            return false;
              }
            }
          }
      