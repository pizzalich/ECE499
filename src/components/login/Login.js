import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  render() {
    if (this.props.page === "login") {
      return (
        <div className="login">
          {/* eslint-disable-next-line */}
          <span>Website built by Marc Bonwick👌🍅👌Likefollowsubscribe!</span> 
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Login;
