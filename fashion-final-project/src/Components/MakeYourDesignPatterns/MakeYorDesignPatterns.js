import React from 'react';
import './MakeYourDesignPatterns.css';
import Manequin from './../Images/manequim_transparent_-Recovered.png'
import ColorsCarousel from '../ColorsCarousel/ColorsCarousel';
import PrintsCarousel from '../PrintsCarousel/PrintsCarousel.js';
import { NavLink } from "react-router-dom"



export default function MakeYourDesignPatterns() {
    return (
        <>
        <div className="make_your_design_color_and_pattern">
            <h3>Make your own Design - here you can choose the desired color or print</h3>
        
        <div className="main_container_color_and_pattern">
            <div className="manequin_container">
                <img src={Manequin} alt="manequin" />
            </div>
            
            <div className='carousels'>
                <div className='carousel_container_colors'>
                    <ColorsCarousel />
                </div>
                
                <div className='carousel_container_prints'>
                    <PrintsCarousel />
                </div>
            </div>
            
            </div>


        </div>
        
        <NavLink className="next_page" to="/app/measurement" >Next</NavLink>
        </>

    );

}