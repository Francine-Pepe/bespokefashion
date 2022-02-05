import React from 'react';
import MakeYourDesignClothesBottom from './MakeYourDesignClothesBottom';
import MakeYourDesignClothesTop from './MakeYourDesignClothesTop';
import './MakeYourDesignClothes.css';
import NextButton from '../NextButton/NextButton';

export default function MakeYourDesignClothes() {
    return (
        <>
        <div className="make_your_clothes_wrapper">
            <div className="make_your_clothes_container">
            
                <MakeYourDesignClothesTop />
                <MakeYourDesignClothesBottom />
            
            </div>
        </div>
        <NextButton />
        
        </>
    );
}