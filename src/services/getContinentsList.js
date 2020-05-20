const getContinentList = country_data => {

    var regions = country_data.map(function (country) { return country.region; });
    var sorted = regions.sort();

    var continents = sorted.filter(function (value, index) {
        return value !== sorted[index + 1];
    });
    continents = removeItem(continents, "")
    continents = removeItem(continents, "Polar")
    return continents;
};

function removeItem(array, item) {
    var i = array.indexOf(item)
    if ( i !== -1 ) {
        array.splice( i, 1 );
    }
    return array
}

export default getContinentList;