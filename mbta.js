const subwayLines = {
    'Red': ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
    'Green': ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore '],
    'Orange': ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
};

const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
    startLine = lettersCase(startLine);
    startStation = lettersCase(startStation);
    endLine = lettersCase(endLine);
    endStation = lettersCase(endStation);
    let startIndex = subwayLines[startLine].indexOf(startStation)
    let endIndex = subwayLines[endLine].indexOf(endStation)
    if (startLine === endLine) {
        let stop = Math.abs(startIndex - endIndex)
        return stop;
    } else {
        startPark = subwayLines[startLine].indexOf('Park Street')
        endPark = subwayLines[endLine].indexOf('Park Street')
        let stop = Math.abs(startIndex - startPark) + Math.abs(endIndex - endPark)
        return stop

    }
}
const lettersCase = function (area){
    area = area.trimStart();
    area =  area.trimEnd();
    let newArea = "";
    let index = area.indexOf(" ");
    for (let i=0; i<area.length; i++){
        let c = area.charAt(i);
        if(i === 0 || i===index+1){
            c = c.toUpperCase();
            newArea = newArea+c;
            continue;
        }
        c = c.toLowerCase();
        newArea = newArea+c;

    }
    return newArea;
}

console.log(stopsBetweenStations(' red ', 'south Station', 'orange', 'North Station')+ ' stops' );


