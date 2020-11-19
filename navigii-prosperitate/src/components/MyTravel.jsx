import React from "react";

class MyTravel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.match.params.name,
      age: this.props.match.params.age,
      rank: this.props.match.params.rank,
      region: this.props.match.params.region,
      departure: this.props.match.params.departure,
      travelMode: this.props.match.params.travelMode,
    };
  }

  render() {
    return (
      <div className="MyTravel">
        <p>THis is my travel</p>
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
      </div>
    );
  }
}

export default MyTravel;
