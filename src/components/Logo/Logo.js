import React from 'react';
// import Tilt from 'react-tilt'; 
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="parallax-effect br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
          <img style={{paddingTop: '5px'}} alt='logo' src={brain}/>
      </Tilt>
    </div>
  );
}

export default Logo;