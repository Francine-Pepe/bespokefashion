import React from "react"
import MakeYourDesignClothesBottom from "./MakeYourDesignClothesBottom"
import MakeYourDesignClothesTop from "./MakeYourDesignClothesTop"
import "./MakeYourDesignClothes.css"
import ReturnButton from "../ReturnButton/ReturnButton"
import NextButton from "../NextButton/NextButton"
import { NavLink } from "react-router-dom"
import { Icon } from "@iconify/react"
import Manequin from "../Manequim/Manequin"

export default function MakeYourDesignClothes({ cat }) {
  return (
    <>
      <div className="MYC-returnNextBtn">
        <ReturnButton />
        <NextButton className="next_step" />
      </div>

      <div className="make_your_clothes_container_parent">
        <div className="make_your_clothes_container">
          <Manequin />
          <div className="make_your_clothes_wrapper">
            <MakeYourDesignClothesTop />
            <MakeYourDesignClothesBottom cat={cat} />
          </div>
        </div>
      </div>

      <div className="exclusive_contact">
        <NavLink className="exclusive_contact_link" to="/app/contact">
          <p>Have not found what you were looking for?</p>
          <p>Please, contact directly our Fashion Designers!</p>
          <Icon
            icon="wpf:message-outline"
            color="#003d3a"
            width="30"
            height="25"
          />
        </NavLink>
      </div>
    </>
  )
}
