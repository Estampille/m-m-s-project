import L from "leaflet";
import pin from "./130031.png";

const ferCheval = new L.Icon({
  iconUrl: pin,
  iconSize: [40, 45],
  shadowSize: [50, 64],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});
export default ferCheval;
