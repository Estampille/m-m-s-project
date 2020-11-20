import React from "react";
import axios from "axios";

class Medium extends React.Component {
  constructor(props) {
    super(props);
  }

  getDistance() {
    const { startCity, arrival } = this.props;
    const xStart = Math.round(startCity[0] * 1000) / 1000;
    const yStart = Math.round(startCity[1] * 1000) / 1000;
    const xArrive = Math.round(arrival[0] * 1000) / 1000;
    const yArrive = Math.round(arrival[1] * 1000) / 1000;
    axios
      .get(
        `https://graphhopper.com/api/1/route?point=${yStart},${xStart}&point=${yArrive},${xArrive}&vehicle=foot&key=0b8bd438-ed0a-4be0-bee3-6369799a0949`
      )
      .then((res) => res.data)
      .then((data) => {
        const Distance = data.paths[0].distance;
        const Durée = data.paths[0].time;
        console.log(Distance, Durée);
      });
  }

  componentDidMount() {
    this.getDistance();
  }

  render() {
    return (
      <div className="Medium">
        {this.props.weatherStatus ? (
          <p>Weather's good fella, you won't be troubled by any rain or snow</p>
        ) : (
          <p>Weather's not that great, expect some rain</p>
        )}
        <p>This is a test</p>
      </div>
    );
  }
}

export default Medium;
