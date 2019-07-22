import React, { Component } from "react";
import {
  FlexibleXYPlot,
  VerticalBarSeries,
  LineMarkSeries,
  LineSeries,
  ChartLabel,
  XAxis,
  YAxis,
  DiscreteColorLegend
} from "react-vis";
import tempData from "../../data/data.js";
import "./Home.css";
import "../../../node_modules/react-vis/dist/style.css";

const photos = ["./tomato.png", "./corn.png", "./carrot.png", "./leafy.png"];

const status = ["good", "dry", "dead", "wet"];

const projection = ["25", "69", "420", "0"];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidUpdate(prevProps) {
    if (this.props.data) {
      if (this.props.data !== prevProps.data) {
        this.setState({ data: this.props.data });
      }
    }
  }

  getStatus = status => {
    if (status === "good") return "😊";
    if (status === "dry") return "🔥";
    if (status === "dead") return "💀";
    if (status === "wet") return "💦";
  };

  column = (photo, status, data, projection) => {
    console.log(data);
    return (
      <div className="column">
        <div className="padding" />
        <div className="photo">
          <img src={photo} alt="Plant 1" className="thumbnail" />
        </div>
        <div className="status">
          <div>Plant ID: 0xFFAAFF</div>
          <div>Status: {this.getStatus(status)}</div>
          <div>Temperature: 25°C</div>
        </div>
        <div className="graph">
          Soil Moisture
          {this.props.drawgraphs && this.state.data && (
            <FlexibleXYPlot className="moisturegraph" yDomain={[0, 100]}>
              <XAxis />
              <YAxis />
              <LineSeries
                className="line-series"
                data={data}
                getX={d => d.x}
                getY={d => d.moisture}
                color="#FF4433"
              />
              <LineSeries
                className="line-series"
                strokeStyle="dashed"
                data={data}
                getX={d => d.x}
                getY={d => 30}
                color="grey"
              />
            </FlexibleXYPlot>
          )}
        </div>
        <div className="padding" />
        <div className="graph">
          Temperature & Humidity
          {this.props.drawgraphs && this.state.data && (
            <FlexibleXYPlot className="tempgraph" yDomain={[0, 25]}>
              <XAxis />
              <YAxis />
              <VerticalBarSeries
                className="humidity-series"
                data={data}
                getX={d => d.x}
                getY={d => d.humidity / 4}
                color="aqua"
              />
              <LineSeries
                className="linemark-series"
                data={data}
                getX={d => d.x}
                getY={d => d.temp}
                fill="grey"
              />
            </FlexibleXYPlot>
          )}
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

  mobileSummary = () => {
    return (
      <div className="mobilesummary">
        <div className="mobiledata">
          <div className="mobileplant">
            <img src="./tomato.png" alt="" className="mobileicon" />
            <DiscreteColorLegend
              items={[{ title: "Tomato", color: "#FF4433" }]}
            />
            15.9°C
            <br />
            Moisture: 43%
          </div>
          <div className="mobileplant">
            <img src="./corn.png" alt="" className="mobileicon" />
            <DiscreteColorLegend
              items={[{ title: "Corn", color: "#FFAA33" }]}
            />
            15.9°C
            <br />
            Moisture: 43%
          </div>
          <div className="mobileplant">
            <img src="./carrot.png" alt="" className="mobileicon" />
            <DiscreteColorLegend
              items={[{ title: "Carrot", color: "#FF6B00" }]}
            />
            15.9°C
            <br />
            Moisture: 43%
          </div>
          <div className="mobileplant">
            <img src="./leafy.png" alt="" className="mobileicon" />
            <DiscreteColorLegend
              items={[{ title: "Greens", color: "#33FFAA" }]}
            />
            15.9°C
            <br />
            Moisture: 43%
          </div>
        </div>
        <div className="mobiletemp">
          {this.props.drawgraphs && this.state.data && (
            <FlexibleXYPlot
              colorType="literal"
              className="mobiletempgraph"
              yDomain={[10, 25]}
            >
              <ChartLabel
                text="Temperature [°C]"
                className="alt-y-label-temp"
                includeMargin={false}
                xPercent={0.02}
                yPercent={0.06}
                style={{
                  textAnchor: "start",
                  fontSize: "12"
                }}
              />
              <XAxis />
              <YAxis />
              <LineSeries
                className="line-series"
                data={this.props.data}
                getX={d => d.x}
                getY={d => d.temp}
                color="#FF4433"
              />
              <LineSeries
                className="line-series"
                data={tempData}
                color="#FFAA33"
              />
              <LineSeries
                className="line-series"
                data={tempData}
                getY={d => d.y * 0.75}
                color="#FF6B00"
              />
              <LineSeries
                className="line-series"
                data={tempData}
                getY={d => d.y * 0.8}
                color="#33FFAA"
              />
            </FlexibleXYPlot>
          )}
        </div>
        <div className="mobilemoisture">
          {this.props.drawgraphs && this.state.data && (
            <FlexibleXYPlot className="mobilemoisturegraph" yDomain={[0, 100]}>
              <XAxis />
              <YAxis />
              <LineSeries
                className="line-series"
                data={this.props.data}
                getX={d => d.x}
                getY={d => d.moisture}
                color="#FF4433"
              />
              <LineSeries
                className="line-series"
                data={this.props.data}
                getX={d => d.x}
                getY={d => d.moisture * 0.5 + 0.1}
                color="#FFAA33"
              />
              <LineSeries
                className="line-series"
                data={this.props.data}
                getX={d => d.x}
                getY={d => d.moisture * 0.3 + 0.1}
                color="#FF6B00"
              />
              <LineSeries
                className="line-series"
                data={this.props.data}
                getX={d => d.x}
                getY={d => d.moisture * 0.4 + 0.1}
                color="#33FFAA"
              />
              <LineSeries
                className="line-series"
                strokeStyle="dashed"
                data={this.props.data}
                getX={d => d.x}
                getY={d => 30}
                color="grey"
              />
              <ChartLabel
                text="Soil Moisture [%]"
                className="alt-y-label-temp"
                includeMargin={false}
                xPercent={0.02}
                yPercent={0.06}
                style={{
                  textAnchor: "start",
                  fontSize: "12"
                }}
              />
            </FlexibleXYPlot>
          )}
        </div>
        <div className="mobilebutton">
          <div
            className="details"
            onClick={() => this.props.changeActiveComponent("plants")}
          >
            <div className="detailslink">Details</div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    if (this.props.page === "home") {
      if (!this.props.ismobile) {
        return (
          <div className="home">
            {this.column(photos[0], status[0], this.state.data, projection[0])}
            {this.column(photos[1], status[1], this.state.data, projection[1])}
            {this.column(photos[2], status[2], this.state.data, projection[2])}
            {this.column(photos[3], status[3], this.state.data, projection[3])}
          </div>
        );
      } else {
        return this.mobileSummary();
      }
    } else {
      return null;
    }
  }
}

export default Home;
