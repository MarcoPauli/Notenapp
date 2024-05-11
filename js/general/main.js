import { calculateSingleAverages } from "../view-mode/calculateAverages.js";
import { userBackgroundColor } from "../general/theme.js";
import { storeData } from "../edit-mode/storeData.js";

if (storage != null && !userIsLoggedIn) {
    checkForCorrectDataFormat();
    for (let x in subjects) {
        showSingleHTMLElement(subjects[x]["Name"], false);
    }
}

function checkForCorrectDataFormat() {
    console.log(Object.keys(subjects).length);
    let numberOfSubjects = Object.keys(subjects).length;
    let wrongDataFormat = false;
    if (numberOfSubjects >= 1) {
        console.log("größer gleich 1")
        for (let x in subjects) {
            console.log(subjects[x]["kln"].length)
            if (subjects[x]["kln"].length === 0 || subjects[x]["gln"].length === 0) {
                console.log("falsches format")
                wrongDataFormat = true;
                break;
            }
        }
    }
    if (wrongDataFormat) {
        alert("Für die neuen Features der App muss ein gerinfügig neues Datenformat verwendet werden. Die App wird dafür neu geladen.")
        for (let x in subjects) {
            if (subjects[x]["kln"].length === 0) {
                subjects[x]["kln"][0] = "-";
            }
            if (subjects[x]["gln"].length === 0) {
                subjects[x]["gln"][0] = "-";
            }
        }
        returnSubjects(subjects)
        storeData();
        window.location.href = window.location.href;
    }
}

function returnSubjects(x) {
    subjects = x;
    return subjects;
}

export function showSingleHTMLElement(name) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let table = document.getElementById("showGradesTable")
    tr.id = name;
    td1.setAttribute("class", "subject");
    td1.innerHTML = name;
    td2.id = "KLN" + name;
    td2.innerHTML = "-";
    if (subjects[name]["kln"].length > 1) {
        td2.innerHTML = subjects[name]["kln"][0];
        for (let i = 1; i < subjects[name]["kln"].length; i++) {
            td2.innerHTML += "; " + subjects[name]["kln"][i];
        }
    } else if (subjects[name]["kln"].length == 1) {
        td2.innerHTML = subjects[name]["kln"][0];
    }
    td2.setAttribute("class", "KLNs");
    td3.id = "GLN" + name;
    td3.innerHTML = "-";
    td3.setAttribute("class", "GLNs");
    if (subjects[name]["gln"].length > 1) {
        td3.innerHTML = subjects[name]["gln"][0];
        for (let i = 1; i < subjects[name]["gln"].length; i++) {
            td3.innerHTML += "; " + subjects[name]["gln"][i];
        }
    } else if (subjects[name]["gln"].length == 1) {
        td3.innerHTML = subjects[name]["gln"][0];
    }
    td4.id = "Øges" + name;
    td4.innerHTML = "-";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    table.appendChild(tr);
}

userBackgroundColor();

let repeatEverySecond = setInterval(() => {
    userBackgroundColor();
    calculateSingleAverages();
}, 1000);