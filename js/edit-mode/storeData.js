export function storeData() {
    if (!userIsLoggedIn) {
        console.log("!userisloggedin")
        localStorage.setItem("subjects", JSON.stringify(subjects));
    } else if (navigator.onLine && userIsLoggedIn) {
        console.log("user is online and logged in")
        let updates = {
            subjects: subjects
        }
        dataRef.update(updates);
        

        
    } else if (!navigator.onLine) {
        console.log("Keine internetverbindung...")
    }
}
