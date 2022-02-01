import React from 'react';
import './YourDesign.css';
import Jumpsuits from './../Images/jumpsuitYourDesign.png';
import Dresses from './../Images/dressYourDesign.png';
import {NavLink} from 'react-router-dom';

// import ReturnButton from './../ReturnButton/ReturnButton';

export default function YourDesign() {
    return (
        <>
        {/* <ReturnButton /> */}
        <div className="your_design_catalogue">
        
            <h2>Your Design - what would you like to create?</h2>
        </div>
        <div className="your_designs_container">
          <div className="clothes_types_container_your_design">
          
              <div className="jumpsuits_box_your_design">
                <img src={Jumpsuits} alt="jumpsuit" />
              </div>
              
            <NavLink to="/app/designClothes/jumpsuits" className="design_button_your_design" style={{textDecoration: 'none'}}>Jumpsuits</NavLink>
          </div> 
          <div className="clothes_types_container_your_design">
            <div className="dresses_box_your_design">
              <img src={Dresses} alt="Dresses" />
            </div>
            <NavLink to="/app/designClothes/dresses" className="design_button_your_design" style={{textDecoration: 'none'}}>Dresses</NavLink>
          </div>
          
          
        </div>
        </>
    );
}
