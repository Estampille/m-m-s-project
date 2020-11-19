import React from "react";
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
