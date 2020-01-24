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
    // set the startingPath and endingPath to the appropiate arrays: 
    switch(startingPath) {
        case 'Red': 
            startingPath = redPath; 
            break; 
        case 'Green': 
            startingPath = greenPath; 
            break; 
        case 'Orange': 
            startingPath = orangePath; 
            break; 
        default:
            return 'Starting Path is not registered in the system.'
    }

    switch(endingPath) {
        case 'Red': 
            endingPath = redPath; 
            break; 
        case 'Green': 
            endingPath = greenPath; 
            break; 
        case 'Orange': 
            endingPath = orangePath; 
            break; 
        default:
            return 'Ending Path is not registered in the system.'
    }
    // Validate the stations arguments are registered in the arrays: 
    // if(startingPath.indexOf(startingStation) ===  -1 || endingPath.indexOf(endingStation) === -1) return 'Starting station or Ending station are not registered in the system';
    // Check to see if the starting and ending station are in the same path
    if(startingPath === endingPath) {
        const indexStartingStation = startingPath.indexOf(startingStation);
        const indexEndingStation = startingPath.indexOf(endingStation);
        const min = Math.min(indexStartingStation, indexEndingStation);
        const max = Math.max(indexStartingStation, indexEndingStation);
        const numStation = max - min; 
        // for(let i = min; i <= max; i++) {
        //     console.log(startingPath[i]);
        // }
        return numStation;
    } else {
        const indexStartingStation = startingPath.indexOf(startingStation);
        const indexEndingStation = endingPath.indexOf(endingStation);
        const indexParkStreetStartingPathStation = startingPath.indexOf('Park Street');
        const indexParkStreetEndingPathStation = endingPath.indexOf('Park Street');
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
// console.log(stopsBetweenStations('Red', 'North Station', 'Green', 'Kenmore')); // Starting station or Ending station are not registered in the system
console.log(stopsBetweenStations('Red', 'South Station', 'Blue', 'Kenmore')); // Ending Path is not registered in the system.
console.log(stopsBetweenStations('Purple', 'South Station', 'Green', 'Kenmore')); // Starting Path is not registered in the system.
