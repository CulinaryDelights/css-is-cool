var widthSlider = document.getElementById("widthSlider");
var widthOutput = document.getElementById("widthText");

var heightSlider = document.getElementById("heightSlider");
var heightOutput = document.getElementById("heightText");

var text = document.getElementById("buttonText");
var color = document.getElementById("buttonColor");
var textColor = document.getElementById("buttonTextColor");
var link = document.getElementById("buttonLink");

var borderColor = document.getElementById("buttonBorderColor");
var borderWidth = document.getElementById("buttonBorderWidth");
var borderType = document.getElementById("buttonBorderType");
var borderRadius = document.getElementById("buttonBorderRadius");

var borderText = document.getElementById("borderText");
var borderRadiusText = document.getElementById("borderRadiusText");

var button = document.getElementById("button");
var buttonArray = [];

var saveInput = document.getElementById("slotInput");

widthOutput.innerHTML = widthSlider.value + "px";
heightOutput.innerHTML = heightSlider.value + "px";
borderText.innerHTML = borderWidth.value + "px";
borderRadiusText.innerHTML = borderRadius.value + "%";

button.style.backgroundColor = color.value;

button.style.paddingLeft = widthSlider.value + "px";
button.style.paddingRight = widthSlider.value + "px";

button.style.paddingTop = heightSlider.value + "px";
button.style.paddingBottom = heightSlider.value + "px";

button.style.backgroundColor = color.value;
button.style.color = textColor.value;
button.innerHTML = text.value;

button.style.borderColor = borderColor.value;
button.style.borderWidth = borderWidth.value;
button.style.borderStyle = borderType.value;
button.style.borderRadius = borderRadius.value + "%";

widthSlider.oninput = function() {
    widthOutput.innerHTML = this.value + "px";
    button.style.paddingLeft = this.value + "px";
    button.style.paddingRight = this.value + "px";
}

heightSlider.oninput = function() {
    heightOutput.innerHTML = this.value + "px";
    button.style.paddingTop = this.value + "px";
    button.style.paddingBottom = this.value + "px";
}

text.oninput = function() {
    button.innerHTML = text.value;
}

color.oninput = function() {
    button.style.backgroundColor = color.value;
}

link.oninput = function() {
    button.setAttribute('href',link.value);
}

textColor.oninput = function() {
    button.style.color = textColor.value;
}

borderType.oninput = function() {
    button.style.borderStyle = borderType.value;
}

borderColor.oninput = function() {
    button.style.borderColor = borderColor.value;
}

borderWidth.oninput = function() {
    button.style.borderWidth = borderWidth.value + "px";
    borderText.innerHTML = borderWidth.value + "px";
}

borderRadius.oninput = function() {
    button.style.borderRadius = borderRadius.value + "%";
    borderRadiusText.innerHTML = borderRadius.value + "%";
}

localStorage.setItem("buttonNumber",0);

function SaveButton() {
    var buttonsArray = [];
    buttonArray = [widthSlider.value,heightSlider.value,text.value,color.value,link.value,textColor.value,borderType.value,borderColor.value,borderWidth.value,borderRadius.value];

    buttonsArray = JSON.parse(localStorage.getItem("buttons")) || [];
    if(buttonsArray.length < 12) {
        buttonsArray.push(buttonArray);
        localStorage.setItem("buttons",JSON.stringify(buttonsArray));
        alert("Saved Button(Check the button loader)");
    }
    else {
        alert("No more space! Delete a few buttons.");
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function Randomize() {
    var randomWidth = Math.floor(Math.random() * 51);
    var randomHeight = Math.floor(Math.random() * 51);

    var randomBorderWidth = Math.floor(Math.random() * 11);
    var randomBorderRadius = Math.floor(Math.random() * 51);
    var randomBorderStyle = Math.floor(Math.random() * 4);

    var randomColor = getRandomColor();
    var randomBorderColor = getRandomColor();
    var randomTextColor = getRandomColor();

    var wordList = ["Banana","Papaya","Puppy","Kitty","Button","CHEESE","Bird","Rubik's Cube","404 Error(Fake)","Dragon","Otamatone","Ugly Colors","Happy Birthday!"];
    var randomWord = wordList[Math.floor(Math.random() * wordList.length)];

    button.style.paddingLeft = randomWidth + "px";
    button.style.paddingRight = randomWidth + "px";

    widthSlider.value = randomWidth;
    widthOutput.innerHTML = randomWidth + "px";

    button.style.paddingTop = randomHeight + "px";
    button.style.paddingBottom = randomHeight + "px";

    heightSlider.value = randomHeight;
    heightOutput.innerHTML = randomHeight + "px";

    button.style.backgroundColor = randomColor;
    color.setAttribute('value',randomColor);

    button.style.color = randomTextColor;
    buttonTextColor.setAttribute('value',randomTextColor);

    button.style.borderColor = randomBorderColor;
    borderColor.setAttribute('value',randomBorderColor);

    button.style.borderWidth = randomBorderWidth + "px";
    borderWidth.value = randomBorderWidth;
    borderText.innerHTML = randomBorderWidth + "px";

    borderType.selectedIndex = randomBorderStyle;
    button.style.borderStyle = borderType.value;

    button.style.borderRadius = randomBorderRadius + "%";
    borderRadius.value = randomBorderRadius;
    borderRadiusText.innerHTML = randomBorderRadius + "%";

    button.innerHTML = randomWord; 
    text.setAttribute('value',randomWord);
}

if(localStorage.getItem("theme") == 'light') {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}
else if(localStorage.getItem("theme") == 'dark') {
    document.body.style.backgroundColor = "#222";
    document.body.style.color = "white";
}

function MakeButtonCSS() {
    document.getElementById("buttonCodeText").value = ".button {\n\tpadding: " + button.style.paddingTop + ' ' + button.style.paddingLeft + ";\n\tbackground: " + button.style.color + ";\n\tcolor: "+ button.style.color +";\n\tborder: " + button.style.borderColor + ' ' + button.style.borderStyle + ' ' + borderWidth.value + "px" + ";\n\tborder-radius: "+ button.style.borderRadius +";\n}";

    document.getElementById("buttonCodeText").select();
    document.getElementById("buttonCodeText").setSelectionRange(0, 99999);

    document.execCommand("copy");
}

function MakeButtonHTML() {
    document.getElementById("buttonCodeText").value = "<a href=\"" + link.value + "\">" + text.value + "</a>;";
    
    document.getElementById("buttonCodeText").select();
    document.getElementById("buttonCodeText").setSelectionRange(0, 99999);

    document.execCommand("copy");
}