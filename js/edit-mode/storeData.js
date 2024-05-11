export function storeData() {
    if (!userIsLoggedIn) {
        alert("!userisloggedin")
        localStorage.setItem("subjects", JSON.stringify(subjects));
    } else if (navigator.onLine && userIsLoggedIn) {
        alert("user is online and logged in")
        let updates = {
            subjects: subjects
        }
        dataRef.update(updates);
        

        
    } else if (!navigator.onLine) {
        alert("Keine internetverbindung...")
    }
}