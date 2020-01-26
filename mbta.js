const stopsBetweenStations = function(lin , sto , lin2, sto2){
    // lower case the input
     let line = lin.toLowerCase();
     let stop = sto.toLowerCase();
     let line2 = lin2.toLowerCase();
     let stop2 = sto2.toLowerCase();
     let stops = 0;
     stopIndex = 0;
     stopIndex2 = 0;
     
    
    const lines = {
     red :["south station", "park Street", "kendall",
          "central", "harvard", "porter", "davis", "alewife" ],
     green:["government center", "park street", "boylston", 
           "arlington", "copley", "hynes", "kenmore" ],
     orange:["north station", "haymarket", "park street",
            "state", "downtown crossing", "chinatown", 
            "back bay","forest hills"],
     }
          
 
      ////////////////////in ONE line  //////////////////////////////////
     if (line === line2){
         if (line === "red"   && line2 === "red") {  
             if ( stop != stop2){
                for (let i=0; i< lines.red.length ; i++){            
                   if (lines.red[i] === stop){
                      stopIndex = i;
                    } 
                    else if (lines.red[i] === stop2){
                      stopIndex2= i;
                     }
                 }   
             } 
             else { stopIndex = 0 ; stopIndex2 = 0}
         } 
         else if (line === "green" && line2 === "green") {
             if ( stop != stop2){
                 for (let i=0; i< lines.green.length ; i++){            
                    if (lines.green[i] === stop){
                      stopIndex = i;
                     } 
                     else if (lines.green[i] === stop2){
                      stopIndex2= i;
                     }
                 }
             }
             else { stopIndex = 0 ; stopIndex2 = 0}
         } 
         else if (line === "orange"   && line2 === "orange") {  
             if ( stop != stop2){
                 for (let i=0; i< lines.orange.length ; i++){            
                     if (lines.orange[i] === stop){
                         stopIndex = i;
                     }
                     else if (lines.orange[i] === stop2){
                         stopIndex2= i;
                     }
                 }
             }else { stopIndex = 0 ; stopIndex2 = 0}
         }
       stops = stopIndex - stopIndex2; 
       stops = Math.abs(stops);
     }      
           ////////// diffrent lines stops  //////////////////////////////
     if ( line != line2) {
            if (line === "red"   && line2 === "orange") {  
                for (let i=0; i< lines.red.length ; i++){            
                   if (lines.red[i] === stop){
                   stopIndex = 1-i;
                   }
                 }
                 for (let i=0;i< lines.orange.length;i++){
                   if (lines.orange[i] === stop2){
                   stopIndex2= 2-i;
                   }
                 }
             } 
             else if (line === "orange"   && line2 === "red") {  
                 for (let i=0; i< lines.orange.length ; i++){            
                    if (lines.orange[i] === stop){
                    stopIndex = 2-i;
                    }
                  }
                  for (let i=0;i< lines.red.length;i++){
                    if (lines.red[i] === stop2){
                    stopIndex2= 1-i;
                    }
                  }
             } 
             else if (line === "red"   && line2 === "green") {  
                 for (let i=0; i< lines.red.length ; i++){            
                    if (lines.red[i] === stop){
                    stopIndex = 1-i;
                    }
                  }
                  for (let i=0;i< lines.green.length;i++){
                    if (lines.green[i] === stop2){
                    stopIndex2= 1-i;
                    }
                  }
              } 
             else if (line === "green"   && line2 === "red") {  
                 for (let i=0; i< lines.green.length ; i++){            
                    if (lines.green[i] === stop){
                    stopIndex = 1-i;
                    }
                  }
                  for (let i=0;i< lines.red.length;i++){
                    if (lines.red[i] === stop2){
                    stopIndex2= 1-i;
                    }
                  }
             } 
             else if (line === "green"   && line2 === "orange") {  
                 for (let i=0; i< lines.green.length ; i++){            
                    if (lines.green[i] === stop){
                    stopIndex = 1-i;
                    }
                  }
                  for (let i=0;i< lines.orange.length;i++){
                    if (lines.orange[i] === stop2){
                    stopIndex2= 2-i;
                    }
                  }
             } 
             else if (line === "orange"   && line2 === "green") {  
                 for (let i=0; i< lines.orange.length ; i++){            
                    if (lines.orange[i] === stop){
                    stopIndex = 2-i;
                    }
                  }
                  for (let i=0;i< lines.green.length;i++){
                    if (lines.green[i] === stop2){
                    stopIndex2= 1-i;
                    }
                  }
             } 
     stops = Math.abs(stopIndex) +  Math.abs(stopIndex2);
     }
 return (stops + " is the number of stops between ("
     + stop + ") in the (" + line +" line) to (" + stop2 + 
     ") in the (" + line2 + " line)")}