//users
//jobs
//loggedInUser

var users = [
    new Freelancer("Marina", "Mehling", "mame", "1010", "10.10.2010", "./images/mark.jpg"," "," ",""),
    new Freelancer("Stinne", "Andersson", "stan", "0909", "09.09.2009", "./images/dog.png"," "," ",""),
    new CompanyUser("Antonia", "Kellerwessel", "anke", "0808", "Goodiebox", "./images/Search.png")
];

var jobs = [
  new JobPosting("Front-End Developer at Orsted", "Designing a Website for the sale of energy", "CSS, HTML, JavaScript", "Copenhagen", "https://orsted.com/en/About-us", "https://orsted.com/en/About-us"),
  new JobPosting("Back-End Developer at E.ON", "Developing Database for Energy sources", "Java, Ruby, Python", "Aarhus", "https://www.eon.dk/privat.html", "https://www.eon.dk/privat.html"),
  new JobPosting("Web Designer for IBM", "Designing a Pretty Website for IBM", "Photoshop", "Odense", "https://www.ibm.com/dk-da/", "https://www.ibm.com/dk-da/"),
  new JobPosting("Back-End Developer at REWE", "Developing Database for Food Shopping", "Java, Ruby, Python", "Copenhagen", "https://www.rewe.de/", "https://www.rewe.de/")
];

if(localStorage.getItem('users') === null){
    localStorage.setItem('users', JSON.stringify(users));
}

if(localStorage.getItem('jobs') === null){
    localStorage.setItem('jobs', JSON.stringify(jobs));
}


