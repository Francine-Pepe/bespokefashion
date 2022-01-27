import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './ReturnButton.css'

function ReturnButton() {
    
    const navigate = useNavigate();

    return (
    <div className="returnPosition">
         <button className="returnBtn" onClick={() => navigate(-1)}><Icon icon="ic:sharp-keyboard-return" color="#2c6a67" inline={true} width="50" height="100"/></button>
    </div>
    )
}

export default ReturnButton;





