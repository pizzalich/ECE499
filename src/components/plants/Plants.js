import React, { Component } from "react";
import {
  FlexibleXYPlot,
  VerticalBarSeries,
  AreaSeries,
  ArcSeries,
  LineSeries,
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  YAxis,
  ChartLabel
} from "react-vis";
import "./Plants.css";
import "../../../node_modules/react-vis/dist/style.css";

const PI = Math.PI;

const lightDATA = [
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

const dummyData = [
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
                Temperature: 32 <br />
                Humdiity: %200 <br />
                Sunlight per day: 25 Hours <br />
                Time Remaining: 420 Days
              </div>
              <div className="buttons">
                <img
                  src="https://www.sanwebe.com/wp-content/uploads/2014/02/css3-btn-32.jpg"
                  alt="Plant 1"
                  width="100%"
                />
              </div>
            </div>
          </div>
          <div className="pannelright">
            <div className="graphbox">
              {" "}
              <FlexibleXYPlot xType="time" colorType="literal">
                <VerticalBarSeries data={lightDATA} />
              </FlexibleXYPlot>
            </div>
            <div className="graphbox">
              {" "}
              <FlexibleXYPlot>
                <XAxis />
                <AreaSeries
                  className="area-series"
                  data={dummyData}
                  color="#FFAA33"
                />
              </FlexibleXYPlot>
            </div>
            <div className="graphbox">
              <FlexibleXYPlot>
                {/* <HorizontalGridLines />
                <VerticalGridLines /> */}
                <ChartLabel
                  text="X Axis"
                  className="alt-x-label"
                  includeMargin={false}
                  xPercent={0.025}
                  yPercent={1.01}
                />

                <ChartLabel
                  text="Y Axis"
                  className="alt-y-label"
                  includeMargin={false}
                  xPercent={0.06}
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
              {" "}
              <FlexibleXYPlot
                xDomain={[-3, 3]}
                yDomain={[-3, 3]}
                getAngle={d => d.time}
                getAngle0={d => 0}
                colorType="literal"
              >
                <ArcSeries
                  radiusDomain={[0, 3]}
                  data={[
                    {
                      time: 6,
                      radius0: 1,
                      radius: 1.5,
                      color: "#FFAA33"
                    },
                    {
                      time: 4.5,
                      radius0: 1.6,
                      radius: 2.1,
                      color: "#FFAAFF"
                    },
                    {
                      time: 0.6,
                      radius0: 2.2,
                      radius: 2.7,
                      color: "#32AAFF"
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
