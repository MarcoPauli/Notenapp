
/*
THE FOLLOWING CODE IS RESPOSIBLE FOR THE DISPLAY OF EDITGRADESPOPUP
*/

//This function shows the so called "EditGradesPopup"
function showEditGradesPopup(THIS) {
    overlayDiv.style.display = "block";
    editGradesPopup.style.display = "block";
    saveClickedCell(THIS);
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
    saveClickedCell(THIS.parentElement.id);
}

editSubjectFinished.addEventListener("click", () => {
    editSubjectsPopup.style.display = "none";
    overlayDiv.style.display = "none";
});

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