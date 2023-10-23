let addGradeDivBtn = document.getElementById("addGradeDivBtn");
addGradeDivBtn.addEventListener("click", () => {
    editGrades();
});

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
            alert("aha")
            alert("hue")
            subjects[subjectsPropertyName]["kln"].push(selectedGrade);
            localStorage.setItem("subjects", JSON.stringify(subjects));
        }
    }
}