//All necessary functions are imported from other files
import { showInformation } from "../general/notification.js";
import { storeData } from "../edit-mode/storeData.js";
//End of all necessary imports

//Eventlisteners
addGradeDivBtn.addEventListener("click", checkSelectedGrade);
confirmToDeleteThisCell.addEventListener("click", removeCell);
confirmToDeleteThisGrade.addEventListener("click", removeSingleGradeCheck);
//End of all necessary event listeners

//This function checks whether the input of the note is valid
function checkSelectedGrade() {
    let selectedGrade = document.getElementById("addGradeSelect").value;
    let gradeIsANumber = !(isNaN(Number(selectedGrade)));
    let subjectsPropertyName = clickedCell.parentElement.id;
    if (clickedCell.id === ("KLN" + subjectsPropertyName) && gradeIsANumber) {
        addParticularGrade(subjects[subjectsPropertyName]["kln"], selectedGrade)
    } else if (clickedCell.id === ("GLN" + subjectsPropertyName) && gradeIsANumber) {
        addParticularGrade(subjects[subjectsPropertyName]["gln"], selectedGrade) 
    }
    selectGradePlaceholder.selected = true;
}
//End of the function checkSelectedGrade

//This function adds the grade to a specific array
function addParticularGrade(gradeArray, grade) {
    if ((gradeArray[0] != "-")) {
        document.getElementById(clickedCell.id).innerHTML += "; " + grade;
        gradeArray.push(Number(grade));
        storeData();
    } else if(gradeArray[0] === "-") {
        document.getElementById(clickedCell.id).innerHTML = grade;
        gradeArray[0] = Number(grade);
        storeData();
    }
    showInformation("Note erfolgreich hinzugefügt!", "green");
}
//End of the funciton addParticularGrade

//This functions determines which array (kln or gln) should be removed
function removeCell() {
    let deleteThisCellRadioNot = document.getElementById("deleteThisCellRadioNot").checked;
    let elementIsChecked = document.getElementById("deleteThisCellRadio").checked;
    let parentElement = clickedCell.parentElement.id;
    if (elementIsChecked && (clickedCell.id === "KLN" + parentElement)) {
        deleteParticularCell("kln");
    } else if (elementIsChecked && (clickedCell.id == "GLN" + parentElement)) {
        deleteParticularCell("gln");
    }
    elementIsChecked = false;
    deleteThisCellRadioNot = true;
}
//End of function removeCell

//This function deletes a specific cell (and empties the given array)
function deleteParticularCell(arrayName) {
    subjects[clickedCell.parentElement.id][arrayName] = ["-"];
    storeData();
    showInformation("Zelle erfolgreich gelöscht!", "green");
    clickedCell.innerHTML = "-";
}
//End of function deleteParticularCell

//This function checks whether the user input is a valid input 
function removeSingleGradeCheck() {
    let selectGradePosition = Number(document.getElementById("selectGradePosition").value.trim());
    let glnORkln = (clickedCell.id.includes("KLN")) ? "kln" : "gln";
    let standardConditions = !isNaN(selectGradePosition) && selectGradePosition >= 1 && !(String(selectGradePosition).includes("."));
    let existsInArray = isDefinedAtPosition(subjects[clickedCell.parentElement.id][glnORkln], selectGradePosition - 1);
        if(existsInArray && standardConditions) {
            removeSingleGrade(subjects[clickedCell.parentElement.id][glnORkln], selectGradePosition)
        }
        else if(!existsInArray) showInformation("Note nicht definiert", "red");
    document.getElementById("selectGradePosition").value = "";
}
//End of function removeSingleGradeCheck

//This function removes a single grade
function removeSingleGrade(arrayName, position) {
    let length = arrayName.length;
    arrayName.splice(position - 1, 1)
    if (length > 1) {
        clickedCell.innerHTML = arrayName[0];
        for (let i = 1; i < arrayName.length; i++) {
            clickedCell.innerHTML += "; " + arrayName[i];
        }
    } else if (length === 1) {
        clickedCell.innerHTML = "-";
        arrayName[0] = "-";
    }
    storeData();
    showInformation("Note erfolgreich gelöscht!", "green");
}
//End of function removeSingleGrade

//This function determines whether an element is defined at a certain position or not
function isDefinedAtPosition(arr, position) {
    arr = arr[position];
    if (arr === undefined) return false;
    if (arr != undefined) return true;
}
//End of function isDefinedAtPosition