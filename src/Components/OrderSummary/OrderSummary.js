import React from 'react';
import {useState, useContext, useEffect} from 'react'
import { NavLink } from "react-router-dom"
import { OrderContext } from "../../orderContext"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './OrderSummary.css'

function OrderSummary() {
    const { order } = useContext(OrderContext)
    const [ oPrice, setOPrice ] = useState(0)
    
    const getOutfitPrice = () => {
        const itemsTotal = order.outfit.price + order.fabric.price ;
        return itemsTotal;
    }

    const getDesignPrice = () =>{
        const itemsTotal =  order.top.price + order.bottom.price + order.fabric.price ;
        return itemsTotal;

    }

    const getTaxPrice = (price) => {
        const tax= price * 0.04;
        return tax
    }

    const getShippingPrice  = (price) => {
        if(price > 2000)
            return 0;
        else 
            return 5;
    }

    const getTotalOutfitCost = (price) => {
        return price + getTaxPrice(price) + getShippingPrice(price);
    }

    return (
        <div>
            { ( !order.outfit.id && !order.top.id && !order.bottom.id) ? 
                <div> Your Cart is empty! <br/> <br/>Please browse through our collection and pick or design a lovely outfit.</div> : 
                <div >
                    {order.outfit.id ? 
                        <Container className="summaryContainer">
                            <Row >
                                <Col>
                                    <img src={order.outfit.url} width="100" alt="image not found"  />
                                </Col>
                                <Col>
                                    {order.outfit.price || 0}€
                                </Col>
                            </Row> 
                            <Row> 
                                {order.fabric.url ?
                                    <Col>
                                    <img src={order.fabric.url} width="100" alt="image not found"  />
                                    </Col> :
                                    <Col>
                                        Fabric :
                                    </Col>
                                }
                                <Col>
                                    {order.fabric.price || 0}€
                                </Col>
                            </Row> 
                            <hr></hr>
                            <Row> 
                                <Col>Outfits Total :</Col>
                                <Col>{getOutfitPrice()}€</Col>
                            </Row>
                             <Row>
                                <Col>Tax :</Col>
                                <Col>{getTaxPrice(getOutfitPrice()).toFixed(2)}€</Col>
                            </Row>
                            <Row>
                                <Col>Shipping Amount :</Col>
                                <Col>{getShippingPrice(getOutfitPrice()).toFixed(2)}€</Col>
                            </Row> 
                            <hr></hr>
                            <Row>
                                <Col>Total Amount :</Col>
                                <Col>{getTotalOutfitCost(getOutfitPrice())}</Col>
                            </Row>  
                            <Row >
                                <NavLink  to="/app/pickup"  style={{ textDecoration: "none" }}>
                                    <button className="shpMoreBtn">Shop More</button>
                                </NavLink>
                            </Row>
                        </Container>
                        : 
                        <Container className="summaryContainer">
                            <Row >
                                <Col>
                                    <img src={order.top.url} width="100" alt="Select Top"  />
                                </Col>
                                <Col>
                                    {order.top.price || 0}€
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <img src={order.bottom.url} width="100" alt="Select Bottom"  />
                                </Col>
                                <Col>
                                    {order.bottom.price || 0}€
                                </Col>
                            </Row>
                            <Row> 
                                {order.fabric.url ?
                                    <Col>
                                    <img src={order.fabric.url} width="100" alt="image not found" />
                                    </Col> :
                                    <Col>
                                        Fabric :
                                    </Col>
                                }
                                <Col>
                                    {order.fabric.price || 0}€
                                </Col>
                            </Row> 
                            <hr></hr>
                            <Row> 
                                <Col>Outfits Total :</Col>
                                <Col>{getDesignPrice()}€</Col>
                            </Row>
                            <Row>
                                <Col>Tax :</Col>
                                <Col>{getTaxPrice(getDesignPrice()).toFixed(2)}€</Col>
                            </Row>
                            <Row>
                                <Col>Shipping Amount :</Col>
                                <Col>{getShippingPrice(getDesignPrice()).toFixed(2)}€</Col>
                            </Row> 
                            <hr></hr>
                            <Row>
                                <Col>Total Amount :</Col>
                                <Col>{getTotalOutfitCost(getDesignPrice())}€</Col>
                            </Row> 
                            <Row>
                                <NavLink  to="/app/pickup"  style={{ textDecoration: "none" }}>
                                    <button className="shpMoreBtn">Shop More</button>
                                </NavLink>
                            </Row>
                        </Container>
                        }
                </div> }
            
        </div>
    );
}

export default OrderSummary;
