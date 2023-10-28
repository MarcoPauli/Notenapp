import { CreateSubject } from "./addSubject.js";
import { showInformation } from "./notification.js";

let confirmLoadStandardSetBtn = document.getElementById("confirmLoadStandardSetBtn");
confirmLoadStandardSetBtn.addEventListener("click", checkToLoadStandardSet);

function checkToLoadStandardSet() {
    let askUserAgain = confirm("Das Standardset wirklich laden? \n Fächer werden möglicherweise überschrieben und eingegebene Daten gehen verloren!");
    if(askUserAgain) standardSet();
}

function standardSet () {
    for (let x in standardSubjectsSet) {
        let subName = standardSubjectsSet[x][0];
        subjects[subName] = new CreateSubject(subName, standardSubjectsSet[x][1]);
        localStorage.setItem("subjects", JSON.stringify(subjects));
        showSingleHTMLElement(subName, true);
    }
}

export function showSingleHTMLElement(name, newEl) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let table = document.getElementById("showGradesTable")
    tr.id = name;
    td1.setAttribute("class", "subject");
    td1.innerHTML = name;
    //td1.setAttribute("onclick", "showEditSubjectsPopup(this)");
    //td1.style.cursor = "pointer";
    //td1.id = "sub" + name;
    td2.id = "KLN" + name;
    td2.innerHTML = "-";
    //td2.setAttribute("onclick", "showEditGradesPopup(this)");
    //td2.style.cursor = "pointer";
    td2.setAttribute("class", "KLNs");
    td3.id = "GLN" + name;
    td3.innerHTML = "-";
    //td3.setAttribute("onclick", "showEditGradesPopup(this)");
    //td3.style.cursor = "pointer";
    td3.setAttribute("class", "GLNs");
    td4.id = "Øges" + name;
    td4.innerHTML = "-";
    if(newEl) {
        td1.setAttribute("onclick", "showEditSubjectsPopup(this)");
        td1.style.cursor = "pointer";
        td2.setAttribute("onclick", "showEditGradesPopup(this)");
        td2.style.cursor = "pointer";
        td3.setAttribute("onclick", "showEditGradesPopup(this)");
        td3.style.cursor = "pointer";
    }
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    table.appendChild(tr);
    //showInformation("Fach " + '"' + name + '"' + " hinzugefügt", "green");
}