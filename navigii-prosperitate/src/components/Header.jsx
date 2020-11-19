import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header">
        <h1 className="siteTitle">Navigii Prosperitate</h1>
        <h3 className="priere">
          <em>Oratio Gilde pro itineris et navigii prosperitate</em>
        </h3>
      </div>
    );
  }
}

export default Header;
