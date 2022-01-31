import React, { useEffect, useState } from "react"
import "./Magazine.css"
import breadcrumps from "../Images/breadcrumps.png"
import models from "../Images/models.png"
import ReturnButton from "../ReturnButton/ReturnButton"
import HTMLFlipBook from "react-pageflip"
import animation from "../Images/loading.gif"
import Paper from "@mui/material/Paper"

export default function MagazinePages({cat}) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  // const cat = "skirts"

  useEffect(() => {
    console.log("The Component is Ready!")

    fetch("https://bespoke-fashion.herokuapp.com/designs")
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }, [])

  return (
    <section className="MP-section">
      <div className="MP-header">
        <ReturnButton className="MP-btn" />
        <h1 className="MP-title">Our Design Catalogue</h1>
      </div>
      <div className="MP-main">
        <div className=" MP-category">
          <img src={breadcrumps} alt="lines" className=" MP-lines" />
          <h3>{cat}</h3>
        </div>

        <div className="MP-magazine">
          <div className="MP-box">
            {isLoading ? (
              <img
                src={animation}
                width="498"
                height="373"
                alt="loading animation"
              />
            ) : (
              <HTMLFlipBook
                showCover={false}
                autoSize={false}
                width={380}
                height={480}
                style={{ margin: "0 auto" }}
                className="MP-flipBook"
              >
                {data
                  .filter((datai) => datai.cName.includes(cat))
                  .map(({ name, url, price, cName }) => (
                    <Paper elevation={5} className="demoPage1">
                      {/*<h3 className="pageHeader">{name}</h3> */}
                      <img
                        src={url}
                        alt="our design cloths"
                        className="pageImage"
                      />
                      <div className="pagePrice">price: {price} €</div>
                      <button id="#selectPrize" className="selectPrize-btn">
                        select
                      </button>
                    </Paper>
                  ))}
              </HTMLFlipBook>
            )}
          </div>
        </div>
        <div className="MP-img">
          <img src={models} alt="models" className="MP-models" />
        </div>
      </div>
    </section>
  )
}
