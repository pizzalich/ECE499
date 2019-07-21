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
              temperature, humdity, soil moisture, and light levels. I-Tomato
              utilizes computer vision to determine if there are any ripe
              tomatoes. The images captured by the Pi camera are first converted
              from the RGB (red, green, blue) color model to the HSV (hue,
              saturation, value) model [2], to simplify color detection. A
              Gaussian filter is applied to the HSV image to reduce noise [3],
              then each pixel is classified based on ripeness. Three levels of
              ripeness are used [4]. The first level considers pixels with hue
              varying from green to yellow and within specific saturation and
              hue ranges to ignore white or black pixels as well as the green
              plant itself. The next level covers partially ripe tomatoes
              looking for hues in the yellow to orange range, and the final
              level which is an indication of ripe tomatoes looks for hues
              within the range of red values. If any ripe tomatoes have been
              found, the user is notified through the web app.
            </div>
          </div>
          <div className="barleft">
            <div className="profilepic">
              <img className="profilepicimg" src="./corn.png" alt=" " />
            </div>
            <div className="summaryleft">
              The electronics of I-Tomato will be built around a Raspberry Pi 3
              Model B micro computer. The Pi comes readily available with 40 pin
              extended GPIO that includes digital IO and a serial interface, as
              well as other features like wifi connectivity [5]. Along with a
              designed power switching board, the digital IO is used to control
              of various elements of greenhouse automation. This includes,
              ventilation, temperature, humidity, watering and lighting. Data
              will be collected from temperature, humidity, light and moisture
              sensors over an I2C bus designed for ‘Standard mode’ operation
              [6]. A 120V AC power plug will be required to power I-Tomato. DC
              power requirements will be satisfied by two 5V DC sources, which
              will be connected in series to provide 5V to 10V DC where needed.
            </div>
          </div>
          <div className="barright">
            <div className="profilepic">
              <img className="profilepicimg" src="./carrot.png" alt=" " />
            </div>
            <div className="summaryright">
              The I-tomato's web app is written using React. It leverages a
              PostgreSQL server for storing and serving its live data though the
              I-Tomato API. I-Tomato API is a fully RESTful API[] with support
              for in JavaScript, Java, and Python, to make your data easily
              accessable from the web, mobile, or on your embedded device.
              I-tomato's graphs and visualizations are created with the help of
              React-Vis and Emojis from Microsoft Corperation.
            </div>
          </div>
          <div className="barleft">
            <div className="profilepic">
              <img className="profilepicimg" src="./tomato.png" alt=" " />
            </div>
            <div className="summaryleft">
              I-Tomato's addroid app is written using React-Native, with
              libraries provided by Facebook and Uber. The I-Tomato app is
              available for any android device running release candidate 28(Pie)
              or later! Support of iOS devices is not currently planned for
              I-Tomato.
            </div>
          </div>
          <div className="barright">
            <div className="profilepic">
              <img className="profilepicimg" src="./marc.jpg" alt=" " />
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
              <img className="profilepicimg" src="./jeff.jpeg" alt=" " />
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
              <img className="profilepicimg" src="./kirk.jpg" alt=" " />
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
              <img className="profilepicimg" src="./paul.jpg" alt=" " />
            </div>
            <div className="summaryleft">
              <u>Paul Formanek</u> is finishing his 4th year of Electrical
              Engineering at the University of Victoria. He enjoys working with
              embedded systems and is particularly keen on digital signal
              processing. Paul’s focus in the project has been with the computer
              vision aspect.
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
              <u>Kevin Cao</u> is finishing his final semester at UVic where he
              is majoring in electrical engineering, with a specialization in
              energy system. He is assisting team members in the physical design
              of the system as well as the implementation and testing of the
              state machines. His power management responsibilities ensure that
              the system fan, servo, and water pump are supplied enough power to
              run at maximum capacity.
            </div>
          </div>
          <div className="barcenter">
            <div className="sources">
              Sources
              <hr />
              [1] R. G. Snyder, Greenhouse Tomato Handbook. Raleigh, NC:
              Mississippi State University, 2007.
              <br />
              [2] N. A. Ibraheem, M. H. Hasan, R. Z. Khan, P. K. Mishra,
              “Understanding Color Models: A Review,” ARPN Journal of Science
              and Technology, Vol.2 No. 3, April 2012. [Online]. Available:
              http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.679.8051&rep=rep1&type=pdf
              [Accessed July 20, 2019].
              <br />
              [3] G. Deng. L. W. Cahill, “An Adaptive Gaussian Filter for Noise
              Reduction and Edge Detection,” IEEE Conference Record Nuclear
              Science Symposium and Medical Imaging Conference, San Francisco,
              CA, USA, 1993, pp. 1615-1619 vol.3. [Online]. Available:
              https://www.researchgate.net/publication/3572571_An_adaptive_Gaussian_filter_for_noise_reduction_and_edge_detection
              <br />
              [4] Lagorio Family of Comanies, Guide to Ripening Stages, 2019.
              [Online]. Available:
              http://www.lagorio.com/assets/pdf/lagorio-tomato-guide.pdf .
              [Accessed: 20- Jul- 2019].
              <br />
              [5] Raspberry Pi Foundation, Raspberry pi model 3, [Online].
              Available:
              https://www.raspberrypi.org/products/raspberry-pi-3-model-b/
              [Accessed: 20- Jul- 2019]
              <br />
              [6] NPX Corperation, 2C-bus specification and user manual
              [Online]. Available:
              https://www.nxp.com/docs/en/user-guide/UM10204.pdf [Accessed: 20-
              Jul- 2019]
              <br />
              [7] Roy Fielding, Representational State Transfer (REST), [Online]
              Available:https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm
              [Accessed: 20- Jul- 2019]
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
