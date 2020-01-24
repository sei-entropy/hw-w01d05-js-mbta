const lines = {
    Red: [
        "South Station",
        "Park Street",
        "Kendall",
        "Central",
        "Harvard",
        "Porter",
        "Davis",
        "Alewife"
    ],
    Green: [
        "Government Center",
        "Park Street",
        "Boylston",
        "Arlington",
        "Copley",
        "Hynes",
        "Kenmore"
    ],
    Orange: [
        "North Station",
        "Haymarket",
        "Park Street",
        "State",
        "Downtown Crossing",
        "Chinatown",
        "Back Bay",
        "Forest Hills"
    ]
};


const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
    let stops = 0;

    if (isInputValid(startLine, startStation, endLine, endStation)) {
        if (startLine === endLine && startStation === endStation) {
            return 0;
        }
        else if (startLine === endLine) {
            stops = stopsOnSameLine(startLine, startStation, endStation);

            const lineDirection = getMovingDirection(startLine, startStation, endStation);
            printLinesStops(startLine, startStation, endStation, lineDirection);
            return stops;
        }
        else {
            if (startStation === endStation) {
                return 0;
            }
            else {
                stops = stopsOnSameLine(startLine, startStation, "Park Street");
                stops += stopsOnSameLine(endLine, "Park Street", endStation);

                const startLineDirection = getMovingDirection(startLine, startStation, "Park Street");
                printLinesStops(startLine, startStation, "Park Street", startLineDirection);

                const endLineDirection = getMovingDirection(endLine, "Park Street", endStation);
                printLinesStops(endLine, "Park Street", endStation, endLineDirection);
                return stops;
            }
        }
    }
    else {
        console.log("Invalid input. Please try again.");
    }
};

const isInputValid = function (startLine, startStation, endLine, endStation) {
    const validLines = Object.keys(lines);

    if (validLines.indexOf(startLine) !== -1 && validLines.indexOf(endLine) !== -1) {
        if (lines[startLine].indexOf(startStation) !== -1 && lines[endLine].indexOf(endStation) !== -1) {
            return true;
        }
        else {
            console.log('Please use a valid station name for the respective lines');
            return false;
        }
    }
    else {
        console.log('Please only use Red, Green, or Orange for line names');
        return false;
    }
};

const stopsOnSameLine = function (line, startStation, endStation) {
    let stops = lines[line].indexOf(startStation) - lines[line].indexOf(endStation);
    if (stops < 0) {
        stops *= -1;
    }
    return stops;
};

const getMovingDirection = function(line, startStation, endStation){
    if(lines[line].indexOf(startStation) < lines[line].indexOf(endStation)){
        return "Forward";
    }
    else{
        return "Backwards";
    }
};

const printLinesStops = function(line, startStation, endStation, lineDirection){
    const indexOfStartStation = lines[line].indexOf(startStation);
    const indexOfEndStation = lines[line].indexOf(endStation);

    if(lineDirection === "Forward"){
        for(let i = indexOfStartStation; i <= indexOfEndStation; i++){
            console.log("Rider at " + line + " line and " + lines[line][i] + ".");
        }
    }
    else if(lineDirection === "Backwards"){
        for(let i = indexOfStartStation; i >= indexOfEndStation; i--){
            console.log("Rider at " + line + " line and " + lines[line][i] + ".");
        }
    }
};

