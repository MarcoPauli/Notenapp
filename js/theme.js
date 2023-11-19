//The task of the function "userBackgroundColor" is to check which background color is currently being used by the system and, as soon as these settings are changed, adjust the app settings accordingly.
export function userBackgroundColor() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        changeToXMode("white", "rgb(80, 80, 80)", "rgba(80, 80, 80, 0.5)", "rgb(100, 100, 100)");
    }
    if (!(window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        changeToXMode("black", "rgb(204,238,247)", "rgba(100, 100, 100, 0.5)", "white");
    }
}
//End of function "userBackgroundColor"

//This function changes to xmode
function changeToXMode(color, backgroundColor, overlayDivBgColor, tbColor) {
    let overlayDiv = document.getElementById("overlayDiv");
    let body = document.querySelector("body");
    let td = document.querySelectorAll("td");
    let th = document.querySelectorAll("th");
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
    changeTableTheme(td, tbColor, color);
    changeTableTheme(th, tbColor, color);
}
//End of function "changeToXMode"

//Start of function changeTableTheme
function changeTableTheme(x, tbColor, color) {
    for (let i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = tbColor;
        x[i].style.color = color;
    }
}
//End of function changeTableTheme
