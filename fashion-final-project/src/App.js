import { Outlet } from "react-router-dom"
import "./App.css"
import Navigation from "./Components/Navigation/Navigation"
import Footer from "./Components/Footer/Footer"
//import Measurements from "./Components/Measurements/Measurements"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Outlet />
      {/* <Measurements />*/}
      <Footer />
    </div>
  )
}

export default App
