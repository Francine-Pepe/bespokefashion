import React from "react"
import "./ReadyClothingPages.css"
import breadcrumps from "../Images/breadcrumps.png"
import models from "../Images/models.png"
import JumpsuitMagazine from "./JumpsuitsMagazine"

export default function OurDesign() {
  const cat = "jumpsuits"

  return (
    <section className="OD-section">
      <div className=" OD-category">
        <img src={breadcrumps} alt="lines" className=" OD-lines" />
        <h4>{cat}</h4>
      </div>
      <div className="OD-magazine">
        <div className="magazineBox">
          <JumpsuitMagazine />
        </div>
      </div>
      <div className="OD-img">
        <img src={models} alt="models" className="OD-models" />
      </div>
    </section>
  )
}
