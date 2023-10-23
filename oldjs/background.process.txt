/*
THIS JAVASCRIPT FILE IS RESPONSIBLE FOR THE BACKGROUND PROCESS WHICH MEANS THAT ALL FUNCTIONS WHO HAVE TO BE EXECUTED IN A REGULAR PERIOD OF TIME ARE STORED IN THIS DOCUMENT
*/

import userBackgroundColor from "./theme.js";//imports necessary function from theme.js

//This code runs functions "userBackgroundColor()", "checkToCalculateAverage()", "calculateEntireGradePointAverage()" and "saveGradeTableOnLocalStorage()" once every second 
let backgroundProcessing = setInterval(() => {
    userBackgroundColor();
    checkToCalculateAverage();
    calculateEntireGradePointAverage();
    saveGradeTableOnLocalStorage();
}, 1000);
//End of code executed once per second

//This function checks which tr-element has been clicked on and selects the correct argument to continue
function checkToCalculateAverage() {
    let tr = document.querySelectorAll("tr");
    for (let i = 1; i < tr.length; i++) {
        let trID = tr[i].id;
        calculateAverageAll(trID);
    }
}
//End of function "checkToCalculateAverage"

//Declaration of necessary variables
let klnAverage;
let glnAverage;
//End of declaration

//This function is executed if one of the cases of the switch statement above (see function "checkToCalculateAverage()") becomes true; the parameter x is equal to the id of the subject which is selected
function calculateAverageAll(x) {
    let element = document.getElementById(x);
    let kln = element.children[1];
    let gln = element.children[2];
    let klnLength = kln.children.length;
    let glnLength = gln.children.length;
    let average = "m";
    if ((kln.innerHTML.includes("-") || kln.innerHTML.includes("x"))  && (gln.innerHTML.includes("-") || gln.innerHTML.includes("x"))) {
        element.children[3].innerHTML = "-";
    } else if (kln.innerHTML.includes("-") || kln.innerHTML.includes("x")) {
        calculateAverageParticular(gln, "gln", glnLength, glnAverage);
        average = glnAverage;
        average = average.toFixed(2).replace(".", ",");
        element.children[3].innerHTML = average;
        setGradeColor(average, element);
    } else if (gln.innerHTML.includes("-") || gln.innerHTML.includes("x")) {
        calculateAverageParticular(kln, "kln", klnLength, klnAverage);
        average = klnAverage;
        average = average.toFixed(2).replace(".", ",");
        element.children[3].innerHTML = average;
        setGradeColor(average, element);
    } else if (element.id == "physics") {
        calculateAverageParticular(gln, "gln", glnLength, glnAverage);
        calculateAverageParticular(kln, "kln", klnLength, klnAverage);
        average = (glnAverage + klnAverage) / 2;
        average = average.toFixed(2).replace(".", ",");
        element.children[3].innerHTML = average;
        setGradeColor(average, element);
    } else {
        calculateAverageParticular(gln, "gln", glnLength, glnAverage);
        calculateAverageParticular(kln, "kln", klnLength, klnAverage);
        average = ((2 * glnAverage) + klnAverage) / 3;
        average = average.toFixed(2).replace(".", ",");
        element.children[3].innerHTML = average;
        setGradeColor(average, element);
    }
}
//End of function "calculateAverageAll"

//This function needs four parameters; x can be gln or kln, this depends on which if statement became true
function calculateAverageParticular(x, xOr, xLength, xAverage) {
    for (let i = 0; i < xLength; i++) {
        switch (i) {
            case 0:
                xAverage = Number(x.children[i].innerHTML);
                break;
            default:
                xAverage += Number(x.children[i].innerHTML);
        }
    }
    xAverage = xAverage / Number(xLength);
    if (xOr === "gln") {
        glnAverage = xAverage;
        return glnAverage;
    } else if (xOr === "kln") {
        klnAverage = xAverage;
        return klnAverage;
    }
}
//End of function "calculateAverageParticular"

//This function sets different colors depending on the values of the averages
function setGradeColor(average, element) {
    let elStyle = element.children[3].style;
    average = average.replace(",", ".");
    average = Number(average);
    elStyle.fontWeight = "bold";
    elStyle.textAlign = "center";
    elStyle.color = "black";
    switch (true) {
        case average <= 1.5:
            elStyle.backgroundColor = "green";
            break;
        case average <= 2.5:
            elStyle.backgroundColor = "darkgreen";
            break;
        case average <= 3.5:
            elStyle.backgroundColor = "yellow";
            break;
        case average <= 4.5:
            elStyle.backgroundColor = "darkorange";
            break;
        case average > 4.5:
             elStyle.backgroundColor = "red";
            break;
    }
}
//End of function "setGradeColor"

/*
The whole following code has nothing to do with the function "checkToCalculateAverage" but with the other functions
*/

//This function has to store all information from the table to localstorage
function saveGradeTableOnLocalStorage() {
    let showGradesTable = document.getElementById("showGradesTable");
    localStorage.setItem("table", showGradesTable.innerHTML);
}
//End of function "saveGradeTableOnLocalStorage" 

//This function calculates the entire grade point average
function calculateEntireGradePointAverage() {
    let isTrue = 0;
    let tr = document.querySelectorAll("tr");
    let trLength = tr.length;
    let entireAverage;
    let averageAllSubjects = document.getElementById("averageAllSubjects");
    averageAllSubjects.innerHTML = "&#216;";
    averageAllSubjects.style.color = "white";
    let regularTrs;
    for (let i = 1; i < tr.length; i++) {
        if (!((tr[i].children[3].innerHTML).includes("-"))) {
            isTrue = 1;
            switch (true) {
                case regularTrs == undefined: 
                    regularTrs = 1;
                    entireAverage = Number((tr[i].children[3]).innerHTML.replace(",", "."));
                    break;
                case regularTrs != undefined:
                    regularTrs += 1;
                    entireAverage += Number((tr[i].children[3]).innerHTML.replace(",", "."));
                    break;
            }
            
        }
    }
    document.getElementById("averageAllSubjectsDiv").style.backgroundColor = "grey";
    if (isTrue) {
        entireAverage = (entireAverage / regularTrs).toFixed(2);
        averageAllSubjects.innerHTML = entireAverage.toString().replace(".", ",");
        averageAllSubjects = document.getElementById("averageAllSubjectsDiv");
        switch (true) {
            case entireAverage <= 1.5:
                averageAllSubjects.style.backgroundColor = "green";
                break;
            case entireAverage <= 2.5:
                averageAllSubjects.style.backgroundColor = "darkgreen";
                break;
            case entireAverage <= 3.5:
                averageAllSubjects.style.backgroundColor = "yellow";
                break;
            case entireAverage <= 4.5:
                averageAllSubjects.style.backgroundColor = "darkorange";
                break;
            case entireAverage > 4.5:
                averageAllSubjects.style.backgroundColor = "red";
                break;
        }
    }

}