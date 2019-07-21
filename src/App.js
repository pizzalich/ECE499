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
    this.state = { page: "home", drawgraphs: false, ismobile: false };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowSize);
    var data = itomatoGetData();
    data.then(data => this.setState({ data: data }));
    var size = document.getElementsByClassName("App")[0].clientWidth;
    if (size <= 600) {
      this.setState({ ismobile: true });
    }
  }

  updateWindowSize = () => {
    var size = document.getElementsByClassName("App")[0].clientWidth;
    if (size <= 600) {
      this.setState({ ismobile: true });
    } else {
      this.setState({ ismobile: false });
    }
  };

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
          ismobile={this.state.ismobile}
        />
        <Menubar changeActiveComponent={this.changeActiveComponent} />
        <Home
          page={this.state.page}
          drawgraphs={this.state.drawgraphs}
          changeActiveComponent={this.changeActiveComponent}
          ismobile={this.state.ismobile}
          data={this.state.data}
        />
        <Info page={this.state.page} ismobile={this.state.ismobile} />
        <Login page={this.state.page} />
        <Plants
          page={this.state.page}
          ismobile={this.state.ismobile}
          data={this.state.data}
        />
      </div>
    );
  }
}

export default App;
