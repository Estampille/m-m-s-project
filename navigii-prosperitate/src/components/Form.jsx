import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      age: null,
      rank: "Peasant",
      region: null,
      departure: null,
      travelMode: "Walk",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Age:
          <input
            name="age"
            type="number"
            value={this.state.age}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Rank:
          <select
            name="rank"
            value={this.state.rank}
            onChange={this.handleInputChange}
          >
            <option value="Priest">Priest</option>
            <option value="Peasant">Peasant</option>
            <option value="Traveler">Traveler</option>
            <option value="Royal Member">Royal Member</option>
          </select>
        </label>
        <label>
          Region of travel:
          <select
            name="region"
            value={this.state.region}
            onChange={this.handleInputChange}
          >
            <option value="Provence">Provence</option>
            <option value="Bourgogne">Bourgogne</option>
            <option value="Normandie">Normandie</option>
            <option value="Alsace">Alsace</option>
          </select>
        </label>
        <label>Date of travel</label>
        <label>
          Travel by:
          <select
            name="travelMode"
            value={this.state.travelMode}
            onChange={this.handleInputChange}
          >
            <option value="Walk">Walk</option>
            <option value="Horse">Horse</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
