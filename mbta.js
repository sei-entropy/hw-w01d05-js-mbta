let count = 0;

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

// declare the function
const stopsBetweenStations = function(
  startLine,
  startStation,
  endLine,
  endStation
) {
  const startLineIndex = sourceOfRoutes[startLine].indexOf(startStation);

  const endLineIndex = sourceOfRoutes[endLine].indexOf(endStation);

  if (startLine === endLine) {
    if (startLineIndex <= endLineIndex) {
      count = endLineIndex - startLineIndex;
    } else {
      count = startLineIndex - startLineIndex;
    }
  } else {
    const pkStartLine = sourceOfRoutes[startLine].indexOf("Park Street");
    const pkEndLine = sourceOfRoutes[endLine].indexOf("Park Street");

    if (pkStartLine <= startLineIndex) {
      toParkstationStart = startLineIndex - parkstreetStartline;
    } else {
      toParkstationStart = pkStartLine - startLineIndex;
    }

    if (pkEndLine <= startLineIndex) {
      toParkstationEnd = startLineIndex - pkEndLine;
    } else {
      toParkstationEnd = pkEndLine - startLineIndex;
    }

    count = toParkstationStart + toParkstationEnd;
  }

  // return the number of stops
  return count + " stops";
};
