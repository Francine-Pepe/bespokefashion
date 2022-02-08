import React from "react"
import "./Footer.css"
import Logo from "../Images/threads_Logo.png"
import { Icon } from "@iconify/react"
import ReturnPolicy from "../ReturnPolicy/ReturnPolicy"
import Reviews from "../Reviews/Reviews"

export default function Footer() {
  return (
    <section className="footer">
      <img src={Logo} alt="Icon Logo" className="threads-logo" />

      <div className="footer-btn">
        <Reviews />
        <ReturnPolicy />
      </div>
      <div className="SM-container">
        <a href="https://www.instagram.com/">
          <Icon icon="mdi:instagram" className="SM-icon" />
        </a>
        <a href="https://www.facebook.com/">
          <Icon icon="mdi:facebook" className="SM-icon" />
        </a>
        <a href="https://twitter.com/">
          <Icon icon="mdi:pinterest" className="SM-icon" />
        </a>
      </div>
    </section>
  )
}
