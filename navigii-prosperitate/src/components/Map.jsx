import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
  Circle,
} from "react-leaflet";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import Axios from "axios";
import ferCheval from "./icon";
import drapeau from "./arrival";
import medical from "./medic";
import bed from "./auberge";
import river from "./pont";

const redOptions = { color: "red" };

class Carte extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blackSmith: null,
      medic: null,
      pont: null,
      auberge: null,
      crime: null,
    };
    this.GetBlacksmith = this.GetBlacksmith.bind(this);
    this.getMedic = this.getMedic.bind(this);
    this.getPont = this.getPont.bind(this);
    this.getAuberge = this.getAuberge.bind(this);
    this.getCrime = this.getCrime.bind(this);
  }

  GetBlacksmith() {
    if (this.state.blackSmith === null) {
      Axios.get(
        `https://api-adresse.data.gouv.fr/search/?q=forgeron&limit=2000`
      ).then((response) => {
        this.setState({ blackSmith: response.data.features });
      });
    } else {
      this.setState({ blackSmith: null });
    }
  }

  getMedic() {
    if (this.state.medic === null) {
      Axios.get(
        `https://api-adresse.data.gouv.fr/search/?q=medecin&limit=2000`
      ).then((response) => {
        this.setState({ medic: response.data.features });
      });
    } else {
      this.setState({ medic: null });
    }
  }

  getPont() {
    if (this.state.pont === null) {
      Axios.get(
        `https://api-adresse.data.gouv.fr/search/?q=pont&limit=2000`
      ).then((response) => {
        this.setState({ pont: response.data.features });
      });
    } else {
      this.setState({ pont: null });
    }
  }

  getAuberge() {
    if (this.state.auberge === null) {
      Axios.get(
        `https://api-adresse.data.gouv.fr/search/?q=hotel&limit=1000`
      ).then((response) => {
        this.setState({ auberge: response.data.features });
      });
    } else {
      this.setState({ auberge: null });
    }
  }

  getCrime() {
    if (this.state.crime === null) {
      Axios.get(
        `https://api-adresse.data.gouv.fr/search/?q=foret&limit=2000`
      ).then((response) => {
        this.setState({ crime: response.data.features });
      });
    } else {
      this.setState({ crime: null });
    }
  }

  render() {
    const { departure, arriver } = this.props;
    const { blackSmith, medic, pont, auberge, crime } = this.state;
    return (
      <div className="allmap">
        <MapContainer
          className="map"
          center={[departure[1], departure[0]]}
          zoom={7}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg"
          />
          <Marker
            icon={drapeau}
            className="marker"
            position={[departure[1], departure[0]]}
          >
            <Popup>Departure</Popup>
          </Marker>
          <Marker
            icon={drapeau}
            className="marker"
            position={[arriver[1], arriver[0]]}
          >
            <Popup>Arrival</Popup>
          </Marker>

          {blackSmith ? (
            blackSmith.map((forgeron) => (
              <Marker
                icon={ferCheval}
                className="marker"
                position={[
                  forgeron.geometry.coordinates[1],
                  forgeron.geometry.coordinates[0],
                ]}
              >
                <Popup>Black-smith</Popup>
              </Marker>
            ))
          ) : (
            <p>Loading</p>
          )}

          {medic ? (
            medic.map((priest) => (
              <Marker
                icon={medical}
                className="marker"
                position={[
                  priest.geometry.coordinates[1],
                  priest.geometry.coordinates[0],
                ]}
              >
                <Popup>Resurection Point</Popup>
              </Marker>
            ))
          ) : (
            <p>Loading</p>
          )}

          {pont ? (
            pont.map((priest) => (
              <Marker
                icon={river}
                className="marker"
                position={[
                  priest.geometry.coordinates[1],
                  priest.geometry.coordinates[0],
                ]}
              >
                <Popup>Gué</Popup>
              </Marker>
            ))
          ) : (
            <p>Loading</p>
          )}

          {auberge ? (
            auberge.map((priest) => (
              <Marker
                icon={bed}
                className="marker"
                position={[
                  priest.geometry.coordinates[1],
                  priest.geometry.coordinates[0],
                ]}
              >
                <Popup>Inn</Popup>
              </Marker>
            ))
          ) : (
            <p>Loading</p>
          )}

          {crime ? (
            crime.map((priest) => (
              <Circle
                center={[
                  priest.geometry.coordinates[1],
                  priest.geometry.coordinates[0],
                ]}
                pathOptions={redOptions}
                radius={500}
              />
            ))
          ) : (
            <p>Loading</p>
          )}
        </MapContainer>
        <div className="button">
          <button type="button" onClick={this.getAuberge}>
            Inn
          </button>
          <button type="button" onClick={this.getPont}>
            Gué
          </button>
          <button type="button" onClick={this.getMedic}>
            Resurrection point
          </button>
          <button type="button" onClick={this.getCrime}>
            Danger Zone
          </button>
          <button type="button" onClick={this.GetBlacksmith}>
            Black-Smith
          </button>
        </div>
      </div>
    );
  }
}

export default Carte;
