//opdracht 1
const button = document.querySelector('button');
button.addEventListener("click", function () {
    alert("button clicked");
});

//opdracht 2
const button2 = document.getElementById("mybutton2");
const body = document.querySelector('body');
const ChangeBackground = function () {
    body.classList.add("red-background");
};
button2.addEventListener("click", ChangeBackground);

//opdracht 3
const button2 = document.getElementById("mybutton2");
const body = document.querySelector('body');
const ToggleBackground = function () {
    body.classList.toggle("red-background");
};
button2.addEventListener("click", ToggleBackground);





