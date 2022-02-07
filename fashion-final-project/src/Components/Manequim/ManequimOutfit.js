import ManequimBody from './../Images/manequim_body.png';
import { useContext } from "react";
import { OrderContext } from "../../orderContext";

export default function ManequimOutfit() {
    const { order } = useContext(OrderContext);
    return(
        <>
      <div>
        {order.outfit.url ? (
          <div className="wrapper_top_manequim">
            <img
              className="manequim_top_image"
              src={order.outfit.url}
              alt="manequim_body"
            />
          </div>
        ) : (
          <img src={ManequimBody} alt="manequim_body" />
        )}
        {/* <img src={order.top.url} alt='manequim' /> */}
      </div>
    </>
    );
}