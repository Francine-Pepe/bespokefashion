import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./About.css"
import { Icon } from '@iconify/react';

function About() {
    return (
        <Container fluid className="aboutContainer mt-5">
            <Row className="aboutTitle text-center mb-3">
                <h2>“The Secret of great style is to feel good in what you wear.“ </h2>
            </Row>
            <Row className="aboutText m-2 "> 
                <Col md>
                    <h3><Icon icon="pepicons:dress-print" color="#fcf4f1" inline={true} className="aboutIcon"/>DESIGNS :</h3>
                    <h4>An outfit makes every occasion special. We at Bespoke Fashion give you distinctive pattern to choose from. Making your outfit one of kind.</h4> <br/><br/>
                </Col>
                <Col md className="ps-2">
                    <h3><Icon icon="bi:bullseye"  inline={true} className="aboutIcon"/>OUR AIM :</h3>
                    <h4>One of kind tailor-made quality outfit is our motto. Our team is working hard to bring the latest designs and trends and make designing easy for you.</h4><br/><br/>
                </Col>
            </Row>
            <Row  className="aboutText m-2">
                <Col md>
                    <h3><Icon icon="ic:outline-handshake" inline={true} className="aboutIcon"/>CUSTOMER SERVICE :</h3>
                    <h4> We are always there to guide you and help you as you design your dream outfit. Email us and we will provide you expert solutions.</h4><br/><br/>
                </Col>
                <Col md className="ps-2">
                    <h3><Icon icon="gis:earth-euro-africa" inline={true} className="aboutIcon" />ENIVIRONMENT  :</h3>
                    <h4>We belive in making earth a better place. 100 % Environment friendly packages to reusing bits of clothes are just few of the steps that we religously follow.</h4><br/><br/>
                </Col>
            </Row>

        </Container>
    )
}

export default About;
