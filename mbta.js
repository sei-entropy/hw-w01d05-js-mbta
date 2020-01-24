const stopsBetweenStations = function(startingPath, startingStation, endingPath, endingStation) {
    // Data Structures
    // First arrays that represents the paths: 
    const redPath = ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife']; 
    const greenPath = ['Government Officer', 'Park Street', 'Bayton', 'Arlington', 'Copley', 'Hynes', 'Kenmore'];
    const orangePath = ['North Station', 'Haymarker', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']; 
    // Second is the object that represent the subway paths: 
    let subwayPaths = {
        red: redPath, 
        green: greenPath, 
        orange: orangePath,
    };
    let startingPathString; 
    let endingPathString;
    // set the startingPath and endingPath to the appropiate arrays: 
    switch(startingPath) {
        case 'Red': 
            startingPathString = startingPath;
            startingPath = redPath; 
            break; 
        case 'Green': 
            startingPathString = startingPath;
            startingPath = greenPath; 
            break; 
        case 'Orange': 
            startingPathString = startingPath;
            startingPath = orangePath; 
            break; 
        default:
            return 'Starting Path is not registered in the system.'; 
    }

    switch(endingPath) {
        case 'Red': 
            endingPathString = endingPath;
            endingPath = redPath; 
            break; 
        case 'Green': 
            endingPathString = endingPath;
            endingPath = greenPath; 
            break; 
        case 'Orange': 
            endingPathString = endingPath;
            endingPath = orangePath; 
            break; 
        default:
            return 'Ending Path is not registered in the system.';
    }
    // Validate the stations arguments are registered in the arrays: 
    if(startingPath.indexOf(startingStation) ===  -1 || endingPath.indexOf(endingStation) === -1) return 'Starting station or Ending station are not registered in the system';
    // Check to see if the starting and ending station are in the same path
    if(startingPath === endingPath) {
        const indexStartingStation = startingPath.indexOf(startingStation);
        const indexEndingStation = startingPath.indexOf(endingStation);
        const min = Math.min(indexStartingStation, indexEndingStation);
        const max = Math.max(indexStartingStation, indexEndingStation);
        const numStation = max - min; 
        // Printing the path:
        if(indexStartingStation === min && numStation !== 0) {
            for(let i = min; i <= max; i++) {
                if(i === min) console.log('Rider boards the train a ' + startingPathString + ' Line and ' + startingPath[i] + '.');
                else if(i === max) console.log(console.log('Rider exits the train at ' + startingPathString + ' and ' + startingPath[i] + '.'));
                else console.log('Rider arrives at ' + startingPathString + ' and ' + startingPath[i] + '.');
            }
        } else if(numStation !== 0) {
            for(let i = max; i >= min; i--) {
                if(i === max) console.log('Rider boards the train a ' + startingPathString + ' Line and ' + startingPath[i] + '.');
                else if(i === min) console.log(console.log('Rider exits the train at ' + startingPathString + ' and ' + startingPath[i] + '.'));
                else console.log('Rider arrives at ' + startingPathString + ' and ' + startingPath[i] + '.');
            }
        }
        return numStation;
    } else {
        const indexStartingStation = startingPath.indexOf(startingStation);
        const indexEndingStation = endingPath.indexOf(endingStation);
        const indexParkStreetStartingPathStation = startingPath.indexOf('Park Street');
        const indexParkStreetEndingPathStation = endingPath.indexOf('Park Street');
        if(indexStartingStation < indexParkStreetStartingPathStation) {
            for(let i = indexStartingStation; i <= indexParkStreetStartingPathStation; i++) {
                if(i === indexStartingStation) console.log('Rider boards the train a ' + startingPathString + ' Line and ' + startingPath[i] + '.');
                else console.log('Rider arrives at ' + startingPathString + ' and ' + startingPath[i] + '.');
            }
            if(indexParkStreetEndingPathStation < indexEndingStation) {
                for(let i = indexParkStreetEndingPathStation; i <= indexEndingStation; i++) {
                    if(i === indexParkStreetEndingPathStation) console.log('Rider transfers from ' + startingPathString + ' Line to ' + endingPathString + ' Line at ' + endingPath[i] + '.');
                    else if(i === indexEndingStation) console.log('Rider exits the train at ' + endingPathString + ' and ' + endingPath[i] + '.');
                    else console.log('Rider arrives at ' + endingPathString + ' and ' + endingPath[i] + '.');
                }
            } else {
                for(let i = indexParkStreetEndingPathStation; i >= indexEndingStation; i--) {
                    if(i === indexParkStreetEndingPathStation) console.log('Rider transfers from ' + startingPathString + ' Line to ' + endingPathString + ' Line at ' + endingPath[i] + '.');
                    else if(i === indexEndingStation) console.log('Rider exits the train at ' + endingPathString + ' and ' + endingPath[i] + '.');
                    else console.log('Rider arrives at ' + endingPathString + ' and ' + endingPath[i] + '.');
                }
            }
        } else {
            for(let i = indexParkStreetStartingPathStation; i >= indexStartingStation; i--) {
                if(i === indexParkStreetStartingPathStation) console.log('Rider boards the train a ' + startingPathString + ' Line and ' + startingPath[i] + '.');
                else console.log('Rider arrives at ' + startingPathString + ' and ' + startingPath[i] + '.');
            }
            if(indexParkStreetEndingPathStation < indexEndingStation) {
                for(let i = indexParkStreetEndingPathStation; i <= indexEndingStation; i++) {
                    if(i === indexParkStreetEndingPathStation) console.log('Rider transfers from ' + startingPathString + ' Line to ' + endingPathString + ' Line at ' + endingPath[i] + '.');
                    else if(i === indexEndingStation) console.log('Rider exits the train at ' + endingPathString + ' and ' + endingPath[i] + '.');
                    else console.log('Rider arrives at ' + endingPathString + ' and ' + endingPath[i] + '.');
                }
            } else {
                for(let i = indexParkStreetEndingPathStation; i >= indexEndingStation; i--) {
                    if(i === indexParkStreetEndingPathStation) console.log('Rider transfers from ' + startingPathString + ' Line to ' + endingPathString + ' Line at ' + endingPath[i] + '.');
                    else console.log('Rider arrives at ' + endingPathString + ' and ' + endingPath[i] + '.');
                }
            }
        }
        const minStartingPath = Math.min(indexStartingStation, indexParkStreetStartingPathStation);
        const maxStartingPath = Math.max(indexStartingStation, indexParkStreetStartingPathStation);
        const minEndingPath = Math.min(indexEndingStation, indexParkStreetEndingPathStation);
        const maxEndingPath = Math.max(indexEndingStation, indexParkStreetEndingPathStation);
        const numStationStartingPath = maxStartingPath - minStartingPath; 
        const numStationEndingPath = maxEndingPath - minEndingPath; 
        const numStation = numStationStartingPath + numStationEndingPath;
        return numStation;
    }
};

console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife')); // 0 stops
console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station')); // 7 stops
console.log(stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore')); // 6 stops
console.log(stopsBetweenStations('Red', 'North Station', 'Green', 'Kenmore')); // Starting station or Ending station are not registered in the system
console.log(stopsBetweenStations('Red', 'South Station', 'Blue', 'Kenmore')); // Ending Path is not registered in the system.
console.log(stopsBetweenStations('Purple', 'South Station', 'Green', 'Kenmore')); // Starting Path is not registered in the system.
