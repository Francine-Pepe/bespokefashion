import React from "react"
import "./PickUpDesign.css"
import Sketch1 from "./../Images/sketch_01_small.jpg"
import Sketch2 from "./../Images/sketch_02_small.jpg"
import { NavLink } from "react-router-dom"
import needle from "./../Images/needle_buttons_bg.png"
import sewingPillow from "./../Images/sewing_pillow_bg.png"

export default function PickUpDesign() {
  return (
    <>
      <div className="main_design_box">
        <div className="center_detail_scissor"></div>
        <img src={sewingPillow} alt="sewing pillow" className="sewingPillow" />
        <div className="left_container">
          <NavLink
            to="/app/ourdesigns"
            className="pick_up_design_button"
            style={{ textDecoration: "none" }}
          >
            Our Designs
          </NavLink>
          <img src={Sketch1} alt="sketch1" className="our_design_img" />
        </div>
        <div className="right_container">
          <NavLink
            to="/app/yourdesigns"
            className="pick_up_design_button"
            style={{ textDecoration: "none" }}
          >
            Make your Design
          </NavLink>
          <img src={Sketch2} alt="sketch2" className="our_design_img" />
        </div>
        <img src={needle} alt="needle and buttons" className="needle" />
      </div>
    </>
  )
}
