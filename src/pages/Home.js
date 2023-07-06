import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css"
import pdf from '../assets/Qasim-Dev-CV.pdf'




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
            <a target="_blank" href="https://www.linkedin.com/in/qasim-%E2%80%8Emuhammad-16b24011b/">
            <LinkedInIcon />
            </a>
            <a target="_blank" href="mailto: mq12113@gmail.com">
            <EmailIcon />
            </a>
            <a target="_blank" href="https://github.com/Qasim538">
            <GitHubIcon />
            </a>
            </div>
         
            </div>
        </div>
        <div className="skills"> 
        <h1> Skills </h1>
        <ul className="list">
            <li className="item"> 
            <h2> Front-End </h2> 
            <span> ReactJS </span> <span> JavaScript </span> <span> HTML </span> <span> CSS </span> <span> Bootstrap </span> <span> MaterialUI </span> <span> ES6 </span> <span> GitHub </span> <span> TypeScript </span> <span> jQuery </span> <span> Node </span>
            </li>
            <li className="item"> 
            <h2> Additional Skills </h2> 
            <span> Photoshop </span> <span> Illustrator </span> <span> InDesign </span> <span> Sketch </span> <span> Figma </span> <span> XD </span>
            </li>
        </ul>
        </div>
        </div>
    )
}

export default Home