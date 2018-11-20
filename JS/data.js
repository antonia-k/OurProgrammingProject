//users
//jobs
//loggedInUser

var users = [
    new Freelancer("Marina", "Mehling", "mame", "1010", "10.10.2010", "./images/marina2.jpg"," "," ",""),
    new Freelancer("Stinne", "Andersson", "stan", "0909", "09.09.2009", "./images/stinne.jpg"," "," ",""),
    new CompanyUser("Antonia", "Kellerwessel", "anke", "0808", "Goodiebox", "./images/logo-fb.jpg", " ")
];

var jobs = [
  new JobPosting("Front-End Developer at Orsted", "Designing a Website for the sale of energy", "CSS, HTML, JavaScript", "Copenhagen", "https://orsted.com/en/About-us", "orsted@orsted.dk"),
  new JobPosting("Back-End Developer at E.ON", "Developing Database for Energy sources", "Java, Ruby, Python", "Aarhus", "https://www.eon.dk/privat.html", "eon@eon.dk"),
  new JobPosting("Web Designer for IBM", "Designing a Pretty Website for IBM", "Photoshop", "Odense", "https://www.ibm.com/dk-da/", "ibm@ibm.dk"),
  new JobPosting("Back-End Developer at REWE", "Developing Database for Food Shopping", "Java, Ruby, Python", "Copenhagen", "https://www.rewe.de/", "rewe@rewe.dk")
];

if(localStorage.getItem('users') === null){
    localStorage.setItem('users', JSON.stringify(users));
}

if(localStorage.getItem('jobs') === null){
    localStorage.setItem('jobs', JSON.stringify(jobs));
}


