import { showSingleHTMLElement } from "./loadStandardSet.js";

if (storage != null) {
    for (let x in subjects) {
        console.log(subjects[x]["Name"])
        showSingleHTMLElement(subjects[x]["Name"], false);
    }
}