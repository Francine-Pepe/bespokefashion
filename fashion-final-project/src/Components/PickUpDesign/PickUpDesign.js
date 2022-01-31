import React from "react"
import "./PickUpDesign.css"
import Sketch1 from "./../Images/sketch_01_small.jpg"
import Sketch2 from "./../Images/sketch_02_small.jpg"
import { NavLink } from "react-router-dom"
//import ReturnButton from "../ReturnButton/ReturnButton"
export default function PickUpDesign() {
  return (
    <>
      {/* <div className="outside_container_right"></div> */}
      {/* <ReturnButton /> */}
      <div className="main_design_box">
        <div className="center_detail_scissor"></div>
        <div className="left_container">
          <NavLink
            to="/app/ourdesigns"
            className="pick_up_design_button"
            style={{ textDecoration: "none" }}
          >
            Our Designs
          </NavLink>
          <div className="our_design_box">
            <img src={Sketch1} alt="sketch1" />
          </div>
        </div>
        <hr />
        <div className="right_container">
          <NavLink
            to="/app/yourdesign"
            className="pick_up_design_button"
            style={{ textDecoration: "none" }}
          >
            Make your Design
          </NavLink>
          <div className="your_design_box">
            <img src={Sketch2} alt="sketch2" />
          </div>
        </div>
        <div className="outside_container_left"></div>
      </div>
    </>
  )
}
