import React from "react";
import Header from "./Header";
import "./UserReview.css";
import "./HomePage.css";
import Footer from "./Footer";

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
          <p className="accroche">
            Grace a notre planificateur de voyage ci dessous, rendez votre
            trajet plus sûr !
          </p>
        </section>

        <div className="UserReview">
          <img
            alt="portrait"
            className="userPic"
            src="https://db3pap006files.storage.live.com/y4mJcAjUVQEoRLnbJQcOFkig2OlncghhzDHiaFFr72GM4bevN-FL7yrh9C8stBtyIGhuq6bUKzRXfweXxOUeO8J6IleWUBh5-Vhz7ZPb_BgZJORx2Id8o4iayHpQ5IWPrHgHIu9aloIxVHGlf-ufMNrxDiQ6gBFkqIS-6nkpzBVZEiRAjYGZ97ku74dDkdpurjR?width=348&height=145&cropmode=none"
          />
          <p className="review">
            Grâce à cette sorcellerie j'ai bien brifer et mon brayet avait un
            bon fumet !
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
