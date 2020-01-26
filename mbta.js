const subwayLines = {
  
    Red: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
      
    Green: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
      
    Orange: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
    
    }
    const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
    
    
    
    
    
      const startStationX = subwayLines[startLine].indexOf(startStation)
      const endStationX = subwayLines[endLine].indexOf(endStation)
    
    
    
    
    
    
      if (startLine === endLine) {
        return Math.abs(startStationX - endStationX)
      }
    
    
    
      const parkStartY = subwayLines[startLine].indexOf('Park Street')
      const parkEndY = subwayLines[endLine].indexOf('Park Street')
    
    
      const stopsToPark = Math.abs(startStationX - parkStartY)
      const stopsFromPark = Math.abs(parkEndY - endStationX)
      const totalStops = stopsToPark + stopsFromPark
      return totalStops
    
    
    
    
    
    }