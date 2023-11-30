saveDataAsFile.addEventListener("click", downloadJSON);
selectFileBtn.addEventListener("click", readFile);

function downloadJSON() {
    // Convert the JSON data to a string
    const jsonData = JSON.stringify(subjects, null, 2);
  
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

function readFile() {
    const input = document.getElementById('selectFile');
  
    // Check if any file is selected
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
  
      reader.onload = function(e) {
        // Display the file content
        localStorage.setItem("subjects", e.target.result);
        window.location.href = window.location.href;
      };
  
      // Read the file as text
      reader.readAsText(file);
    }
  }