import React, { Component } from "react";
import {
  FlexibleXYPlot,
  XAxis,
  VerticalBarSeries,
  AreaSeries
} from "react-vis";
import "./Home.css";
import "../../../node_modules/react-vis/dist/style.css";

const myDATA = [
  { x: 1, y: 0.25, color: "#FFAA33" },
  { x: 2, y: 0.75, color: "#FFAA33" },
  { x: 3, y: 1.11, color: "#FFAA33" },
  { x: 4, y: 1.25, color: "#FFAA33" },
  { x: 5, y: 1.11, color: "#FFAA33" },
  { x: 6, y: 0.75, color: "#FFAA33" },
  { x: 7, y: 0.25, color: "#FFAA33" },
  { x: 8, y: -0.25, color: "#33A2FF" },
  { x: 9, y: -0.62, color: "#33A2FF" },
  { x: 10, y: -0.75, color: "#33A2FF" },
  { x: 11, y: -0.62, color: "#33A2FF" },
  { x: 12, y: -0.25, color: "#33A2FF" }
];

const photos = [
  "https://media.istockphoto.com/photos/tomato-isolated-on-white-background-picture-id466175630",
  "https://cdn.gearpatrol.com/wp-content/uploads/2019/01/10-Best-Indoor-Plants-Gear-Patrol-zizi.jpg",
  "https://pbs.twimg.com/profile_images/557309805795483649/0gK8qnyv_400x400.jpeg",
  "https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white-768x895.png"
];

const status = ["good", "dry", "dead", "wet"];

const projection = ["25", "69", "420", "0"];

class Home extends Component {
  constructor(props) {
    super(props);
    this.dummyData = [
      { x: 1, y: 0.1 },
      { x: 2, y: 0.1 },
      { x: 3, y: 1 },
      { x: 4, y: 1 },
      { x: 5, y: 1 },
      { x: 6, y: 0.8 },
      { x: 7, y: 0.5 },
      { x: 8, y: 0.3 },
      { x: 9, y: 0.2 },
      { x: 10, y: 0.1 }
    ];
  }

  getStatus = status => {
    if (status === "good") return "😊";
    if (status === "dry") return "🔥";
    if (status === "dead") return "💀";
    if (status === "wet") return "💦";
  };

  column = (photo, status, data, projection) => {
    return (
      <div className="column">
        <div className="padding" />
        <div className="photo">
          <img src={photo} alt="Plant 1" className="thumbnail" />
        </div>
        <div className="status">
          <div>Plant ID: 0xFFAAFF</div>
          <div>Status: {this.getStatus(status)}</div>
          {/* TODO: getTemp fn */}
          <div>Temperature: 25°C</div>
        </div>
        <div className="graph">
          Water Level
          <FlexibleXYPlot>
            <XAxis />
            <AreaSeries className="area-series" data={data} color="#FFAA33" />
          </FlexibleXYPlot>
        </div>
        <div className="padding" />
        <div className="graph">
          Daiurnal Cycle
          <FlexibleXYPlot xType="time" colorType="literal">
            <VerticalBarSeries data={myDATA} />
          </FlexibleXYPlot>
        </div>
        <div className="padding" />
        <div className="projection">
          <div>Time until harvest:</div>
          <div>{projection} Days</div>
        </div>
        <div
          className="details"
          onClick={() => this.props.changeActiveComponent("plants")}
        >
          <div className="detailslink">Details</div>
        </div>
      </div>
    );
  };

  render() {
    if (this.props.page === "home") {
      return (
        <div className="home">
          {this.column(photos[0], status[0], this.dummyData, projection[0])}
          {this.column(photos[1], status[1], this.dummyData, projection[1])}
          {this.column(photos[1], status[2], this.dummyData, projection[2])}
          {this.column(photos[3], status[3], this.dummyData, projection[3])}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Home;
