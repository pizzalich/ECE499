import React, { Component } from "react";
import "./Info.css";

class Info extends Component {
  render() {
    if (this.props.page === "info") {
      return (
        <div className="info">
          <div className="banner">
            <div className="logo" />
          </div>
          <div className="barleft">
            <div className="profilepic">
              <img className="profilepicimg" src="./growhouse.jpg" alt=" " />
            </div>
            <div className="summaryleft">
              <u>What is I-Tomato?</u>
              <br />
              I-Tomato is a automated, smart greenhouse designed to help you
              grow better! I-tomato uses a combination of digital sensors and
              computer vision techniques to help you give your plants the care
              that they need. I-tomato provides a low cost alternative to
              conventional smart grow systems by giving you only the data you
              need. I-tomato provides both web and andriod app to give you the
              updates on your plants when you need them. Developed by a team of
              passionate 4th year engineering students, I-tomatio is a vision of
              the future of smart home gardening.
            </div>
          </div>
          <div className="barright">
            <div className="profilepic">
              <img className="profilepicimg" src="./tomato.png" alt=" " />
            </div>
            <div className="summaryright">
              I-Tomato follows the Mississippi State University’s Greenhouse
              Tomato Handbook[1] to help you keep track of what your plant
              needs. I-Tomato's sensor array keeps track of your plants
              temperature, humdity, soil moisture, and light levels. This data
              is also sent to the web server for further analysis and trending,
              as well as to provide notifications and statuses. A camera is
              connected to the I-Tomato unit and used is for computer vision,
              which helps provide a more accurate depiction of the tomato
              plant's health and ripeness.
            </div>
          </div>
          <div className="barleft">
            <div className="profilepic">
              <img className="profilepicimg" src="./corn.png" alt=" " />
            </div>
            <div className="summaryleft">Summary and sources</div>
          </div>

          <div className="barright">
            <div className="profilepic">
              <img className="profilepicimg" src="./carrot.png" alt=" " />
            </div>
            <div className="summaryright">
              <u>Marc Bonwick</u> is a 4th year student at the University of
              Victoria. Marc has a pasion for computer engineering and web
              appliction developmnet. Marc has has taken a lead role in the
              developemnt of the I-Tomato web app, the application back-end,
              hosting solutions, and API’s for all I-Tomato platforms.
            </div>
          </div>
          <div className="barleft">
            <div className="profilepic">
              <img className="profilepicimg" src="./leafy.png" alt=" " />
            </div>
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
            <div className="profilepic">
              <img className="profilepicimg" src="./tomato.png" alt=" " />
            </div>
            <div className="summaryright">
              <u>Kirk D'Mello</u> is a fourth-year Electrical Engineering
              student in his final academic semester. Kirk has been focusing on
              the control and automation side of I-Tomato with most of his
              effort going towards the implementation and testing of the finite
              state-machine, and interfacing with the water pump used for
              watering. Kirk is keen on bringing the skills he's developed at
              UVIC to the real world.
            </div>
          </div>
          <div className="barleft">
            <div className="profilepic">
              <img className="profilepicimg" src="./corn.png" alt=" " />
            </div>
            <div className="summaryleft">
              <u>Paul Formanek</u> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </div>
          </div>
          <div className="barright">
            <div className="profilepic">
              <img className="profilepicimg" src="./jessecao.png" alt=" " />
            </div>
            <div className="summaryright">
              <u>Jesse Cao</u> is a fourth-year electrical engineering student
              at UVic who specializes in energy systems. His role in I-Tomato
              includes the design and implementation of the system's automation,
              which includes the cooling, lighting, and dehumidifying state
              machines. He is also assisting in the electrical installation, and
              wiring, as well as the power management aspect of the system.
            </div>
          </div>
          <div className="barleft">
            <div className="profilepic">
              <img className="profilepicimg" src="./leafy.png" alt=" " />
            </div>
            <div className="summaryleft">
              <u>Kevin Cao</u> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </div>
          </div>
          <div className="barcenter">
            <div className="sources">
              Sources
              <hr />
              [1] R. G. Snyder, Greenhouse Tomato Handbook. Raleigh, NC:
              Mississippi State University, 2007.
              <br />
              [2] <br />
              [3] <br />
              [4] <br />
              [5] <br />
              [6] <br />
              [7]
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
