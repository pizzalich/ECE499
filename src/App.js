import React, { Component } from "react";
import Menubar from "./components/menubar/Menubar.js";
import Home from "./components/home/Home.js";
import Info from "./components/info/Info.js";
import Login from "./components/login/Login.js";
import Plants from "./components/plants/Plants.js";
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
        <Home page={this.state.page} changeActiveComponent={this.changeActiveComponent}  />
        <Info page={this.state.page} />
        <Login page={this.state.page} />
        <Plants page={this.state.page} />
      </div>
    );
  }
}

export default App;
