import React, { useEffect, useState, useRef } from "react";
import { Button } from "react-bootstrap";
import "./MakeYourDesignClothesBottom.css";
import { Icon } from "@iconify/react";
// import ManequimBottom from "../Manequim/ManequimBottom";
// import bottom1 from "../Images_test/skirt_01.png";
import bottom2 from "./../Images_test/skirt_03.png";
// import bottom3 from "./../Images_test/skirt_08.png";
// import bottom4 from "../Images_test/skirt_19.png";
// import bottom5 from "./../Images_test/short_03.png";
// import bottom6 from "./../Images_test/short_04.png";
// import bottom7 from "./../Images_test/short_02.png";

export default function MakeYourDesignClothesBottom() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const carousel = useRef(null);
  const cat = "bottom";

  // useEffect(() => {
  //   fetch("https://bespoke-fashion.herokuapp.com/outfitParts")
  //     .then((response) => response.json())
  //     .then(setData);
  // }, []);

  useEffect(() => {
    console.log("The Component is Ready!");
    fetch("https://bespoke-fashion.herokuapp.com/fixedDresses")
      .then((response) => response.json())
      .then((data) => {
        if (cat === 'dresses')
        {
          console.log(cat);
          setData(data.filter((datai => (datai.part.includes('bottom') && datai.category.includes('61f15f126b484350049ac7ec') ))));
          setIsLoading(false)
          console.log(data);

        }
        else
        { 
          setData(data.filter((datai => (datai.part.includes('bottom') && datai.category.includes('61f15f126b484350049ac7eb') || datai.category.includes('61f15f126b484350049ac7ed')))));
          setIsLoading(false)
          console.log(data);

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
  return (
    <div className="principal_container_bottom_part">
      <div className="manequin_container_bottom">
      <img src={bottom2} alt="bottom" />
      </div>
      <div className="container_clothes_bottom">
      <div className="carousel" ref={carousel}>
        {data
          .map((item) => {
            const { _id, name, url, price } = item;
            return (
              <div className="item" key={_id}>
                <div className="image">
                  <img src={url} alt={name} />
                </div>
                  
                <div className="info">
                  <span className="price">{price}€</span>
                  <Button className="select_button" onClick={() => setBottom({ id: _id, price, url})} >Select</Button>
                </div>
              </div>
            );
          })}
      </div>
        <div className="buttons">
          <Button className="buttons_icon" variant="outline-*" onClick={handleLeftClick}>
            <Icon
              icon="carbon:previous-outline"
              color="#003d3a"
              width="45"
              height="45"
            />
          </Button>
          <Button className="buttons_icon" variant="outline-*" onClick={handleRightClick}>
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
