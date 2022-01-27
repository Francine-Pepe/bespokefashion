import React from "react"
import "./Navigation.css"
import { Navbar, Nav } from "react-bootstrap"
import Logo from "../Images/BF_Logo.png"
import {NavLink} from 'react-router-dom';
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
            <NavLink to="makeyourdesign" className="nav-btn">
              Make your design
            </NavLink>
            <NavLink to="ourdesigns" className="nav-btn">
              Our designs
            </NavLink>
          </Nav>
          
            <Navbar.Brand  className="nav-img">
              <img src={Logo} alt="Bespoke Fashion Logo" className="nav-logo" />
            </Navbar.Brand>
          <Nav className="me-auto R-nav">
            <NavLink to="about" className="nav-btn">
              About us
            </NavLink>
            <NavLink to="contact" className="nav-btn">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </section>
  )
}
