import React, { Component } from "react";
import Switch from "react-switch";
import { itomatoPostServo } from "../itomatoapi/itomatoapi.js";
import {
  FlexibleXYPlot,
  VerticalBarSeries,
  LineMarkSeries,
  ArcSeries,
  LineSeries,
  ChartLabel,
  Hint,
  DiscreteColorLegend
} from "react-vis";
import "./Plants.css";
import "../../../node_modules/react-vis/dist/style.css";

class Plants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      archint: false,
      arcpoint: false,
      humhint: false,
      humpoint: false,
      temphint: false,
      temppoint: false,
      moisthint: false,
      moistpoint: false,
      showgraph: "temp"
    };
  }

  buildValue(hoveredCell) {
    const { radius, angle, angle0 } = hoveredCell;
    const truedAngle = (angle + angle0) / 2;
    return {
      x: radius * Math.cos(truedAngle),
      y: radius * Math.sin(truedAngle)
    };
  }

  handleChangeFan = () => {
    var servo = {
      fan: this.props.servo.fan === 1 ? 0 : 1,
      pump: this.props.servo.pump,
      vent: this.props.servo.vent
    };
    this.props.updateServo(servo);
    itomatoPostServo(servo.fan, servo.pump, servo.vent);
  };

  handleChangePump = () => {
    var servo = {
      fan: this.props.servo.fan,
      pump: this.props.servo.pump === 1 ? 0 : 1,
      vent: this.props.servo.vent
    };
    this.props.updateServo(servo);
    itomatoPostServo(servo.fan, servo.pump, servo.vent);
  };

  handleChangeVent = () => {
    var servo = {
      fan: this.props.servo.fan,
      pump: this.props.servo.pump,
      vent: this.props.servo.vent === 1 ? 0 : 1
    };
    this.props.updateServo(servo);
    itomatoPostServo(servo.fan, servo.pump, servo.vent);
  };

  componentDidUpdate(prevProps) {
    if (this.props.servo) {
      if (this.props.servo !== prevProps.servo) {
        this.setState({ servo: this.props.servo });
      }
    }
  }

  render() {
    if (this.props.page === "plants") {
      return (
        <div className="plants">
          <div className="pannelleft">
            <div className="feedbox">
              <img src="./tomato.png" alt="Plant 1" className="thumbnail" />
              <div className="switchbox">
                <div className="switchpair">
                  <span>Fan: </span>
                  <Switch
                    onChange={this.handleChangeFan}
                    checked={!!this.props.servo.fan}
                    className="react-switch"
                  />
                </div>
                <div className="switchpair">
                  <span>Vent: </span>
                  <Switch
                    onChange={this.handleChangeVent}
                    checked={!!this.props.servo.vent}
                    className="react-switch"
                  />
                </div>
                <div className="switchpair">
                  <span>Pump: </span>
                  <Switch
                    onChange={this.handleChangePump}
                    checked={!!this.props.servo.pump}
                    className="react-switch"
                  />
                </div>
              </div>
            </div>
            <div className="controlbox">
              <div className="stats">
                <div className="statstitle">Current Status</div>
                <hr />
                <div className="statsdata">
                  Temperature: 16°C <br />
                  {!this.props.ismobile && <br />}
                  Humidity: 67% <br />
                  {!this.props.ismobile && <br />}
                  Sunlight Last 24h: 16 Hours <br />
                  {!this.props.ismobile && <br />}
                  Time Remaining: 42 Days
                  <br />
                  {!this.props.ismobile && <br />}
                  Fan Status: Off
                  <br />
                  {!this.props.ismobile && <br />}
                  Water Pump Status: Off
                </div>
                {this.props.ismobile && (
                  <div className="graphbuttons">
                    <div
                      className="graphbutton"
                      onClick={e => {
                        this.setState({ showgraph: "temp" });
                      }}
                    >
                      °C
                    </div>
                    <div
                      className="graphbutton"
                      onClick={e => {
                        this.setState({ showgraph: "pump" });
                      }}
                    >
                      I/O
                    </div>
                    <div
                      className="graphbutton"
                      onClick={e => {
                        this.setState({ showgraph: "moist" });
                      }}
                    >
                      {/* eslint-disable-next-line */}
                      <span role="img">💦</span>
                    </div>
                    <div
                      className="graphbutton"
                      onClick={e => {
                        this.setState({ showgraph: "sun" });
                      }}
                    >
                      {/* eslint-disable-next-line */}
                      <span role="img">🌞</span>
                    </div>
                  </div>
                )}
                {!this.props.ismobile && (
                  <div className="statuslegend">
                    <DiscreteColorLegend
                      items={[
                        { title: "Fan Status", color: "#FFAA33" },
                        { title: "Pump Status", color: "aqua" }
                      ]}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="pannelright">
            {(!this.props.ismobile || this.state.showgraph === "moist") && (
              <div className="graphbox">
                <FlexibleXYPlot yDomain={[0, 100]}>
                  <ChartLabel
                    text="Soil Moisture Level [%]"
                    className="alt-y-label-moist"
                    includeMargin={false}
                    xPercent={0.06}
                    yPercent={0.06}
                    style={{
                      transform: "rotate(-90)",
                      textAnchor: "end",
                      fontSize: "12"
                    }}
                  />
                  <VerticalBarSeries
                    className="area-series"
                    data={this.props.data}
                    getX={d => d.x}
                    getY={d => d.moisture}
                    color="aqua"
                    onValueMouseOut={(datapoint, event) => {
                      this.setState({ moisthint: false });
                    }}
                    onValueMouseOver={(datapoint, event) => {
                      this.setState({ moisthint: true, moistpoint: datapoint });
                    }}
                    onValueClick={(datapoint, event) => {
                      this.setState({ moisthint: true, moistpoint: datapoint });
                    }}
                  />
                  <LineSeries
                    className="line-series"
                    strokeStyle="dashed"
                    data={this.props.data}
                    getX={d => d.x}
                    getY={d => 30}
                    color="grey"
                  />
                  {this.state.moisthint && (
                    <Hint
                      value={{
                        x: this.state.moistpoint.x,
                        y: this.state.moistpoint.moisture
                      }}
                    >
                      <div className="moisttooltip">
                        <p>{this.state.moistpoint.moisture + "%"}</p>
                      </div>
                    </Hint>
                  )}
                </FlexibleXYPlot>
              </div>
            )}
            {(!this.props.ismobile || this.state.showgraph === "temp") && (
              <div className="graphbox">
                <FlexibleXYPlot yDomain={[0, 25]} xDomain={[-1, 41]}>
                  <ChartLabel
                    text="Temperature and Humidity [°C/%]"
                    className="alt-y-label-temp"
                    includeMargin={false}
                    xPercent={0.0}
                    yPercent={0.06}
                    style={{
                      transform: "rotate(-90)",
                      textAnchor: "end",
                      fontSize: "12"
                    }}
                  />
                  <VerticalBarSeries
                    className="humidity-series"
                    data={this.props.data}
                    getX={d => d.x}
                    getY={d => d.humidity / 4}
                    color="FFAA33"
                    onValueMouseOut={(datapoint, event) => {
                      this.setState({ humhint: false });
                    }}
                    onValueMouseOver={(datapoint, event) => {
                      this.setState({ humhint: true, humpoint: datapoint });
                    }}
                    onValueClick={(datapoint, event) => {
                      this.setState({ humhint: true, humpoint: datapoint });
                    }}
                  />
                  {this.state.humhint && (
                    <Hint
                      value={{
                        x: this.state.humpoint.x,
                        y: this.state.humpoint.humidity / 4
                      }}
                    >
                      <div className="humtooltip">
                        <p>{this.state.humpoint.humidity + "%"}</p>
                      </div>
                    </Hint>
                  )}
                  {this.state.temphint && (
                    <Hint
                      value={{
                        x: this.state.temppoint.x,
                        y: this.state.temppoint.temp
                      }}
                    >
                      <div className="temptooltip">
                        <p>{this.state.temppoint.temp + "°C"}</p>
                      </div>
                    </Hint>
                  )}
                  <LineMarkSeries
                    className="linemark-series"
                    fill="grey"
                    data={this.props.data}
                    getX={d => d.x}
                    getY={d => d.temp}
                    onValueMouseOut={(datapoint, event) => {
                      this.setState({ temphint: false });
                    }}
                    onValueMouseOver={(datapoint, event) => {
                      this.setState({ temphint: true, temppoint: datapoint });
                    }}
                    onValueClick={(datapoint, event) => {
                      this.setState({ temphint: true, temppoint: datapoint });
                    }}
                  />
                </FlexibleXYPlot>
              </div>
            )}
            {(!this.props.ismobile || this.state.showgraph === "pump") && (
              <div className="graphbox">
                <FlexibleXYPlot yDomain={[-1, 5]} xDomain={[-0.1, 10]}>
                  <ChartLabel
                    text="Pump and Fan Status [On/Off]"
                    className="alt-y-label-pump"
                    includeMargin={false}
                    xPercent={0.0}
                    yPercent={0.06}
                    style={{
                      transform: "rotate(-90)",
                      textAnchor: "end",
                      fontSize: "12"
                    }}
                  />
                  <LineSeries
                    className="pump-status"
                    data={[
                      { x: 1, y: 0 },
                      { x: 2, y: 0 },
                      { x: 2, y: 1 },
                      { x: 3, y: 1 },
                      { x: 3, y: 0 },
                      { x: 6, y: 0 },
                      { x: 7, y: 0 },
                      { x: 8, y: 0 },
                      { x: 9, y: 0 },
                      { x: 10, y: 0 }
                    ]}
                    color={"aqua"}
                  />
                  <LineSeries
                    className="fan-status"
                    data={[
                      { x: 1, y: 3 },
                      { x: 2, y: 3 },
                      { x: 3, y: 3 },
                      { x: 3, y: 4 },
                      { x: 4, y: 4 },
                      { x: 5, y: 4 },
                      { x: 6, y: 4 },
                      { x: 7, y: 4 },
                      { x: 7, y: 3 },
                      { x: 8, y: 3 },
                      { x: 9, y: 3 },
                      { x: 10, y: 3 }
                    ]}
                    color={"#FFAA33"}
                  />
                </FlexibleXYPlot>
              </div>
            )}
            {(!this.props.ismobile || this.state.showgraph === "sun") && (
              <div className="graphbox">
                <FlexibleXYPlot
                  xDomain={[-3, 3]}
                  yDomain={[-3, 3]}
                  colorType="literal"
                >
                  <ChartLabel
                    text="Sunlight Hours Per Day [h]"
                    className="alt-y-label-light"
                    includeMargin={false}
                    xPercent={0.06}
                    yPercent={0.06}
                    style={{
                      transform: "rotate(-90)",
                      textAnchor: "end",
                      fontSize: "12"
                    }}
                  />
                  <ArcSeries
                    radiusDomain={[0, 3]}
                    onValueMouseOut={(datapoint, event) => {
                      this.setState({ archint: false });
                    }}
                    onValueMouseOver={(datapoint, event) => {
                      this.setState({ archint: true, arcpoint: datapoint });
                    }}
                    onValueClick={(datapoint, event) => {
                      this.setState({ archint: true, arcpoint: datapoint });
                    }}
                    data={[
                      {
                        angle0: 0,
                        angle: 1.4 * 3.14,
                        radius: 2,
                        radius0: 1,
                        color: "#FFAA33",
                        value: "16"
                      },
                      {
                        angle0: 1.4 * 3.14,
                        angle: 2 * 3.14,
                        radius: 1.8,
                        radius0: 1,
                        color: "grey",
                        value: "8"
                      }
                    ]}
                  />
                  {this.state.archint && (
                    <Hint value={this.buildValue(this.state.arcpoint)}>
                      <div className="arctooltip">
                        <p>{this.state.arcpoint.value + "h"}</p>
                      </div>
                    </Hint>
                  )}
                </FlexibleXYPlot>
              </div>
            )}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Plants;
