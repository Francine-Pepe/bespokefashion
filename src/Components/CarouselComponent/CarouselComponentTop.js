import React, { useEffect, useState, useRef, useContext } from "react";
import { Button } from "react-bootstrap";
import "./CarouselComponentTop.css";
import { Icon } from "@iconify/react";
import { OrderContext } from "../../orderContext";


export default function CarouselComponent() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const carousel = useRef(null);
  const { order, setTop } = useContext(OrderContext);

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
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  console.log(data);


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


  return (
    <div className="carousel_container_top">
      <div className="carousel" ref={carousel}>
        {data
          .filter((data) => data.part === 'top')
          .map((item) => {
            const { _id, name, url, price } = item;
            return (
              <div className="item" key={_id}>
                <div className="image">
                  <img src={url} alt={name} />
                </div>
                 <Button className="select_button" onClick={() => setTop({ id: _id, price, url})}>Select</Button>
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

