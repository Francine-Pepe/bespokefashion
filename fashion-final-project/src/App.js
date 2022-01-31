import { Outlet } from "react-router-dom"
import "./App.css"
import Navigation from "./Components/Navigation/Navigation"
import Footer from "./Components/Footer/Footer"
// import YourDesign from "./Components/YourDesign/YourDesign"
// import OurDesigns from "./Components/OurDesigns/OurDesigns"
//import Measurements from "./Components/Measurements/Measurements"


// import MagazinePages from "./Components/MagazinePages/PageJumpsuits"


// import MagazinePages from "./Components/MagazinePages/MagazinePages"

import MagazinePages from "./Components/MagazinePages/MagazinePages"



function App() {
  return (
    <div className="App">
      <Navigation />
      <Outlet />
      {/* <Measurements /> */}

      {/* <MagazinePages /> */}

      {/* <YourDesign /> */}
      {/* <OurDesigns /> */}

      
      <Footer />
    </div>
  )
}

export default App
