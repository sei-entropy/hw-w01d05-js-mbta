const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
    var subwayLines = {
        Red: ['South Station',
            'Park Street',
            'Kendall',
            'Central',
            'Harvard',
            'Porter',
            'Davis',
            'Alewife'
        ],
        Green: ['Government Center',
            'Park Street',
            'Boylston',
            'Arlington',
            'Copley',
            'Hynes',
            'Kenmore'
        ],
        Orange: ['North Station',
            'Haymarket',
            'Park Street',
            'State',
            'Downtown Crossing',
            'Chinatown',
            'Back Bay',
            'Forest Hills'
        ],
    };
    //for line orange add 1
    if (startLine === 'Orange' || endLine === 'Orange') {
        startStation = subwayLines[startLine].indexOf(startStation);
        endStation = subwayLines[endLine].indexOf(endStation);
        return Math.abs(startStation - endStation) - 1 + ' stops';
    } else {
        startStation = subwayLines[startLine].indexOf(startStation);
        endStation = subwayLines[endLine].indexOf(endStation);
        return Math.abs(startStation - endStation) + ' stops';
    }
    //or 
    //     let stops = 0
    // if (startLine === endLine) {
    //     stops = Math.abs(
    //         subwayLines[startLine].indexOf(startStation) - subwayLines[endLine].indexOf(endStation)
    //     );
    //     return stops + " stops";
    // }
    // if (startLine !== endLine) {
    //     stops = Math.abs(
    //         subwayLines[startLine].indexOf(startStation) - subwayLines[startLine].indexOf("Park Street")
    //     );
    //     stops += Math.abs(
    //         subwayLines[endLine].indexOf(endStation) - subwayLines[endLine].indexOf("Park Street")
    //     );
    //     return stops + " stops";
    // }

};

stopsBetweenStations('Red', 'South Station', 'Red', 'Alewife');
stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife');
stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore');
stopsBetweenStations('Red', 'South Station', 'Orange', 'Forest Hills'); // return 6 stops
stopsBetweenStations('Orange', 'Forest Hills', 'Red', 'South Station'); // return 6 stops