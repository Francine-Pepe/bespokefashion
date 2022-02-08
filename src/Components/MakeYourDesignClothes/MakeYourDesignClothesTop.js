import React, { useEffect, useState, useRef, useContext } from "react"
import { Button } from "react-bootstrap"
import "./MakeYourDesignClothesTop.css"
import { Icon } from "@iconify/react"
import { OrderContext } from "../../orderContext"
import ManequimTop from "../Manequim/ManequimTop"

export default function MakeYourDesignClothesTop() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const carousel = useRef(null)
  const cat = "top"
  const { order, setTop } = useContext(OrderContext)


  useEffect(() => {
    console.log("The Component is Ready!")

    fetch("https://bespoke-fashion.herokuapp.com/fixedDresses")
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }, [])
  console.log(data)

  const handleLeftClick = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  const handleRightClick = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  if (!data || !data.length) return null

  const clothes_carousel = () => {
    document.getElementById("select_button")
    document.getElementById("message")
  }

  const clothes_manequim = () => {
    document.getElementById("manequin_container_top")
    document.getElementById("message")
  }

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

      <div className="container_carousel_top">
        <div className="carousel" ref={carousel}>
          {data
            .filter((data) => data.part === "top")
            .map((item) => {
              const { _id, name, url, price } = item
              const isSelected = order.top?.id === _id
              return (
                <div className="item" key={_id}>
                  <div className="image">
                    <img src={url} alt={name} />
                  </div>

                  <div className="info">
                    <span className="price">{price}€</span>
                    <Button
                      onClick={() => {
                        setTop({ id: _id, price, url })
                      }}
                      className={`select_button ${
                        isSelected ? "select_button--active" : ""
                      }`}
                    >
                      {isSelected ? "selected!" : "select"}
                    </Button>
                  </div>
                </div>
              )
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
  )
}

