
const Red =[
    'southStation',
    'parkStreet',
    'kendall',
    'central',
    'harvard',
    'porter',
    'davis',
    'alewife']
const Green =[
'governmentCenter',
'parkStreet',
'boylston',
'arlington',
'copley',
'hynes',
'kenmore'
]
const Orange=[ 
'northStation',
'haymarket',
'parkStreet',
'state',
'downtownCrossing',
'chinatown',
'backBay',
'forestHills'
]
const mbta={Red,Green,Orange};
const stopsBetweenStations=function(startLine,startStation,endLine,endStation,preStops=0)
{  
  let count=0;
  if (startLine===endLine)//if same line 
  {if (startStation===endStation)//if same section
    {return (preStops+' stops');
    }else if(startLine.indexOf(startStation)>endLine.indexOf(endStation))//if yes go back
      {  
          let index=startLine.indexOf(startStation);
          for(index;startLine[index]!==endStation;index--)
          {
            count++
          }
           return (preStops+count+' stops'); 
      }else{ //So keep going
        let index=startLine.indexOf(startStation);
        for(index;startLine[index]!==endStation;index++)
        {
          count++
        }
        return (preStops+count+' stops');
           }

  }
  else//not same line will count steps to parkStreet, After ther will swich the Line
      if(startLine.indexOf(startStation)>startLine.indexOf('parkStreet')) //if yes go back
  {
    let index=startLine.indexOf(startStation);
    for(index;startLine[index]!=='parkStreet';index--)
    {
      count++
    }
    return stopsBetweenStations(endLine,'parkStreet',endLine,endStation,count) ;//now we are switching Line 
  }else //So keep going to reach parkStreet
  {
    let index=startLine.indexOf(startStation);
        for(index;startLine[index]!=='parkStreet';index++)
        {
          count++
        }
        return stopsBetweenStations(endLine,'parkStreet',endLine,endStation,count) ;//now we are switching Line
  }  
    
}
console.log(stopsBetweenStations(Red,'alewife',Red,'alewife'));
console.log(stopsBetweenStations(Red, 'alewife', Red, 'southStation'));
console.log(stopsBetweenStations(Red, 'southStation', Green, 'kenmore'));
console.log(stopsBetweenStations(Red,'kendall',Green,'governmentCenter'));
