import React from "react"
import "./Footer.css"
import Logo from "../Images/threads_Logo.png"
import { Icon } from "@iconify/react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function Footer() {
  return (
    <Row className="footer">
      <img src={Logo} alt="Icon Logo" className="threads-logo" />

      <Col className="footer-btn">
        <a herf="#">
          <h2>Reviews</h2>
        </a>
        <a herf="#">
          <h2>Return Policy</h2>
        </a>
      </Col>
      <Col className="SM-container">
        <a href="https://www.instagram.com/">
          <Icon icon="mdi:instagram" className="SM-icon" />
        </a>
        <a href="https://www.facebook.com/">
          <Icon icon="mdi:facebook" className="SM-icon" />
        </a>
        <a href="https://twitter.com/">
          <Icon icon="mdi:pinterest" className="SM-icon" />
        </a>
      </Col>
    </Row>
  )
}
