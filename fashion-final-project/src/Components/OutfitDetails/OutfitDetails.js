import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "bootstrap/dist/css/bootstrap.min.css"
import Form from "react-bootstrap/Form"
import "./OutfitDetails.css"
import { useState, useContext } from "react"
import Modal from "react-bootstrap/Modal"
import { NavLink } from "react-router-dom"
import { OrderContext } from "../../orderContext"
import ReturnButton from "../ReturnButton/ReturnButton"

function OutfitDetails() {
  const [modalShow, setModalShow] = useState(false)
  const { order, setSimpleVals, setOutfit } = useContext(OrderContext)

  function handleInstruction(e) {
    e.preventDefault()
    setSimpleVals("instructions", e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log("order :", order)
  }

  return (
    <>
      <ReturnButton />
      <Container fluid className="ofdContainer  mt-5">
        <Row className="ofdTitle text-center mb-3">
          <h2>“Any more additions to your dream outfit ?“ </h2>
        </Row>
        <Row className="ofdText m-2 ">
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                <h4>Message: </h4>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={8}
                onChange={(e) => handleInstruction(e)}
                name="message"
              />
            </Form.Group>
            <button className="ofdBtn" type="submit">
              <h5 onClick={() => setModalShow(true)}>Add to cart</h5>
            </button>
          </Form>
        </Row>
        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header className="Rev-header" closeButton>
            <Modal.Title
              id="example-custom-modal-styling-title"
              className="atc-title"
            >
              <h2></h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="atc-body">
            <Row className="mb-3">
              <h2>Outfit added to cart!</h2>
            </Row>
            <Row>
              {/* <Col>
                        <NavLink className="ofdBtn" to="/app/pickup">
                            <h5 onClick={() =>setModalShow(false)}>Shop More</h5>
                        </NavLink>
                    </Col> */}
              <Col>
                <NavLink to="/app/checkout" style={{ textDecoration: "none" }}>
                  <button className="ofdBtn" type="submit">
                    <h5>Checkout</h5>
                  </button>
                </NavLink>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </Container>
    </>
  )
}

export default OutfitDetails
