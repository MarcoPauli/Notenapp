export function showInformation(info, color) {
    informationDiv.style.display = "block";
    informationDiv.style.color = color;
    //information.style.borderColor = color;
    information.innerHTML = info//info;
    setTimeout(() => {
        informationDiv.style.display = "none";
        information.innerHTML = "";
    }, 2500)
}