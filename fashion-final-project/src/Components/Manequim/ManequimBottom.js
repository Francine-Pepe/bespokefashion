import React from "react";
import ManequimBottomImage from "./../Images/manequim_bottom.png";
import { useContext } from "react";
import { OrderContext } from "../../orderContext";

export default function ManequimBottom() {
  const { order } = useContext(OrderContext);
  return (
    <>
      <div>
        {order.bottom.url ? (
          <img src={order.bottom.url} alt="manequim_bottom" />
        ) : (
          <img src={ManequimBottomImage} alt="manequim_bottom"/>
        )}
        {/* <img src={order.bottom.url} alt='manequim' /> */}
      </div>
    </>
  );
}
