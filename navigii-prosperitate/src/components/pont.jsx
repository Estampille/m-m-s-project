import L from "leaflet";
import pont from "./river.png";

const river = new L.Icon({
  iconUrl: pont,
  iconSize: [40, 45],
  shadowSize: [50, 64],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});
export default river;
