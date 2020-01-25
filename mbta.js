const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
     const subwayLines ={
      Red:
     
      ['South Station', 'Park Street','Kendall','Central','Harvard','Porter','Davis', 'Alewife'],
     
     Green:
     
     ['Government Center', 'Park Street','Boylston', 'Arlington', 'Copley', 'Hynes','Kenmore'],
     
     Orange:
     ['North Station', 'Haymarket', 'Park Street','State','Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
     
     };
     count = 0;

     const indexOfstartStation = subwayLines[startLine].indexOf(startStation);
     console.log(indexOfstartStation);
     const indexOfEndStation = subwayLines[endLine].indexOf(endStation);
     console.log(indexOfEndStation); 

     if (startLine == endLine ){
          count =  Math.abs(indexOfEndStation - indexOfstartStation)
     }
     else {
          count =  Math.abs((subwayLines[startLine].indexOf('Park Street') - indexOfstartStation))
           +  Math.abs((indexOfEndStation - subwayLines[endLine].indexOf('Park Street')))
     
     }
     console.log(count); 

}