import React from "react"
import { useNavigate } from "react-router-dom"
import { Icon } from "@iconify/react"
import "./ReturnButton.css"

function ReturnButton() {
  const navigate = useNavigate()

  return (
    <div className="returnPosition">
      <button className="returnBtn" onClick={() => navigate(-1)}>
        <Icon
          icon="grommet-icons:form-previous"
          color="#2c6a67"
          inline={true}
          width="50"
          height="50"
        />
        Previous step
      </button>
    </div>
  )
}

export default ReturnButton
