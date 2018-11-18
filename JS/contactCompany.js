function setCompany(this){
    localStorage.setItem("contactCompany", JSON.stringify(jobs[this]));

}

var jobs = JSON.parse(localStorage.getItem("jobs"));

function createHTML(job){
    return "<h1>Please send your request message</h1>"+
            "<ul>"+
                "<li>"+
                  "<label for='jobTitle'>Company Email Address:"+job.contact+"</label>"+
                "</li>"+
                "<li>"+
                 "<label for='jobDescription'>Your Email Address:</label>"+
                   "<input type='text' name='jobDescription' id='jobDescription' size='12'/>"+
                "</li>"+
                "<li>"+
                "<label for='qualifications'>Write your Message:</label>"+
                "<input type='text' name='qualifications' id='qualifications' size='50'/>"+
                "</li>"+
            "</ul>"+
        "<input type='submit' value='Send message' id='contactCompany' button onclick='contactCompany()'>";

}

var content = "";
for(var i =0; i<jobs.length; i++){
    content += createHTML(jobs[i]);
}

document.getElementById('contactCompanyBox').innerHTML = content;

function contactCompany(){
    console.log("works");
    alert("Your message has been sent");
    window.location.href="../marketplace.html";
}