// JS Object Modeling HW 

function stopsBetweenStations( startLine, startStation, endLine, endStation ) {

    const lines = {
        Red :['South Station','Park Street','Kendall','Central','Harvard','Porter','Davis','Alewife'],
        Green: ['Government Center','Park Street','Boylston','Arlington','Copley','Hynes','Kenmore'],
        Orange: ['North Station','Haymarket','Park Street','State','Downtown Crossing','Chinatown','Back Bay','Forest Hills'],
    }

    let stops ;
// Arrays of start and end key 
    let sL = Object.values(lines[startLine]);
    let eL = Object.values(lines[endLine]);
    
    
    if ( startStation === endStation && startLine === endLine ) {
        stops = 0;

    }else if ( startLine === endLine && startStation !== endStation ) {

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

    }else{
        
// FOR to find common Point  

         for (let i = 0; i < sL.length; i++) {
          if (sL[i] === 'Park Street') {
             stops = i;
           }
          }
// FOR to catch index of end station        
         for (let i = 0; i < eL.length; i++) {
            if (eL[i] === endStation) {
              stops += i -1 ;
            }
        }

    }


    return console.log( stops +' stops');
}
