/**
*Author: Luke Pilapil & Sukhnoor Sahota
*Created: November 15, 2021
*License: Public DOmain
**/

new ghostCursor();

console.log("Hi");
// Return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
function sortingHat(str) {
  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Gryffindor";
  }
  else if (mod == 1) {
    return "Ravenclaw";
  }
  else if (mod == 2) {
    return "Slytherin";
  }
  else if (mod == 3) {
    return "Hufflepuff";
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    console.log(name);
    var house = sortingHat(name);
    console.log(house);
    newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
    document.getElementById("output").innerHTML = newText;
});
