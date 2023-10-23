let appSettingsBtn = document.getElementById("appSettingsBtn");
appSettingsBtn.addEventListener("click", () => {
    let appSettingsPopup = document.getElementById("appSettingsPopup");
    appSettingsPopup.style.display = "block";
    let overlayDiv = document.getElementById("overlayDiv");
    overlayDiv.style.display = "block";
});
let AppSettingsFinishedBtn = document.getElementById("AppSettingsFinishedBtn");
AppSettingsFinishedBtn.addEventListener("click", () => {
    let appSettingsPopup = document.getElementById("appSettingsPopup");
    appSettingsPopup.style.display = "none";
    let overlayDiv = document.getElementById("overlayDiv");
    overlayDiv.style.display = "none";
});

let appInfo = document.getElementById("appInfo");
appInfo.addEventListener("change", changeAppInfoAction);
let userAction = "default";

function changeAppInfoAction() {
    let toDo = document.getElementById("appInfo").value;
    let pasteAppInfoTextValue = document.getElementById("pasteAppInfoTextValue");
    if (toDo == "Einfügen") {
        userAction = "paste";
        pasteAppInfoTextValue.removeAttribute("readonly");
    } else if (toDo == "Kopieren") {
        userAction = "copy";
    } else {
        userAction = "default";
    }
    return userAction;
}

let confirmAppInfoAction = document.getElementById("confirmAppInfoAction");
confirmAppInfoAction.addEventListener("click", checkUserAction);

function checkUserAction() {
    if (userAction == "copy") {
        copyAppData();
    } else if(userAction == "paste") {
        pasteAppData();
    }
}

function copyAppData() {
    let AppData = document.getElementById("showGradesTable");
    navigator.clipboard.writeText(AppData.innerHTML);
}

function pasteAppData() {
    let userInput = document.getElementById("pasteAppInfoTextValue");
    let table = document.getElementById("showGradesTable");
    table.innerHTML = userInput.value;
}

let confirmToBackoutApplication = document.getElementById("confirmToBackoutApplication");
confirmToBackoutApplication.addEventListener("click", checkToBackoutApp);

function checkToBackoutApp() {
    let backoutApplicationInput = document.getElementById("backoutApplicationInput");
    let backoutApplicationInputNot = document.getElementById("backoutApplicationInputNot");
    if (backoutApplicationInput.checked) {
        //if (confirm("Willst du die App wirklich zurücksetzen?")) {
            backoutApplication();
        //}
    }
}

function backoutApplication() {
    localStorage.clear();
    window.location.href = window.location.href;
}