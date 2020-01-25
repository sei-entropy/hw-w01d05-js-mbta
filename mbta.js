const mbta=[
{Red:['South Station','Park Street','Kendall','Central','Harvard','Porter','Davis','Alewife']},
{Green:['Government Center','Park Street','Boylston','Arlington','Copley','Hynes','Kenmore']},
{Orange:['North Station','Haymarket','Park Street','State','Downtown Crossing','Chinatown','Back Bay','Forest Hills']},
];

 const stopsBetweenStations=function(sLine , stationNS , eLine ,stationNE ){
    let stop =0;
    for(let i=0;i<mbta.length;i++){
        //console.log(mbta[i]);
        for(const key in mbta[i]){
            //console.log(mbta[i][key]);
            let keyy = mbta[i][key]; 
           // for(let j =0 ; j<keyy.length;j++){
                // console.log(mbta[i][key][j]);
                // console.log(keyy[j]);
                
                
                 if(sLine === eLine ){
                    if(stationNS === stationNE){
                        stop=0;
                    }else if(stationNS !== stationNE){
                        let startS=keyy.indexOf(stationNS); //0  //7 //3
                        let endS=keyy.indexOf(stationNE);// 0   //0  //5
                        let result=startS-endS; 
                       result=Math.abs(result);
                       stop+=result;
                    }
                }else if(sLine !== eLine){
                    if(stationNS === stationNE){
                        stop=0;
                    }else if (stationNS !== stationNE){
                        let startS=mbta[i][sLine].indexOf(stationNS);
                        let finalStart=0;
                        let earlystarting=mbta[i][sLine].indexOf("Park Street");
                        if(startS>earlystarting){
                            for(let j =startS;j>earlystarting;j--)
                            {finalStart +=1;}

                        }else{
                             finalStart=+1
                        }

                        let endS=keyy.indexOf(stationNE);
                        console.log(endS);
                        let finalEnd=0;
                        let earlyEnding=mbta[i][eLine].indexOf("Park Street");
                        if(endS>earlystarting){
                            for(let j =endS;j>earlyEnding;j--)
                            {finalEnd +=1;}

                        }else{
                            finalEnd=+1
                        }

                      let result=finalStart+finalEnd;
                       stop+=result;
                    }
                }

    //}
    } 
}return stop;
}

stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife') // 0 stops +ok
stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station') // 7 stops +ok
stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore') // 6 stop