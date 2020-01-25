const stopsBetweenStations = function (startLine, startStation, endLine, endStation) { // the function ...  {
    const lines = {
        Red: [
            'South Station',
            'Park Street',
            'Kendall',
            'Central',
            'Harvard',
            'Porter',
            'Davis',
            'Alewife',
        ],
        Green: [
            'Government Center',
            'Park Street',
            'Boylston',
            'Arlingrton',
            'Copley',
            'Hynes',
            'Kenmore',
        ],
        Orange: [
            'North Station',
            'Haymarket',
            'Park Street',
            'Downtown Crossing',
            'chinatown',
            'Back Bay',
            'Forest Hills',
        ]
    };

    const start=lines[startLine].indexOf(startStation) + 1;
    const stop =lines[endLine].indexOf(endStation) + 1;
    let  count=0;

    if (startLine === 'Red' && endLine === 'Red') 
        { 

                if (start > stop) // to avoid nigative nums.
                count += (start - stop);
                else if (start < stop)
                count += (stop - start );
                return count;
    
        }
    if (startLine === 'Red' && endLine === 'Green')
    {  
            if (start > stop) // to avoid nigative nums.
            count += (start - stop);
            else if (start < stop)
            count += (stop - start );
            return count;
        
    }

    if (startLine === 'Red' && endLine === 'Orange')
    { 
  
            if (start > stop) // to avoid nigative nums.
            count += (start - stop);
            else if (start < stop)
            count += (stop - start );
            return count;
        
    }

    if (startLine === 'Green' && endLine === 'Orange')
    { 
        const ParkStreet=stop+3; // ParkStreet index is 2 = 3 ..
    
           if (start > ParkStreet) // to avoid nigative nums.
           count += (start - ParkStreet);
           else if (start < ParkStreet)
           count += (ParkStreet - start );
           return count;
       
    }
}
console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife')); // 0 stops
console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station')); // 7 stops
console.log(stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore')); // 6 stops
console.log(stopsBetweenStations('Green', 'Government Center', 'Orange', 'North Station')); // 3 stops