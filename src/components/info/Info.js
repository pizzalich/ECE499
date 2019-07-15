import React, { Component } from "react";
import "./Info.css";

class Info extends Component {
  render() {
    if (this.props.page === "info") {
      return (
        <div className="info">
          <div className="banner">
            <span>👌😉🍅</span>
            <div className="logo">I-Tomato</div>
          </div>
          <div className="barleft">
            <div className="profilepic">
              <span className="helper" />
              <img className="profilepicimg" src="/growhouse.jpg" />
            </div>
            <div className="summaryleft">
              <u>What is I-Tomato?</u>
              <br />
              I-Tomato is a automated, smart greenhouse designed to help you
              grow better! I-tomato uses a combination of light weight sensors
              and computer vision techniques to help you give your plants the
              care that they need. I-tomato provides a low cost alternative to
              conventional smart grow systems by giving you only the data you
              need. I-tomato also provides a web and andriod app to give you the
              updates on your plants when you need them. Developed by a team of
              passionate 4th year engineering students, I-tomatio is a vision of
              the future of smart home gardening
            </div>
          </div>
          <div className="barright">
            <div className="profilepic">PIC GOES HERE</div>
            <div className="summaryright">
              <u>Marc Bonwick</u> is a 4th year student at the University of
              Victoria. Marc has a pasion for computer engineering and web
              appliction developmnet. Marc has has taken a lead role in the
              developemnt of the I-Tomato web app, the application back-end,
              hosting solutions, and API’s for all I-Tomato platforms.
            </div>
          </div>
          <div className="barleft">
            <div className="profilepic">PIC GOES HERE</div>
            <div className="summaryleft">
              <u>Jeffrey Farrell</u> is a 4th year electrical engineering
              student at the University of Victoria. Born in the Comox Valley,
              British Columbia, Jeffrey’s interest in agriculture stems from
              being raised on Shamrock Farm, a family farm that has been run by
              the Farrell’s for 25 years. He understands the hard work required
              to grow a crop which ultimately spiked his interest in smart
              greenhouses. His role in I-Tomato include the physical aspects
              including building a small greenhouse for the purpose of the
              project, design of the I2C bus, programming for the I2C bus,
              design of the temperature controls, and programming of the
              temperature and initialization states of the state machine.
              Jeffrey will also devote his spare time to helping others where
              needed.
            </div>
          </div>
          <div className="barright">
            <div className="profilepic">PIC GOES HERE</div>
            <div className="summaryright">
              BIO GOES HERELorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </div>
          </div>
          <div className="barleft">
            <div className="profilepic">PIC GOES HERE</div>
            <div className="summaryleft">
              BIO GOES HERE Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </div>
          </div>
          <div className="barright">
            <div className="profilepic">PIC GOES HERE</div>
            <div className="summaryright">
              BIO GOES HERE Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Info;
