// import { Outlet } from "react-router-dom"
import "./App.css"
import Navigation from "./Components/Navigation/Navigation"
import Footer from "./Components/Footer/Footer"
// import MakeYourDesignClothes from "./Components/MakeYourDesignClothes/MakeYourDesignClothes"
// import YourDesign from "./Components/YourDesign/YourDesign"
// import OurDesigns from "./Components/OurDesigns/OurDesigns"
//import Measurements from "./Components/Measurements/Measurements"
// import MagazinePages from "./Components/MagazinePages/PageJumpsuits"
// import MagazinePages from "./Components/MagazinePages/MagazinePages"
// import MagazinePages from "./Components/MagazinePages/MagazinePages"
// import CarouselComponent from "./Components/CarouselComponent/CarouselComponentBottom"
// import MakeYourDesignPatterns from "./Components/MakeYourDesignPatterns/MakeYorDesignPatterns"
import OutfitDetails from "./Components/OutfitDetails/OutfitDetails"

function App() {
  return (
    <div className="App">
      <Navigation />

      {/* <Outlet /> */}
      {/* <Measurements /> */}

      {/* <MagazinePages /> */}

      {/* <YourDesign /> */}
      {/* <OurDesigns /> */}
      {/* <MakeYourDesignPatterns /> */}
      {/* <CarouselComponent /> */}
      {/*<MakeYourDesignClothes /> */}

      <Outlet />
      {/* <OutfitDetails />  */}

      <Footer />
    </div>
  )
}

export default App
