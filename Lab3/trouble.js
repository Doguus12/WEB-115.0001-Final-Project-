let v1 = 3; 
let v2 = 4;
// FIXED: Added missing variable declaration and uncommented the alert
let equals = " equals ";
alert("3 times 4" + equals + v1 * v2);

// This sets the general styling for the divs within the section tag using .style
// FIXED: Changed getElementsById to getElementById (singular form)
let section = document.getElementById("s1");
section.style.width = "50%";
section.style.textAlign = "center";
section.style.fontFamily = "arial, serif";
// FIXED: Corrected typo from "stlye" to "style"
section.style.fontWeight = "bold";
section.style.fontStyle = "italic";
section.style.fontSize = "20px";

// Sets the customization for each individual color/div tag 
// .innerHTML is used to add content within each div tag. 
// .style.backgroundColor is used to assign a different background color to each div 

// RED
// FIXED: Corrected typo from "getelementById" to "getElementById"
const red = document.getElementById("red");
red.innerHTML = "RED";
red.style.backgroundColor = "red";

// ORANGE
const orange = document.getElementById("orange");
// FIXED: Corrected typo from "innerhtml" to "innerHTML" (capital H)
orange.innerHTML = "ORANGE";
orange.style.backgroundColor = "orange";

// YELLOW
const yellow = document.getElementById("yellow");
yellow.innerHTML = "YELLOW";
yellow.style.backgroundColor = "yellow";

// GREEN
// FIXED: Changed variable name from "purple" to "green" to match the element ID
const green = document.getElementById("green");
green.innerHTML = "GREEN";
green.style.backgroundColor = "green";

// INDIGO
const indigo = document.getElementById("indigo");
indigo.innerHTML = "INDIGO";
indigo.style.backgroundColor = "indigo";

// VIOLET
const violet = document.getElementById("violet");
violet.innerHTML = "VIOLET";
violet.style.backgroundColor = "violet";