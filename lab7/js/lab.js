function sortUserName() {
  var userName = window.prompt("Hi you crazy cat. Tell me your name AHORITA so I can fix it.");
  console.log("userName =", userName);
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

document.writeln("Hello Loca! I have fixed your silly name: ",
  sortUserName(), "</br>");
