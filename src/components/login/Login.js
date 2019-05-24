import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  render() {
    if (this.props.page === "login") {
      return (
        <div className="login">
          <span>👌🍅👌</span>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Login;
