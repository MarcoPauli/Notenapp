let editGradesPopup = document.getElementById("editGradesPopup");
let overlayDiv = document.getElementById("overlayDiv");
let clickedCell;
let finished = document.getElementById("finished");

let informationDiv = document.getElementById("informationDiv");
let information = document.getElementById("information");

let appSettingsBtn = document.getElementById("appSettingsBtn");
let appSettingsPopup = document.getElementById("appSettingsPopup");
let appSettingsFinishedBtn = document.getElementById("AppSettingsFinishedBtn");

let standardInformation = document.getElementById("standardInformation");
let editModeDiv = document.getElementById("editModeDiv");
let defaultShowEditModeTxt = document.getElementById("defaultShowEditModeTxt");
let defaultEditGradesBtn = document.getElementById("defaultEditGradesBtn");


let isEqual = false;

let addSubjectBtn = document.getElementById("addSubjectBtn");

let storage = localStorage.getItem("subjects");

var subjects = (storage == null) ? {} : JSON.parse(storage);
const standardSubjectsSet = [["Deutsch", 2], ["Englisch", 2], ["Geografie", 1], 
["Geschichte", 1], ["Informatik", 1], ["Kunst", 1], ["Latein", 2], ["Mathe", 2], 
["Musik", 2], ["Physik", 1], ["PuG", 1], ["Religion", 1], ["Spanisch", 2], 
["Sport", 1], ["Wirtschaft", 1]];

let saveDataAsFile = document.getElementById("saveDataAsFile");
let selectFileBtn = document.getElementById("selectFileBtn");

let confirmToBackoutApplication = document.getElementById("confirmToBackoutApplication");

let addGradeDivBtn = document.getElementById("addGradeDivBtn");
let confirmToDeleteThisCell = document.getElementById("confirmToDeleteThisCell");
let confirmToDeleteThisGrade = document.getElementById("confirmToDeleteThisGrade");
let selectGradePlaceholder = document.getElementById("selectGradePlaceholder");

let confirmRenaming = document.getElementById("confirmRenaming");
let confirmToDeleteThisSubject = document.getElementById("confirmToDeleteThisSubject");
let confirmToChangeThisSubjectWeighting = document.getElementById("confirmToChangeThisSubjectWeighting");

let confirmLoadStandardSetBtn = document.getElementById("confirmLoadStandardSetBtn");

let statisticsPopup = document.getElementById("statisticsPopup");
let statisticsBtn = document.getElementById("statisticsBtn");
let StatisticsPopupFinishedBtn = document.getElementById("StatisticsPopupFinishedBtn");

const xValues = ["1er", "2er", "3er", "4er", "5er", "6er"];
const yArray = [0, 0, 0, 0, 0, 0];
const barColors = ["green", "darkgreen","yellow","orange","red","red"];
let numberKLNs = 0;
let numberGLNs = 0;

let defaultLoginBtn = document.getElementById("defaultLoginBtn");
let loginDiv = document.getElementById("loginDiv");
let defaultCloseLoginDiv = document.getElementById("defaultCloseLoginDiv");

let defaultUserAndAppInfoBtn = document.getElementById("defaultUserAndAppInfoBtn");
let userAndAppInfoDiv = document.getElementById("userAndAppInfoDiv");

let defaultNavigation_loggedOut = document.getElementById("defaultNavigation_loggedOut");
let defaultNavigation_loggedIn = document.getElementById("defaultNavigation_loggedIn");
let startToLoginBtn = document.getElementById("startToLoginBtn");
let defaultAppInfoBtn = document.getElementById("defaultAppInfoBtn");

let dataRef;
let userIsLoggedIn = false;
let stayLoggedIn = document.getElementById("stayLoggedIn");