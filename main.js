/*
  DOM [Create Elements]
  - createElement
  - createComment
  - createTextNode
  - createAttribute
  - appendChild
*/

let myElement = document.createElement("div");
let attrib = document.createAttribute("product-custom");
let myText = document.createTextNode("Text from js file");
let myComment = document.createComment("This Div create by main.js file");
myElement.className = "product";
myElement.setAttributeNode(attrib);

//append comment to elemnt
myElement.appendChild(myComment);
//append text to element
myElement.appendChild(myText);
//append element to my page body
document.body.appendChild(myElement);
