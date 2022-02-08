import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Contact.css"
import emailjs from '@emailjs/browser';


function Contact() {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_pjlm5d3', 'template_nv4uap6', e.target, 'user_pTHaxghVo04QcjVvacCa4')
          .then((result) => {
                console.log(result.text);
          }, (error) => {
                console.log(error.text);
          });
          e.target.reset();
          alert('Email Send');
    }
    

    return (
        <div>
            <Container fluid className="contactContainer mt-5">
                <Row classname="justify-content-space-around ">
                    <Col md className='contactText text-center'>
                        <h1>Contact Us</h1><br/>
                        <h4>
                        Have an dream outfit idea but dont see it on our website? Contact us and lets design it together.<br/><br/>
                        Have suggestions about our website ? Feel free to reach out to us.<br/><br/>                 
                        We are here to answer your questions about Bespoke Fashion.<br/><br/>
                        If you have any problems or experience technical difficulties, 
                        please do not hesitate to contact us. <br/><br/>
                        We will get back to you as soon as possible.<br/><br/>
                        </h4>
                    </Col>
                    <Col md className='contactForm '>
                        <Form onSubmit={sendEmail} autoComplete="off" >
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><h4>Name: </h4></Form.Label>
                                <Form.Control type="name" name="name" required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label><h4>Email address: </h4></Form.Label>
                                <Form.Control type="email" name="email"  required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label><h4>Message: </h4></Form.Label>
                                <Form.Control as="textarea" rows={3} name="message"  required/>
                            </Form.Group>
                            <button className="contactBtn"  type="submit">
                                <h5>Send !</h5>
                            </button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;
