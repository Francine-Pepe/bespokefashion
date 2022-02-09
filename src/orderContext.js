/*
[
  {
    cat: '',
    outfit: { price: 0, id: 'oihwoiefdjw' } || { top: {id: 'owjoei', price: 0}, bottom: {id: 'owjoei', price: 0} },
    fabric: { type: 'color' || 'pattern', id },
    measurements: [{ type: string, value: int  }],
    instructions: text
  }
]
*/
import { createContext, useState } from "react";

export const OrderContext = createContext({});

const emptyOrder = {
  cat: '',
  outfit: {id: '', price: 0, url: ''},
  top: {id: '', price: 0, url: ''},
  bottom: {id: '', price: 0, url: ''},
  fabric: {id: '', price: 0, url: ''},
  measurements: {},
  instructions: '',
  clientDetails:{},
  resetOutfit: {},
  resetYourDesign:{},
}

const OrderContextProvider = ({ children }) => {
  const [order, setOrder] = useState(emptyOrder);


  // setSimpleVals('cat', 'jumpsuits')
  // setInstructions('instructions', 'please package carefully!')
  const setSimpleVals = (key, val) => {
    setOrder({
      ...order,
      [key]: val
    })
  }

  // setOutfit({{'id': joijoijio, price: 100} url : scs)
  const setOutfit = (options) => {
    setOrder({
      ...order,
      outfit: {
        ...order.outfit,
        ...options
      }
    })
  }

   // setTop({{'id': joijoijio, price: 100} url : scs)
   const setTop = (options) => {
    setOrder({
      ...order,
      top: {
        ...order.top,
        ...options
      }
    })
  }

     // setT({{'id': joijoijio, price: 100} url : scs)
     const setBottom = (options) => {
      setOrder({
        ...order,
        bottom: {
          ...order.bottom,
          ...options
        }
      })
    }
  
  // setFabric({{'id': joijoijio, price: 100} url : scs)
  const setFabric = (options) => {
    console.log("options from set fabric",options)
    setOrder({
      ...order,
      fabric: {
        ...order.fabric,
        ...options
      }
    })
  }
  
     // setMeasurements({{'id': joijoijio, price: 100} url : scs)
  const setMeasurements = (options) => {
      setOrder({
        ...order,
        measurements: options
      })
    }

    const setClientDetails= (options) => {
      setOrder({
        ...order,
        clientDetails: options
      })
    }

    const resetOutfit = () => {
      setOrder({
        ...order,
        outfit: {id: '', price: 0, url: ''},
        fabric: {id: '', price: 0, url: ''},
        top: {id: '', price: 0, url: ''},
        bottom: {id: '', price: 0, url: ''},
      })
    }
    
    
  return (
    <OrderContext.Provider
      value={{
        order,
        setSimpleVals,
        setOutfit,
        setFabric,
        setMeasurements,
        setTop,
        setBottom,
        setClientDetails,
        resetOutfit,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;