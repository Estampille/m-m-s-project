import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="footer">
        <ul>
          <li>Legals Mentions</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}

export default Footer;
