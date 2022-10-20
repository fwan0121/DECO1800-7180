/******************************************************************************
 * Creation of map icons to display on the map.                          *
 ******************************************************************************/

/* Constants */
const ICON_PLAYER_WIDTH = 56;
const ICON_PLAYER_HEIGHT = 75;
const ICON_STOP_SIZE = 50;

/* Icons */
const playerIcon = L.icon({
    iconUrl: "/DECO1800-7180/public/assets/avatar/player.svg",
    // SPecify size of the icon
    iconSize: [ICON_PLAYER_WIDTH, ICON_PLAYER_HEIGHT],
    // Specify where in the icon will be tied to the map
    iconAnchor: [ICON_PLAYER_WIDTH/2, ICON_PLAYER_HEIGHT/2],
    // Specify where in the icon popup's should originate (rel to iconAnchor)
    popupAnchor: [-3, -76]
});

const busStopIcon = L.icon({
    iconUrl: "/DECO1800-7180/public/assets/ui/icons/ic_bus_stop.svg",
    iconSize: [ICON_STOP_SIZE, ICON_STOP_SIZE],
    iconAnchor: [ICON_STOP_SIZE/2, ICON_STOP_SIZE/2],
    popupAnchor: [ICON_STOP_SIZE/2, ICON_STOP_SIZE/2],
});