export function calculateSingleAverages() {
    let tr = document.querySelectorAll("tr");
    let entireAverage = 0;
    let averageCounter = 0;
    for (let i = 1; i < tr.length; i++) {
        let kln = Number(calculateSingleAverage("kln", i)) ;//i!!!
        let gln = Number(calculateSingleAverage("gln", i));
        let weighting = Number(subjects[tr[i].id]["gewichtung"]);//i!!!
        let overallAverage = 0;
        if (gln < 1 && kln < 1) {
            overallAverage = 0;
            tr[i].children[3].innerHTML = "-";
            //tr[i].children[3].style.backgroundColor = "white";
            /*tr[i].children[3].fontWeight = "normal";
            tr[i].children[3].textAlign = "left";
            tr[i].children[3].color = "black";*/
        } else if (gln < 1) {
            overallAverage = kln.toFixed(2).replace(".", ",");
            entireAverage += Number(overallAverage.replace(",", "."));
            averageCounter += 1;
            tr[i].children[3].innerHTML = overallAverage;
            setGradeColor(overallAverage, tr[i]);
        } else if (kln < 1) {
            overallAverage = gln.toFixed(2).replace(".", ",");
            entireAverage += Number(overallAverage.replace(",", "."));
            averageCounter += 1;
            tr[i].children[3].innerHTML = overallAverage;
            setGradeColor(overallAverage, tr[i]);
        } else {
            overallAverage = (((weighting * gln) + kln) / (weighting + 1)).toFixed(2).replace(".", ",");
            entireAverage += Number(overallAverage.replace(",", "."));
            averageCounter += 1;
            tr[i].children[3].innerHTML = overallAverage;
            setGradeColor(overallAverage, tr[i]);
        }
    }
    entireAverage = (entireAverage / (averageCounter)).toFixed(2);
    let averageAllSubjects = document.getElementById("averageAllSubjects");
    averageAllSubjects.innerHTML = "&#216;";
    averageAllSubjects.style.color = "white";
    document.getElementById("averageAllSubjectsDiv").style.backgroundColor = "grey";
    if (!isNaN(entireAverage)) {
        averageAllSubjects.innerHTML = entireAverage.toString().replace(".", ",");
        averageAllSubjects = document.getElementById("averageAllSubjectsDiv");
        switch (true) {
            case entireAverage <= 1.5:
                averageAllSubjects.style.backgroundColor = "green";
                break;
            case entireAverage <= 2.5:
                averageAllSubjects.style.backgroundColor = "darkgreen";
                break;
            case entireAverage <= 3.5:
                averageAllSubjects.style.backgroundColor = "yellow";
                break;
            case entireAverage <= 4.5:
                averageAllSubjects.style.backgroundColor = "darkorange";
                break;
            case entireAverage > 4.5:
                averageAllSubjects.style.backgroundColor = "red";
                break;
        }
    }
}

function calculateSingleAverage(glnOrKln, i) {
    let tr = document.querySelectorAll("tr");
    let average = 0;
    let x = subjects[tr[i].id][glnOrKln];
    if (x.length == 1) average = x[0];
    else if (x.length > 1) {
        for (let i2 = 0; i2 < x.length; i2++) {
            average += Number(x[i2]);
        }
        average /= x.length;
    }
    return average;
}

//This function sets different colors depending on the values of the averages
function setGradeColor(average, element) {
    let elStyle = element.children[3].style;
    average = average.replace(",", ".");
    average = Number(average);
    elStyle.fontWeight = "bold";
    elStyle.textAlign = "center";
    elStyle.color = "black";
    switch (true) {
        case average <= 1.5:
            elStyle.backgroundColor = "green";
            break;
        case average <= 2.5:
            elStyle.backgroundColor = "darkgreen";
            break;
        case average <= 3.5:
            elStyle.backgroundColor = "yellow";
            break;
        case average <= 4.5:
            elStyle.backgroundColor = "darkorange";
            break;
        case average > 4.5:
             elStyle.backgroundColor = "red";
            break;
    }
}
//End of function "setGradeColor