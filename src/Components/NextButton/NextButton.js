import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { Icon } from "@iconify/react"
import "./NextButton.css"

function NextButton() {
  //   const navigate = useNavigate();

  return (
    <div className="nextPosition">
      {/* <NavLink to="/app/makeyourdesignpatterns" className="nextBtn" onClick={() => navigate(+1)}> */}
      <NavLink className="nextBtn" to="/app/fabrics">
        Next step
        <Icon
          icon="grommet-icons:form-next"
          color="#2c6a67"
          width="50"
          height="50"
        />
      </NavLink>

      {/* </NavLink> */}
    </div>
  )
}

export default NextButton
