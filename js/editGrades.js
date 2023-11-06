import { showInformation } from "./notification.js";

let addGradeDivBtn = document.getElementById("addGradeDivBtn");
addGradeDivBtn.addEventListener("click", () => {
    editGrades();
});

let confirmToDeleteThisCell = document.getElementById("confirmToDeleteThisCell");
confirmToDeleteThisCell.addEventListener("click", removeCell);


function editGrades() {
    checkSelectedGrade();
}

function checkSelectedGrade() {//Achtung: vereinfachen und bestehende array länge > 1 funktioniert nicht (ändern)
    let selectedGrade = document.getElementById("addGradeSelect").value;
    if (!(isNaN(Number(selectedGrade)))) {
        let subjectsPropertyName = clickedCell.parentElement.id;
        if (clickedCell.id == ("KLN" + subjectsPropertyName)) { //Achtung: wird wegen dem aktuellen html nicht wahr werden
            subjects[subjectsPropertyName]["kln"].push(Number(selectedGrade));
            localStorage.setItem("subjects", JSON.stringify(subjects));
            if (subjects[subjectsPropertyName]["kln"].length == 1) {
                document.getElementById(clickedCell.id).innerHTML = selectedGrade;
            } else if (!document.getElementById(clickedCell.id).innerHTML.includes("-")) {
                document.getElementById(clickedCell.id).innerHTML += "; " + selectedGrade;
            }
            showInformation("Note erfolgreich hinzugefügt!", "green");
        } else if (clickedCell.id == ("GLN" + subjectsPropertyName)) { //Achtung: wird wegen dem aktuellen html nicht wahr werden
            subjects[subjectsPropertyName]["gln"].push(Number(selectedGrade));
            localStorage.setItem("subjects", JSON.stringify(subjects));
            if (subjects[subjectsPropertyName]["gln"].length == 1) {
                document.getElementById(clickedCell.id).innerHTML = selectedGrade;
            } else if (!document.getElementById(clickedCell.id).innerHTML.includes("-")) {
                document.getElementById(clickedCell.id).innerHTML += "; " + selectedGrade;
            }
            showInformation("Note erfolgreich hinzugefügt!", "green");
        }
    }
}

function removeCell() {
    let deleteThisCellRadio = document.getElementById("deleteThisCellRadio");
    let deleteThisCellRadioNot = document.getElementById("deleteThisCellRadioNot");
    if (deleteThisCellRadio.checked && (clickedCell.id == "KLN" + clickedCell.parentElement.id)) {
        subjects[clickedCell.parentElement.id].kln = [];
        localStorage.setItem("subjects", JSON.stringify(subjects));
        showInformation("Zelle erfolgreich gelöscht!", "green");
        clickedCell.innerHTML = "-";
    } else if (deleteThisCellRadio.checked && (clickedCell.id == "GLN" + clickedCell.parentElement.id)) {
        subjects[clickedCell.parentElement.id].gln = [];
        localStorage.setItem("subjects", JSON.stringify(subjects));
        showInformation("Zelle erfolgreich gelöscht!", "green");
        clickedCell.innerHTML = "-";
    }
    deleteThisCellRadio.checked = false;
    deleteThisCellRadioNot.checked = true;
}