import React from 'react';
import {useState, useContext} from 'react';
import './Checkout.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { OrderContext } from "../../orderContext"
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from '@emailjs/browser';
import Modal from "react-bootstrap/Modal"
import { NavLink } from 'react-router-dom';


function Checkout() {

    const[yes,setYes] = useState(false)
    const [formData, setFormData] = useState({});
  const { order, setClientDetails } = useContext(OrderContext)
  const [modalShow, setModalShow] = useState(false)
  

    const handleBillAdd = (e) => {
        if(e.target.value === 'yes') {
            setYes(false);
        } else {
            setYes(true);
        }
    }

    const handleDetailsFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // console.log('formdata ::',formData)

    const handleAddFormSubmit = (e) => {
        e.preventDefault();
        setClientDetails(formData);
        setTimeout(() => {
            console.log("submi", templateParams);
            return emailjs
                .send(
                "service_pjlm5d3",
                "template_w9ehanw",
                templateParams,
                "user_pTHaxghVo04QcjVvacCa4"
                )
                .then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                },
                function (error) {
                    console.log("FAILED...", error);
                }
                );
        }, 120000);
        setModalShow(true);

      };

    // console.log('from checkout::',order.clientDetails)
    
    const templateParams = {
        clientName: order.clientDetails.name, 
        clientEmail: order.clientDetails.email, 
        clientPhNo: order.clientDetails.phone, 
        cat: order.cat,
        instructions: order.instructions,
        topId : order.top.id, 
        topUrl : order.top.url, 
        topPrice: order.top.price, 
        bottomId : order.bottom.id, 
        bottomUrl : order.bottom.url, 
        bottomPrice: order.bottom.price,
        fabricId : order.fabric.id, 
        fabricUrl : order.fabric.url, 
        fabricPrice: order.fabric.price, 
        outfitId:order.outfit.id,
        outfitUrl:order.outfit.url,
        outfitPrice:order.outfit.price,
        shipAddStreet: order.clientDetails.street,
        shipAddCity: order.clientDetails.city,
        shipAddCountry: order.clientDetails.country,
        billAddStreet: order.clientDetails.billAddstreet,
        billAddCity: order.clientDetails.billAddCity,
        billAddCountry: order.clientDetails.billAddcountry,
        armHole: order.measurements.armHole,
        biceps:order.measurements.biceps,
        bust: order.measurements.bust,
        hip: order.measurements.hip,
        legOpening: order.measurements.legOpening,
        length: order.measurements.length,
        lengthToCrotch: order.measurements.lengthToCrotch,
        shoulder: order.measurements.shoulder,
        sleeveLength:order.measurements.sleeveLength,
        thigh: order.measurements.thigh,
        waist: order.measurements.waist,
        wrist: order.measurements.wrist,
    }

    return (
        <Container fluid className="checkoutContainer">
            <Row className="checkoutTitle">
                <h2>Tell us more about you</h2> 
            </Row>
            <Form autoComplete="off" >
                <Row>
                    <Col md className="cO1">
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column >Name :</Form.Label>
                            <Col>
                                <Form.Control type="text" required name="name" onChange={handleDetailsFormChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column >Email :</Form.Label>
                            <Col>
                                <Form.Control type="text" required  name="email" onChange={handleDetailsFormChange}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column >Phone Number :</Form.Label>
                            <Col>
                                <Form.Control type="text" required name="phone" onChange={handleDetailsFormChange}/>
                            </Col>
                        </Form.Group>
                        <div onChange={(e) => handleBillAdd(e)}> 
                            Is billing address same as shipping address? <br/>
                            <Form.Check
                                inline
                                label="yes"
                                name="group1"
                                type='radio'
                                value='yes'
                                required
                                // className="radioBtn"
                                id={`inline-radio-1`}
                            />
                            <Form.Check
                                inline
                                label="no"
                                name="group1"
                                type='radio'
                                value='no'
                                id={`inline-radio-2`}
                            />
                        </div>
                    </Col>
                    <Col md className="cO2">
                        Shipping Address : <br/>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Street, House no"
                            className="mb-3"
                        >
                            <Form.Control type="text" name="street" placeholder="Street, House no" onChange={handleDetailsFormChange} required/>
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="City, State"
                            className="mb-3"
                        >
                            <Form.Control type="text" name="city" placeholder="City, State" onChange={handleDetailsFormChange} required/>
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Country, Postal Code"
                            className="mb-3"
                        >
                            <Form.Control type="text" name="country" placeholder="Country, Postal Code" onChange={handleDetailsFormChange} required/>
                        </FloatingLabel>

                        <div className="billingAdd" style={{display: yes ? "block" : "none"}}>
                            Billing Address : <br/>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Street, House no"
                                className="mb-3"
                            >
                                <Form.Control type="text" name="billAddstreet" placeholder="Street, House no" onChange={handleDetailsFormChange} />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="City, State"
                                className="mb-3"
                            >
                                <Form.Control type="text" name="billAddcity" placeholder="City, State" onChange={handleDetailsFormChange}/>
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Country, Postal Code"
                                className="mb-3"
                            >
                                <Form.Control type="text" name="billAddcountry" placeholder="Country, Postal Code" onChange={handleDetailsFormChange}/>
                            </FloatingLabel>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <button type='submit' className="orderBtn" onClick= {handleAddFormSubmit}>Order Now !</button>
                </Row>
            </Form>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header className="Rev-header" >
                    <Modal.Title
                    id="example-custom-modal-styling-title"
                    className="atc-title"
                    >
                    <h2></h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="atc-body">
                    <Row className="mb-3">
                        <h2>Thank you for shopping at Bespoke Fashion!</h2>
                    </Row>
                    <Row>
                        <Col>
                            <NavLink className="ofdBtn" to="/app/pickup">
                                <h5 onClick={() =>setModalShow(false)}>Return</h5>
                            </NavLink>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </Container>
    )
}

export default Checkout;




