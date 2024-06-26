
/*
THIS FILE CONTAINS THE NECESSARY CODE TO SAVE USERDATA AS JSON-FILE AND TO USE DATA FROM SUCH JSON-FILES 
*/

import { storeData } from "../edit-mode/storeData.js";
import { userBackgroundColor } from "../general/theme.js";

// Eventlistener section of the file
saveDataAsFile.addEventListener("click", downloadJSON);
selectFileBtn.addEventListener("click", readFile);
//End of eventlistener section

//This function defines the code to download userdata as json-file
function downloadJSON() {
    // Convert the JSON data to a string
    let res;
    if (!userIsLoggedIn) {
      res = JSON.stringify(subjects, null, 2);
    } else if (userIsLoggedIn && navigator.onLine) {
      res = JSON.stringify(subjects, null, 2);
    }
    const jsonData = res;
  
    // Creating a Blob object
    const blob = new Blob([jsonData], { type: 'application/json' });
  
    // Creating a URL for the blob
    const url = URL.createObjectURL(blob);
  
    // Creating a link element
    const a = document.createElement('a');
  
    // Setting the link's href to the URL
    a.href = url;
  
    // Setting the file name
    const d = new Date();
    a.download = 'userData(' + d + ').json';
  
    // Simulating a click on the link to trigger the download
    a.click();
  
    // Releasing the URL object
    URL.revokeObjectURL(url);
  }
//End of function "downloadJSON"

//This function has to read a given file by the user and to use it
function readFile() {
    const input = document.getElementById('selectFile');
  
    // Check if any file is selected
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
  
      reader.onload = function(e) {
        // Display the file content
        if (!userIsLoggedIn) {
          localStorage.setItem("subjects", e.target.result);
        } else if (userIsLoggedIn && navigator.onLine) {
          subjects = JSON.parse(e.target.result);
          storeData();
        }
        window.location.href = window.location.href;
      };
  
      // Read the file as text
      reader.readAsText(file);
    }
  }
//End of function "readFile"
