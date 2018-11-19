var contactedCompany = JSON.parse(localStorage.getItem("contactedCompany"));

function createHTML2(contactedCompany){
    return "<h1>Please send your request message</h1>"+
            "<ul>"+
                "<li>"+
                  "<label for='jobTitle'>Company Email Address:"+contactedCompany.contact+"</label>"+
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
    content += createHTML2(contactedCompany);


document.getElementById('contactCompanyBox').innerHTML = content;

function contactCompany(){
    console.log("works");
    alert("Your message has been sent");
    window.location.href="../marketplace.html";
}