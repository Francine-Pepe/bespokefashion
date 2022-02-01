import { Outlet } from "react-router-dom"
import "./App.css"
import Navigation from "./Components/Navigation/Navigation"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Navigation />
<<<<<<< HEAD

      {/* <Outlet /> */}
      {/* <Measurements /> */}

      {/* <MagazinePages /> */}

      {/* <YourDesign /> */}
      {/* <OurDesigns /> */}
      {/* <MakeYourDesignPatterns /> */}
      {/* <CarouselComponent /> */}
      {/*<MakeYourDesignClothes /> */}

=======
>>>>>>> 92ac5fcf99c7acbf7bb3130130edbd209dd60de9
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
