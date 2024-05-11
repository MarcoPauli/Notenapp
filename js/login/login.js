import { showSingleHTMLElement } from "../general/main.js";
import { showInformation } from "../general/notification.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwGcAwsDR0kaVc_jCHg48zFEFKVR1DU6A",
    authDomain: "notenapp-57c2e.firebaseapp.com",
    databaseURL: "https://notenapp-57c2e-default-rtdb.firebaseio.com",
    projectId: "notenapp-57c2e",
    storageBucket: "notenapp-57c2e.appspot.com",
    messagingSenderId: "385790756182",
    appId: "1:385790756182:web:f915c485f3b06075a442f7"
  };

  startToLoginBtn.addEventListener("click", login);
  
  firebase.initializeApp(firebaseConfig);
  
  // Session-Persistenz einstellen
  //firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  
  // Authentifizierungsstatus überprüfen
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // Benutzer ist angemeldet
      console.log("Benutzer ist angemeldet:", user);
      defaultNavigation_loggedOut.style.display = "none";
      defaultNavigation_loggedIn.style.display = "block";
  
      // Retrieve user data from the Realtime Database
      dataRef = firebase.database().ref('users/' + user.uid);
      dataRef.once('value').then(function(snapshot) {
        var userData = snapshot.val();
        //console.log("User Data:", userData);
        // Now you can use userData in your application
        //localStorage.setItem("subjects", JSON.stringify(userData.subjects));
        if (userData.subjects != undefined) {
          console.log("nicht undefined")
          subjects = userData.subjects;
        } else if (userData.subjects === undefined) {
          console.log("undefined")
          subjects = {};
        }
        
        for (let x in userData.subjects) {
          console.log("hoi")
          showSingleHTMLElement(userData.subjects[x]["Name"]);
      }
      let defaultUserAndAppInfoBtn = document.getElementById("defaultUserAndAppInfoBtn");
      defaultUserAndAppInfoBtn.innerHTML = userData.userName;
      return userIsLoggedIn = true;
        
      }).catch(function(error) {
        console.error("Error fetching user data:", error);
        showInformation(error);
      });
    } else {
      // Benutzer ist abgemeldet
      console.log("Benutzer ist abgemeldet");
      defaultNavigation_loggedOut.style.display = "block";
      defaultNavigation_loggedIn.style.display = "none";
    }
  });
    
  // Funktion zum Anmelden
  function login() {
    let email = document.getElementById('email').value;
    let passwort = document.getElementById('password').value;
  
    console.log("Versuche, dich anzumelden...");
  
    firebase.auth().signInWithEmailAndPassword(email, passwort)
      .then(function(userCredential) {
        // Anmeldung erfolgreich
        var user = userCredential.user;
        console.log("Anmeldung erfolgreich:", user.email);
        if (stayLoggedIn.checked) {
          firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        } else {
          firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
        }
        localStorage.clear();
        window.location = "";
      })
      .catch(function(error) {
        // Fehler behandeln
        var fehlercode = error.code;
        var fehlermeldung = error.message;
        console.error("Anmeldefehler:", fehlermeldung);
        showInformation(fehlermeldung, "red")
      });
  }
  
  // Funktion zum Abmelden
  function abmelden() {
    firebase.auth().signOut()
      .then(function() {
        // Abmeldung erfolgreich
        console.log("Abmeldung erfolgreich");
      })
      .catch(function(error) {
        // Fehler behandeln
        console.error("Abmeldungsfehler:", error);
      });
  }
  