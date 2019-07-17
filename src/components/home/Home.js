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
import "./Home.css";
import "../../../node_modules/react-vis/dist/style.css";

const tempData1 = [
  { x: 1, y: 15.9 },
  { x: 2, y: 14.8 },
  { x: 3, y: 15.3 },
  { x: 4, y: 18.1 },
  { x: 5, y: 20 },
  { x: 6, y: 18.9 },
  { x: 7, y: 16.2 },
  { x: 8, y: 14.9 },
  { x: 9, y: 14.4 },
  { x: 10, y: 15.5 }
];

const tempData2 = [
  { x: 1, y: 17.1 },
  { x: 2, y: 15.5 },
  { x: 3, y: 14.8 },
  { x: 4, y: 12.4 },
  { x: 5, y: 15.3 },
  { x: 6, y: 18.1 },
  { x: 7, y: 18.9 },
  { x: 8, y: 16.2 },
  { x: 9, y: 13.3 },
  { x: 10, y: 12.1 }
];

const tempData3 = [
  { x: 1, y: 14.3 },
  { x: 2, y: 14 },
  { x: 3, y: 16.8 },
  { x: 4, y: 17.9 },
  { x: 5, y: 19.4 },
  { x: 6, y: 17 },
  { x: 7, y: 14.6 },
  { x: 8, y: 13.6 },
  { x: 9, y: 16.9 },
  { x: 10, y: 18.1 }
];

const tempData4 = [
  { x: 1, y: 14.2 },
  { x: 2, y: 16.9 },
  { x: 3, y: 17.6 },
  { x: 4, y: 16.7 },
  { x: 5, y: 14.3 },
  { x: 6, y: 13 },
  { x: 7, y: 16.7 },
  { x: 8, y: 18.6 },
  { x: 9, y: 20.2 },
  { x: 10, y: 18.5 }
];

const humidData = [
  { x: 1, y: 0.25 },
  { x: 2, y: 0.75 },
  { x: 3, y: 1.11 },
  { x: 4, y: 1.25 },
  { x: 5, y: 1.11 },
  { x: 6, y: 0.75 },
  { x: 7, y: 0.25 },
  { x: 8, y: 0.25 },
  { x: 9, y: 0.22 },
  { x: 10, y: 0.25 }
];

const waterData = [
  { x: 1, y: 10 },
  { x: 2, y: 10 },
  { x: 3, y: 90 },
  { x: 4, y: 95 },
  { x: 5, y: 90 },
  { x: 6, y: 80 },
  { x: 7, y: 50 },
  { x: 8, y: 30 },
  { x: 9, y: 20 },
  { x: 10, y: 10 }
];

const waterLine = [
  { x: 1, y: 25 },
  { x: 2, y: 25 },
  { x: 3, y: 25 },
  { x: 4, y: 25 },
  { x: 5, y: 25 },
  { x: 6, y: 25 },
  { x: 7, y: 25 },
  { x: 8, y: 25 },
  { x: 9, y: 25 },
  { x: 10, y: 25 }
];

const photos = ["./tomato.png", "./corn.png", "./carrot.png", "./leafy.png"];

const status = ["good", "dry", "dead", "wet"];

const projection = ["25", "69", "420", "0"];

class Home extends Component {
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
          Soil Moisture
          {this.props.drawgraphs && (
            <FlexibleXYPlot className="moisturegraph">
              <XAxis />
              <YAxis />
              <VerticalBarSeries
                className="area-series"
                data={waterData}
                color="aqua"
              />
              <LineSeries
                className="line-series"
                strokeStyle="dashed"
                data={waterLine}
                color="grey"
              />
            </FlexibleXYPlot>
          )}
        </div>
        <div className="padding" />
        <div className="graph">
          Temperature & Humidity
          {this.props.drawgraphs && (
            <FlexibleXYPlot colorType="literal" className="tempgraph">
              <XAxis />
              <YAxis />
              <VerticalBarSeries
                className="humidity-series"
                data={humidData}
                color="#FFAA33"
                getY={d => d.y * 20}
              />
              <LineMarkSeries
                className="linemark-series"
                data={tempData1}
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
          {this.props.drawgraphs && (
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
                data={tempData1}
                color="#FF4433"
              />
              <LineSeries
                className="line-series"
                data={tempData2}
                color="#FFAA33"
              />
              <LineSeries
                className="line-series"
                data={tempData3}
                color="#FF6B00"
              />
              <LineSeries
                className="line-series"
                data={tempData4}
                color="#33FFAA"
              />
            </FlexibleXYPlot>
          )}
        </div>
        <div className="mobilemoisture">
          {this.props.drawgraphs && (
            <FlexibleXYPlot className="mobilemoisturegraph" yDomain={[0, 100]}>
              <XAxis />
              <YAxis />
              <LineSeries
                className="line-series"
                data={waterData}
                color="#FF4433"
              />
              <LineSeries
                className="line-series"
                data={waterData}
                getY={d => d.y * 0.5 + 0.1}
                color="#FFAA33"
              />
              <LineSeries
                className="line-series"
                data={waterData}
                getY={d => d.y * 0.3 + 0.1}
                color="#FF6B00"
              />
              <LineSeries
                className="line-series"
                data={waterData}
                getY={d => d.y * 0.4 + 0.1}
                color="#33FFAA"
              />
              <LineSeries
                className="line-series"
                strokeStyle="dashed"
                data={waterLine}
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
            {this.column(photos[0], status[0], waterData, projection[0])}
            {this.column(photos[1], status[1], waterData, projection[1])}
            {this.column(photos[2], status[2], waterData, projection[2])}
            {this.column(photos[3], status[3], waterData, projection[3])}
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
