//The task of the function "userBackgroundColor" is to check which background color is currently being used by the system and, as soon as these settings are changed, adjust the app settings accordingly.
export function userBackgroundColor() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        changeToXMode("white", "rgb(70, 70, 70)", "rgba(80, 80, 80, 0.5)", "rgb(100, 100, 100)", "rgb(90, 90, 90)", "rgb(100, 100, 100)");
    }
    if (!(window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        changeToXMode("black", "rgb(204,238,247)", "rgba(100, 100, 100, 0.5)", "white", "rgb(255, 255, 255)", "rgb(206, 201, 201)");
    }
}
//End of function "userBackgroundColor"

//This function changes to xmode
function changeToXMode(color, backgroundColor, overlayDivBgColor, tbColor, c1, c2) {
    let overlayDiv = document.getElementById("overlayDiv");
    let body = document.querySelector("body");
    let td = document.querySelectorAll("td");
    let th = document.querySelectorAll("th");
    let tr = document.querySelectorAll("tr");
    let statistics = document.getElementById("statisticsPopup");
    let editGradesPopup = document.getElementById("editGradesPopup");
    let appSettingsPopup = document.getElementById("appSettingsPopup");
    let editSubjectsPopup = document.getElementById("editSubjectsPopup");
    overlayDiv.style.backgroundColor = overlayDivBgColor;
    editGradesPopup.style.backgroundColor = tbColor;
    appSettingsPopup.style.backgroundColor = tbColor;
    editSubjectsPopup.style.backgroundColor = tbColor;
    body.style.backgroundColor = backgroundColor;
    body.style.color = color;
    let averageAllSubjectsDiv = document.getElementById("averageAllSubjectsDiv");
    averageAllSubjectsDiv.style.color = "white";
    statistics.style.backgroundColor = tbColor;
    if (tr.length >= 3) changeTableTheme(tr, color, c1, c2);
}
//End of function "changeToXMode"

//Start of function changeTableTheme
function changeTableTheme(x, color, c1, c2) {
    for (let i = 2; i < x.length;) {
        x[i].style.backgroundColor = c2;
        x[i].style.color = color;
        x[i - 1].style.backgroundColor = c1;
        x[i - 1].style.color = color;
        i = i + 2;
    }
}
//End of function changeTableTheme

/*
for (let i = 2; i < x.length;) {
        x[i].style.backgroundColor = c2;
        x[i].style.color = color;
        x[i - 1].style.backgroundColor = c1;
        x[i - 1].style.color = color;
        i = i + 2;

        
    }
*/