let confirmToBackoutApplication = document.getElementById("confirmToBackoutApplication");
confirmToBackoutApplication.addEventListener("click", checkToBackoutApp);

function checkToBackoutApp() {
    let askUserToBackout = confirm("Willst du die App wirklich unwiderruflich zurücksetzen?")
    if (askUserToBackout) {
        if (confirm("Warnung: Die Daten gehen endgültig verloren!")) {
            alert("App wird nun zurückgesetzt!")
            backoutApplication();
        }
    }
}

function backoutApplication() {
    localStorage.clear();
    window.location.href = window.location.href;
}