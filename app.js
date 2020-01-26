```js


const subWaysLines = {
    Red: ['South Station','Park Street','Kendall','Harvard','Porter','Davis','Alewife'],
    Green: ['Government Center','Park Street','Boylston','Arlington','Copley','Hynes','Kenmore'],
    Oragne: [ 'North Station','Haymarket','Park Street','State','Downtown Crossing', 'Chinatown', 'Back Bay','Forest Hills'],

};

const redSubWaysLines = function redSubway{(
stopsBetweenStations('Red', 'Alewife', 'Red', 'Alewife') // 0 stops
stopsBetweenStations('Red', 'Alewife', 'Red', 'South Station') // 7 stops
stopsBetweenStations('Red', 'South Station', 'Red', 'Kenmore') // 6 stops
);
};

console.log('Start Line'+ ' lasts for ' + `Start Station` + `End Station` +  `End Line`);
redSubway();

const greenSubWaysLines = function greenSubway { (
 stopsBetweenStations('Green', 'Kenmore', 'Green', 'Kenmore') // 0 stops
stopsBetweenStations('Green', 'Kenmore', 'Green', 'Government Center') // 7 stops
stopsBetweenStations('Green', 'North Station', 'Green', 'Forest Hills') // 6 stops
console.log('Start Line'+ ' lasts for ' + `Start Station` + `End Station` +  `End Line`);
redSubway();

greenSubway();

);

};


const orangeSubWaysLines = function orangeSubway { (
 stopsBetweenStations('Orange', 'Forest Hills', 'Orange', 'Forest Hills') // 0 stops
stopsBetweenStations('Orange', 'Kenmore', 'Orange', 'Government Center') // 7 stops
stopsBetweenStations('Orange', 'Park Street', 'Orange', 'Forest Hills') // 6 stops
console.log('Start Line'+ ' lasts for ' + `Start Station` + `End Station` +  `End Line`);
redSubway();

orangeSubway();
