import React, { Component } from "react";
import {
  FlexibleXYPlot,
  VerticalBarSeries,
  LineMarkSeries,
  ArcSeries,
  LineSeries,
  ChartLabel
} from "react-vis";
import "./Plants.css";
import "../../../node_modules/react-vis/dist/style.css";

const tempData = [
  { x: 1, y: 1.25, color: "#FFAA33" },
  { x: 2, y: 1.75, color: "#FFAA33" },
  { x: 3, y: 2.11, color: "#FFAA33" },
  { x: 4, y: 2.25, color: "#FFAA33" },
  { x: 5, y: 2.11, color: "#FFAA33" },
  { x: 6, y: 1.75, color: "#FFAA33" },
  { x: 7, y: 1.25, color: "#FFAA33" },
  { x: 8, y: 0.75, color: "#33A2FF" },
  { x: 9, y: 0.38, color: "#33A2FF" },
  { x: 10, y: 0.25, color: "#33A2FF" },
  { x: 11, y: 0.38, color: "#33A2FF" },
  { x: 12, y: 0.75, color: "#33A2FF" }
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
  { x: 10, y: 0.25 },
  { x: 11, y: 0.32 },
  { x: 12, y: 0.25 }
];

const waterData = [
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

const waterLine = [
  { x: 1, y: 0.25 },
  { x: 2, y: 0.25 },
  { x: 3, y: 0.25 },
  { x: 4, y: 0.25 },
  { x: 5, y: 0.25 },
  { x: 6, y: 0.25 },
  { x: 7, y: 0.25 },
  { x: 8, y: 0.25 },
  { x: 9, y: 0.25 },
  { x: 10, y: 0.25 }
];

class Plants extends Component {
  render() {
    if (this.props.page === "plants") {
      return (
        <div className="plants">
          <div className="pannelleft">
            <div className="feedbox">
              <img
                src="https://cdn.gearpatrol.com/wp-content/uploads/2019/01/10-Best-Indoor-Plants-Gear-Patrol-zizi.jpg"
                alt="Plant 1"
                className="thumbnail"
              />
            </div>
            <div className="controlbox">
              <div className="stats">
                <div className="statstitle">Current Status</div>
                <hr />
                <div className="statsdata">
                  Temperature: 16°C <br />
                  <br />
                  Humidity: 67% <br />
                  <br />
                  Sunlight Last 24h: 16 Hours <br />
                  <br />
                  Time Remaining: 42 Days
                  <br />
                  <br />
                  Fan Status: Off
                  <br />
                  <br />
                  Water Pump Status: Off
                </div>
                <hr />
              </div>
              <div className="buttons" />
            </div>
          </div>
          <div className="pannelright">
            <div className="graphbox">
              <FlexibleXYPlot xType="time" colorType="literal">
                <ChartLabel
                  text="Soil Moisture Level"
                  className="alt-y-label"
                  includeMargin={false}
                  xPercent={0.06}
                  yPercent={0.06}
                  style={{
                    transform: "rotate(-90)",
                    textAnchor: "end"
                  }}
                />
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
            </div>
            <div className="graphbox">
              <FlexibleXYPlot>
                <ChartLabel
                  text="Temperature and Humidity"
                  className="alt-y-label"
                  includeMargin={false}
                  xPercent={0.0}
                  yPercent={0.06}
                  style={{
                    transform: "rotate(-90)",
                    textAnchor: "end"
                  }}
                />
                <VerticalBarSeries
                  className="humidity-series"
                  data={humidData}
                  color="FFAA33"
                />
                <LineMarkSeries className="linemark-series" data={tempData} />
              </FlexibleXYPlot>
            </div>
            <div className="graphbox">
              <FlexibleXYPlot>
                <ChartLabel
                  text="Tomato Color Change"
                  className="alt-y-label"
                  includeMargin={false}
                  xPercent={0.0}
                  yPercent={0.06}
                  style={{
                    transform: "rotate(-90)",
                    textAnchor: "end"
                  }}
                />
                <LineSeries
                  className="first-series"
                  data={[
                    { x: 1, y: 3 },
                    { x: 2, y: 5 },
                    { x: 3, y: 15 },
                    { x: 4, y: 12 }
                  ]}
                  color={"#FFAA33"}
                />
                <LineSeries
                  className="third-series"
                  curve={"curveMonotoneX"}
                  data={[
                    { x: 1, y: 10 },
                    { x: 2, y: 4 },
                    { x: 3, y: 2 },
                    { x: 4, y: 15 }
                  ]}
                />
              </FlexibleXYPlot>
            </div>
            <div className="graphbox">
              <FlexibleXYPlot
                xDomain={[-3, 3]}
                yDomain={[-3, 3]}
                colorType="literal"
              >
                <ChartLabel
                  text="Sunlight Hours Per Day"
                  className="alt-y-label"
                  includeMargin={false}
                  xPercent={0.06}
                  yPercent={0.06}
                  style={{
                    transform: "rotate(-90)",
                    textAnchor: "end"
                  }}
                />
                <ArcSeries
                  radiusDomain={[0, 3]}
                  data={[
                    {
                      angle0: 0,
                      angle: 1.4 * 3.14,
                      radius: 2,
                      radius0: 1,
                      color: "#FFAA33"
                    },
                    {
                      angle0: 1.4 * 3.14,
                      angle: 2 * 3.14,
                      radius: 1.8,
                      radius0: 1,
                      color: "grey"
                    }
                  ]}
                />
              </FlexibleXYPlot>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Plants;
