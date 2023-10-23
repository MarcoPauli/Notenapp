import { showInformation } from "./notification.js";
import { checkID } from "./checkId.js";

addSubjectBtn.addEventListener("click", startToAddSubject);

function startToAddSubject() {
    let userInput = document.getElementById("addSubjectInput").value.trim();
    isEqual = false;
    checkID(userInput);
    if((!isEqual) && (userInput != "") && (!userInput.includes(" "))) {
        addParticularSubject(userInput);
        showInformation("Fach erfolgreich hinzugefügt", "green")
    }
    if(isEqual) showInformation("Name bereits vergeben", "red")
    if((userInput == "") || (userInput.includes(" "))) showInformation("invalide Eingabe", "red")
}



function addParticularSubject(name) {
    subjects[name] = new CreateSubject(name);
    localStorage.setItem("subjects", JSON.stringify(subjects));
}

function CreateSubject(name, gewichtung) {
    this.Name = name;
    this.kln = [];
    this.gln = []
    this.gewichtung = gewichtung;
}

//Code for standardset

if (storage == null) {
    standardSet();
}

function standardSet () {
    for (let x in standardSubjectsSet) {
        let subName = standardSubjectsSet[x][0];
        subjects[subName] = new CreateSubject(subName, standardSubjectsSet[x][1]);
        localStorage.setItem("subjects", JSON.stringify(subjects));
    }
}