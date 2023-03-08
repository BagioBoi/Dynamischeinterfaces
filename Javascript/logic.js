// console.log("Hello world");
function button_click(event){
    // console.log("Button is clicked");
    var name = prompt("Whats your name?");
    var divElement = document.getElementById("result");
    divElement.innerHTML = name;
}

button = document.getElementById("start");
button.onclick = button_click;

// console.dir(button)
