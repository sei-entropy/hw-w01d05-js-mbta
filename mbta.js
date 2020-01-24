

const subWayLine= {
         Red : [
    'South Station',
    'Park Street',
    'Kendall',
    'Central',
    'Harvard',
    'Porter',
    'Davis',
    'Alewife'
    ],
Green: [
    'Government Center',
    'Park Street',
    'Boylston',
    'Arlington',
    'Copley',
    'Hynes',
    'Kenmore'
],
    
        Orange : [
            'North Station',
            'Haymarket',
            'Park Street',
            'State',
            'Downwn Crossing',
            'Chinatown',
            'Back Bay',
            'Forest Hills'
        ]
    };

const stopsBetweenStations = function(startLine,startStation, endLine ,endStation){

    const startStationIndex = subWayLine[startLine].indexOf(startStation);
                                                  
    const endStationIndex = subWayLine[endLine].indexOf(endStation);
    if(startLine === endLine){
      return Math.abs(startStationIndex - endStationIndex);
    }
    const parkStartIndex = subWayLine[startLine].indexOf('Park Street');
    const parkEndIndex = subWayLine[endLine].indexOf('Park Street');
    const stopsToPark = Math.abs(startStationIndex - parkStartIndex);
    const stopsFromPark =Math.abs(parkEndIndex - endStationIndex);
    const totalStopsViaPark =stopsToPark + stopsFromPark;
    return totalStopsViaPark ;
}