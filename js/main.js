import { calculateSingleAverages } from "./calculateAverages.js";
import { userBackgroundColor } from "./theme.js";
if (storage != null) {
    for (let x in subjects) {
        showSingleHTMLElement(subjects[x]["Name"], false);
    }
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

let repeatEverySecond = setInterval(() => {
    userBackgroundColor();
    calculateSingleAverages();
}, 1000);
