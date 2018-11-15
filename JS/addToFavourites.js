function addToFavourites(){
    console.log('works');

}

/* I need to extract the users
I need to extract the loggedInUser
i have to access the favourites array of the loggedInUser
I have to push the title of the JobPosting Object into the favourites array
I have to save the loggedInUser as a user of users and stringify to save into local storage

then I need a new website, in which I need to parse the users and loggedInUsers again
I have to then access the array, if element i of the array equals the title of the jobPosting objects, then I have to display it with the create Html, now I need a delete button however, not an add to favourites button 

when I click the delete button, I need to get the users and loggedInUser from local storage
I have to delete the jobPosting title from the favourites array, then I have to save the array back to loggedInUser and to users, then the page must refresh to no longer portray the array, which might be done by a normal redirect at the end of the function to the same website, i.e. the favourites list html