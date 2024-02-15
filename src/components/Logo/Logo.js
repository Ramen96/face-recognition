import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import "./Logo.css"

const Logo = () => {
    return (
        <div style={{
            display: 'flex',
            alignContent: 'center'
        }}>
        <Tilt className="ma3 center">
            <div className='tilt'>
                <img className="tc" src={ brain }></img>
            </div>
      </Tilt>
      </div>
    );
}

export default Logo;