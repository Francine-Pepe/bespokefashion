//import { Outlet } from "react-router-dom"
import "./App.css"
import Navigation from "./Components/Navigation/Navigation"
import Footer from "./Components/Footer/Footer"
//import Measurements from "./Components/Measurements/Measurements"
import MagazinePages from "./Components/MagazinePages/PageJumpsuits"
import OurDesigns from "./Components/OurDesigns/OurDesigns"

function App() {
  return (
    <div className="App">
      <Navigation />
      {/*<Outlet />*/}
      {/* <Measurements /> */}

      <MagazinePages />
      <OurDesigns />
      <Footer />
    </div>
  )
}

export default App
