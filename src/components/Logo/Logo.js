import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="parallax-effect shadow-2" perspective={500}>                
                <img alt="Logo" src={brain}/>                
            </Tilt>
        </div>
    );
}

export default Logo