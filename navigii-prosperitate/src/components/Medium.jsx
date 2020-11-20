import React from "react";
import axios from "axios";

class Medium extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: 0,
      time: 0,
      startWeather: null,
      arriveWeather: null,
    };
  }

  getWeather() {
    const { startCity, arrival } = this.props;
    const xStart = Math.round(startCity[0] * 1000) / 1000;
    const yStart = Math.round(startCity[1] * 1000) / 1000;
    const xArrive = Math.round(arrival[0] * 1000) / 1000;
    const yArrive = Math.round(arrival[1] * 1000) / 1000;
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${yStart},${xStart}`
      )
      .then((res) => res.data[0].woeid)
      .then((woeid) => {
        axios
          .get(
            `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`
          )
          .then(
            (response) =>
              response.data.consolidated_weather[0].weather_state_abbr
          )
          .then((startWeather) => {
            this.setState({
              startWeather: startWeather,
            });
          });
      });
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${yArrive},${xArrive}`
      )
      .then((res) => res.data[0].woeid)
      .then((woeid) => {
        axios
          .get(
            `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`
          )
          .then(
            (response) =>
              response.data.consolidated_weather[0].weather_state_abbr
          )
          .then((arriveWeather) => {
            this.setState({
              arriveWeather: arriveWeather,
            });
          });
      });
  }

  getDistance() {
    const { startCity, arrival } = this.props;
    const xStart = Math.round(startCity[0] * 1000) / 1000;
    const yStart = Math.round(startCity[1] * 1000) / 1000;
    const xArrive = Math.round(arrival[0] * 1000) / 1000;
    const yArrive = Math.round(arrival[1] * 1000) / 1000;
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://graphhopper.com/api/1/route?point=${yStart},${xStart}&point=${yArrive},${xArrive}&vehicle=foot&key=0b8bd438-ed0a-4be0-bee3-6369799a0949`
      )
      .then((res) => res.data)
      .then((data) => {
        this.setState({
          distance: data.paths[0].distance,
          time: data.paths[0].time,
        });
      });
  }

  msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + "H" + minutes;
  }

  componentDidMount() {
    this.getDistance();
    this.getWeather();
  }

  weatherIndicatorStart() {
    const { startWeather } = this.state;
    if (startWeather === "c" || "lc" || "hc") {
      return (
        <div>
          <img
            src={`https://www.metaweather.com/static/img/weather/png/64/${startWeather}.png`}
            alt={`Weather at start is ${startWeather}`}
          />
          <p>Weather is fine at {this.props.start}</p>
        </div>
      );
    } else if (this.state.startWeather === "s" || "lr") {
      return (
        <div>
          <img
            src={`https://www.metaweather.com/static/img/weather/png/64/${startWeather}.png`}
            alt={`Weather at start is ${startWeather}`}
          />
          <p>A bit rainy at {this.props.start}</p>
        </div>
      );
    } else {
      return (
        <div>
          <img
            src={`https://www.metaweather.com/static/img/weather/png/64/${startWeather}.png`}
            alt={`Weather at start is ${startWeather}`}
          />
          <p>
            Too dangerous to go out, you should postpone your departure from{" "}
            {this.props.start}
          </p>
        </div>
      );
    }
  }

  weatherIndicatorArrive() {
    const { arriveWeather } = this.state;
    if (arriveWeather === "c" || "lc" || "hc") {
      return (
        <div>
          <img
            src={`https://www.metaweather.com/static/img/weather/png/64/${arriveWeather}.png`}
            alt={`Weather at arrive is ${arriveWeather}`}
          />
          <p>Weather is fine at {this.props.arrive}</p>
        </div>
      );
    } else if (arriveWeather === "s" || "lr") {
      return (
        <div>
          <img
            src={`https://www.metaweather.com/static/img/weather/png/64/${arriveWeather}.png`}
            alt={`Weather at arrive is ${arriveWeather}`}
          />
          <p>A bit rainy at {this.props.arrive}</p>
        </div>
      );
    } else {
      return (
        <div>
          <img
            src={`https://www.metaweather.com/static/img/weather/png/64/${arriveWeather}.png`}
            alt={`Weather at start is ${arriveWeather}`}
          />
          <p>
            Too dangerous to go out, you should postpone your trip to{" "}
            {this.props.arrive}
          </p>
        </div>
      );
    }
  }

  render() {
    const { distance, time, startWeather, arriveWeather } = this.state;
    return (
      <div className="Medium">
        <p>{`You have to cover ${(distance / 1000).toFixed(
          2
        )} KM and it will take you ${this.msToTime(time)}`}</p>
        <p>This is a test</p>
        <div className="Weather">
          {startWeather ? this.weatherIndicatorStart() : <p>Weather</p>}
          {arriveWeather ? this.weatherIndicatorArrive() : <p>Weather</p>}
        </div>
      </div>
    );
  }
}

export default Medium;
