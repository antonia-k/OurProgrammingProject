// Creating a class 
// We create a user class, so we have an easy way to create users and further implement features at a later stage
class User {
    // The constructor for our class, which will allow us to create new objects of our class
    constructor(firstname, lastname, username, password, image) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.username = username;
      this.password = password;
      this.image = image;
    
    }
}

//sub-classes - need to be specific, vary from superclass
class Freelancer extends User{
    constructor(firstname, lastname, username, password, dateOfBirth, image, qualifications, description){
        super(firstname, lastname, username, password, image);
        // dateOfBirth is specific for Freelancer
        this.dateOfBirth = dateOfBirth;
        this.qualifications = qualifications;
        this.description = description;
        // we must "hardcode" Freelancer and company type, otherwise the extracting from local storage will overwrite the objecttype with the default value "object"
        this.objectType = "Freelancer";
        this.favourites = [];
    }
};

class CompanyUser extends User{
    constructor(firstname, lastname, username, password, company, image){
        super(firstname, lastname, username, password, image)
        this.company = company;
        this.objectType = "CompanyUser";
    }
}

class JobPosting{
    constructor(title,description,qualifications,jobLocation,linkToWebsite,contact){
        this.jobTitle = title;
        this.jobDescription = description;
        this.qualifications = qualifications;
        this.jobLocation = jobLocation; 
        //this.image = image;
        this.linkToWebsite = linkToWebsite;
        this.contact = contact;
    }
  } 

