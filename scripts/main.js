
let myHeading = document.querySelector("h1");
myHeading.textContent = "Click pas";

document.querySelector("h1").addEventListener("click", function () {
  alert(new Date().getHours());
});




let myImage = document.querySelector("img");

myImage.addEventListener("click", function im () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
});


let myButton = document.querySelector("button");


function setUserName() {
  let myName = prompt("Veuillez saisir votre nom.");
  localStorage.setItem("nom", myName);
  myHeading.textContent = " Ne Click pas " + myName + "tu vas me faire mal";
}

if (!localStorage.getItem("nom")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("nom");
  myHeading.textContent = "Mozilla est cool, " + storedName;
}


myButton.addEventListener("click", function () {
  setUserName();
});