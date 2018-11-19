//user by id --> press card --> send the card and the user ID to the wishlist. Getting to a new page use a forloop, loop over the entire wishlist by knowing loggedInUser and display cards associated to the ID 

//Creating a class
class User {
    constructor(firstName, lastName){
        this.firstName = firstName,
        this.lastName = lastName,
        this.wishList = []
    }
}


class postCard {
    constructor(title, body){
        this.title = title,
        this.body = body
    }

}


var me = new User('Marten', 'Sievers')

var you = new User('Henrik', 'Thorn')

//put users into an array
var users = [me,you]


var post1 = new postCard ('greetings 1','hej her går det godt')

var post2 = new postCard ('greetings 2','hej her går det skidt')

//put postcards into an array 
var postCards = [post1,post2]



//Want to add the postcard to individuals wishlist 
//function to take postcard and add it somewhere else. Problem to find out to whom is this postcard belonging to 
function addToWishlist(postCard){


    var loggedIn = localStorage.getItem('loggedIn') //the currently loggedin user 
    console.log(loggedIn)

    for(i=0; i<users.length; i++){
        if(loggedIn == users[i].firstName) { //users[i] the logged in user (in this case we defined the loggedIn user has been defined in LocalStorage)

            /* Making a clone. the sentence  users[i].wishList.push(postCard) should be deleted if this part should actually work. 
            //We want to know the information about the postcard and therefore create a tempoary object, from where we get the information. This means that the postcard as such doens't have an owner, as it would if we used the rest of the code at this page
            var postcard = { 
                title: postCard.title, 
                body: postCard.budy,
                id: users[i].firstName 
            }
            wishlist.push(postcard)*/ 

            }
            users[i].wishList.push(postCard)
        }
        

    }


}

addToWishlist(postCard[0]) //taking the first postcard from our array 
console.log(users)