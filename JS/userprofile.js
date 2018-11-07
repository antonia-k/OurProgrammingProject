// check if user is logged in
if (sessionStorage.getItem('username') ===null) {
    window.location.href="./ourProject.htm"
 };
// name of hidden name 'tags-input' 

class User {
    // The constructor for our class, which will allow us to create new objects of our class
    constructor(firstname, lastname, username, password, image) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.username = username;
      this.password = password;
      this.image = image;
    }

    
    createHTML(){
        return "<td> <img height='65px' src='" + this.firstname + "'></td><td>" + this.lastname + "</td><td>" + this.dateOfBirth + "</td><td>" + this.username + "</td><td>" + this.password + "</td><td>" + this.image + "</td>";
    }
};

//sub-classes
class freelancer extends User{
    constructor(firstname, lastname, dateOfBirth, username, password, image){
        super(firstname, lastname, username, password, image);
    // dateOfBirth is specific for freelancer
    this.dateOfBirth = dateOfBirth;
}};
class companyUser extends User{
    constructor(firstname, lastname, company, username, password, image){
        super(firstname, lastname, username, password, image)
    this.company = company;
}};



var users = JSON.parse(localStorage.getItem("users"));

if(users === null){
  users = [];


// Fill it up with a few users
users.push(new User("Marina", "Mehling", "10.10.2010", "mame", "1010","./images/mark.jpg"));
users.push(new User("Stinne", "Andersson", "09.09.2009", "stan", "0909","./images/dog.png"));
users.push(new User("Antonia", "Kellerwessel", "08.08.2008", "anke", "0808","./images/Search.png"));


// Creating the html input 
function createHTML(user){
    return "<div class='col-sm-6' id='col-sm-6'></br>" +
    "<h4 id='profileName' style='color:#00b1b1;' ></h4>" +
      "<span><p>Freelancer</p></span>" +            
    "</div>" +
    "<div align ='center'> <img alt='User Pic'src='https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg' id='profile-image1' width='300px'><br>" + 
    "<input id='profile-image-upload' class='hidden' type='file'>" + 
    "<div style='color:#999;'>click here to change profile image</div>" +
    "<h4 style='color:#00b1b1;'>" + user.firstname + " " + user.lastname + "</h4></span>" + 
    "<span><p>Freelancer</p></span>" +           
    "<hr>" +
    "<div>" + user.dateOfBirth + "</div>" + 
    "<div>Email:</div><div align='center'>" + user.username + "/div>" + 
    "<div align='center'>" + user.image + "</div>" 
            
}


//Call the createHTML function by a loop looking through the users added 
var html = "";
for (i=0; i < users.length; i++) {
    html += users[i].createHTML();
}
//Display users at HTML 
users = document.getElementById('col-sm-6').innerHTML = content;
users.innerHTML = html;






//creating the input for tags-input
[]. forEach.call(document.getElementsByClassName('tags-input'), function (el) {
    var hiddenInput = document.createElement('input'),
        mainInput = document.createElement('input');
    //array of tags 
    tags = [];

    hiddenInput.setAttribute('type' , 'hidden');
    hiddenInput.setAttribute('name', el.getAttribute('data-name'));

    mainInput.setAttribute('type', 'text');
    mainInput.classList.add('main-input');
    // Creating the element, so you can write tags by splitting by (,) 
    //try to find how to split by enter not comma
    mainInput.addEventListener('input', function() {
        var enteredTags = mainInput.value.split(',');
    //if the length of the entered tags is greater than 1, means we found a comma, if not it means that the user haven't finishedt the Tag yet 
        if (enteredTags.length > 1) {
            //filtering the tags, so it is not all white space or weird punctation 
            enteredTags.forEach(function (t) {
                var filteredTag = filterTag(t);
            //if filteredTag is longer than 0 then enter the filteredTag --> now go to functions and add a return in function FilterTag
                if (filteredTag.length > 0)
                    addTag(filteredTag);
            });
            //adding the function, so the text is converted to a tag and the text is not shown afterwards
            mainInput.value = '';
        }
    });

    //creating a element so that pushing 'backspace = 8' deletes the last tag 
    mainInput.addEventListener('keydown', function (e){
        var keyCode = e.which || e.keyCode;
        if (keyCode === 8 && mainInput.value.length === 0 && tags.length > 0){
            removeTag(tags.length - 1);
        }
    });

    el.appendChild(mainInput);
    el.appendChild(hiddenInput);

   
 //functions

    function addTag (text){
        var tag = {
            text: text,
            element: document.createElement('span'),
        };

        tag.element.classList.add('tag');
        tag.element.textContent = tag.text;

    //adding the Tag-clode buttom (x)
        var closeBtn = document.createElement('span');
        closeBtn.classList.add('close');
    //making the close buttom actually work 
        closeBtn.addEventListener('click', function () {
            removeTag(tags.indexOf(tag));

        }); 
        // Remember we now need to add this in the function (removeTag)
        tag.element.appendChild(closeBtn);
    
        tags.push(tag);
    //append it to el. appendChild(hiddenInput)
        el.insertBefore(tag.element, mainInput);
        refreshTags();
    }

    function removeTag (index) {
        var tag = tags[index];
        tags.splice(index, 1);
        el.removeChild(tag.element);
        refreshTags();
    }

    //because the hidden tag is going to have the value of all of our tags (fill in the hidden input)
    function refreshTags () {
        //so if we want to make a tag with a space inbetween it let us do that 
        var tagsList =[];
        tags.forEach(function(t){
            tagsList.push(t.text);
        });
        hiddenInput.value = tagsList.join(',');

    }

    function filterTag (tag) {
        //removing all punctuation except for the dash(-) and underscore. 
        // removed white spaces and replace with dash (-)
        return tag.replace(/[^\w -]/g,'').trim().replace(/[^\w -]/g,'-');}
}
