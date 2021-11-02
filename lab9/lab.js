/*
* Authors: Luke Pilapil & Sukhnoor Sahota <lpilapil@ucsc.edu> <sukhnoorsahota@gmail.com>
* Created: November 1, 2021
* License: Public Domain
*/

var outputEl = document.getElementById("content");

// Below, I created my first element. I wrote that the HTML attribute would say "Hello World"
var new1El = document.createElement("p");
new1El.setAttribute('html', 'Hello World');
outputEl.appendChild(new1El);

// Below, I created my second element. I wanted the HTML attribute in this one to say "Goodbye World"
var new2El = document.createElement("p");
new2El.setAttribute('html', 'Goodbye World');
outputEl.appendChild(new2El);
