

const subwayLines = {
    'Red': ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
    'Green': ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore '],
    'Orange': ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crocssing', 'Chinatown', 'Back Bay', 'Forest Hills']
};

const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  
     startLine = lettersCase(startLine);
    startStation = lettersCase(startStation);
    endLine = lettersCase(endLine);
    endStation = lettersCase(endStation);
    
    if (startLine === endLine) {
       let startIndex = subwayLines[startLine].indexOf(startStation)
        let endIndex = subwayLines[endLine].indexOf(endStation)
        let stop = Math.abs( startIndex - endIndex ) 
        return stop;

    } 
    
    else {

        let ofPark = subwayLines[startLine].indexOf('Park Street')
        let firstStop = subwayLines[startLine].indexOf(startStation)

        let firstPark = Math.abs( firstStop - ofPark )
        let indexFinalStop = subwayLines[endLine].indexOf(endStation)
        let finalPark = Math.abs(ofPark - indexFinalStop )

        let stop = firstPark + finalPark 
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
const validation = function (startLine, startStation, endLine, endStation) {
     if (!Object.keys(subwayLines).includes(startLine)) {
        return "Wrong start line.."
    }

    if (!Object.keys(subwayLines).includes(endLine)) {
        return "Wrong end line.."
    }

    if (!subwayLines[startLine].includes(startStation)) {
        return "Wrong start station.."
    }

    if (!subwayLines[endLine].includes(endStation)) {
        return "Wrong end station.."
    }
}

console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife')+ ' stops' );
console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station')+ ' stops' );


