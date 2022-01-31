import React from 'react';
import './OurDesigns.css';
import Jumpsuits from './../Images/jumpsuits.png';
import Pants from './../Images/pants.png';
import Skirts from './../Images/skirts.png';
import Dresses from './../Images/dresses.png';
import Blouses from './../Images/blouses.png';
import Shorts from './../Images/shorts.png';

import {NavLink} from 'react-router-dom';


export default function OurDesigns() {
    return (
        <>
        <div className="our_design_catalogue">
          <h2>Our Design Catalogue</h2>
        </div>
        <div className="our_designs_container">
          <div className="clothes_types_container">
          
              <div className="jumpsuits_box">
                <img src={Jumpsuits} alt="jumpsuit" />
              </div>
              
            <NavLink to="/app/magazine/jumpsuits" className="design_button" style={{textDecoration: 'none'}}>Jumpsuits</NavLink>
          </div> 
          <div className="clothes_types_container">
            <div className="pants_box">
              <img src={Pants} alt="Pants" />
            </div>
            <NavLink to="/app/magazine/pants" className="design_button" style={{textDecoration: 'none'}}>Pants</NavLink>
          </div>
          <div className="clothes_types_container">
            <div className="skirts_box">
              <img src={Skirts} alt="Skirts" />
            </div>
            <NavLink to="/app/magazine/skirts" className="design_button" style={{textDecoration: 'none'}}>Skirts</NavLink>
          </div>
          <div className="clothes_types_container">
            <div className="dresses_box">
              <img src={Dresses} alt="Dresses" />
            </div>
            <NavLink to="/app/magazine/dresses" className="design_button" style={{textDecoration: 'none'}}>Dresses</NavLink>
          </div>
          <div className="clothes_types_container">
            <div className="blouses_box">
              <img src={Blouses} alt="Blouses" />
            </div>
            <NavLink to="/app/magazine/blouses" className="design_button" style={{textDecoration: 'none'}}>Blouses</NavLink>
          </div>
          <div className="clothes_types_container">
            <div className="short_box">
              <img src={Shorts} alt="Shorts" />
            </div>
            <NavLink to="/app/magazine/shorts" className="design_button" style={{textDecoration: 'none'}}>Shorts</NavLink>
          </div>
          
        </div>

        
        
        
        
        </>
    );
}
