const mbta=
{
Red:['South Station','Park Street','Kendall','Central','Harvard','Porter','Davis','Alewife'],
Green:['Government Center','Park Street','Boylston','Arlington','Copley','Hynes','Kenmore'],
Orange:['North Station','Haymarket','Park Street','State','Downtown Crossing','Chinatown','Back Bay','Forest Hills']
};

const stopsBetweenStations=function(sLine , stationNS , eLine ,stationNE ){
    let stop =0;
    let startingPoint=mbta[sLine].indexOf(stationNS);
    let parkStarting=mbta[sLine].indexOf("Park Street");
    let endingPoint=mbta[eLine].indexOf(stationNE);
    let parkending=mbta[eLine].indexOf("Park Street");


                 if(sLine === eLine ){
                    if(stationNS === stationNE){
                        stop=0;
                    }else if(stationNS !== stationNE){
                        let result=Math.abs(startingPoint-endingPoint); 
                       stop+=result;
                    }
                }else if(sLine !== eLine){
                    if(stationNS === stationNE){
                        stop=0;
                    }else if (stationNS !== stationNE){
                             let finalStart=Math.abs(startingPoint-parkStarting);
                              let finalEnd=Math.abs(endingPoint-parkending);
                             stop =finalStart+finalEnd;
                        }
}
return stop;
};

stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife') // 0 stops work
stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station') // 7 stops  work
stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore') // 6 stop work *yeeeeeeeees  thank you :)*

