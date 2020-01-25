const stopsBetweenStations = function(startLine, startStation, endLine, endStation){
    var subwayLines ={ Red:['South Station', 
                            'Park Street',
                            'Kendall', 
                            'Central',
                            'Harvard',
                            'Porter',
                            'Davis',
                            'Alewife'],
                        Green:['Government Center',
                            'Park Street',
                            'Boylston',
                            'Arlington',
                            'Copley',
                            'Hynes',
                            'Kenmore'],
                        Orange:['North Station',
                                'Haymarket',
                                'Park Street',
                                'State',
                                'Downtown Crossing',
                                'Chinatown',
                                'Back Bay',
                                'Forest Hills'],};
    
    startStation = subwayLines[startLine].indexOf(startStation);
    endStation = subwayLines[endLine].indexOf(endStation);
    return Math.abs(startStation - endStation)+' stops';
    
    };

stopsBetweenStations('Red','South Station','Red','Alewife');
stopsBetweenStations('Red','Alewife','Red','Alewife');
stopsBetweenStations('Red','South Station','Green','Kenmore');