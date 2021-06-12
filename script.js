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