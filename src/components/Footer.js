import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Footer.css"

function Footer() {
    return<div className="footer"> 
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
    <p> &copy; Qasim Dev 2023</p>
         
        </div>
}

export default Footer;