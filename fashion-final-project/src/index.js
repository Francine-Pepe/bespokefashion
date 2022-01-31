import React from "react"
import ReactDOM from "react-dom"
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import PickUpDesign from './Components/PickUpDesign/PickUpDesign'
import LandingPage from './Components/LandingPage/LandingPage'
import OurDesigns from './Components/OurDesigns/OurDesigns'
import Measurements from './Components/Measurements/Measurements'
import App from "./App"
import YourDesign from "./Components/YourDesign/YourDesign";

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Routes>
        <Route path="/">
            <Route path="/" element={ <LandingPage /> } />
            <Route path="app" element={ <App /> }>
              <Route path="about" element={ <About /> } />
              <Route path="contact" element={ <Contact /> } />
              <Route path="pickup" element={ <PickUpDesign /> }/>
              <Route path="ourdesigns" element={ <OurDesigns /> } />
              <Route path="yourdesign" element={ <YourDesign /> } />
              <Route path="measurement" element={ <Measurements /> } />
              

            </Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)


