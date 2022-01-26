import React from 'react';
import './OurDesigns.css';
import Jumpsuits from './../Images/jumpsuits.png';
import Pants from './../Images/pants.png';
import Skirts from './../Images/skirts.png';
import Dresses from './../Images/dresses.png';
import Blouses from './../Images/blouses.png';

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
              
            <button className="design_button">Jumpsuits</button>
          </div> 
          <div className="clothes_types_container">
            <div className="pants_box">
              <img src={Pants} alt="Pants" />
            </div>
            <button className="design_button">Pants</button>
          </div>
          <div className="clothes_types_container">
            <div className="skirts_box">
              <img src={Skirts} alt="Skirts" />
            </div>
            <button className="design_button">Skirts</button>
          </div>
          <div className="clothes_types_container">
            <div className="dresses_box">
              <img src={Dresses} alt="Dresses" />
            </div>
            <button className="design_button">Dresses</button>
          </div>
          <div className="clothes_types_container">
            <div className="blouses_box">
              <img src={Blouses} alt="Blouses" />
            </div>
            <button className="design_button">Blouses</button>
          </div>
          
        </div>

        
        
        
        
        </>
    );
}
