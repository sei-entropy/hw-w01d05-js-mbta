const MBTA = {
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
    Green : [
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
        'Downtown Crossing',
        'Chinatown',
        'Back Bay',
        'Forest Hills'
    ]
}

const stopsBetweenStations = function(startLine,startStation, endLine, endStation){
    if(startLine === endLine){
        return `${Math.abs(MBTA[endLine].indexOf(endStation) - MBTA[startLine].indexOf(startStation))} stops`
    } else {
        let firstLine = Math.abs(MBTA[startLine].indexOf("Park Street") - MBTA[startLine].indexOf(startStation))
        let secondLine = Math.abs(MBTA[endLine].indexOf("Park Street") - MBTA[endLine].indexOf(endStation))
        return `${firstLine+secondLine} stops`;
    }
} 