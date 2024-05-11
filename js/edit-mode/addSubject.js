
/*
THIS FILE HAS THE TASK TO ADD FILES USING THE FUNCTIONS "STARTTOADDSUBJECTS" AND "ADDPARTICULARSUBJECT", AND THE CONSTRUCTOR "CREATESUBJECT" AS WELL WHICH CAN BE USED IN OTHER FILES SINCE IT IS EXPORTED
*/

//All necessary functions are imported from other files including functions "showinformation", "checkid" and "showsinglehtmlelement"
import { showInformation } from "../general/notification.js";
import { checkID } from "../general/checkId.js";
import { showSingleHTMLElement } from "../general/main.js";
import { showEditGradesPopup, showEditSubjectsPopup  } from "../general/popups.js";
import { storeData } from "./storeData.js";
//End of all necessary imports

//This adds an event on starttoaddsubjectbutton so you can add an subject by clicking on this button
addSubjectBtn.addEventListener("click", startToAddSubject);
//End of files's eventlistenersection

//The following function defines code that first checks if the userinput is valid and if so then adds an subject with name userinput 
function startToAddSubject() {
    let userValue = document.getElementById("addSubjectInput");
    let userInput = userValue.value.trim();
    isEqual = false;
    checkID(userInput);
    if((!isEqual) && (userInput != "") && (!userInput.includes(" "))) {
        addParticularSubject(userInput);
        showSingleHTMLElement(userInput);
        addEventListeners();
        showInformation(`Fach "${userInput}" erfolgreich hinzugefügt`, "green");
    }
    if(isEqual) showInformation("Name bereits vergeben", "red")
    if((userInput == "") || (userInput.includes(" "))) showInformation("invalide Eingabe", "red")
    userValue.value = "";
}
//End of function startToAddSubject

//This function creates a new subject by using the CreateSubject constructor and then stores it in localstorage
function addParticularSubject(name) {
    subjects[name] = new CreateSubject(name, 2);
    storeData();
}
//End of function addParticularSubject

//These functions add event listeners to the cells of a new subject
function addEventListeners() {
    const cells = document.querySelectorAll("tr");
    addSingleEventListener(cells, showEditSubjectsPopup, 0);
    addSingleEventListener(cells, showEditGradesPopup, 1);
    addSingleEventListener(cells, showEditGradesPopup, 2);
}

function addSingleEventListener(cells, func, index) {
    cells[cells.length -1].children[index].addEventListener("click", function() { func(cells[cells.length -1].children[index]) });
    cells[cells.length -1].children[index].style.cursor = "pointer";
}
//End of those functions

//This defines constructor CreateSubject that it also exported so you can use it in other files
export function CreateSubject(name, weighting) {
    this.Name = name;
    this.kln = ["-"];
    this.gln = ["-"]
    this.weighting = weighting;
}
//End of constructor CreateSubject
