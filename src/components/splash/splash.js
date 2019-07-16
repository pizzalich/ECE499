import React, { Component } from "react";
import "./splash.css";

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = { showSplash: true };
  }

  onClickHome = () => {
    this.props.changeDrawGraphs();
    this.setState({ showSplash: false });
  };

  onClickInfo = () => {
    this.props.changeDrawGraphs();
    this.props.changeActiveComponent("info");
    this.setState({ showSplash: false });
  };

  render() {
    //if (this.state.showSpash === 1) {
    return (
      this.state.showSplash && (
        <div className="splash">
          <div className="loading">
            <img className="logosplash" src="/tomato.png" alt=" " />
            <div>
              Welcome to I-tomato
              <br />
              This site contains a demo of the I-Tomato web app <br />
              Please either continue to:
              <br />
              <div className="spacersplash" />
              <div className="buttonbox">
                <div className="splashbtn" onClick={this.onClickHome}>
                  <span className="helper">Live App </span>
                </div>
                <div className="splashbtn" onClick={this.onClickInfo}>
                  <span className="helper">Project Information</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    );

    //   } else {
    //     return null;
    //   }
  }
}

export default Splash;
