import ManequimTop from './ManequimTop'
import ManequimBottom from './ManequimBottom';
import { useContext } from "react";
import { OrderContext } from "../../orderContext";

function Manequin() {
  const { order } = useContext(OrderContext);

  return (
<>
{(order.outfit.url)? <div  style={{
        backgroundImage: `url(${order.fabric.url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}> 
        {/* <ManequimOutfit/> */}
      </div> : 
      <div  style={{
        backgroundImage: `url(${order.fabric.url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}> 
        <ManequimTop/>
        <ManequimBottom />
      </div> }
    </>
  );
}

export default Manequin;
