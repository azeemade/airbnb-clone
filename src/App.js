import { useState } from "react";
import { ListingGrid } from "./components/listings/listings-grid/ListingGrid";
import { Navbar } from "./components/navbar/Navbar";
import { SubNavbar } from "./components/navbar/SubNavbar";
import { Footer } from "./components/footer/Footer";
import { MapButton } from "./components/map/MapButton";
import { Map } from "./components/map/Map";

function App() {
  const [filter, setFilter] = useState("");
  const [currentView, setCurrentView] = useState("listings");

  const handleClick = (filter) => {
    setFilter(filter);
  };

  const toggleView = () => {
    currentView === "listings"
      ? setCurrentView("map")
      : setCurrentView("listings");
  };

  return (
    <div className="bg-white-100">
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-40 top-0 left-0">
        <Navbar />
        <hr />
        <SubNavbar setFilter={handleClick} />
      </nav>

      <div className="mt-[182px]">
        {currentView === "listings" ? (
          <ListingGrid selectedFilter={filter} />
        ) : (
          <Map />
        )}
      </div>
      <MapButton toggleView={toggleView} view={currentView} />
      <Footer />
    </div>
  );
}

export default App;
