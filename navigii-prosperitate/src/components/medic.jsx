import L from "leaflet";
import med from "./85316.png";

const medical = new L.Icon({
  iconUrl: med,
  iconSize: [40, 45],
  shadowSize: [50, 64],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});
export default medical;
