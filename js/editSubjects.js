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
        showInformation(`Fach in "${newSubjectName}" erfolgreich umbenannt!`, "green")
    }
    if(isEqual) showInformation("Name bereits vergeben", "red")
    if((newSubjectName == "") || (newSubjectName.includes(" "))) showInformation("invalide Eingabe", "red")
}

function renameParticularSubject(name) {
    let newClickedCell = clickedCell;
    clickedCell = clickedCell.parentElement.id;
    subjects[name] = subjects[clickedCell];
    subjects[name].Name = name;
    delete subjects[clickedCell];
    localStorage.setItem("subjects", JSON.stringify(subjects));
    newClickedCell.innerHTML = name;
    newClickedCell.parentElement.id = name;
    newClickedCell.parentElement.children[1].id = "KLN" + name;
    newClickedCell.parentElement.children[2].id = "GLN" + name;
    newClickedCell.parentElement.children[3].id = "Øges" + name;
    clickedCell = document.getElementById(name).children[0];
    return clickedCell;
}

let confirmToDeleteThisSubject = document.getElementById("confirmToDeleteThisSubject");
confirmToDeleteThisSubject.addEventListener("click", checkToDeleteThisSubject);

function checkToDeleteThisSubject() {
    let askUserToDeleteSubject = confirm("Willst du das Fach wirklich löschen?");
    clickedCell = clickedCell.parentElement.id;
    if (askUserToDeleteSubject && (clickedCell != null)) {
        deleteSubject(clickedCell);
        document.getElementById(clickedCell).remove();
        showInformation('Fach "' + clickedCell + '" erfolgreich gelöscht', 'green')
    } else if (clickedCell == null) {
        showInformation("Fach wurde schon gelöscht", "red");
    }
}

function deleteSubject(subject) {
    delete subjects[subject];
    localStorage.setItem("subjects", JSON.stringify(subjects));
}

let confirmToChangeThisSubjectWeighting = document.getElementById("confirmToChangeThisSubjectWeighting");
confirmToChangeThisSubjectWeighting.addEventListener("click", checkToStartChangingTheWeighting);

function checkToStartChangingTheWeighting() {
    let doubleWeighting = document.getElementById("doubledWeighting");
    let singleWeighting = document.getElementById("singleWeighting");
    let weightingHTML = document.getElementById("currentWeighting");
    if (doubleWeighting.checked) {
        subjects[clickedCell.parentElement.id]["weighting"] = 2;
        localStorage.setItem("subjects", JSON.stringify(subjects));
        showInformation("Neue Gewichtung: doppelt" , "green");
        weightingHTML.innerHTML = "Doppelt";
    }
    if (singleWeighting.checked) {
        subjects[clickedCell.parentElement.id]["weighting"] = 1;
        localStorage.setItem("subjects", JSON.stringify(subjects));
        showInformation("Neue Gewichtung: einfach" , "green");
        weightingHTML.innerHTML = "Einfach";
    }
}