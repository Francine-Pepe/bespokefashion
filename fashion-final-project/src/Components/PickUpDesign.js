import React from "react";
import "./PickUpDesign.css";
// import Scissors from "./Images/scissors.png";
// import Pillow from './Images/sewing_pillow_bg.png';

export default function PickUpDesign() {
  return (
    <>
      {/* <div className="outside_container_right"></div> */}
      <div className="main_design_box">
        {/* <img className="pillow_image" src={Pillow} alt="pillow" style={{width: 150, height: 150}}/> */}
        <div className="left_container">
          <button className="pick_up_design_button">Our Designs</button>
          <div className="our_design_box"></div>
        </div>
        <hr />
        <div className="right_container">
          <button className="pick_up_design_button">Make your Design</button>
          <div className="your_design_box"></div>
        </div>
      </div>
      <div className="outside_container_left"></div>
    </>
  );
}
