import React from "react";
import axios from "axios";
import Medium from "./Medium";
import Carte from "./Map";

class MyTravel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.match.params.name,
      age: this.props.match.params.age,
      rank: this.props.match.params.rank,
      start: this.props.match.params.start,
      arrive: this.props.match.params.arrive,
      departure: this.props.match.params.departure,
      travelMode: this.props.match.params.travelMode,
      isWeatherClean: false,
      startCity: null,
      arrival: null,
    };
  }

  getDistance() {
    axios
      .get(
        `https://graphhopper.com/api/1/route?point=51.131,12.414&point=48.224,3.867&vehicle=foot&key=0b8bd438-ed0a-4be0-bee3-6369799a0949`
      )
      .then((res) => res.data)
      .then((data) => {
        const Distance = data.paths[0].distance;
        const Durée = data.paths[0].time;
        console.log(Distance, Durée);
      });
  }

  getGeocodeStart() {
    const { start } = this.state;
    const url = `https://api-adresse.data.gouv.fr/search/?q=${start}`;
    axios.get(url).then((response) => {
      console.log(response);
      this.setState({
        startCity: response.data.features[0].geometry.coordinates,
      });
    });
  }

  getGeocodeArrival() {
    const { arrive } = this.state;
    const url = `https://api-adresse.data.gouv.fr/search/?q=${arrive}`;
    axios.get(url).then((response) => {
      this.setState({
        arrival: response.data.features[0].geometry.coordinates,
      });
    });
  }

  componentDidMount() {
    this.getGeocodeStart();
    this.getGeocodeArrival();
    this.getDistance();
  }

  render() {
    return (
      <div className="MyTravel">
        <div style={{ position: "relative", height: "40vh", maxWidth: "100%" }}>
          <Carte
            departure={this.state.startCity}
            arriver={this.state.arrival}
          />
        </div>

        <p>THis is my travel</p>
        <p>{this.state.start}</p>
        <p>{this.state.arrive}</p>
        <Medium
          weatherStatus={this.state.isWeatherClean}
          start={this.state.start}
          arrive={this.state.arrive}
        />
      </div>
    );
  }
}

export default MyTravel;
