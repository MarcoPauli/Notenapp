let defaultLoginBtn = document.getElementById("defaultLoginBtn");
let loginDiv = document.getElementById("loginDiv");
let defaultCloseLoginDiv = document.getElementById("defaultCloseLoginDiv");
defaultLoginBtn.addEventListener("click", function() {
    loginDiv.style.display = "block";
    overlayDiv.style.display = "block";
})
defaultCloseLoginDiv.addEventListener("click", function () {
    loginDiv.style.display = "none";
    overlayDiv.style.display = "none";
})