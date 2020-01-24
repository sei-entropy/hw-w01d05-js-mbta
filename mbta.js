const subway ={
    Red: ['South Station'
    , 'Park Street',
     'Kendall', 
     'Central', 
    'Harvard', 
    'Porter', 
    'Davis', 
    'Alewife'],
   Green:  ['Government Center', 
   'Park Street',
    'Boylston', 
    'Arlington',
     'Copley',
      'Hynes', 
      'Kenmore'],
   Orange: ['North Station','Haymarket', 
    'Park Street', 
    'State',
     'Downtown Crossing',
      'Chinatown','Back Bay', 'Forest Hills']
   }
   const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  const indexStartStation = subway[startLine].indexOf(startStation)
  const indexEndStation = subway[endLine].indexOf(endStation)
  if (startLine === endLine) {
    return Math.abs(indexEndStation - indexStartStation)
  }
    const indexParkStreetSl = subway[startLine].indexOf('Park Street');
    const indexParkStreetEl = subway[endline].indexOf('Park Steet');
    const startLineDist = Math.abs(indexParkStreetSl - indexStartStation);
    const endlineDist = Math.abs(indexParkStreetEl - indexEndStation);
  const totel=startLineDist+ndlineDist;
    return totel;
  }

