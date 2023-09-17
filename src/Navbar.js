import React, {usestate} from "react";
import credibleLogo from './images/credibleLogo.svg';
import './Navbar.css';

function Navbar(){
    return(
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <img src={credibleLogo} alt="Credible Logo" height="80px"/>

                </div>

            </nav>
        </div>
    )
}

export default Navbar; 