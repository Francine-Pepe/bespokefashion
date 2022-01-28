import React, { useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import Blouse1 from "./../Images/jumpsuit_01_top.png";
import Blouse2 from "./../Images/jumpsuit_02_top.png";
import Blouse3 from "./../Images/jumpsuit_05_top.png";
import "./ControlledCarousel.css";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      className="carousel_container"
      interval={null}
      activeIndex={index}
      onSelect={handleSelect}
      variant="dark"
    >
      <Carousel.Item className="clothes_to_choose">
          <img
            src={Blouse1}
            alt="First slide"
          />
        <Button className="select_button">Select</Button>
          <img
            src={Blouse2}
            alt="Second slide"
          />
        <Button className="select_button">Select</Button>
        <img
            src={Blouse2}
            alt="Second slide"
          />
        <Button className="select_button">Select</Button>
      </Carousel.Item>
      <Carousel.Item>
        <div className="clothes_carousel">
          
        </div>
        
      </Carousel.Item>
      <Carousel.Item>
        <div className="clothes_carousel">
          <img
            src={Blouse3}
            alt="Third slide"
          />
        </div>
        <Button className="select_button">Select</Button>
      </Carousel.Item>
    </Carousel>
  );
}

//   render(<ControlledCarousel />);
