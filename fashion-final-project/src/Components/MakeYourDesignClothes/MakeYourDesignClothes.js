import React from 'react';
import './MakeYourDesignClothes.css';
import Manequin from './../Images/manequim_transparent_-Recovered.png'
import CarouselComponentBottom from '../CarouselComponent/CarouselComponentBottom';
import CarouselComponentTop from '../CarouselComponent/CarouselComponentTop';


export default function MakeYourDesignClothes() {
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
                    <CarouselComponentBottom />
                </div>
            </div>
            </div>


        </div>
        
        </>

    );

}