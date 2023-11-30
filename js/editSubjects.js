import { showInformation } from "./notification.js";
import { checkID  } from "./checkId.js";

confirmRenaming.addEventListener("click", renameSubject);
confirmToDeleteThisSubject.addEventListener("click", checkToDeleteThisSubject);
confirmToChangeThisSubjectWeighting.addEventListener("click", checkToStartChangingTheWeighting);

function renameSubject() {
    let userValue = document.getElementById("newSubjectName");
    let newSubjectName = userValue.value.trim();
    isEqual = false;
    checkID(newSubjectName);
    if((!isEqual) && (newSubjectName != "") && !newSubjectName.includes(" ")) {
        renameParticularSubject(newSubjectName);
        showInformation(`Fach in "${newSubjectName}" erfolgreich umbenannt!`, "green")
    }
    if(isEqual) showInformation("Name bereits vergeben", "red")
    if((newSubjectName == "") || (newSubjectName.includes(" "))) showInformation("invalide Eingabe", "red");
    userValue.value = "";
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
    let showSubFonts = document.getElementsByClassName("showSubFont");
    showSubFonts[0].innerHTML = `Fach: ${clickedCell.parentElement.id}`;
    return clickedCell;
}

function checkToDeleteThisSubject() {
    let askUserToDeleteSubject = confirm("Willst du das Fach wirklich löschen?");
    let clickedCell2 = clickedCell.parentElement.id;
    if (askUserToDeleteSubject && (clickedCell2 != null)) {
        deleteSubject(clickedCell2);
        document.getElementById(clickedCell2).remove();
        editSubjectsPopup.style.display = "none";
        overlayDiv.style.display = "none";
        showInformation('Fach "' + clickedCell2 + '" erfolgreich gelöscht', 'green');
    } else if (clickedCell2 == null) {
        showInformation("Fach wurde schon gelöscht", "red");
    }
}

function deleteSubject(subject) {
    delete subjects[subject];
    localStorage.setItem("subjects", JSON.stringify(subjects));
}

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
    doubleWeighting.checked = false;
    singleWeighting.checked = false;
}
