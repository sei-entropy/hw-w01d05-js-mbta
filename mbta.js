const stopsBetweenStations = function(
  startLine,
  startStation,
  endLine,
  endStation
) {
  // declare an object that has all lines
  const sourceOfRoutes = {
    Red: [
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

    Orange: [
      "North Station",
      "Haymarket",
      "Park Street",
      "State",
      "Downtown Crossing",
      "Chinatown",
      "Back Bay",
      "Forest Hills"
    ]
  };

  let stops = 0;
  if (startLine === endLine) {
    stops = Math.abs(
      sourceOfRoutes[startLine].indexOf(startStation) -
        sourceOfRoutes[endLine].indexOf(endStation)
    );

    return stops + "stops";
  }

  if (startLine !== endLine) {
    stops = Math.abs(
      sourceOfRoutes[startLine].indexOf(startStation) -
        sourceOfRoutes[startLine].indexOf("Park Street")
    );

    stops += Math.abs(
      sourceOfRoutes[endLine].indexOf(endStation) -
        sourceOfRoutes[endLine].indexOf("Park Street")
    );
    return stops + " stops";
  }
};
