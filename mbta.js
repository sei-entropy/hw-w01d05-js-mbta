const Red =[
  'South Station',
  'Park Street',
  'Kendall',
  'Central',
  'Harvard',
  'Porter',
  'Davis',
  'Alewife']
const Green =[
'Government Center',
'Park Street',
'Boylston',
'Arlington',
'Copley',
'Hynes',
'Kenmore',
]
const Orange=[ 
'North Station',
'Haymarket',
'Park Street',
'State',
'Downtown Crossing',
'Chinatown',
'Back Bay',
'Forest Hills'
]
const mbta={Red,Green,Orange};
const stopsBetweenStations=function(startLine,startStation,endLine,endStation,preStops=0)
{  
let count=0;
if (mbta[startLine]===mbta[endLine])//if same line 
{if (startStation===endStation)//if same section
  {return (preStops+' stops');
  }else if(mbta[startLine].indexOf(startStation)>mbta[endLine].indexOf(endStation))//if yes go back
    {  
        let index=mbta[startLine].indexOf(startStation);
        for(index;mbta[startLine][index]!==endStation;index--)
        {
          count++
        }
         return (preStops+count+' stops'); 
    }else{ //So keep going
      let index=mbta[startLine].indexOf(startStation);
      for(index;mbta[startLine][index]!==endStation;index++)
      {
        count++
      }
      return (preStops+count+' stops');
         }
}
else//not same line will count steps to parkStreet, After ther will swich the Line
    if(mbta[startLine].indexOf(startStation)>mbta[startLine].indexOf('Park Street')) //if yes go back
{
  let index=mbta[startLine].indexOf(startStation);
  for(index;mbta[startLine][index]!=='Park Street';index--)
  {
    count++
  }
  return stopsBetweenStations(endLine,'Park Street',endLine,endStation,count) ;//now we are switching Line 
}else //So keep going to reach parkStreet
{
  let index=mbta[startLine].indexOf(startStation);
      for(index;mbta[startLine][index]!=='Park Street';index++)
      {
        count++
      }
      return stopsBetweenStations(endLine,'Park Street',endLine,endStation,count) ;//now we are switching Line
}  
}
console.log(stopsBetweenStations('Red','Alewife','Red','Alewife'));
console.log(stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station'));
console.log(stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore'));
console.log(stopsBetweenStations('Red','Kendall','Green','Government Center'));
