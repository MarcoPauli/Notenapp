import { CreateSubject } from "./addSubject.js";

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
        window.location.href = window.location.href;
    }
}