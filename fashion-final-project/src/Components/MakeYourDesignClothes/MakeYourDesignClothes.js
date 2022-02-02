import React, {useContext, useEffect} from 'react';
import './MakeYourDesignClothes.css';
import Manequin from './../Images/manequim_transparent_-Recovered.png'
import CarouselComponentBottom from '../CarouselComponent/CarouselComponentBottom';
import CarouselComponentTop from '../CarouselComponent/CarouselComponentTop';
import { OrderContext } from "../../orderContext";


export default function MakeYourDesignClothes({cat}) {

    const { order, setSimpleVals} = useContext(OrderContext);
    
    useEffect(() => {
        setSimpleVals('cat', cat);
    },[]);
    console.log(order);

    return (
        <>
        <div className="make_your_design_clothes">
            <h3>Make your own Design - choose the top and match the bottom!</h3>
            <div className="main_container_clothes">
                <div className="manequin_container">
                    <img src={Manequin} alt="manequin" />
                </div>
                        
                <div className='carousels'>
                    <div className='carousel_container_top'>
                        <CarouselComponentTop />
                    </div> 

                    <div className='carousel_container_bottom'>
                    <CarouselComponentBottom cat = {cat}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );

}