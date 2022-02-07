import React from 'react';
import ManequimTopImage from './../Images/manequim_top.png';
import { useContext } from 'react';
import { OrderContext } from "../../orderContext";

export default function ManequimTop() {
    const { order } = useContext(OrderContext)
    return (
        <>
        <div>
        {order.top.url ? (
          <img src={order.top.url} alt="manequim_bottom" />
        ) : (
          <img src={ManequimTopImage} alt="manequim_bottom"/>
        )}
            {/* <img src={order.top.url} alt='manequim' /> */}
        </div>
        </>
    );
}