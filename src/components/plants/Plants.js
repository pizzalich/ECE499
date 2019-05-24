import React, { Component } from "react";
import "./Plants.css";

class Plants extends Component {
  render() {
    if (this.props.page === "plants") {
      return (
        <div className="plants">
          <span>🍁🍁</span>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Plants;
