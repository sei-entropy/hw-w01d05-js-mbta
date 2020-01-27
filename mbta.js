
const subWayLine={
  Red : [
"South Station",
"Park Street",
"Kendall",
"Central",
"Harvard",
"Porter",
"Davis",
"Alewife"
],
Green: [
"Government Center",
"Park Street",
"Boylston",
"Arlington",
"Copley",
"Hynes",
"Kenmore"
],

 Orange : [
     "North Station",
     "Haymarket",
     "Park Street",
     "State",
     "Downwn Crossing",
     "Chinatown",
     "Back Bay",
     "Forest Hills"
 ]
};

   const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  const indexStartStation = subWayLine[startLine].indexOf(startStation)
  const indexEndStation = subWayLine[endLine].indexOf(endStation)
  if (startLine === endLine) {
    return Math.abs(indexStartStation - indexEndStation)
  }
    const indexParkStreetSl = subWayLine[startLine].indexOf("Park Street");
    const indexParkStreetEl = subWayLine[endLine].indexOf("Park Street");
    const startLineDist = Math.abs(indexParkStreetSl - indexStartStation);
    const endlineDist = Math.abs(indexParkStreetEl - indexEndStation);
  const totel=startLineDist+endlineDist;
    return totel;
  }