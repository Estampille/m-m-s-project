import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      rank: "",
      region: "",
      departure: "",
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
    return (
      <form onSubmit={this.handleSubmit}>
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
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
