var buttonArray = JSON.parse(localStorage.getItem("buttons"));
var clearedArray = [];
var noButtonDiv = document.getElementById("noButtons");

if(buttonArray.length != 0) {
    noButtonDiv.style.display = "none";
}
else {
    noButtonDiv.style.display = "block";
}

console.log(buttonArray);

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