export function checkID(name) {
    for (let x in subjects) {
        if(subjects[x]["Name"] == name) {
            setIsEqual(true);
            break;
        }
    }
}

function setIsEqual (bool) {
    isEqual = bool;
    return bool;
}