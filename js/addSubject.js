import { showInformation } from "./notification.js";
import { checkID } from "./checkId.js";
import { showSingleHTMLElement } from "./loadStandardSet.js";

addSubjectBtn.addEventListener("click", startToAddSubject);

function startToAddSubject() {
    let userValue = document.getElementById("addSubjectInput");
    let userInput = userValue.value.trim();
    isEqual = false;
    checkID(userInput);
    if((!isEqual) && (userInput != "") && (!userInput.includes(" "))) {
        addParticularSubject(userInput);
        showSingleHTMLElement(userInput, true);
        showInformation(`Fach "${userInput}" erfolgreich hinzugefügt`, "green");
    }
    if(isEqual) showInformation("Name bereits vergeben", "red")
    if((userInput == "") || (userInput.includes(" "))) showInformation("invalide Eingabe", "red")
    userValue.value = "";
}



function addParticularSubject(name) {
    subjects[name] = new CreateSubject(name);
    localStorage.setItem("subjects", JSON.stringify(subjects));
}

export function CreateSubject(name, weighting) {
    this.Name = name;
    this.kln = [];
    this.gln = []
    this.weighting = weighting;
}