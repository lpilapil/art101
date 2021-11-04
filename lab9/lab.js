/*
* Authors: Luke Pilapil & Sukhnoor Sahota <lpilapil@ucsc.edu> <sukhnoorsahota@gmail.com>
* Created: November 1, 2021
* License: Public Domain
*/

// Finding my output <div> and assigning it to the specific variable titled 'outputEl'. Then, FIND THE ELEMENT!
var outputEl = document.getElementById("output");

// Below, I created my first element. I wrote that the HTML attribute would say "Hello World"
var new1El = document.createElement("p");

// Changing the html attribute of new1El.
new1El.innerHTML = "Hello World!";
outputEl.appendChild(new1El);

// Below, I created my second element. I wanted the HTML attribute in this one to say "Goodbye World"
var new2El = document.createElement("p");

// Changing the html attribute of new2El.
new2El.innerHTML = "Goodbye World!";

// Appending both new elements and
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

new1El.style.color = "blue";
new1El.style.fontSize = "20px";
new2El.style.color = "green";
new2El.style.fontSize = "20px";
outputEl.style.backgroundColor = "papayawhip";
