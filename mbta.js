const subwayMap = {
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

function stopsBetweenStations(startLine, startStation, endLine, endStation) {
    const isValidate = validation(toTitleCase(startLine), toTitleCase(startStation), toTitleCase(endLine), toTitleCase(endStation))
    if (isValidate == true) {
        console.log("Rider boards the train a %s Line and %s.", startLine, startStation);
        if (startLine === endLine) {
            stopAtOneStation(startLine, startStation, endStation);
        } else {
            stopAtOneStation(startLine, startStation, 'Park Street');
            console.log("Rider transfers from %s Line to %s Line at Park Street.", startLine, endLine);
            stopAtOneStation(endLine, 'Park Street', endStation);
        }
        console.log("Rider exits the train a %s Line and %s.", endLine, endStation);
    } else {
        return console.log("mbta.js has stopped working");

    }
};

const toTitleCase = function (str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
};

function validation(startLine, startStation, endLine, endStation) {
    if (subwayMap.hasOwnProperty(startLine) && subwayMap.hasOwnProperty(endLine)) {
        if (subwayMap[startLine].includes(startStation) && subwayMap[endLine].includes(endStation)) {
            return true;
        } else {
            return console.log("Invalid Input: Please enter valid station(s) or the station(s) not available.");
        }
    } else {
        return console.log("Invalid Input: Please enter valid Line(s) or the station(s) not available.");
    }
};

const stopAtOneStation = function (StationLine, startStation, endStation) {
    const startStationIndex = subwayMap[StationLine].indexOf(startStation);
    const endStationIndex = subwayMap[StationLine].indexOf(endStation);
    if (startStationIndex < endStationIndex) {
        for (let i = startStationIndex + 1; i <= endStationIndex; i++) {
            console.log("Rider arrives at %s Line and %s.", StationLine, subwayMap[StationLine][i]);
        }
    } else {
        for (let i = startStationIndex - 1; i >= endStationIndex; i--) {
            console.log("Rider arrives at %s Line and %s.", StationLine, subwayMap[StationLine][i]);
        }
    }
    return true;
};





stopsBetweenStations('Red', 'South Station', 'Green', 'Copley')

// Rider boards the train a Red Line and South Station.
// Rider arrives at Red Line and Park Street.
// Rider transfers from Red Line to Green Line at Park Street.
// Rider arrives at Green Line and Boylston.
// Rider arrives at Green Line and Arlington.
// Rider arrives at Green Line and Copley.
// Rider exits the train at Green Line and Copley.