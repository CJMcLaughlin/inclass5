//document.addEventListener("DOMContentLoaded", ibefore(event));


// ADD NEW ITEM TO END OF LIST
var para = document.createElement("li");

para.appendChild(document.createTextNode("cream"));

var element = document.getElementById("page");
para.className = "cool";
var list = document.getElementById("ul");
element.insertBefore(para,list );


// ADD NEW ITEM START OF LIST

var para2= document.createElement("li");
para2.appendChild(document.createTextNode("Kale"));
para2.className = "cool";
var list = document.getElementById("ul");
//var before = list.childNodes[0];

element.insertBefore(para2, list);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
document.getElementById("one").className = "cool";
document.getElementById("two").className = "cool";
document.getElementById("three").className = "cool";
document.getElementById("four").className = "cool";

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

