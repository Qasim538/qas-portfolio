import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import "../styles/Footer.css"

function Footer() {
    return<div className="footer"> 
    <div className="socialMedia">
        <LinkedInIcon />
        <GitHubIcon />
        <EmailIcon />
        <AttachFileIcon />
    </div>
    <p> &copy; Qasim Dev 2023</p>
         
        </div>
}

export default Footer;