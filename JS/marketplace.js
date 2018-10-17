/*function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, td2, i;
    input = document.getElementById("jobInput");
          //we have to check what exactly the toUpperCase function does
    filter = input.value.toUpperCase();
    table = document.getElementById("jobTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      td2 = tr[i].getElementsByTagName("td")[3];
      if (td) {
        if ((td.innerHTML.toUpperCase().indexOf(filter) > -1)||(td2.innerHTML.toUpperCase().indexOf(filter) > -1)) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }*/

//Search function for the Job Cards
function searchFunction(){

}


//Filter function for the location filters
function filterFunction (){

}