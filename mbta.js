const stopsBetweenStations = function(stLine, stStation, endLine, endStation) {
    lines = {
        Red: [
            "South Station",
            "Park Street",
            "Kendall",
            "Central",
            "Harvard",
            "Porter",
            "Davis",
            "Alewife"
        ],
        Green: [
            "Government Center",
            "Park Street",
            "Boylston",
            "Arlington",
            "Copley",
            "Hynes",
            "Kenmore"
        ],
        Orange: [
            "North Station",
            "Haymarket",
            "Park Street",
            "State",
            "Downtown Crossing",
            "Chinatown",
            "Back Bay",
            "Forest Hills"
        ]
    };

    let stops = 0;

    if (stLine === endLine) {
        stops = Math.abs(
            lines[stLine].indexOf(stStation) - lines[endLine].indexOf(endStation)
        );
        return stops + " stops";
    }

    if (stLine !== endLine) {
        stops = Math.abs(
            lines[stLine].indexOf(stStation) - lines[stLine].indexOf("Park Street")
        );
        stops += Math.abs(
            lines[endLine].indexOf(endStation) - lines[endLine].indexOf("Park Street")
        );
        return stops + " stops";
    }
};