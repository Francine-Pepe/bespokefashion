import React, { useEffect, useState, useRef } from "react";
// import CarouselComponent from "../CarouselComponent/CarouselComponent";
import { Button } from "react-bootstrap";
import "./PrintsCarousel.css";
import { Icon } from "@iconify/react";


export default function PrintsCarousel() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch("https://bespoke-fashion.herokuapp.com/patterns")
      .then((response) => response.json())
      .then(setData);
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

  return (
    <div className="container">
       <div className="carousel" ref={carousel}>
        {data.map((item) => {
          const { id, name, url, price } = item;
          return (
            <div className="item" key={id}>
              <div className="prints_image">
                <img src={url} alt={name} style={{ width: 170, height: 150 }} />
              </div>
              <Button className="select_button" style={{ outline: 'none' }}>Select</Button>
              <div className="info">
                <span className="price">€{price}</span>
              </div> 
            </div>
          );
        })}
      </div>
      <div className="buttons" style={{ outline: 'none' }}>
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
