//import { Outlet } from "react-router-dom"
import "./App.css"
import Navigation from "./Components/Navigation/Navigation"
import Footer from "./Components/Footer/Footer"
//import Measurements from "./Components/Measurements/Measurements"
import JumpsuitsPage from "./Components/MagazinePages/JumpsuitsPage"

function App() {
  return (
    <div className="App">
      <Navigation />
      {/*<Outlet />*/}
      {/* <Measurements /> */}

      <JumpsuitsPage />
      <Footer />
    </div>
  )
}

export default App
