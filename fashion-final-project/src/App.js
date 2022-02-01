import { Outlet } from "react-router-dom"
import "./App.css"
import Navigation from "./Components/Navigation/Navigation"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
