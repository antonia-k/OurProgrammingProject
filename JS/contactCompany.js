function contactCompany(){
    console.log("works");
    alert("Your message has been sent");
    window.location.href="../marketplace.html";
}

function createHTML(job){
    return "<div class='card' data-location-type=" + job.jobLocation + ">"+
                "<h1 class='jobtitle'>" + job.jobTitle + "</h1>"+
                "<p class='jobDescription'>" + job.jobDescription + "</p>"+
                "<p class='qualifications'>" + job.qualifications + "</p>"+
               "<p><button onclick='window.location.href=`" + job.linkToWebsite + "`'>Company Website</button></p>"+
                "<p><button onclick='window.location.href=`./HTML/contactPage.html`'>Contact</button></p>"+
                "<p><button type='button' onclick='addToFavourites(this)' data-id-type='"+job.jobTitle+"'>Add to Favourites</button></p>"+
              "</div>";
}

var content = "";
for(var i =0; i<jobs.length; i++){
    content += createHTML(jobs[i]);
}

document.getElementById('searchDivs').innerHTML = content;

}