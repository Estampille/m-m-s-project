import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      rank: "",
      start: "",
      arrive: "",
      departure: "20-10",
      travelMode: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    const props = this.state;
    console.log({ ...props });
    event.preventDefault();
  }

  render() {
    const {
      name,
      age,
      rank,
      start,
      arrive,
      departure,
      travelMode,
    } = this.state;
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={name}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Age:
          <input
            name="age"
            type="number"
            value={age}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Rank:
          <select name="rank" value={rank} onChange={this.handleInputChange}>
            <option value="Select one">Select one</option>
            <option value="Priest">Priest</option>
            <option value="Peasant">Peasant</option>
            <option value="Traveler">Traveler</option>
            <option value="Royal Member">Royal Member</option>
          </select>
        </label>
        <label>
          Start:
          <input
            name="start"
            type="text"
            value={start}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Arrive:
          <input
            name="arrive"
            type="text"
            value={arrive}
            onChange={this.handleInputChange}
          />
        </label>

        <label>
          Travel by:
          <select
            name="travelMode"
            value={travelMode}
            onChange={this.handleInputChange}
          >
            <option value="Select one">Select one</option>
            <option value="Walk">Walk</option>
            <option value="Horse">Horse</option>
          </select>
        </label>
        <Link
          className="Link"
          to={`/my-travel/${name}/${age}/${rank}/${start}/${arrive}/${departure}/${travelMode}`}
        >
          Guide me !
        </Link>
      </form>
    );
  }
}

export default Form;
