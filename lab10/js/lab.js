//Author: Luke Pilapil
//Created: November 3, 2021
//Public Domain

var button = document.getElementById('my-button');

window.onload = function sayMyname(){
  var name = prompt('What is your name');
  var h1 = document.querySelector('h1');
  h1.innerText = "Welcome, " + name;
}

buttonEl.addEventListener('click', sayMyname);

buttonEl = document.getElementById("my-button");
console.log("button element:", buttonEl);

inputEl = document.getElementById("user-name");
console.log("input element:", inputEl);

outputEl = document.getElementById("output");
console.log("output element:", outputEl);


buttonEl.addEventListener("click", function(){
  var userName = inputEl.value;
  var newName = toTitleCase(reorderUserName(userName));
  outputEl.innerHTML = "<p id=name-results>" + newName + "</p>";
}
