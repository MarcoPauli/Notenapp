/*This file manages that the user can switch between normal-mode and edit-mode*/
import { showEditGradesPopup, showEditSubjectsPopup  } from "../general/popups.js";

// Function to add event listeners to table cells
function addEventListeners() {
    const table = document.getElementById("myTable");
    const cells = document.querySelectorAll("tr");

    for (let i = 1; i < cells.length; i++) {{
            cells[i].children[0].addEventListener("click", function() { showEditSubjectsPopup(cells[i].children[0]) });
            cells[i].children[0].style.cursor = "pointer";
            cells[i].children[1].addEventListener("click", function() { showEditGradesPopup(cells[i].children[1]) });
            cells[i].children[1].style.cursor = "pointer";
            cells[i].children[2].addEventListener("click", function() { showEditGradesPopup(cells[i].children[2]) });
            cells[i].children[2].style.cursor = "pointer";
        }
    }
}
// Function to remove event listeners from table cells
function removeEventListeners() {
    const table = document.getElementById("showGradesTable");
    const cells = document.querySelectorAll("tr");

    for (let i = 1; i < cells.length; i++) {
            removeParticularEventListeners(cells[i].children[0])
            cells[i].children[0].style.cursor = "unset";
            removeParticularEventListeners(cells[i].children[1])
            cells[i].children[1].style.cursor = "unset";
            removeParticularEventListeners(cells[i].children[2])
            cells[i].children[2].style.cursor = "unset";
    }
}

function removeParticularEventListeners(element) {
    const clone = element.cloneNode(true);
    element.parentNode.replaceChild(clone, element);
}

// Toggle event listeners on button click
    defaultEditGradesBtn.addEventListener("click", function () {
    const button = defaultEditGradesBtn;
    if (button.dataset.listeners === "active") {
        removeEventListeners();
        button.dataset.listeners = "inactive";
        standardInformation.style.display = "block";
        editModeDiv.style.display = "none";
        defaultEditGradesBtn.innerHTML = "🖊";
        defaultEditGradesBtn.title = "Noten bearbeiten";
        defaultShowEditModeTxt.innerHTML = "Ansichtmodus";
    } else {
        addEventListeners();
        button.dataset.listeners = "active";
        standardInformation.style.display = "none";
        editModeDiv.style.display = "block";
        defaultEditGradesBtn.innerHTML = "🔚";
        defaultEditGradesBtn.title = "Bearbeitungsmodus verlassen";
        defaultShowEditModeTxt.innerHTML = "Bearbeitungsmodus";
    }
});