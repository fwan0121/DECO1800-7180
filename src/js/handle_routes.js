/******************************************************************************
 * Functions and variables relating to map routes.                       *
 ******************************************************************************/

/* Constants */
const ROUTES = {
    /* Route: [route_ids]*/
    "61": ["610003", "610142"],
    "66": ["660001", "660047"],
    "111": ["1110001", "1110086"],
    "222": ["2220001", "2220058"],
    "444": ["4440002", "4440004"],
    "P206": ["P2060002", "P2060003"],
}

/* Functions */

/**
 * Initialises the map with loaded route data.
 * @param {*} busline list of coordinates making up a route shape
 * @param {*} stops list of stop information for stops along the busline 
 */
 function processRouteData(busline, stops) {
    console.log(stops);
    initialiseMap(busline); // Draw map related data
    handleMapLoad(); // Take actions once the map is loaded
}