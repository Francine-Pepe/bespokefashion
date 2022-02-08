import React from "react";
import ManequimTopImage from "./../Images/manequim_top.png";
import { useContext } from "react";
import { OrderContext } from "../../orderContext";
import WhiteBg from "./../Images/white_bg_image.png";

export default function ManequimTop() {
  const { order } = useContext(OrderContext);
  return (
    <>
      <div>
        {order.top.url ? (
          <div className="wrapper_top_manequim">
            <img
              className="manequim_top_image"
              src={order.top.url}
              alt="manequim_bottom"
            />
          </div>
        ) : (
          <img src={ManequimTopImage} alt="manequim_bottom" />
        )}
        {/* <img src={order.top.url} alt='manequim' /> */}
      </div>
    </>
  );
}
