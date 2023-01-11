import './App.css';
import Profile from './amogh.jpg';
import Icseasy from './ICSEASY.png';
import Pmun from './pmun.png';
import Unravelling from './unravelling.png';
import Debate from './debate.png';
import Typed from "react-typed"

// document.getElementById("about-button").onclick = function scrolldiv() {
  
//   elem.
// }

function App() {
  return (
    <body>
      <div className="background" id="top">
        <div class="header-parent">
          <div className="header-logo">
            <a className="logo" href="#top">AMP</a>
          </div>          
          <div className="header-items">
            <a className="header-item" id="about-button" href="/#about">About</a>
            <a className="header-item" href="/#projects">Projects</a>
            <button className="header-item">Artwork</button>
            <button className="header-item">Contact</button>
            <button className="header-item">Resume</button>
          </div>
        </div>

        <div className="main-div" id="main">
          <h3 className="main-text">Amogh Panhale</h3>
          <h3 className="main-text-lower">I'm a </h3>
          <Typed className="main-text-lower"
            strings={[
              "software developer",
              "student",
              "cyclist",
            ]}
            typeSpeed={80}
            backSpeed={70}
            loop
          />
        </div>

        <div className="about-main" id="about">
        <img className="about-picture" src={Profile} alt = "profile"></img>
          <div className="about-parent-div">
            <div className="about-div">
              <h1 className="about-heading">About me</h1>
              <h3 className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h3>
            </div>
          </div>

          <div className="about-parent-skills-div">
            <div className="about-div">
              <h1 className="skills-heading">My skills</h1>
              <h3 className="skills-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h3>
            </div>
          </div>
        </div>


        <div className="projects-main" id="projects">
          <div className="projects-parent-div">
            <div className="projects-parent-div">
              <h1 className="projects-heading">Projects</h1>
            </div>
            <div className="project">
              <img className="icseasy" src={Icseasy} alt = "icseasy"></img>
              <a className="project-text">ICSEASY </a><br></br><a className="project-text-description">A personalized mathematics service for testing and practice</a>
            </div>

            <div className="project">
              <img className="icseasy" src={Pmun} alt = "icseasy"></img>
              <a className="project-text">PsephosMun website </a><br></br><a className="project-text-description">A personalized mathematics service for testing and practice</a>
            </div>

            <div className="project">
              <img className="icseasy" src={Unravelling} alt = "icseasy"></img>
              <a className="project-text">Unravelling thoughts </a><br></br><a className="project-text-description">A personalized mathematics service for testing and practice</a>
            </div>

            <div className="project">
              <img className="icseasy" src={Debate} alt = "icseasy"></img>
              <a className="project-text">GMA Debate society website </a><br></br><a className="project-text-description">A personalized mathematics service for testing and practice</a>
            </div>
          </div>

          <div className="projects-parent-div-row2">
            <div className="project">
              <img className="icseasy" src={Icseasy} alt = "icseasy"></img>
              <a className="project-text">ICSEASY </a><br></br><a className="project-text-description">A personalized mathematics service for testing and practice</a>
            </div>

            <div className="project">
              <img className="icseasy" src={Pmun} alt = "icseasy"></img>
              <a className="project-text">PsephosMun website </a><br></br><a className="project-text-description">A personalized mathematics service for testing and practice</a>
            </div>

            <div className="project">
              <img className="icseasy" src={Unravelling} alt = "icseasy"></img>
              <a className="project-text">Unravelling thoughts </a><br></br><a className="project-text-description">A personalized mathematics service for testing and practice</a>
            </div>

            <div className="project">
              <img className="icseasy" src={Debate} alt = "icseasy"></img>
              <a className="project-text">GMA Debate society website </a><br></br><a className="project-text-description">A personalized mathematics service for testing and practice</a>
            </div>
          </div>
        </div>

        <div className="contact-main" id="contact">
          <div className="contact-parent-div">
            <div className="contact-header-div">
              <h1 className="projects-heading">Contact me</h1>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
export default App;
