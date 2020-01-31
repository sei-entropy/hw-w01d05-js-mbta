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
        let stop = Math.abs (startIndex - endIndex) ;

      
    return stop }
      else {

        let ofPark = subwayLines[startLine].indexOf(startStation)
        let firstStop = subwayLines[startLine].indexOf('Park Street')
        let firstPark = Math.abs( ofPark - firstStop )

        let ofPark1 = subwayLines[startLine].indexOf(startStation)
        let firstStop1 = subwayLines[startLine].indexOf('Park Street')
        let firstPark2 = Math.abs( ofPark1 - firstStop1 )

        let ofPark2 = subwayLines[startLine].indexOf(startStation)
        let firstStop2 = subwayLines[startLine].indexOf('Park Street')
        let firstPark3 = Math.abs( ofPark2 - firstStop2 )

        let ofPark3 = subwayLines[startLine].indexOf(startStation)
        let firstStop3 = subwayLines[startLine].indexOf('Park Street')
        let firstPark4 = Math.abs( ofPark3 - firstStop3 )

        let Park2 = subwayLines[endLine].indexOf(endStation)
        let indexFinalStop = subwayLines[endLine].indexOf('Park Street')
        let finalPark = Math.abs(Park2 - indexFinalStop )



        let stop = firstPark + finalPark + firstPark2 + firstPark3 + firstPark4
      
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



console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife')+ ' stops' ) // 0 stops
console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station')+ ' stops' ) // 7 stops
console.log(stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore')+ ' stops' ) // 6 stops

