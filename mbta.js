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

switch (startLine){ 
    case ('Red') : 
    { 
        if (endLine === 'Red') 
        {
            if (start > stop) // to avoid nigative nums.
                count += (start - stop);
                else if (start < stop)
                count += (stop - start );
                return count;

        }
        if (endLine === 'Green')
        {  
                if (start > stop) // to avoid nigative nums.
                count += (start - stop);
                else if (start < stop)
                count += (stop - start );
                return count;
            
        }
        if (endLine === 'Orange')
        {  const ParkStreet=stop+3; // ParkStreet index is 2 = 3 ..
    
            if (start > ParkStreet) // to avoid nigative nums.
            count += (start - ParkStreet);
            else if (start < ParkStreet)
            count += (ParkStreet - start );
            return count; }

    }

    case ('Green'):
        { 
            if (endLine === 'Red') 
            {
                const ParkStreet=stop+2;
                if (start > ParkStreet) // to avoid nigative nums.
                    count += (start - ParkStreet);
                    else if (start < ParkStreet)
                    count += (ParkStreet - start );
                    return count;
    
            }
            if (endLine === 'Green')
            {  
                    if (start > stop) // to avoid nigative nums.
                    count += (start - stop);
                    else if (start < stop)
                    count += (stop - start );
                    return count;
                
            }
            if (endLine === 'Orange')
            { {  const ParkStreet=stop+3; // ParkStreet index is 2 = 3 ..
    
                if (start > ParkStreet) // to avoid nigative nums.
                count += (start - ParkStreet);
                else if (start < ParkStreet)
                count += (ParkStreet - start );
                return count; }
     }
        }
        case('Orange') :
        if (endLine === 'Red') 
        {  const ParkStreet=stop+1; // ParkStreet index is 2 = 3 ..
    
            if (start > ParkStreet) // to avoid nigative nums.
            count += (start - ParkStreet);
            else if (start < ParkStreet)
            count += (ParkStreet - start );
            return count; 
        }
        if (endLine === 'Green')
        {  const ParkStreet=stop+1; // ParkStreet index is 2 = 3 ..
    
            if (start > ParkStreet) // to avoid nigative nums.
            count += (start - ParkStreet);
            else if (start < ParkStreet)
            count += (ParkStreet - start );
            return count; 
        }
        if (endLine === 'Orange')
        {  if (start > stop) // to avoid nigative nums.
            count += (start - stop);
            else if (start < stop)
            count += (stop - start );
            return count; }
}
}
console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife')); // 0 stops
console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station')); // 7 stops
console.log(stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore')); // 6 stops

console.log(stopsBetweenStations('Green', 'Government Center', 'Orange', 'North Station')); // 3 stops
console.log(stopsBetweenStations('Green', 'Government Center', 'Green', 'Kenmore')); // 6 stops
console.log(stopsBetweenStations('Green', 'Government Center', 'Red', 'South Station')); // 2 stops

console.log(stopsBetweenStations('Orange', 'North Station', 'Red', 'Alewife')); // 8 stops
console.log(stopsBetweenStations('Orange', 'Haymarket', 'Green', 'Kenmore')); // 6 stops
console.log(stopsBetweenStations('Orange', 'Park Street', 'Orange', 'North Station'));  // 2 stops