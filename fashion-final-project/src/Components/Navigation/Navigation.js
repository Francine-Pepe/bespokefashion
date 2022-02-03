import React, {useState} from "react"
import "./Navigation.css"
import { Navbar, Nav } from "react-bootstrap"
import Logo from "../Images/BF_Logo.png"
import { NavLink } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import { Icon } from "@iconify/react"
import OrderSummary from "../OrderSummary/OrderSummary"
import Offcanvas from 'react-bootstrap/Offcanvas'


export default function Navigation() {

  const [showOrder, setShowOrder] = useState(false);
  const handleClose = () => setShowOrder(false);
  const handleShow = () => setShowOrder(true);

  return (
    <section className="navbar">
      <Navbar expand="md">
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="nav-toggle"
        />
        <Navbar.Collapse id="basic-navbar-nav" className="nav-collapse">
          <Nav className="me-auto L-nav">
            <NavLink to="/app/yourdesigns" className="nav-btn">
              Make your design
            </NavLink>
            <NavLink to="/app/ourdesigns" className="nav-btn">
              Our designs
            </NavLink>
          </Nav>
          <NavLink to="/app/pickup" className="Nav-homeLink">
            <Navbar.Brand to="/app/pickup" className="nav-img">
              <img src={Logo} alt="Bespoke Fashion Logo" className="nav-logo" />
            </Navbar.Brand>
          </NavLink>
          <Nav className="me-auto R-nav">
            <NavLink to="/app/about" className="nav-btn">
              About us
            </NavLink>
            <NavLink to="/app/contact" className="nav-btn">
              Contact
            </NavLink>
            <NavLink to="/app/pickup" className="ColNav-HomeLink">
              Home
            </NavLink>
              <button id="#nav-shoppingCart" className="nav-shoppingBtn" onClick={handleShow}>
                <Icon icon="mdi:cart-outline" className="nav-shoppingIcon" />
              </button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

       {/* Offcanvas - shopping cart  */}

      <Offcanvas show={showOrder} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton className='offcanvasHeader'>
          <p className='offcanvasTitle'>Your Order</p>
        </Offcanvas.Header>
            <Offcanvas.Body className='offcanvasBody'>
              <OrderSummary/>
             
            </Offcanvas.Body>
      </Offcanvas>
    </section>
  )
}


