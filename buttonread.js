var buttonArray = JSON.parse(localStorage.getItem("buttons"));
var clearedArray = [];
var noButtonDiv = document.getElementById("noButtons");
var deleteSelect = document.getElementById("deleteMenu");
var deleteInput = document.getElementById("deleteInput");

if(buttonArray == null) {
    buttonArray = clearedArray;
}

if(buttonArray.length != 0) {
    noButtonDiv.style.display = "none";
}
else {
    noButtonDiv.style.display = "block";
}

for(var i = 0; i < buttonArray.length; i++) {
    var button = document.getElementsByClassName("savedButton")[i];

    var buttonWidth = buttonArray[i][0] + "px";
    var buttonHeight = buttonArray[i][1] + "px";
    var buttonText = buttonArray[i][2];

    var buttonColor = buttonArray[i][3];
    var buttonLink = buttonArray[i][4];
    var buttonTextColor = buttonArray[i][5];

    var borderType = buttonArray[i][6];
    var borderColor = buttonArray[i][7];
    var borderWidth = buttonArray[i][8];
    var borderRadius = buttonArray[i][9] + "%";

    button.style.paddingLeft = buttonWidth;
    button.style.paddingRight = buttonWidth;

    button.style.paddingTop = buttonHeight;
    button.style.paddingBottom = buttonHeight;
    button.innerHTML = buttonText;

    button.style.backgroundColor = buttonColor;
    button.setAttribute('href',buttonLink);
    button.style.color = buttonTextColor;

    button.style.borderStyle = borderType;
    button.style.borderColor = borderColor;
    button.style.borderWidth = borderWidth;
    button.style.borderRadius = borderRadius;

    button.style.textDecoration = "none";
}

function ClearAll() {
    localStorage.setItem("buttons",JSON.stringify(clearedArray));
    window.location.reload();
}

function OpenDeleteMenu() {
    deleteSelect.style.display = "block";
    for(var i = 0; i < buttonArray.length; i++) {
        var button = document.getElementsByClassName("savedButton")[i];
        
        button.innerHTML = i + 1;
    }
}

function DeleteButton() {
    if(!isNaN(deleteInput.value) && deleteInput.value != '') {
        buttonArray.splice(deleteInput.value - 1,1);
        localStorage.setItem("buttons",JSON.stringify(buttonArray));
    }   
    window.location.reload();
    deleteSelect.style.display = "none";
}

if(localStorage.getItem("theme") == 'light') {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}
else if(localStorage.getItem("theme") == 'dark') {
    document.body.style.backgroundColor = "#222";
    document.body.style.color = "white"; 
}