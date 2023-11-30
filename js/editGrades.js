import { showInformation } from "./notification.js";

addGradeDivBtn.addEventListener("click", () => {
    editGrades();
});

confirmToDeleteThisCell.addEventListener("click", removeCell);
confirmToDeleteThisGrade.addEventListener("click", removeSingleGrade);


function editGrades() {
    checkSelectedGrade();
}

function checkSelectedGrade() {
    let selectedGrade = document.getElementById("addGradeSelect").value;
    let selectGradePlaceholder = document.getElementById("selectGradePlaceholder");
    if (!(isNaN(Number(selectedGrade)))) {
        let subjectsPropertyName = clickedCell.parentElement.id;
        if (clickedCell.id == ("KLN" + subjectsPropertyName)) { 
            subjects[subjectsPropertyName]["kln"].push(Number(selectedGrade));
            localStorage.setItem("subjects", JSON.stringify(subjects));
            if (subjects[subjectsPropertyName]["kln"].length == 1) {
                document.getElementById(clickedCell.id).innerHTML = selectedGrade;
            } else if (!document.getElementById(clickedCell.id).innerHTML.includes("-")) {
                document.getElementById(clickedCell.id).innerHTML += "; " + selectedGrade;
            }
            showInformation("Note erfolgreich hinzugefügt!", "green");
        } else if (clickedCell.id == ("GLN" + subjectsPropertyName)) { 
            subjects[subjectsPropertyName]["gln"].push(Number(selectedGrade));
            localStorage.setItem("subjects", JSON.stringify(subjects));
            if (subjects[subjectsPropertyName]["gln"].length == 1) {
                document.getElementById(clickedCell.id).innerHTML = selectedGrade;
            } else if (!document.getElementById(clickedCell.id).innerHTML.includes("-")) {
                document.getElementById(clickedCell.id).innerHTML += "; " + selectedGrade;
            }
            showInformation("Note erfolgreich hinzugefügt!", "green");
        }
        selectGradePlaceholder.selected = true;
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

function removeSingleGrade() {
    let selectGradePosition = document.getElementById("selectGradePosition").value.trim();
    selectGradePosition = Number(selectGradePosition);
    let glnORkln = (clickedCell.id.includes("KLN")) ? "kln" : "gln";
    
    if (!isNaN(selectGradePosition) && selectGradePosition >= 1 && !(String(selectGradePosition).includes("."))) {
        let existsInArray = isDefinedAtPosition(subjects[clickedCell.parentElement.id][glnORkln], selectGradePosition - 1);
        if(existsInArray) {
            subjects[clickedCell.parentElement.id][glnORkln].splice(selectGradePosition - 1, 1)
            localStorage.setItem("subjects", JSON.stringify(subjects));
            if (subjects[clickedCell.parentElement.id][glnORkln].length > 1) {
                clickedCell.innerHTML = subjects[clickedCell.parentElement.id][glnORkln][0];
                for (let i = 1; i < subjects[clickedCell.parentElement.id][glnORkln].length; i++) {
                    clickedCell.innerHTML += "; " + subjects[clickedCell.parentElement.id][glnORkln][i];
                }
            } else if (subjects[clickedCell.parentElement.id][glnORkln].length == 0) {
                clickedCell.innerHTML = "-";
            }
            showInformation("Note erfolgreich gelöscht!", "green");
            
        }
        else if(!existsInArray) showInformation("Note nicht definiert", "red");
    }
    document.getElementById("selectGradePosition").value = "";
}

function isDefinedAtPosition(arr, position) {
    arr = arr[position];
    if (arr == undefined) return false;
    if (arr != undefined) return true;
}