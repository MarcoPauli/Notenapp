
/*
THIS FILE HAS THE TASK TO ADD FILES INCLUDING THE FUNCTIONS "STARTTOADDSUBJECTS" AND "ADDPARTICULARSUBJECT" AND THE CONSTRUCTOR "CREATESUBJECT" AS WELL WHICH CAN BE USED IN OTHER FILES SINCE IT IS EXPORTED
/*

//All necessary functions are imported from other files including functions "showinformation", "checkid" and "showsinglehtmlelement"
import { showInformation } from "./notification.js";
import { checkID } from "./checkId.js";
import { showSingleHTMLElement } from "./main.js";
//End of all necessary imports

//This adds an event on starttoaddsubjectbutton so you can add an subject by clicking on this button
addSubjectBtn.addEventListener("click", startToAddSubject);

function startToAddSubject() {
    let userValue = document.getElementById("addSubjectInput");
    let userInput = userValue.value.trim();
    isEqual = false;
    checkID(userInput);
    if((!isEqual) && (userInput != "") && (!userInput.includes(" "))) {
        addParticularSubject(userInput);
        showSingleHTMLElement(userInput);
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