const line = {
    redLine: ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
    greenLine: ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore'],
    orangeLine: ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back bay', 'Forest Hills']
}
const stopStation = function (lineS, startOn, lineE, stopOf) {
    const startS = line[lineS].indexOf(startOn);
    const stopF = line[lineE].indexOf(stopOf);
    const startPark = line[lineS].indexOf('Park Street');
    const stopPark = line[lineE].indexOf('Park Street');
    let count = 0;
    let countsatrt = 0;
    let countstop = 0;
    if (lineS === lineE) {
        if (startS < stopF) {
            for (let i = startS; i <= stopF; i++) {
                count++;
            }
        } else {
            for (let i = startS - 1; i >= stopF; i--) {
                count++;
            }
        }
    } else {
        //count the start station
        if (startS < startPark) {
            for (let i = startPark; i <= startPark; i++) {
                count++;
            }
        } else {
            for (let i = startPark; i < startS; i++) {
                count++;
            }
        }

        //count End station
        if (stopF < stopPark) {
            for (let i = stopF; i < stopPark; i++) {
                count++;
            }
        } else {
            for (let i = stopPark; i < stopF; i++) {
                count++;

            }
        }
    }
    console.log(count + '  stops.');
}


stopStation('redLine', 'Alewife', 'redLine', 'Alewife'); //0 stops
stopStation('redLine', 'Alewife', 'redLine', 'South Station'); //7stops
stopStation('redLine', 'South Station', 'greenLine', 'Kenmore'); //6stops
stopStation('greenLine', 'Kenmore', 'redLine', 'South Station'); //6stops
