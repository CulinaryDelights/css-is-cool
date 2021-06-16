darkThemeCheckbox = document.getElementById("darkThemeCheckbox");
settingsMenu = document.getElementById("settingsMenu");
reloaded = false;

darkThemeCheckbox.oninput = function() {
    if(darkThemeCheckbox.checked) {
        localStorage.setItem("theme","dark");
        document.body.style.backgroundColor = "#222";
        document.body.style.color = "white"; 
    }
    else {
        localStorage.setItem("theme","light");
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
    console.log(localStorage.getItem("theme"));
}

function OpenSettings() {
    settingsMenu.style.display = "block";
}

function CloseSettings() {
    settingsMenu.style.display = "none";
}

if(localStorage.getItem("theme") == 'light') {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    darkThemeCheckbox.checked = false;
}
else if(localStorage.getItem("theme") == 'dark') {
    document.body.style.backgroundColor = "#222";
    document.body.style.color = "white"; 
    darkThemeCheckbox.checked = true;
}