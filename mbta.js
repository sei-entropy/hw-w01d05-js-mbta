let redLine  = ["south station","park street","kendall","central","harvard","porter","davis","alewife"];
let greenLine  = {"government center","park street","boylston" ,"arlington","copley","hynes","kenmore"};
  let orangeLine  = {"north station","haymarket","park street","state","downtown crossing","chinatown","back bay","forest hills"};
  
 const stopsBetweenStations = function(StartLine, StartStation, EndLine, EndStation){
    const Red =['South Station','Park Street','Kendall','Central','Harvard', 'Porter','Davis','Alewife'];
    const Orange =['North Station','Haymarket','Park Street','State' ,'Downtown', 'Crossing' , 'Chinatown', 'Back Bay', 'Forest Hills'];
    const Green=['Government Center','Park Street','Boylston','Arlington', 'Copley','Hynes',' Kenmore'];
    let result=0; 
    let indexOfStartPoint=0; let indexOfEndPoint=0;
    //case 1 StartStation==EndStation && Endline==Startline 
     if(StartStation=== EndStation && StartLine===EndLine)
     {  result =0;}// End Case 1
    
     // Case 2 Endline== Startline 
     else  if (StartLine===EndLine){
         //1
         if(StartLine===("Red")){  
       indexOfStartPoint= Red.indexOf(StartStation);
       indexOfEndPoint = Red.indexOf(EndStation);
    result = indexOfEndPoint - indexOfStartPoint;}
         //2
        if(StartLine===("Green")){  
        indexOfStartPoint= Green.indexOf(StartStation);
        indexOfEndPoint = Green.indexOf(EndStation);    
        result = indexOfEndPoint - indexOfStartPoint; }
       //3
       if(StartLine===("Orange")){  
        indexOfStartPoint= Orange.indexOf(StartStation);
        indexOfEndPoint = Orange.indexOf(EndStation);    
        result = indexOfEndPoint - indexOfStartPoint;}
        result=  Math.abs(indexOfEndPoint- indexOfStartPoint);} 
       // Case 3 Endline != Start line 
       //1
       else  if (StartLine!==EndLine){
       if(StartLine==="Red"){
        indexOfStartPoint= Math.abs(Red.indexOf(StartStation)-Red.indexOf(("Park Street"))); }
       //2
       else if(StartLine==="Green"){
        indexOfStartPoint= Math.abs(Green.indexOf(StartStation)- (Green.indexOf("Park Street")));
        }
        //3
       else if(StartLine==="Orange"){
        indexOfStartPoint= Math.abs(Orange.indexOf(StartStation)- (Orange.indexOf("Park Street")));
        }
        //1
       if(EndLine==="Red"){
        indexOfEndPoint= Math.abs(Red.indexOf(EndStation)-(Red.indexOf("Park Street")));
        }
        //2
        else if(EndLine==="Green"){
        indexOfEndPoint= Math.abs(Green.indexOf(EndStation)-(Green.indexOf("Park Street")));
        }
        //3
       else if(EndLine===("Orange")){
       indexOfEndPoint= Math.abs(Orange.indexOf(EndStation)-(Orange.indexOf("Park Street")));}
       } result=  indexOfEndPoint+ indexOfStartPoint;

       return console.log( result + "" +"  Stops");
       } // end stopsBetweenStations 