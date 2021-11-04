//Author: Luke Pilapil
//Created: November 3, 2021
//Public Domain

var button = document.getElementById('my-button');

window.onload = function sayMyname(){
  var name = prompt('What is your name');
  var h1 = document.querySelector('h1');
  h1.innerText = "Welcome, " + name;
}

button.addEventListener('click', sayMyname);
