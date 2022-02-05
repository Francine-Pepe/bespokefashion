import React, { useEffect, useState, useRef, useContext } from "react";
import { Button } from "react-bootstrap";
import "./MakeYourDesignClothesTop.css";
import { Icon } from "@iconify/react";
// import { OrderContext } from "./../OrderContext";
// import top1 from "../Images_test/dress_02_top.png";
import top2 from "./../Images_test/dress_03_top.png";
// import top3 from "./../Images_test/dress_04_top.png";
// import top4 from "../Images_test/dress_19_top.png";
// import top5 from "./../Images_test/dress_20_top.png";
// import top6 from "./../Images_test/dress_22_top.png";
import { OrderContext } from "../../orderContext";

export default function MakeYourDesignClothesTop() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const carousel = useRef(null);
  const cat = "top";
  const { order, setTop } = useContext(OrderContext);

  // const selectData = document.getElementById('manequin_container_top').value = document.getElementById('select_button').value;

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

  const clothes_carousel = () => {
    document.getElementById("select_button");
    document.getElementById("message");
  };

  const clothes_manequim = () => {
    document.getElementById("manequin_container_top");
    document.getElementById("message");
  };

  // console.log(
  //   "includes",
  //  data&& data.filter((data) => data.cName?.includes(cat))
  // )
  // console.log(
  //   "===",
  //   data.filter((data) => data.part === cat)
  // );
  return (
    <div className="principal_container_top_part">
      <div id="manequin_container_top">
        <img src={top2} alt="top" />
      </div>
      <div className="container_carousel_top">
        <div className="carousel" ref={carousel}>
          {data
            .filter((data) => data.part === "top")
            .map((item) => {
              const { _id, name, url, price } = item;
              return (
                <div className="item" key={_id}>
                  <div className="image">
                    <img src={url} alt={name} />
                  </div>

                  <div className="info">
                    <span className="price">{price}€</span>
                    <Button
                      className="select_button"
                      onClick={() => setTop({ id: _id, price, url })}
                    >
                      Select
                    </Button>
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
    </div>
  );
}

// import React, {useContext, useEffect} from 'react';
// import './MakeYourDesignClothes.css';
// import Manequin from './../Images/manequim_transparent_-Recovered.png'
// import CarouselComponentBottom from '../CarouselComponent/CarouselComponentBottom';
// import CarouselComponentTop from '../CarouselComponent/CarouselComponentTop';
// import { OrderContext } from "../../orderContext";

// export default function MakeYourDesignClothes({cat}) {

//     const { order, setSimpleVals} = useContext(OrderContext);

//     useEffect(() => {
//         setSimpleVals('cat', cat);
//     },[]);
//     console.log(order);

//     return (
//         <>
//         <div className="make_your_design_clothes">
//             <h3>Make your own Design - choose the top and match the bottom!</h3>
//             <div className="main_container_clothes">
//                 <div className="manequin_container">
//                     <img src={Manequin} alt="manequin" />
//                 </div>

//                 <div className='carousels'>
//                     <div className='carousel_container_top'>
//                         <CarouselComponentTop />
//                     </div>

//                     <div className='carousel_container_bottom'>
//                     <CarouselComponentBottom cat = {cat}/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </>
//     );

// }
