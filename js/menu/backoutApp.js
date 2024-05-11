import { storeData } from "../edit-mode/storeData.js";
/*
THIS FILE CONTAINS THE CODE WHICH IS USED TO BACKOUT THE APPLICATION USING FUNCTIONS "checkToBackoutApp" AND "backoutApplication"
*/

//If the user clicks on confirmToBackoutApplication the function "checkToBackoutApp" will be executed
confirmToBackoutApplication.addEventListener("click", checkToBackoutApp);
//End of files´s eventlistener section

//This function checks to backout the app
function checkToBackoutApp() {
    let askUserToBackout = confirm("Willst du die App wirklich unwiderruflich zurücksetzen?")
    if (askUserToBackout) {
        if (confirm("Warnung: Die Daten gehen endgültig verloren!")) {
            alert("App wird nun zurückgesetzt!")
            backoutApplication();
        }
    }
}
//End of function "checkToBackoutApp"

//This function is executed if the user confirmed to backout the app
function backoutApplication() {
    for (let i in subjects) {
        delete subjects[i];
    }
    storeData();
    localStorage.clear();
    window.location.href = window.location.href;
}
//End of function "backoutApplication"