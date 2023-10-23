let editSubjectValue = "";
let editSubjectsPopup = document.getElementById("editSubjectsPopup");
let overlayDivi = document.getElementById("overlayDiv");

function showEditSubjectsPopup(THIS) {
    editSubjectsPopup.style.display = "block";
    overlayDivi.style.display = "block";
    saveSubjectValue(THIS);
}

function saveSubjectValue(x) {
    editSubjectValue = x.parentElement.id;
    return editSubjectValue;
}

let editSubjectFinished= document.getElementById("editSubjectFinished");

editSubjectFinished.addEventListener("click", () => {
    editSubjectsPopup.style.display = "none";
    overlayDivi.style.display = "none";
});

let confirmRenaming = document.getElementById("confirmRenaming");
let IDisEqual = false;

confirmRenaming.addEventListener("click", renameSubject);

function renameSubject() {
    let newSubjectName = document.getElementById("newSubjectName");
    setIsEqual2(false);
    checkID(newSubjectName.value);
    if ((IDisEqual == false) && (newSubjectName.value.trim() != "")) {
        let subject = document.getElementById(editSubjectValue);
        subject.children[0].id = "sub" + newSubjectName.value;
        subject.removeAttribute("id");
        subject.setAttribute("id", newSubjectName.value);
        subject.children[0].innerHTML = newSubjectName.value;
        showInformation('Fach in "' + newSubjectName.value + '" umbenannt!', "green");
    } else {
        showInformation("Bitte anderen Namen überlegen!", "red");
    }
}

function checkID(name) {
    let tr = document.querySelectorAll("tr");
    for (let i = 1; i < tr.length; i++) {
        let trID = tr[i].id;
        if (trID == name) {
            console.log(trID)
            setIsEqual2(true);
        }
    }
}

function setIsEqual2(x) {
    IDisEqual = x;
    return IDisEqual;
}

let confirmToDeleteThisSubject = document.getElementById("confirmToDeleteThisSubject");

confirmToDeleteThisSubject.addEventListener("click", checkToDeleteSubject);

function checkToDeleteSubject() {
    let subject = document.getElementById(editSubjectValue);
    let deleteThisSubject = document.getElementById("deleteThisSubject");
    let deleteThisSubjectNot = document.getElementById("deleteThisSubjectNot");

    if (deleteThisSubject.checked && (subject != null)) {
        deleteSubject(subject);
        deleteThisSubjectNot.checked = "checked";
        showInformation('Fach "' + subject.children[0].innerHTML + '" erfolgreich gelöscht', 'green')
    } else if (subject == null) {
        showInformation("Fach wurde schon gelöscht", "red");
    }
}

function deleteSubject(subject) {
    subject.remove();
}

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