//The task of the function "userBackgroundColor" is to check which background color is currently being used by the system and, as soon as these settings are changed, adjust the app settings accordingly.
function userBackgroundColor() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        changeToXMode("white", "rgb(50, 50, 50", "rgba(50, 50, 50, 0.5", "rgb(50, 50, 50");
    }
    if (!(window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        changeToXMode("black", "aqua", "rgba(100, 100, 100, 0.5)", "white");
    }
}
//End of function "userBackgroundColor"

//This function changes to xmode
function changeToXMode(color, backgroundColor, overlayDivBgColor, tbColor) {
    let overlayDiv = document.getElementById("overlayDiv");
    let body = document.querySelector("body");
    let td = document.querySelectorAll("td");
    let th = document.querySelectorAll("th");
    let statistics = document.getElementById("statistics");
    let editGradesPopup = document.getElementById("editGradesPopup");
    overlayDiv.style.backgroundColor = overlayDivBgColor;
    editGradesPopup.style.backgroundColor = tbColor;
    statistics.style.backgroundColor = backgroundColor;
    body.style.backgroundColor = backgroundColor;
    body.style.color = color;
    changeTableTheme(td, tbColor, color);
    changeTableTheme(th, tbColor, color);
}

function changeTableTheme(x, tbColor, color) {
    for (let i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = tbColor;
        x[i].style.color = color;
    }
}
//End of function "changeToXMode"

export default userBackgroundColor;