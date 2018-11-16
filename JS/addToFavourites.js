/*var users = JSON.parse(localStorage.getItem("UserInfo"));

if(users === null || users === undefined){
    
// Initialize an empty array***
users = [];


// Fill it up with a few users
users.push(new freelancer("Marina", "Mehling", "10.10.2010", "mame", "1010","./images/mark.jpg"," "," "));
users.push(new freelancer("Stinne", "Andersson", "09.09.2009", "stan", "0909","./images/dog.png"," "," "));
users.push(new companyUser("Antonia", "Kellerwessel", "Goodiebox", "anke", "0808","./images/Search.png"));
}

var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))


function addToFavourites(){
    console.log('works');

    for(i=0;i<users.length;i++){
        if (loggedInUser.username = users[i].username){
            users[i].favourites.push(job)
            //we must define WHICH jobPosting is pushed
        }
    }
}
*/

/*I need to extract the users
I need to extract the loggedInUser
i have to access the favourites array of the loggedInUser
I have to push the title of the JobPosting Object into the favourites array
I have to save the loggedInUser as a user of users and stringify to save into local storage

then I need a new website, in which I need to parse the users and loggedInUsers again
I have to then access the array, if element i of the array equals the title of the jobPosting objects, then I have to display it with the create Html, now I need a delete button however, not an add to favourites button 

when I click the delete button, I need to get the users and loggedInUser from local storage
I have to delete the jobPosting title from the favourites array, then I have to save the array back to loggedInUser and to users, then the page must refresh to no longer portray the array, which might be done by a normal redirect at the end of the function to the same website, i.e. the favourites list html


function addToWishlist(item(in our case jobPosting)){
    
    var loggedInUser = localStorage.getItem('loggedInUser') --> assumes that there is a key and value pair that matches loggedInUser otherwise there will be an error, we could tell it to redirect to login or sth if there is an error
    console.log(loggedInUser)

    for(i=0;i<users.length;i++){
        if (loggedInUser.firstName = users[i].firstName){
            users[i].wishlist.push(postCard--> this is our jobPosting)
        }
        
        Alternatively: 
        var postcard{
            title: postCard.title
            body: postCard.body
            id: users[i].firstName
            }--> fill this with the info of the postcard and the info relevant to add it to the user, i.e. a form of ID, then display like with our createHTML
            wishlist.push(postcard)
        }
    }
    
}

addToWishlist(postCards[0])

console.log(users)

Alternatively:
we could create an array with an ID and a postcard to the wishlist, and then loop over the wishlist and then take the id of the logged in user and display that










class User {
    constructor(firstName, lastName){
        this.firstName = firstName,
        this.lastName = lastName,
        this.wishList = []
    }
}

class PostCard{
    constructor(title, body){
        this.title,
        this.body
    }
}

var me = new User('Marten','Sievers')
var you = new User('Henrik','Thorn')

var users = [me, you]

consle.log(users)

var post1 = new PostCard('Greeting from Copenhagen','bla')
var post2 = new PostCard('Greeting from Lisbon','bla')

var postCards = [post1,post2]

console.log(postCards)



function addToWishlist(item)){
    
    var loggedInUser = localStorage.getItem('loggedInUser') --> assumes that there is a key and value pair that matches loggedInUser otherwise there will be an error, we could tell it to redirect to login or sth if there is an error
    console.log(loggedInUser)

    for(i=0;i<users.length;i++){
        if (loggedInUser.firstName = users[i].firstName){
            users[i].wishlist.push(postCard--> this is our jobPosting)
        }
        
        Alternatively: 
        var postcard{
            title: postCard.title
            body: postCard.body
            id: users[i].firstName
            }--> fill this with the info of the postcard and the info relevant to add it to the user, i.e. a form of ID, then display like with our createHTML
            wishlist.push(postcard)
        }
    }
    
}

addToWIshlist(postCards[0])

console.log(users) */