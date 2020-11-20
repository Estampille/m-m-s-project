import L from "leaflet";
import auberge from "./auberge.png";

const bed = new L.Icon({
  iconUrl: auberge,
  iconSize: [40, 45],
  shadowSize: [50, 64],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});
export default bed;
