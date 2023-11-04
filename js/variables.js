let editGradesPopup = document.getElementById("editGradesPopup");
let overlayDiv = document.getElementById("overlayDiv");
let clickedCell;
let finished = document.getElementById("finished");

let appSettingsBtn = document.getElementById("appSettingsBtn");
let appSettingsPopup = document.getElementById("appSettingsPopup");
let appSettingsFinishedBtn = document.getElementById("AppSettingsFinishedBtn");

let standardInformation = document.getElementById("standardInformation");
let editModeDiv = document.getElementById("editModeDiv");
let showEditModeTxt = document.getElementById("showEditModeTxt");
let editGradesBtn = document.getElementById("editGradesBtn");


let isEqual = false;

let addSubjectBtn = document.getElementById("addSubjectBtn");

let storage = localStorage.getItem("subjects");

const subjects = (storage == null) ? {} : JSON.parse(storage);

const standardSubjectsSet = [["Deutsch", 2], ["Englisch", 2], ["Geografie", 1], 
["Geschichte", 1], ["Informatik", 1], ["Kunst", 1], ["Latein", 2], ["Mathe", 2], 
["Musik", 2], ["Physik", 1], ["PuG", 1], ["Religion", 1], ["Spanisch", 2], 
["Sport", 1], ["Wirtschaft", 1]];