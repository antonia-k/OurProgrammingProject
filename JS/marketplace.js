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
    var qual = divElements[i].getElementsByClassName("qualifications"); 
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


  creating a constructor for the jobPostings so that they are not hard-coded in the HTML
  class JobPosting{

    constructor(title){
        this.jobTitle = title;
        this.jobDescription = description;
        this.qualifications = qualifications;
        this.location = location; 
        //this.image = image;
        this.linkToWebsite = linkToWebsite;
        this.linkToContact = linkToContact;
    }
//creating an HTML from the JS objects
    createHTML(){

        var html = "<div class='card'><h1 class='jobtitle'>" + this.title + "</h1><p class='jobDescription'>" + this.jobDescription + "</p><p class='qualifications'>" + this.qualifications + "</p><p class='location' data-location-type=" + this.location + "></p><p><button onclick='window.location.href=`" + this.linkToWebsite + "`>Company Website</button></p><p><button onclick='window.location.href=`" + this.linkToContact "`>Contact</button></p></div>";

        return html;
    }


}

var postings = [new JobPosting("First"), new JobPosting("Second")];

var content = "";

for(i=0; i < postings.length; i++){
    content += postings[i].createHTML;
}

document.getElementById("searchDivs").innerHTML = content;

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