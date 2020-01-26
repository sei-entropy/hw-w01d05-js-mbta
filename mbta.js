const mbta=[
{Red:['South Station','Park Street','Kendall','Central','Harvard','Porter','Davis','Alewife']},
{Green:['Government Center','Park Street','Boylston','Arlington','Copley','Hynes','Kenmore']},
{Orange:['North Station','Haymarket','Park Street','State','Downtown Crossing','Chinatown','Back Bay','Forest Hills']},
];






 const stopsBetweenStations=function(sLine , stationNS , eLine ,stationNE ){
    let stop =0;
    for(let i=0;i<mbta.length;i++){
        for(const key in mbta[i]){
            let keyy = mbta[i][key]; 
                 if(sLine === eLine ){
                    if(stationNS === stationNE){
                        stop=0;
                    }else if(stationNS !== stationNE){
                        let startS=keyy.indexOf(stationNS); 
                        let endS=keyy.indexOf(stationNE);
                        let result=Math.abs(startS-endS); 
                       stop+=result;
                    }
                }else if(sLine !== eLine){
                    if(stationNS === stationNE){
                        stop=0;
                    }else if (stationNS !== stationNE){
                            let startingPoint=mbta[i][sLine].indexOf(stationNS);
                            let parkStarting=mbta[i][sLine].indexOf("Park Street");
                             let finalStart=Math.abs(startingPoint-parkStarting);
                        
                        
                            let endingPoint=mbta[i][eLine].indexOf(stationNE);
                            let parkending=mbta[i][eLine].indexOf("Park Street");
                              let finalEnd=Math.abs(endingPoint-parkending);
                        
                             stop =finalStart+finalEnd;
                        }
                }
    } 
}return stop;
}









stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife') // 0 stops work
stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station') // 7 stops  work
stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore') // 6 stop 

