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

function Checkout() {

    const[yes,setYes] = useState(false)
  const { order, setClientDetails } = useContext(OrderContext)

    const handleBillAdd = (e) => {
        if(e.target.value === 'yes') {
            setYes(false);
        } else {
            setYes(true);
        }
    }
    const [val, setVal] = useState({})

    const handleDetailsFormChange = (e) => {
        // e.preventDefault()
        const fieldName = e.target.getAttribute("name")
        const fieldValue = e.target.value
        const newFormData = { ...val }
        newFormData[fieldName] = fieldValue
        setVal(newFormData) 
    }
    console.log(val)
    
    const handleAddFormSubmit = (e) => {
        e.preventDefault()
        setClientDetails(val)
        console.log("form submited")
        console.log("order :", order)
    }
    console.log(order.clientDetails)
    
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
        measurement:order.measurement,
    }

    function sendEmail(e) {
        e.preventDefault();
        emailjs.send('service_pjlm5d3', 'template_w9ehanw', templateParams,'user_pTHaxghVo04QcjVvacCa4')
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
        console.log('FAILED...', error);
    });
    }
    return (
        <Container fluid className="checkoutContainer">
            <Row className="checkoutTitle">
                <h2>Tell us more about you</h2> 
            </Row>
            <Form  onSubmit= {handleAddFormSubmit} autoComplete="off" >
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
                                <Form.Control type="text" required name="Phone No" onChange={handleDetailsFormChange}/>
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
                    <button type='submit' className="orderBtn" onClick= { sendEmail}>Order Now !</button>
                </Row>
            </Form>
        </Container>
    )
}

export default Checkout;
