import React from 'react'
import './Navbar.css';
import './About.css';
import Upload from './Upload';

export default function Navbar() {
    return (
        <div>
        <navbar>
          <h1 className="brand">BRAND</h1>
            <h3 className="about">
              <a href="#about">About</a>
            </h3>
        </navbar>
        <Upload/>
        <div className="row" id="about">
            <div className="feature-box">
                <h3 className="content">Easy to use</h3>
            </div>
            <div className="feature-box">
                <h3 className="content">Quick and Responsive</h3>
            </div>
            <div className="feature-box">
                <h3 className="content">Guaranteed to Work</h3>
            </div> 
        </div>
        </div>
    )
}
