import React, { Component } from "react";
import "./Login.css";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = { showSplash: 1 };
  }

  onClick = () => {
    this.setState;
  };

  render() {
    if (this.state.showSpash) {
      return (
        <div className="splash">
          <div className="loading">
            Welcome to I-tomato
            <br />
            This site contains a demo of the I-Tomato web app
          </div>
          <div className="dismiss">clear splash</div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Splash;
