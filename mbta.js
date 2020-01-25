const lines_and_station = {

    Red:["South Station","Park Street","Kendall","Central","Harvard","Porter","Davis","Alewife"],
    Green:["Government Center","Park Street","Boylston","Arlington","Copley","Hynes","Kenmore"],
    Orange:["North Station","Haymarket","Park Street","State","Downtown Crossing","Chinatown","Back Bay","Forest Hills"],
    colorList:function(color,city)
    {
        if(color=="Red")
        {
            return this.Red.indexOf(city);
        }else if(color=="Green")
        {
            return this.Green.indexOf(city);
        }else if(color=="Orange")
        {
            return this.Orange.indexOf(city);
        }
    }
    }
const stopsBetweenStations  = function(Start_line,Start_station, End_Line, End_Station){

    let steps = 0;
    
if(Start_line==End_Line)
{
    if(Start_station==End_Station){
        return console.log(steps = 0);
    }
    let Start_line_index = lines_and_station[Start_line].indexOf(Start_station);
    let end_line_index = lines_and_station[End_Line].indexOf(End_Station);
     steps = end_line_index - Start_line_index;
    console.log("You need steps "+steps+ " to arrive to "+End_Station)

} else if(Start_line!=End_Line)
{

    let Start_line_index = lines_and_station[Start_line].indexOf(Start_station);
    let end_line_index = lines_and_station[End_Line].indexOf(End_Station);
     steps = end_line_index - Start_line_index;
    console.log("You need steps "+steps+ " to arrive to "+End_Station)
    

}
}

stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife') // 0 stops
stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station') // 7 stops
stopsBetweenStations('Red', 'South Station', 'Green', 'Kenmore') // 6 stops











