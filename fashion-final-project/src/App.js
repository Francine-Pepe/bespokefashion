import { Outlet } from "react-router-dom"
import "./App.css"
import Navigation from "./Components/Navigation/Navigation"
import Footer from "./Components/Footer/Footer"
import OutfitDetails from "./Components/OutfitDetails/OutfitDetails"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Outlet />
      {/* <OutfitDetails />  */}
      <Footer />
    </div>
  )
}

export default App
