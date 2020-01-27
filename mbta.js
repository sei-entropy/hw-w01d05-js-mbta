
const lines = 
{
    Red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
    Green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
    Orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
  }



//.........functions..............

const stopsBetweenStations = function (startLine, startStation, endLine, endStation)
    

    {
      
        const startStationIndex = lines[startLine].indexOf(startStation)

        const endStationIndex = lines[endLine].indexOf(endStation)

        if (startLine === endLine)
         {
          return Math.abs(startStationIndex - endStationIndex)
        }
    

        const parkStartIndex = lines[startLine].indexOf('Park Street')

        const parkEndIndex = lines[endLine].indexOf('Park Street')

        const stopsToPark = Math.abs(startStationIndex - parkStartIndex)

        const stopsFromPark = Math.abs(parkEndIndex - endStationIndex)

        const totalStopsPark = stopsToPark + stopsFromPark

        return totalStopsPark;

}
/*stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife') // 0 stops
stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station') // 7 stops
stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore') // 6 stops

