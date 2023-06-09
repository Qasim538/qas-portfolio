import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder'


function Navbar() {
    const [expandNavbar, setExpandNavbar] = React.useState(false);

    return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}> 
    <div className="toggleButton">  
    <button 
    onClick={() => {
        setExpandNavbar((prev) => !prev);
        }}
        > 
        <ReorderIcon />
        </button>
    </div> 
    <div className="links"> 
    <Link to="/"> Home </Link>
    <Link to="/projects"> Projects </Link>
    <Link to="/experience"> Experience </Link>
    <Link to="/contactme"> Contact Me </Link>

    </div>
    </div>

    );
}


export default Navbar;