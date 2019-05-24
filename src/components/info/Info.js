import React, { Component } from "react";
import "./Info.css";

class Info extends Component {
  render() {
    if (this.props.page === "info") {
      return (
        <div className="info">
          <span>👌😉🍅</span>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Info;
