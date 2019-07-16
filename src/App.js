import React, { Component } from "react";
import Menubar from "./components/menubar/Menubar.js";
import Home from "./components/home/Home.js";
import Info from "./components/info/Info.js";
import Login from "./components/login/Login.js";
import Plants from "./components/plants/Plants.js";
import Splash from "./components/splash/splash.js";
import { itomatoGetData } from "./components/itomatoapi/itomatoapi.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { page: "home", drawgraphs: false };
  }

  componentDidMount() {
    var data = itomatoGetData();
    data.then(data => this.setState({ data: data }));
  }

  changeActiveComponent = data => {
    this.setState({ page: data });
  };

  changeDrawGraphs = () => {
    this.setState({ drawgraphs: true });
  };

  render() {
    return (
      <div className="App">
        <Splash
          changeActiveComponent={this.changeActiveComponent}
          changeDrawGraphs={this.changeDrawGraphs}
        />
        <Menubar changeActiveComponent={this.changeActiveComponent} />
        <Home
          page={this.state.page}
          drawgraphs={this.state.drawgraphs}
          changeActiveComponent={this.changeActiveComponent}
        />
        <Info page={this.state.page} />
        <Login page={this.state.page} />
        <Plants page={this.state.page} />
      </div>
    );
  }
}

export default App;
