import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import PickUpDesign from './Components/PickUpDesign/PickUpDesign'
import LandingPage from './Components/LandingPage/LandingPage'
import OurDesigns from './Components/OurDesigns/OurDesigns'
import Measurements from './Components/Measurements/Measurements'
import MagazinePages from './Components/MagazinePages/MagazinePages'
import OutfitDetails from './Components/OutfitDetails/OutfitDetails'
import MakeYourDesignPatterns from './Components/MakeYourDesignPatterns/MakeYorDesignPatterns'
import App from "./App"
import YourDesign from "./Components/YourDesign/YourDesign";
import OrderContextProvider from "./orderContext";
import Checkout from './Components/Checkout/Checkout'
import MakeYourDesignClothes from "./Components/MakeYourDesignClothes/MakeYourDesignClothes"

ReactDOM.render(
  <React.StrictMode>
    <OrderContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
              <Route path="/" element={ <LandingPage /> } />
              <Route path="app" element={ <App /> }>
                <Route path="about" element={ <About /> } />
                <Route path="contact" element={ <Contact /> } />
                <Route path="pickup" element={ <PickUpDesign /> }/>
                <Route path="ourdesigns" element={ <OurDesigns /> } />
                <Route path="yourdesigns" element={ <YourDesign /> } />
                <Route path="measurement" element={ <Measurements /> } />
                <Route path="magazine/jumpsuits" element={ <MagazinePages cat='jumpsuits'/> } />
                <Route path="magazine/pants" element={ <MagazinePages cat='pants'/> } />
                <Route path="magazine/skirts" element={ <MagazinePages cat='skirts'/> } />
                <Route path="magazine/dresses" element={ <MagazinePages cat='dresses'/> } />
                <Route path="magazine/blouses" element={ <MagazinePages cat='blouses'/> } />
                <Route path="magazine/shorts" element={ <MagazinePages cat='shorts'/> } />
                <Route path="fabrics" element={ <MakeYourDesignPatterns /> } />
                <Route path="outfitDetails" element={ <OutfitDetails /> } />
                <Route path="checkout" element={ <Checkout /> } />
                <Route path="designClothes/jumpsuits" element={ <MakeYourDesignClothes cat='jumpsuits'/> } />
                <Route path="designClothes/dresses" element={ <MakeYourDesignClothes cat='dresses'/> } />
              </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </OrderContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
)


