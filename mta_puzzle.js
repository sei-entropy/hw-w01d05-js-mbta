// object contains all subway lines along with their stops
const subwayLines = {
    n: ['times sqaure', '34th', '28th', '23rd', 'union sqaure', '8th'],
    l: ['8th', '6th', 'union sqaure', '3rd', '1st'],
    6: ['grand central', '33rd', '28th', '23rd', 'union sqaure', 'astor']
};

let count = 0;
const planTrip = function(startLine, getOnStop, endLine, getOffStop) {
    // lower casing inputs
    startLine = startLine.toLowerCase();
    getOnStop = getOnStop.toLowerCase();
    endLine = endLine.toLowerCase();
    getOffStop = getOffStop.toLowerCase();


    // getting the index of the start & end station from their corresponding arrays
    const getOnStopIndex = subwayLines[startLine].indexOf(getOnStop);
    const getOffStopIndex = subwayLines[endLine].indexOf(getOffStop);


    // if the start subway line equals the end subway line
    if(startLine === endLine){
        const stopsArr = sameLines(startLine, getOnStopIndex, getOffStopIndex);
        console.log('You must travel through the following stops on the ' + startLine.charAt(0).toUpperCase() + startLine.slice(1) + ' line: ' + stopsArr.join(', ') + '.');
        console.log(count + ' stops in total.');
    }

    else {
        const stopsArr = differentLines(startLine, getOnStopIndex, endLine, getOffStopIndex);
        console.log('You must travel through the following stops on the '+ startLine.charAt(0).toUpperCase() + startLine.slice(1) + ' line: ' + stopsArr[0].join(', ') + '.');
        console.log('Change at Union Sqaure.');
        console.log('Your journey continues through the following stops: ' + stopsArr[1].join(', ') + '.');
        console.log(count + ' stops in total.');
    }
}



const sameLines = function(line, getOnStopIndex, getOffStopIndex) {
    // reset the counter each time
    count = 0;
    
    // extract the start, end arrays from the object
    const lineArr = subwayLines[line];

    let stopsArr = [];
    // if index of start station is less than the index of the end station
    if(getOnStopIndex < getOffStopIndex){
        // loop around the array where the start point is the start station's index & ending point is the end station's index
        for(let i = getOnStopIndex; i < getOffStopIndex; i++){
            // add the stop's name 
            stopsArr.push(lineArr[i+1]);
            // increment the number of stops
            count++;
        }
    }
    // if the index of the start station is larger than the index of the end station
    else if(getOnStopIndex > getOffStopIndex) {
        // loop around the array where the starting point is the end station's index until we reach the start station's index
        for(let i = getOnStopIndex; i > getOffStopIndex; i--){
            // add the stop's name 
            stopsArr.push(lineArr[i-1]);
            // increment the number of stops
            count++;
        }
    }
    // return the number of stops & the stops to the main function
    return stopsArr;
}




const differentLines = function(startLine, getOnStopIndex, endLine, getOffStopIndex) {
    // extract the start, end arrays from the object
    const startLineArr = subwayLines[startLine], endLineArr = subwayLines[endLine];
    let stopsArr = [[], []];
    count = 0;

    // check if start station comes first in the array before union sqaure
    if(getOnStopIndex < startLineArr.indexOf('union sqaure')){
        for(let i = getOnStopIndex+1; i < startLineArr.indexOf('union sqaure'); i++){
            stopsArr[0].push(startLineArr[i]);
            count++;
        }
    } 
    else {
        for(let i = getOnStopIndex-1 ; i > startLineArr.indexOf('union sqaure'); i--){
            stopsArr[0].push(startLineArr[i]);
            count++;
        }
    }  

    if(getOffStopIndex < endLineArr.indexOf('union sqaure')){
        for(let i = endLineArr.indexOf('union sqaure'); i > getOffStopIndex; i--){
            stopsArr[1].push(endLineArr[i-1]);
            count++;
        }
    } else {
        for(let i = endLineArr.indexOf('union sqaure'); i < getOffStopIndex; i++){
            stopsArr[1].push(endLineArr[i+1]);
            count++;
        }
    }
    return stopsArr;
}