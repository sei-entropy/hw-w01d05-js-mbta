
//stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife') // 0 stops
//stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station') // 7 stops
//stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore') // 6 stops

function MBTA(params) {
    let numberOfStops ;
}

function stopsBetweenStations( startLine, startStation, endLine, endStation ) {
    
    let stops ;

    const lines = {
        Red :['South Station','Park Street','Kendall','Central','Harvard','Porter','Davis','Alewife'],
        Green: ['Government Center','Park Street','Boylston','Arlington','Copley','Hynes','Kenmore'],
        Orange: ['North Station','Haymarket','Park Street','State','Downtown Crossing','Chinatown','Back Bay','Forest Hills'],
    }
    

    if ( startStation === endStation && startLine === endLine ) {
        stops = 0;
    }else if ( startLine === endLine && startStation !== endStation ) {

// Do arrays of start and end key 
        let sL = Object.values(lines[startLine]);
        let eL = Object.values(lines[endLine]);

// FOR to catch index of start station
        for (let i = 0; i < sL.length; i++) {
            if (sL[i] === startStation) {
                stops = i;
            }
        }
// FOR to catch index of end station        
         for (let i = 0; i < eL.length; i++) {
            if (eL[i] === endStation) {
              stops += i;
            }
        }

    }


    return console.log( stops +' stops');
}

/*
if (object.hasOwnProperty(key)) {
    const element = object[key]; }

*/