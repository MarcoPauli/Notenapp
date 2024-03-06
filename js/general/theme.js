//The task of the function "userBackgroundColor" is to check which background color is currently being used by the system and, as soon as these settings are changed, adjust the app settings accordingly.
export function userBackgroundColor() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        changeToXMode("white", "rgb(70, 70, 70)", "rgba(80, 80, 80, 0.5)", "rgb(100, 100, 100)", "rgb(90, 90, 90)", "rgb(100, 100, 100)");
    }
    if (!(window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        changeToXMode("black", "rgb(204,238,247)", "rgba(100, 100, 100, 0.7)", "white", "rgb(255, 255, 255)", "rgb(206, 201, 201)");
    }
}
//End of function "userBackgroundColor"

//This function changes to xmode
function changeToXMode(color, backgroundColor, overlayDivBgColor, tbColor, c1, c2) {
    let tr = document.querySelectorAll("tr");
    overlayDiv.style.backgroundColor = overlayDivBgColor;
    editGradesPopup.style.backgroundColor = tbColor;
    appSettingsPopup.style.backgroundColor = tbColor;
    editSubjectsPopup.style.backgroundColor = tbColor;
    loginDiv.style.backgroundColor = tbColor;
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = color;
    averageAllSubjectsDiv.style.color = "white";
    statisticsPopup.style.backgroundColor = tbColor;
    if (tr.length > 1) changeTableTheme(tr, color, c1, c2);
}
//End of function "changeToXMode"

//Start of function changeTableTheme
function changeTableTheme(x, color, c1, c2) {
    for (let i = 1; i < x.length; i++) {
        if(!Number.isInteger(i / 2)) {
        x[i].style.backgroundColor = c1;
        x[i].style.color = color;
        } else if(Number.isInteger(i / 2)) {
        x[i].style.backgroundColor = c2;
        x[i].style.color = color;
        }
    }
}
//End of function changeTableTheme