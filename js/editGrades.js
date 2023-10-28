let addGradeDivBtn = document.getElementById("addGradeDivBtn");
addGradeDivBtn.addEventListener("click", () => {
    editGrades();
});

let confirmToDeleteThisCell = document.getElementById("confirmToDeleteThisCell");
confirmToDeleteThisCell.addEventListener("click", removeCell);


function editGrades() {
    checkSelectedGrade();
}

function checkSelectedGrade() {
    let selectedGrade = document.getElementById("addGradeSelect").value;
    if (!(isNaN(Number(selectedGrade)))) {
        let subjectsPropertyName = clickedCell.parentElement.id;
        alert(clickedCell.id)
        alert("KLN" + subjectsPropertyName)
        if (clickedCell.id == ("KLN" + subjectsPropertyName)) { //Achtung: wird wegen dem aktuellen html nicht wahr werden
            subjects[subjectsPropertyName]["kln"].push(Number(selectedGrade));
            localStorage.setItem("subjects", JSON.stringify(subjects));
            alert(subjects[subjectsPropertyName]["kln"].length)
            if (subjects[subjectsPropertyName]["kln"].length == 1) {
                document.getElementById(clickedCell.id).innerHTML = selectedGrade;
            } else if (!document.getElementById(clickedCell.id).innerHTML.includes("-")) {
                document.getElementById(clickedCell.id).innerHTML += "; " + selectedGrade;
            }
        }//gln!
    }
}

function removeCell() {
    alert("moin")
    let deleteThisCellRadio = document.getElementById("deleteThisCellRadio");
    let deleteThisCellRadioNot = document.getElementById("deleteThisCellRadioNot");
    if(deleteThisCellRadio.checked && (clickedCell.id == "KLN" + clickedCell.parentElement.id)) {
        subjects[clickedCell.parentElement.id].kln = [];
        localStorage.setItem("subjects", JSON.stringify(subjects));
    } else {
        subjects[clickedCell.parentElement.id].gln = [];
        localStorage.setItem("subjects", JSON.stringify(subjects));
    }
}