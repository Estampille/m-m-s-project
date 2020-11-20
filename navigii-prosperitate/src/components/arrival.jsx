import L from "leaflet";
import drap from "./65216.png";

const drapeau = new L.Icon({
  iconUrl: drap,
  iconSize: [60, 70],
  shadowSize: [50, 64],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});
export default drapeau;
