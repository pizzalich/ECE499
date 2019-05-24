import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    if (this.props.page === "home") {
      return (
        <div className="home">
          <span>👌😉🍅</span>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Home;
