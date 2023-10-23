//At the beginning of this file, all variables (apart from the varaibles in the functions) are defined here

let changeToEditGradesPopup = document.getElementById("changeToEditGradesPopup");
let overlayDiv = document.getElementById("overlayDiv");
let stopToChangeToEditMode = document.getElementById("stopToChangeToEditMode");
let editGradesDiv = document.getElementById("editGradesDiv");
let confirmToChangeToEditMode = document.getElementById("confirmToChangeToEditMode");
let standardVisible = document.getElementById("standardVisible");
let subjectValue = "";
//let editSubjectValue = "";
let finished = document.getElementById("finished");
let editGradesPopup = document.getElementById("editGradesPopup");
let confirmToDeleteThisCell = document.getElementById("confirmToDeleteThisCell");
let addGradeDivBtn = document.getElementById("addGradeDivBtn");
let localstorage = localStorage.getItem("table");
//End of this part

//When the app is loaded there should be an if statement which checks if localstorage is not equal to null; if so, the code of the if statement will be executed
if (localstorage != null) {
    let table = document.getElementById("showGradesTable");
    table.innerHTML = localstorage;
    let klnClass = document.getElementsByClassName("KLNs");
    let glnClass = document.getElementsByClassName("GLNs");
    let subjectClass = document.getElementsByClassName("subject");
    for (let i = 0; i < klnClass.length; i++) {
        klnClass[i].removeAttribute("onclick")
        klnClass[i].style.cursor = "unset";
        subjectClass[i].removeAttribute("onclick");
        subjectClass[i].style.cursor = "unset";
        glnClass[i].removeAttribute("onclick");
        glnClass[i].style.cursor = "unset";
    }
}
//End of the if statement

/*if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("serviceWorker.js", { scope: "/"})
    .then(() => console.log("service worker is working"))
    .catch((error) => console.warn(error));
}*/

//Evenlisteners are also needed here

addGradeDivBtn.addEventListener("click", () => {
    editGrades();
});

confirmToDeleteThisCell.addEventListener("click", () => {
    removeCell();
});


finished.addEventListener("click", () => {
    editGradesPopup.style.display = "none";
    overlayDiv.style.display = "none";
});
//End of all the eventlisteners(apart form them that are defined in functions)



//With this function you can edit the grades
function editGrades() {
    let grade = "";
    let selectGrade = document.getElementById("addGradeSelect");
    if (selectGrade.value != "Note wählen") {
        grade = selectGrade.value;
        if ((subjectValue.innerHTML == "-") || (subjectValue.innerHTML == "x")) {
            subjectValue.innerHTML = `<font>${grade}</font>`;
        } else if ((subjectValue.innerHTML != "-") || (subjectValue.innerHTML != "x")) {
            subjectValue.innerHTML = subjectValue.innerHTML + "; " + `<font>${grade}</font>`;
        }
        selectGrade.value = "Note wählen";
        showInformation("✔ Note erfolgreich hinzugefügt", "green")
    }
}
//End of function "editGrades"

//This function shows the so called "EditGradesPopup"
function showEditGradesPopup(THIS) {
    let editGradesPopup = document.getElementById("editGradesPopup");
    let overlayDiv = document.getElementById("overlayDiv");
    overlayDiv.style.display = "block";
    editGradesPopup.style.display = "block";
    saveGradeValue(THIS);
}
//End of function "showEditGradesPopup"

//This function saves parameter x as the predefined variable subjectValue and returns it
function saveGradeValue(x) {
    subjectValue = x;
    return subjectValue;
}
//End of function "saveGradeValue"

/*function saveSubjectValue() {
    return editSubjectValue;
}*/

//This funciton removes the content of the current cell
function removeCell() {
    let deleteThisCellRadio = document.getElementById("deleteThisCellRadio");
    let deleteThisCellRadioNot = document.getElementById("deleteThisCellRadioNot");
    if(deleteThisCellRadio.checked) {
        subjectValue.innerHTML = "-";
        let style = subjectValue.parentNode.children[3].style;
        style.backgroundColor = "white";
        style.fontWeight = "normal";
        style.textAlign = "left";
        showInformation("✔ Zelle erfolgreich gelöscht", "green");
        deleteThisCellRadioNot.checked = "checked";
    }
}
//End of function "removeCell"

//This function shows - if executed - the given information
function showInformation(info, color) {
    let informationDiv = document.getElementById("informationDiv");
    informationDiv.style.display = "block";
    informationDiv.style.color = color;
    let information = document.getElementById("information");
    information.innerHTML = info;
    setTimeout(() => {
        informationDiv.style.display = "none";
        information.innerHTML = "";
    }, 2000)
}
//End of function "showInformation"