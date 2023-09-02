/*
  DOM [Create Elements]
  - createElement
  - createComment
  - createTextNode
  - createAttribute
  - appendChild
*/

// let myElement = document.createElement("div");
// let attrib = document.createAttribute("product-custom");
// let myText = document.createTextNode("Text from js file");
// let myComment = document.createComment("This Div create by main.js file");
// myElement.className = "product";
// myElement.setAttributeNode(attrib);

//append comment to elemnt
// myElement.appendChild(myComment);
//append text to element
// myElement.appendChild(myText);
//append element to my page body
// document.body.appendChild(myElement);

/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu => right click u can change your menu
  --- onmouseenter => on hover
  --- onmouseleave => when you leave the element

  --- onload
  --- onscroll
  --- onresize

  --- onfocus => 
  --- onblur =>
  --- onsubmit
*/

/*
  DOM [Events]
  - Validate Form Practice
  - PreventDefault() => this function stop the default event
*/

let userInput = document.querySelector('[name="username"]');
let ageInput = document.querySelector('[name="age"]');

document.forms[0].onsubmit = function (e) {
  let userValid = false;
  let ageValid = false;

  if (userInput.value !== "" && userInput.value.length <= 10) {
    userValid = true;
  }
  if (ageInput !== "") {
    ageValid = true;
  }

  if (userValid === false || ageValid === false) {
    e.preventDefault();
  }
};
document.links[0].onclick = function (event) {
  event.preventDefault();
};
