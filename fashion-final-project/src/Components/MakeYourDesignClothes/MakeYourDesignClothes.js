import React from 'react';
import MakeYourDesignClothesBottom from './MakeYourDesignClothesBottom';
import MakeYourDesignClothesTop from './MakeYourDesignClothesTop';
import './MakeYourDesignClothes.css';
import NextButton from '../NextButton/NextButton';
import { NavLink } from "react-router-dom"
import { Icon } from '@iconify/react';


export default function MakeYourDesignClothes() {
    return (
        <>
        <div className="make_your_clothes_wrapper">
            <div className="make_your_clothes_container">
            
                <MakeYourDesignClothesTop />
                <MakeYourDesignClothesBottom />
            
            </div>
        </div>
            <NextButton className="next_step"/>
        <div  className="exclusive_contact">
            <NavLink className="exclusive_contact_link" to="/app/contact">
                <p>Have not find what you were looking for?</p>
                <p>Please, contact directly our Fashion Designers!</p>
                <Icon icon="wpf:message-outline" color="#003d3a" width="30" height="25" />
                
            </NavLink>
        </div>
        
        
        
        
        </>
    );
}