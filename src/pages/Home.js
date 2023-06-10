import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css"

function Home() {
    return (
        <div className="home"> 
        <div className="about"> 
        <h2> Hi, My Name is Qasim </h2>
        <div className="prompt"> 
            <p>
            A Web Developer with passion for learning and coding.
            </p> 
            <div className="socialMedia">
            <LinkedInIcon />
            <EmailIcon />
            <GitHubIcon />
            </div>
            </div>
        </div>
        <div className="skills"> 
        <h1> Skills </h1>
        <ul className="list">
            <li className="item"> 
            <h2> Front-End </h2> 
            <span> ReactJS, JavaScript, HTML, CSS, Bootstrap, MaterialUI, ES6, GitHub, TypeScript, jQuery, Node.</span>
            </li>
            <li className="item"> 
            <h2> Additional Skills </h2> 
            <span> Photoshop, Illustrator, InDesign, Sketch, Figma, XD, </span>
            </li>

        </ul>
        </div>
        </div>
    )
}

export default Home