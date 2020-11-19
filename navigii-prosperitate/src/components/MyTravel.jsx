import React from "react";
import Medium from "./Medium";
import Carte from "./Map";
import axios from "axios";

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

  componentWillMount() {
    this.getGeocodeStart();
    this.getGeocodeArrival();
  }

  render() {
    const { startCity, arrival } = this.state;
    return (
      <div className="MyTravel">
        {startCity && arrival ? (
          <div
            style={{ position: "relative", height: "40vh", maxWidth: "100%" }}
          >
            <Carte departure={startCity} arriver={arrival} />
          </div>
        ) : (
          <p> Loading </p>
        )}

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
