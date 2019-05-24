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
          Home
        </div>
        <div
          className="button"
          onClick={() => this.props.changeActiveComponent("plants")}
        >
          Plants
        </div>
        <div
          className="button"
          onClick={() => this.props.changeActiveComponent("store")}
        >
          Store
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
          {/* eslint-disable-next-line */}
          🍅
        </div>
      </div>
    );
  }
}

export default Menubar;
