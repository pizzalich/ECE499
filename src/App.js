import React, { Component } from "react";
import Menubar from "./components/menubar/Menubar.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { page: "home" };
  }

  changeActiveComponent = data => {
    this.setState({ page: data });
  };

  render() {
    return (
      <div className="App">
        <Menubar changeActiveComponent={this.changeActiveComponent} />
      </div>
    );
  }
}

export default App;
