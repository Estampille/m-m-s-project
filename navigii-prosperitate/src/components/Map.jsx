import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const myIcon = L.Icon.Default;

class Carte extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { departure, arriver } = this.props;
    return (
      <MapContainer
        className="map"
        center={[departure[1], departure[0]]}
        zoom={10}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg"
        />
        <Marker
          Icon={myIcon}
          className="marker"
          position={[departure[1], departure[0]]}
        >
          <Popup>Departure</Popup>
        </Marker>
        <Marker className="marker" position={[arriver[1], arriver[0]]}>
          <Popup>Arrival</Popup>
        </Marker>
      </MapContainer>
    );
  }
}

export default Carte;
