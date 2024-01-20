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

  firebase.initializeApp(firebaseConfig);

  // Session-Persistenz einstellen
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

  // Authentifizierungsstatus überprüfen
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // Benutzer ist angemeldet
      console.log("Benutzer ist angemeldet:", user.email);
    } else {
      // Benutzer ist abgemeldet
      console.log("Benutzer ist abgemeldet");
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
      })
      .catch(function(error) {
        // Fehler behandeln
        var fehlercode = error.code;
        var fehlermeldung = error.message;
        console.error("Anmeldefehler:", fehlermeldung);
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