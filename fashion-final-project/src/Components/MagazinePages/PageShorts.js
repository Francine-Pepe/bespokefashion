import React from "react"
import "./ReadyClothingPages.css"
import breadcrumps from "../Images/breadcrumps.png"
import models from "../Images/models.png"
import Magazine from "./MagazineShorts"
import ReturnButton from "../ReturnButton/ReturnButton"

export default function OurDesign() {
  const cat = "shorts"

  return (
    <section className="MP-section">
      <div className="MP-header">
        <ReturnButton className="MP-btn" />
        <h1 className="MP-title">Our Design Catalogue</h1>
      </div>
      <div className="MP-main">
        <div className=" MP-category">
          <img src={breadcrumps} alt="lines" className=" MP-lines" />
          <h3>{cat}</h3>
        </div>

        <div className="MP-magazine">
          <div className="MP-box">
            <Magazine />
          </div>
        </div>
        <div className="MP-img">
          <img src={models} alt="models" className="MP-models" />
        </div>
      </div>
    </section>
  )
}
