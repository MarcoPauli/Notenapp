//default; user is NOT logged in
defaultLoginBtn.addEventListener("click", function() {
    loginDiv.style.display = "block";
    overlayDiv.style.display = "block";
})

defaultCloseLoginDiv.addEventListener("click", function () {
    loginDiv.style.display = "none";
    overlayDiv.style.display = "none";
})

//default; user IS logged in

defaultAppInfoBtn.addEventListener("click", () =>{
    overlayDiv.style.display = "block";
    appSettingsPopup.style.display = "block";
})
defaultUserAndAppInfoBtn.addEventListener("click", showUserAndAppInfo);

function showUserAndAppInfo() {
    userAndAppInfoDiv.style.display = "block";
    defaultUserAndAppInfoBtn.removeEventListener("click", showUserAndAppInfo);
    defaultUserAndAppInfoBtn.addEventListener("click", hideUserAndAppInfo);
}

function hideUserAndAppInfo() {
    userAndAppInfoDiv.style.display = "none";
    defaultUserAndAppInfoBtn.removeEventListener("click", hideUserAndAppInfo);
    defaultUserAndAppInfoBtn.addEventListener("click", showUserAndAppInfo);
}