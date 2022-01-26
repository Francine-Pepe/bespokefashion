import React from "react";
import "./PickUpDesign.css";
import Sketch1 from './Images/sketch_01_small.jpg';
import Sketch2 from './Images/sketch_02_small.jpg';

export default function PickUpDesign() {
  return (
    <>
      {/* <div className="outside_container_right"></div> */}
      <div className="main_design_box">
        <div className="center_detail_scissor"></div>
        <div className="left_container">
          <button className="pick_up_design_button">Our Designs</button>
          <div className="our_design_box">
            <img src={Sketch1} alt="sketch2" />
          </div>
        </div>
        <hr />
        <div className="right_container">
          <button className="pick_up_design_button">Make your Design</button>
          <div className="your_design_box">
          <img src={Sketch2} alt="sketch2" />
          </div>
        </div>
        <div className="outside_container_left"></div>
      </div>
      
    </>
  );
}
