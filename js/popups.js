//import { findYArray } from "./statistics.js";

/*
THE FOLLOWING CODE IS RESPOSIBLE FOR THE DISPLAY OF STATISTICSPOPUP
*/
let statisticsPopup = document.getElementById("statisticsPopup");
let statisticsBtn = document.getElementById("statisticsBtn");
statisticsBtn.addEventListener("click", showStatisticsPopup);

function showStatisticsPopup(THIS) {
    overlayDiv.style.display = "block";
    statisticsPopup.style.display = "block";
}

let StatisticsPopupFinishedBtn = document.getElementById("StatisticsPopupFinishedBtn");
StatisticsPopupFinishedBtn.addEventListener("click", () => {
    statisticsPopup.style.display = "none";
    overlayDiv.style.display = "none";
});

/*
THE FOLLOWING CODE IS RESPOSIBLE FOR THE DISPLAY OF EDITGRADESPOPUP
*/

//This function shows the so called "EditGradesPopup"
function showEditGradesPopup(THIS) {
    overlayDiv.style.display = "block";
    editGradesPopup.style.display = "block";
    saveClickedCell(THIS);
    let grade = (clickedCell.id.includes("KLN")) ? `(KLN)` : `(GLN)`;
    showSubjectName(1, grade);
}
//End of function "showEditGradesPopup"

//This function saves parameter x as the predefined variable subjectValue and returns it
function saveClickedCell(x) {
    clickedCell = x;
    return clickedCell;
}
//End of function "saveGradeValue"

finished.addEventListener("click", () => {
    editGradesPopup.style.display = "none";
    overlayDiv.style.display = "none";
});

/*
THE FOLLOWING CODE IS RESPOSIBLE FOR THE DISPLAY OF EDITSUBJECTSPOPUP
*/

function showEditSubjectsPopup(THIS) {
    editSubjectsPopup.style.display = "block";
    overlayDiv.style.display = "block";
    saveClickedCell(THIS);
    showWeighting();
    showSubjectName(0, "");
}

editSubjectFinished.addEventListener("click", () => {
    editSubjectsPopup.style.display = "none";
    overlayDiv.style.display = "none";
});

function showWeighting() {
    let currentWeightingHTML = document.getElementById("currentWeighting");
    let currentWeighting = subjects[clickedCell.parentElement.id]["weighting"];
    if (currentWeighting == 1) currentWeightingHTML.innerHTML = "Einfach";
    else if (currentWeighting == 2) currentWeightingHTML.innerHTML = "Doppelt";
}

function showSubjectName(n, gkln) {
    let showSubFonts = document.getElementsByClassName("showSubFont");
    showSubFonts[n].innerHTML = `Fach: ${clickedCell.parentElement.id} ${gkln}`;
}

/*
THE FOLLOWING CODE IS RESPOSIBLE FOR THE DISPLAY OF APPSETTINGSPOPUP
*/

appSettingsBtn.addEventListener("click", () => {
    let appSettingsPopup = document.getElementById("appSettingsPopup");
    appSettingsPopup.style.display = "block";
    let overlayDiv = document.getElementById("overlayDiv");
    overlayDiv.style.display = "block";
});

appSettingsFinishedBtn.addEventListener("click", () => {
    appSettingsPopup.style.display = "none";
    overlayDiv.style.display = "none";
});