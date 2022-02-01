import React from 'react';
import {useState, useEffect, useContext } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Measurements.css'
import Form from 'react-bootstrap/Form'
import { OrderContext } from "../../orderContext";
import { NavLink } from "react-router-dom"

function Measurements() {
    const [showPic, setShowPic] = useState(true);
    const [showVideo, setShowVideo] = useState(false);
    const [btnName, setBtnName] = useState('Show Video');
    const { order, setMeasurements } = useContext(OrderContext);
    
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

    const DRESS_FORM = [
        { title : 'Shoulder'},
        { title : 'Sleeve Length'},
        { title : 'Arm hole'},
        { title : 'Sleeve-biceps'},
        { title : 'Bust'},
        { title : 'Wrist'},
        { title : 'Length (From Neck)'},
        { title : 'Length (From Shoulder)'},
        { title : 'Waist'},
        { title : 'Hip'},
    ]

    const BLOUSES_FORM = [
            { title : 'Shoulder'},
            { title : 'Sleeve Length'},
            { title : 'Arm hole'},
            { title : 'Sleeve-biceps'},
            { title : 'Bust'},
            { title : 'Wrist'},
            { title : 'Length (From Neck)'},  
    ]

    const SKIRTS_FORM = [
        { title : 'Waist'},
        { title : 'Hip'},
        { title : 'Length'},
    ]

    const PANTS_FORM = [
        { title : 'Waist'},
        { title : 'Hip'},
        { title : 'Thigh (Thickest Part)'},
        { title : 'Waist to Crotch Length'},
        { title : 'Leg opening'},
        { title : 'Length'},
    ]

    const JUMPSUITS_FORM = [
        { title : 'Shoulder'},
        { title : 'Sleeve Length'},
        { title : 'Arm hole'},
        { title : 'Sleeve-biceps'},
        { title : 'Bust'},
        { title : 'Wrist'},
        { title : 'Length (From Shoulder)'},
        { title : 'Waist'},
        { title : 'Hip'},
        { title : 'Thigh (Thickest Part)'},
        { title : 'Waist to Crotch Length'},
        { title : 'Leg opening'}  
    ]

    const [displayForm, setDisplayForm] = useState([]);
    const s = order.cat;

    useEffect(() => {
        if (s === 'dresses' || s === '61f15f126b484350049ac7e7')
        { setDisplayForm (DRESS_FORM); }
        else if (s === 'blouses' || s === '61f15f126b484350049ac7e9')
        { setDisplayForm (BLOUSES_FORM); }
        else if (s === 'skirts' || s === '61f15f126b484350049ac7ec')
        { setDisplayForm (SKIRTS_FORM); }
        else if (s === 'pants' || s === 'shorts' || s === '61f15f126b484350049ac7ed' || s === '61f15f126b484350049ac7eb')
        { setDisplayForm (PANTS_FORM); }
        else
        { setDisplayForm (JUMPSUITS_FORM); }
        
    }, []);
    
    const [val, setVal] = useState ({});

    const handleAddFormChange = (e) => {
        e.preventDefault();
        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;
        // console.log(fieldName, fieldValue);
        const newFormData = { ...val };
        newFormData[fieldName] = fieldValue;
        setVal(newFormData);
        setMeasurements({ type: fieldName , value: fieldValue })

    }

    const handleAddFormSubmit = (e) => {
        e.preventDefault();
        console.log('form submited');
        console.log('order :',order);
    }

    return (
        <Container className="measurementContainer">
            <Row className="measurementRow">
                <Col md className="measurementForm">
                    <h3 className="mb-4">Enter your measurements</h3>
                    <Form onSubmit={handleAddFormSubmit} >  
                        {displayForm.map( (labelTitle) => ( 
                            <Form.Group as={Row} className="mb-3" >
                                <Form.Label column  className="w-45">{labelTitle.title}</Form.Label>
                                <Col >
                                <Form.Control type="text" className="w-40" name={labelTitle.title} required onChange={handleAddFormChange} />
                                </Col>
                                <Col >cms</Col>
                            </Form.Group>
                        ))}
                        <NavLink to="/app/outfitDetails" style={{textDecoration: 'none'}}>
                            <button className="attBtn" type="submit">Next Step</button>
                        </NavLink>
                    </Form>
                </Col>
                <Col md className="measurementHowTo ">
                    <h3>How to take measurements </h3>
                    <div className="howToPic" style =  {{ display: showPic ? "block" : "none" }}> How to measure Picture</div>
                    <div className="howToVideo" style =  {{ display: showVideo ? "block" : "none" }}> How to measure Video</div>
                    <button className="attBtn" onClick={handleShowAtt}>{btnName}</button>
                </Col>
            </Row>
        </Container>
    )
}

export default Measurements;
