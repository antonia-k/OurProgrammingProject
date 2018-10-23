//Search function for the Job Cards
function searchFunction(){
  //Declare variables - getting values from the search box
    var input = document.getElementById("jobInput");
    var filter = input.value.toUpperCase();
  //Declare variables - getting values from the div elements
    var jobAds = document.getElementById("searchDivs");
    var divElements = jobAds.getElementsByClassName("card");

  //loop through the divs to search for the elements, and hide those that do not match the search query
  for (var i=0; i<divElements.length; i++){
    var qual = divElements[i].getElementsByClassName("qualifications"); 
    var jobTitle = divElements[i].getElementsByClassName("jobTitle"); 
    //wir haben index 0 bei der qual und dem jobTitle, weil wir dadurch ne Liste wiederbekommen, und das an erster Stelle steht, weil es nur ein Element hat
    if(qual[0].innerHTML.toUpperCase().includes(filter) || jobTitle[0].innerHTML.toUpperCase().includes(filter)){
      divElements[i].style.display = "";
    }else{
      divElements[i].style.display = "none";
    }
  }

}

function filterFunction(checkbox){
  var jobAds = document.getElementById("searchDivs");
  var divElements = jobAds.getElementsByClassName("card");
    for(var i=0; i<divElements.length; i++){
      //wir haben index 0 bei der qual und dem jobTitle, weil wir dadurch ne Liste wiederbekommen, und das an erster Stelle steht, weil es nur ein Element hat
      if (divElements[i].getElementsByClassName("location")[0].getAttribute('data-location-type') == checkbox.getAttribute('data-location-type')){
        if (checkbox.checked == false){
          divElements[i].style.display = "none";
        }else{
          divElements[i].style.display = "";
        }
      }
    }
  }

/*//Filter function for the location filters
function filterFunction (){
  //Declare variables - getting values from the search box
    var input = document.getElementById("jobInput");
    var filter = input.value.toUpperCase();
  //Declare variables - getting values from the div elements
    var jobAds = document.getElementById("searchDivs");
    var divElements = jobAds.getElementsByClassName("card");

  //loop through the divs to search for the elements, and hide those that do not match the search query
  for (var i=0; i<divElements.length; i++){
    var qual = divElements[i].getElementsByClassName("qualifications"); 

    if(!qual[0].innerHTML.toUpperCase().includes(filter)){
      divElements[i].style.display = "none";
    }else{
      divElements[i].style.display = "";
    } 
  }

}

}*/