import React from 'react';
import {useState} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Measurements.css'
import Form from 'react-bootstrap/Form'


function Measurements() {
    const [showPic, setShowPic] = useState(true);
    const [showVideo, setShowVideo] = useState(false);
    const [btnName, setBtnName] = useState('Show Video')

    const handleShowAtt = ()=>{
        if (showPic) {
            setShowVideo(true);
            setShowPic(false);
            setBtnName('Show Picture')
        }
        else{
            setShowVideo(false);
            setShowPic(true);
            setBtnName('Show Video')
        }
    }

    return (
        <Container className="measurementContainer">
            <Row>
                <Col className="measurementForm">
                <h3>Enter your measurements</h3>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column  className="w-45">Shoulder</Form.Label>
                            <Col >
                            <Form.Control type="text" className="w-40" />
                            </Col>
                            <Col >cms</Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column  className="w-50">Sleeve length</Form.Label>
                            <Col >
                            <Form.Control type="text" className="w-40" />
                            </Col>
                            <Col >cms</Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column  className="w-45">Arm hole</Form.Label>
                            <Col >
                            <Form.Control type="text" className="w-40" />
                            </Col>
                            <Col >cms</Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column  className="w-50">Sleeve length</Form.Label>
                            <Col >
                            <Form.Control type="text" className="w-40" />
                            </Col>
                            <Col >cms</Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column  className="w-45">Bust</Form.Label>
                            <Col >
                            <Form.Control type="text" className="w-40" />
                            </Col>
                            <Col >cms</Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column  className="w-50">Sleeve-Biceps</Form.Label>
                            <Col >
                            <Form.Control type="text" className="w-40" />
                            </Col>
                            <Col >cms</Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column  className="w-45">Cuff</Form.Label>
                            <Col >
                            <Form.Control type="text" className="w-40" />
                            </Col>
                            <Col >cms</Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column  className="w-50">Length (From Neck)</Form.Label>
                            <Col >
                            <Form.Control type="text" className="w-40" />
                            </Col>
                            <Col >cms</Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column  className="w-50">Waist</Form.Label>
                            <Col >
                            <Form.Control type="text" className="w-40" />
                            </Col>
                            <Col >cms</Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column  className="w-45">Hip</Form.Label>
                            <Col >
                            <Form.Control type="text" className="w-40" />
                            </Col>
                            <Col >cms</Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column  className="w-50">Thight (Thickest Part)</Form.Label>
                            <Col >
                            <Form.Control type="text" className="w-40" />
                            </Col>
                            <Col >cms</Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column  className="w-45">Crotch Length</Form.Label>
                            <Col >
                            <Form.Control type="text" className="w-40" />
                            </Col>
                            <Col >cms</Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column  className="w-50">Leg opening</Form.Label>
                            <Col >
                            <Form.Control type="text" className="w-40" />
                            </Col>
                            <Col >cms</Col>
                        </Form.Group>
                    </Form>
                </Col>
                <Col className="measurementHowTo ">
                    <h3>How to take measurements </h3>

                    <div className="howToPic" style =  {{ display: showPic ? "block" : "none" }}> How to measure Picture</div>
                    <div className="howToVideo" style =  {{ display: showVideo ? "block" : "none" }}> How to measure Video</div>
                    <button className="attBtn" onClick={handleShowAtt}>{btnName}</button>
                </Col>
            </Row>
        </Container>)
}

export default Measurements;
