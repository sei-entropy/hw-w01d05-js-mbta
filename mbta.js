// Object contains all subway lines along with their stations
const subwayLines = {
    red: ['south station', 'park street', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
    green: ['government center', 'park street', 'boylston', 'arlington', 'copley', 'hynes', 'kenmore'],
    orange: ['north station', 'haymarket', 'park street', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills'],
};
    
const stopsBetweenStations = function(startLine, startStation, endLine, endStation) {

    // lower casing inputs
    startLine = startLine.toLowerCase();
    endLine = endLine.toLowerCase();
    startStation = startStation.toLowerCase();
    endStation = endStation.toLowerCase();

    // validation of the inputs
    if(subwayLines[startLine] === undefined || subwayLines[endLine] === undefined || subwayLines[startLine].indexOf(startStation) === -1 || subwayLines[endLine].indexOf(endStation) === -1){
        return 'Please enter a valid input.';
    }


    // declare variable to hold number of stops
    let count;

    // print rider boards the train
    console.log('Rider boards the train a ' + startLine.charAt(0).toUpperCase() + startLine.slice(1) + ' Line and ' + startStation.charAt(0).toUpperCase() + startStation.slice(1) + '.');

    // if the start subway line equals the end subway line
    if(startLine === endLine){
        count = sameLines(startLine, startStation, endStation);
    }
    // if the start & end lines are different
    else {
        count = differentLines(startLine, startStation, endLine, endStation);
    }

    // print rider exits the train
    console.log('Rider exits the train at ' + endLine.charAt(0).toUpperCase() + endLine.slice(1) + ' line and ' + endStation.charAt(0).toUpperCase() + endStation.slice(1) + '.');

    // return the number of stops
    return count;
}


const sameLines = function(line, startStation, endStation) {
    // extract the start, end arrays from the object
    const lineArr = subwayLines[line];

    // getting the index of the start & end station from their corresponding arrays
    const startStationIndex = lineArr.indexOf(startStation);
    const endStationIndex = lineArr.indexOf(endStation);

    let count = 0;
    // if index of start station is less than the index of the end station
    if(startStationIndex < endStationIndex){
        // loop around the array where the start point is the start station's index & ending point is the end station's index
        for(let i = startStationIndex+1; i <= endStationIndex; i++){
            // print rider at which line & station
            console.log('Rider arrives at ' + line + ' line and ' + lineArr[i] + '.');
            // increment the number of stops
            count++;
        }
    }
    // if the index of the start station is larger than the index of the end station
    else if(startStationIndex > endStationIndex) {
        // loop around the array where the starting point is the end station's index until we reach the start station's index
        for(let i = startStationIndex-1; i >= endStationIndex; i--){
            // print rider at which line & station
            console.log('Rider arrives at ' + line + ' line and ' + lineArr[i] + '.');
            // increment the number of stops
            count++;
        }
    }
    // return the number of stops to the main function
    return count;
}




const differentLines = function(startLine, startStation, endLine, endStation){
    // extract the start, end arrays from the object
    const startLineArr = subwayLines[startLine], endLineArr = subwayLines[endLine];

    // getting the index of the start & end station from their corresponding arrays
    const startStationIndex = startLineArr.indexOf(startStation);
    const endStationIndex = endLineArr.indexOf(endStation);

    let count = 0;

    // check if start station comes first in the array before park street
    if(startStationIndex < startLineArr.indexOf('park street')){
        // loop around start line array starting from the index of start station & increment till we reach park street
        for(let i = startStationIndex + 1; i <= startLineArr.indexOf('park street'); i++){
            // print rider at which line & station
            console.log('Rider arrives at ' + startLine.charAt(0).toUpperCase() + startLine.slice(1) + ' Line and ' + startLineArr[i].charAt(0).toUpperCase() + startLineArr[i].slice(1) + '.');
            // increment number of stops
            count++;
        }
    } 
    // else if the start station comes after park street in the array
    else {
        // loop around the start line array starting from park street as the starting point till we reach the actual start station's index
        for(let i = startLineArr.indexOf('park street')+1; i <= startStationIndex; i++){
            // print rider at which line & station
            console.log('Rider arrives at ' + startLine.charAt(0).toUpperCase() + startLine.slice(1) + ' Line and ' + startLineArr[i].charAt(0).toUpperCase() + startLineArr[i].slice(1) + '.');
            // increment number of stops
            count++;
        }
    }  

    // print rider change the line
    console.log('Rider transfers from ' + startLine.charAt(0).toUpperCase() + startLine.slice(1) + ' Line to ' + endLine.charAt(0).toUpperCase() + endLine.slice(1) + ' Line at Park Street');

    // check if the end station index comes before park street in the array
    if(endStationIndex < endLineArr.indexOf('park street')){
        // loop around end line array starting from end station index & increment till we reach the index of park street
        for(let i = endStationIndex+1; i <= endLineArr.indexOf('park street'); i++){
            // print rider at which line & station
            console.log('Rider arrives at ' + endLine.charAt(0).toUpperCase() + endLine.slice(1) + ' Line and ' + endLineArr[i].charAt(0).toUpperCase() + endLineArr[i].slice(1) + '.');
            // increment number of stops
            count++;
        }
    // else if end station index comes after park street in the array
    } else {
        // loop around end line array starting from park street till reaching end station's index
        for(let i = endLineArr.indexOf('park street')+1; i <= endStationIndex; i++){
            // print rider at which line & station
            console.log('Rider arrives at ' + endLine.charAt(0).toUpperCase() + endLine.slice(1) + ' Line and ' + endLineArr[i].charAt(0).toUpperCase() + endLineArr[i].slice(1) + '.');
            // increment number of stops
            count++;
        }
    }
    // return number of stops to main function
    return count;
}