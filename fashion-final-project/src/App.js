import { Outlet } from "react-router-dom";
import "./App.css";
import Navigation from './Components/Navigation/Navigation'
import Footer from './Components/Footer/Footer'
import OurDesigns from "./Components/OurDesigns/OurDesigns";

// import LandingPage from "./Components/LandingPage/LandingPage";
// import PickUpDesign from './Components/PickUpDesign/PickUpDesign';
// import ReturnButton from "./Components/ReturnButton/ReturnButton";

// import LandingPage from "./Components/LandingPage/LandingPage"
// import Contact from "./Components/Contact/Contact"
// import About from "./Components/About/About"
// import Navigation from "./Components/Navigation/Navigation"


function App() {
  return (
    <div className="App">
        <Navigation /> 
            <Outlet />
        <Footer />
      {/* <LandingPage /> */}

      {/* Take away this part bellow when the router is ready */}
      {/* <PickUpDesign /> */}
      {/* <LandingPage /> */}
      {/* <Contact /> */}
      {/* <About /> */}
      {/* <Navigation />  */}
      {/* <ReturnButton /> */}
      <OurDesigns />
    </div>
  )
}

export default App
