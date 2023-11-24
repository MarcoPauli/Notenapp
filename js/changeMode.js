/*This file manages that the user can switch between normal-mode and edit-mode*/
import { showEditGradesPopup, showEditSubjectsPopup  } from "./popups.js";
editGradesBtn.addEventListener("click", editGradesBtnFunc);

function editGradesBtnFunc () {
    editGradesBtn.removeEventListener("click", changeIntoEditMode);
    editGradesBtn.addEventListener("click", leaveEditMode);
    changeIntoEditMode();
}

function changeIntoEditMode() {
    changeMode(changeParticularClassElement_Set, "none", "block", "🔚", "Bearbeitungsmodus verlassen", "Bearbeitungsmodus")
}

function leaveEditMode () {
    editGradesBtn.removeEventListener("click", leaveEditMode);
    editGradesBtn.addEventListener("click",changeIntoEditMode);
    changeMode(changeParticularClassElement_Remove, "block", "none", "🖊", "Noten bearbeiten", "Ansichtmodus");
}

function changeMode (currentFunction, stStyle, editModeStyle, btnTxt, btnTitle, modeTxt) {
    let klnClass = document.getElementsByClassName("KLNs");
    let glnClass = document.getElementsByClassName("GLNs");
    let subjectClass = document.getElementsByClassName("subject");
    let tr = document.querySelectorAll("tr");
    for (let i = 0; i < klnClass.length; i++) {
        let el = tr[i + 1.].children;
        console.log(el[0].innerHTML)
        currentFunction(klnClass, i, showEditGradesPopup, el[1]);
        currentFunction(subjectClass, i, showEditSubjectsPopup, el[0]);
        currentFunction(glnClass, i, showEditGradesPopup, el[2]);
    }
    standardInformation.style.display = stStyle;
    editModeDiv.style.display = editModeStyle;
    editGradesBtn.innerHTML = btnTxt;
    editGradesBtn.title = btnTitle;
    showEditModeTxt.innerHTML = modeTxt;
}

let clickHandler;

function changeParticularClassElement_Set (className, i, popup, x) {
    clickHandler = () => popup(x);
    className[i].addEventListener("click", clickHandler);
    className[i].style.cursor = "pointer";
    return clickHandler;
}

function changeParticularClassElement_Remove (className, i, popup, x) {
    clickHandler = () => popup(x);
    console.log(popup)
    className[i].removeEventListener("click", clickHandler);
    className[i].style.cursor = "unset";
}

function waitForClickToShowPopup() {
    
}