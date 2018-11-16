//localStorage.clear;

//var jobs = JSON.parse(localStorage.getItem("jobs"));

  var jobs = JSON.parse(localStorage.getItem("jobs"));
  
  if(jobs === null){
    jobs = [];
    jobs.push(new JobPosting("Front-End Developer at Orsted", "Designing a Website for the sale of energy", "CSS, HTML, JavaScript", "Copenhagen", "https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg", "https://orsted.com/en/About-us", "https://orsted.com/en/About-us"));
    jobs.push(new JobPosting("Back-End Developer at E.ON", "Developing Database for Energy sources", "Java, Ruby, Python", "Aarhus", "./images/dog.png", "https://www.eon.dk/privat.html", "https://www.eon.dk/privat.html"));
  }
  
  // Define the buttons for submitting the Jobs 
  var submit = document.getElementById('registerJobPost');
  
  // On "Click" validate input and push new user into array users
  if (submit == null){
    console.log('no submit button on page')
  }
  //we must check if the pushing still works
  else {
    submit.addEventListener("click", function() {
  
    var jobTitle = document.getElementById("jobTitle").value;
    var jobDescription = document.getElementById("jobDescription").value;
    var qualifications = document.getElementById("qualifications").value;
    var jobLocation = document.getElementById("jobLocation").value;
    var profileImage = document.getElementById("profileImage").value;
    var linkToWebsite = document.getElementById("linkToWebsite").value;
    var linkToContact = document.getElementById("linkToContact").value;
  
    jobs.push(new JobPosting(jobTitle, jobDescription, qualifications, jobLocation, profileImage, linkToWebsite, linkToContact));
    console.log(jobs);
    localStorage.setItem('jobs',JSON.stringify(jobs));
      }
    )
  }
  
  //links zu webseiten etc gehen nicht--> check why
  //creating an HTML from the JS objects
  function createHTML(job){
    return "<div class='card'>"+
                  "<h1 class='jobtitle'>" + job.jobTitle + "</h1>"+
                  "<p class='jobDescription'>" + job.jobDescription + "</p>"+
                  "<p class='qualifications'>" + job.qualifications + "</p>"+
                  "<p class='location' data-location-type=" + job.location + "></p>"+
                  "<p class='location' data-location-type=" + job.profileImage + "></p>"+
                  "<p><button onclick='window.location.href='" + job.linkToWebsite + ">Company Website</button></p>"+
                  "<p><button onclick='window.location.href='" + job.linkToContact + ">Contact</button></p>"+
                "</div>";
  }
  
  //here is the error: cannot set .innerHTML property of null, make some form of if function to fix it, s.o., do we need to fix it at all??
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
      var input = document.getElementById("jobInput");
      var filter = input.value.toUpperCase();
    //Declare variables - getting values from the div elements
      var jobAds = document.getElementById("searchDivs");
      var divElements = jobAds.getElementsByClassName("card");
    //loop through the divs to search for the elements, and hide those that do not match the search query
    for (var i=0; i<divElements.length; i++){
      var qual = divElements[i].getElementsByClassName("profileImage"); 
      var jobTitle = divElements[i].getElementsByClassName("jobTitle"); 
      //wir haben index 0 bei der qual und dem jobTitle, weil wir dadurch ne Liste wiederbekommen, und das an erster Stelle steht, weil es nur ein Element hat
      if(qual[0].innerHTML.toUpperCase().includes(filter) || jobTitle[0].innerHTML.toUpperCase().includes(filter)){
        divElements[i].style.display = "";
      }else{
        divElements[i].style.display = "none";
      }
    }
  
  }
  
  
  
  // filter function by location
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
      }
    }
  
    
  
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