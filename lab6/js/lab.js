/**
*Author: Luke Pilapil
*Created: October 20, 2021
*License: Public Domain
**/

//Define Variables
myTransport = ["Honda Element", "City Bus", "Bicycle", "Skateboard", "Rollerskates"];

myMainRide = {
  make: "Honda",
  model: "Element",
  color: "Silver",
  year: 2007,
  age: function() {
    return 2021 - age;
  }
}

//Output
document.writeln("Kinds of Transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
