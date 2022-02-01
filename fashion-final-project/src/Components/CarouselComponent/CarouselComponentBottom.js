import React, { useEffect, useState, useRef, useContext} from "react";
import { Button } from "react-bootstrap";
import "./CarouselComponentBottom.css";
import { Icon } from "@iconify/react";
// import { OrderContext } from "../../orderContext";


export default function CarouselComponent({cat}) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const carousel = useRef(null);

  // const { order, setBottom } = useContext(OrderContext);

  // const cat = "bottom";

  // useEffect(() => {
  //   fetch("https://bespoke-fashion.herokuapp.com/outfitParts")
  //     .then((response) => response.json())
  //     .then(setData);
  // }, []);

  useEffect(() => {
    console.log("The Component is Ready!");
    fetch("https://bespoke-fashion.herokuapp.com/outfitParts")
      .then((response) => response.json())
      .then((data) => {
        if (cat === 'dresses')
        {
          console.log(cat);
          setData(data.filter((datai => (datai.part.includes('bottom') && datai.category.includes('61f15f126b484350049ac7ec') ))));
          setIsLoading(false)
        }
        else
        { 
          setData(data.filter((datai => (datai.part.includes('bottom') && datai.category.includes('61f15f126b484350049ac7eb') || datai.category.includes('61f15f126b484350049ac7ed')))));
          setIsLoading(false)
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!data || !data.length) return null;

  // console.log(
  //   "includes",
  //  data&& data.filter((data) => data.cName?.includes(cat))
  // )
  // console.log(
  //   "===",
  //   data.filter((data) => data.part === cat)
  // );

  // console.log(order)
  return (
    <div className="container">
      <div className="carousel" ref={carousel}>
        {data
          // .filter((data) => data.part === cat)
          .map((item) => {
            const { id, name, url, price } = item;
            return (
              <div className="item" key={id}>
                <div className="image">
                  <img src={url} alt={name} />
                </div>
                <Button className="select_button" >Select</Button>
                {/* <Button className="select_button" onClick={() => setBottom =({id: id,price,url }) }>Select</Button> */}

                <div className="info">
                  <span className="price">{price}€</span>
                </div>
              </div>
            );
          })}
      </div>
      <div className="buttons">
        <Button className="buttons_icon" onClick={handleLeftClick}>
          <Icon
            icon="carbon:previous-outline"
            color="#003d3a"
            width="45"
            height="45"
          />
        </Button>
        <Button className="buttons_icon" onClick={handleRightClick}>
          <Icon
            icon="carbon:next-outline"
            color="#003d3a"
            width="45"
            height="45"
          />
        </Button>
      </div>
    </div>
  );
}
