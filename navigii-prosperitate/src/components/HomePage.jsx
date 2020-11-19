import React from "react";
import Header from "./Header";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="HomePage">
        <Header />
        <section>
          Grace a notre planificateur de voyage ci dessous, rendez votre trajet
          plus sûr !
        </section>

        <div></div>
        <section>Ici avis utilisateurs</section>
      </div>
    );
  }
}

export default HomePage;
