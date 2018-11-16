var jobs = JSON.parse(localStorage.getItem("jobs"));

  function createHTML(job){
    return "<div class='card' data-location-type=" + job.jobLocation + ">"+
                  "<h1 class='jobtitle'>" + job.jobTitle + "</h1>"+
                  "<p class='jobDescription'>" + job.jobDescription + "</p>"+
                  "<p class='qualifications'>" + job.qualifications + "</p>"+
                // "<p><input type='button' onclick='console.log(job.linkToWebsite)'>Company Website</button></p>"+
                 "<p><button onclick='window.location.href=`" + job.linkToWebsite + "`'>Company Website</button></p>"+
                  "<p><button onclick='window.location.href=`" + job.linkToContact + "`'>Contact</button></p>"+
                  "<p><button type='button' onclick='addToFavourites(this)' data-id-type='"+job.jobTitle+"'>Delete from Favourites</button></p>"+
                "</div>";
  }
  //here is the error: cannot set.innerHTML property of null, make some form of if function to fix it, s.o., do we need to fix it at all??
  // liegt daran, dass dieses ELement auf der JobPosting seite nicht aufgerufen wird.. wie mach ich das so, dass es geht??
  
  var content = "";
  for(var i =0; i<jobs.length; i++){
      content += createHTML(jobs[i]);
  }
  
  document.getElementById('favouritesList').innerHTML = content;

  // ich habe das search divs nicht auf der seite, ich muss ein div erstellen, dass das erstellt wird!!