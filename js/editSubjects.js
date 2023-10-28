import { showInformation } from "./notification.js";
import { checkID  } from "./checkId.js";

let confirmRenaming = document.getElementById("confirmRenaming");
confirmRenaming.addEventListener("click", renameSubject);

function renameSubject() {
    let newSubjectName = document.getElementById("newSubjectName").value.trim();
    isEqual = false;
    checkID(newSubjectName);
    if((!isEqual) && (newSubjectName != "") && !newSubjectName.includes(" ")) {
        renameParticularSubject(newSubjectName);
        showInformation("Fach erfolgreich umbenannt!", "green")
    }
    if(isEqual) showInformation("Name bereits vergeben", "red")
    if((newSubjectName == "") || (newSubjectName.includes(" "))) showInformation("invalide Eingabe", "red")
}

function renameParticularSubject(name) {
    clickedCell = clickedCell.parentElement.id;
    subjects[name] = subjects[clickedCell];
    subjects[name].Name = name;
    delete subjects[clickedCell];
    localStorage.setItem("subjects", JSON.stringify(subjects))
}

let confirmToDeleteThisSubject = document.getElementById("confirmToDeleteThisSubject");
confirmToDeleteThisSubject.addEventListener("click", checkToDeleteThisSubject);

function checkToDeleteThisSubject() {
    let deleteThisSubject = document.getElementById("deleteThisSubject");
    let deleteThisSubjectNot = document.getElementById("deleteThisSubjectNot");
    clickedCell = clickedCell.parentElement.id;
    if (deleteThisSubject.checked && (clickedCell != null)) {
        deleteSubject(clickedCell);
        deleteThisSubjectNot.checked = "checked";
        showInformation('Fach "' + clickedCell + '" erfolgreich gelöscht', 'green')
    } else if (clickedCell == null) {
        showInformation("Fach wurde schon gelöscht", "red");
    }
}

function deleteSubject(subject) {
    delete subjects[subject];
    localStorage.setItem("subjects", JSON.stringify(subjects))
}