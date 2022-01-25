import React from "react"
import "./LandingPage.css"
import Logo from "../Images/LP_Logo.png"
import { Icon } from "@iconify/react"

export default function LandingPage() {
  return (
    <section className="LandingPage">
      <div className="LP-wrapper">
        <img src={Logo} alt="Bespoke Fashion Logo" className="LP-logo" />
        <h2 className="LP-text">
          Why not create your clothes with your measurements?
          <br />
          With a sustainable concept, we have this solution.
          <br />
          With Bespoke Fashion, you can assemble your own clothes, with the
          <br />
          fabric, color or print of your choice. Come meet us!
        </h2>
        <button variant="contained" className="LP-btn">
          START DESIGNING
          <Icon icon="mdi:lead-pencil" className="LP-icon" />
        </button>
      </div>
    </section>
  )
}
