let addSubjectBtn = document.getElementById("addSubjectBtn");
let isEqual = false;

addSubjectBtn.addEventListener("click", () => {
    addSubject();
});

function addSubject() {
    let table = document.getElementById("showGradesTable");
    let userInput = document.getElementById("addSubjectInput");
    checkIDi(userInput.value);
    if (!isEqual && !((userInput.value).includes(" ")) && !(userInput.value == "")) {
        addParticularSubject(userInput.value, table);
        userInput.value = "";
    } else if (isEqual) {
        showInformation("Name bereits vergeben. Bitte neuen Name überlegen.", "red");
        userInput.value = "";
        setIsEqual(false);
    } else if ((userInput.value == " ") || (userInput.value == "")) {
        showInformation("Bitte Namen überlegen.", "red");
        userInput.value = "";
        setIsEqual(false);
    }
    
}

function addParticularSubject(name, table) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    tr.id = name;
    td1.setAttribute("class", "subject");
    td1.innerHTML = name;
    td1.setAttribute("onclick", "showEditSubjectsPopup(this)");
    td1.style.cursor = "pointer";
    td1.id = "sub" + name;
    td2.id = "KLN" + name;
    td2.innerHTML = "-";
    td2.setAttribute("onclick", "showEditGradesPopup(this)");
    td2.style.cursor = "pointer";
    td2.setAttribute("class", "KLNs");
    td3.id = "GLN" + name;
    td3.innerHTML = "-";
    td3.setAttribute("onclick", "showEditGradesPopup(this)");
    td3.style.cursor = "pointer";
    td3.setAttribute("class", "GLNs");
    td4.id = "Øges" + name;
    td4.innerHTML = "-";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    table.appendChild(tr);
    showInformation("Fach " + '"' + name + '"' + " hinzugefügt", "green")
}

function checkIDi(name) {
    console.log(name)
    let tr = document.querySelectorAll("tr");
    for (let i = 1; i < tr.length; i++) {
        let trID = tr[i].id;
        if (trID == name) {
            setIsEqual(true);
        }
    }
}

function setIsEqual(x) {
    isEqual = x;
    return isEqual;
}

//This function shows - if executed - the given information
function showInformation(info, color) {
    let informationDiv = document.getElementById("informationDiv");
    informationDiv.style.display = "block";
    informationDiv.style.color = color;
    let information = document.getElementById("information");
    information.innerHTML = info;
    setTimeout(() => {
        informationDiv.style.display = "none";
        information.innerHTML = "";
    }, 2000)
}
//End of function "showInformation"