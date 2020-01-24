

let count = 0 ;
const subway = {

     Red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
	  Green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
	  Orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
	}

    const findTheSubway = function(startLine, startStation, endLine, endStation){
           
        


     const startIndex = subway[startLine].indexOf(startStation)
	   const endIndex = subway[endLine].indexOf(endStation)
    
          if (startLine === endLine){
           

                  if (startIndex<=endIndex )
                  {

                    count = endIndex - startIndex
                    
                  }

                  else {
                    count = startIndex - endIndex
                  
                  }
                 
           }


           else {

            const parkstreetStartline = subway[startLine].indexOf('Park Street')
            const parkstreetEndline = subway[endLine].indexOf('Park Street')

                 if (parkstreetStartline<=startIndex )
                  { toParkstationStart = startIndex - parkstreetStartline ;   }
                  else {

                      toParkstationStart = parkstreetStartline - startIndex;
                  }


                  if (parkstreetEndline<=endIndex )
                  { toParkstationEnd = endIndex - parkstreetEndline ;   }
                  else {

                      toParkstationEnd = parkstreetEndline - endIndex;
                  }

             
           

                 count = toParkstationStart + toParkstationEnd
                  


           }//end else 
                          return " Total number of stops for the trip "+count
          }//funcition
               
        



console.log(findTheSubway('Red', 'Alewife', 'Red', 'Alewife')) // 0 stops
console.log(findTheSubway('Red', 'Alewife', 'Red', 'South Station')) // 7 stops
console.log(findTheSubway('Red', 'South Station', 'Green', 'Kenmore')) // 6 stops