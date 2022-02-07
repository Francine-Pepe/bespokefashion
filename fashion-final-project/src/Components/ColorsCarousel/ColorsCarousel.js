import React, { useEffect, useState, useRef, useContext } from "react";
import { Button } from "react-bootstrap";
import "./ColorsCarousel.css";
import { Icon } from "@iconify/react";
import { OrderContext } from "../../orderContext";
import ManequimTop from "../Manequim/ManequimTop";
// import Jumpsuit1 from "./Images/jumpsuit_01_top.png";
// import Jumpsuit3 from "./Images/jumpsuit_02_top.png";
// import Jumpsuit4 from "./Images/jumpsuit_05_top.png";

export default function ColorsCarousel() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);
  const { order, setFabric } = useContext(OrderContext);

  useEffect(() => {
    fetch("https://bespoke-fashion.herokuapp.com/colors")
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
  console.log("fabric color Carousel", order);
  return (
    <div className="principal_container_top">
      <div id="manequin_container_top_colors">
        <ManequimTop />
        {/* <img src={order.top.url} alt="top" /> */}
      </div>
      <div className="colors_container">
        <div className="carousel" ref={carousel}>
          {data.map((item) => {
            const { id, name, url, price } = item;
            return (
              <div className="item" key={id}>
                <div className="colors_image">
                  <img src={url} alt={name} style={{ width: 200, height: 150 }} />
                </div>

                <div className="info">
                  <span className="colors_price">€{price}</span>
                  <Button
                    variant="outline-*"
                    className="select_button"
                    onClick={() => setFabric({ id: id, price, url })}
                  >
                    Select
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="buttons">
          <Button
            className="buttons_icon"
            variant="outline-*"
            onClick={handleLeftClick}
          >
            <Icon
              icon="carbon:previous-outline"
              color="#003d3a"
              width="45"
              height="45"
            />
          </Button>
          <Button
            className="buttons_icon"
            variant="outline-*"
            onClick={handleRightClick}
            style={{ backgroundColor: "transparent" }}
          >
            <Icon
              icon="carbon:next-outline"
              color="#003d3a"
              width="45"
              height="45"
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
