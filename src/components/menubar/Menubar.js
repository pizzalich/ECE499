import React, { Component } from "react";
import "./Menubar.css";

class Menubar extends Component {
  render() {
    return (
      <div className="bar">
        <div
          className="button"
          onClick={() => this.props.changeActiveComponent("home")}
        >
          Summary
        </div>
        <div
          className="button"
          onClick={() => this.props.changeActiveComponent("plants")}
        >
          Details
        </div>
        <div
          className="button"
          onClick={() => this.props.changeActiveComponent("info")}
        >
          Info
        </div>
        <div className="pad" />
        <div
          className="icon"
          onClick={() => this.props.changeActiveComponent("login")}
        >
          <img className="iconimg" src="/tomato.png" alt="" />
        </div>
      </div>
    );
  }
}

export default Menubar;
