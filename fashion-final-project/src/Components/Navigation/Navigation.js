import React from "react"
import "./Navigation.css"
import { Navbar, Nav } from "react-bootstrap"
import Logo from "../Images/BF_Logo.png"
import "bootstrap/dist/css/bootstrap.min.css"

export default function Navigation() {
  return (
    <section className="navbar">
      <Navbar expand="md">
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="nav-toggle"
        />
        <Navbar.Collapse id="basic-navbar-nav" className="nav-collapse">
          <Nav className="me-auto L-nav">
            <Nav.Link href="#your-design" className="nav-btn">
              Make your design
            </Nav.Link>
            <Nav.Link href="#our-design" className="nav-btn">
              Our designs
            </Nav.Link>
          </Nav>
          <Navbar.Brand href="#home" className="nav-img">
            <img src={Logo} alt="Bespoke Fashion Logo" className="nav-logo" />
          </Navbar.Brand>
          <Nav className="me-auto R-nav">
            <Nav.Link href="#about" className="nav-btn">
              About us
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-btn">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </section>
  )
}
