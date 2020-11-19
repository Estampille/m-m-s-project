import React from "react";
import axios from "axios";
import Medium from "./Medium";

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
    };
  }

  componentDidMount() {
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

  render() {
    return (
      <div className="MyTravel">
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
