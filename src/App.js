import { useState } from "react";
import { ListingGrid } from "./components/listings/listings-grid/ListingGrid";
import { Navbar } from "./components/navbar/Navbar";
import { SubNavbar } from "./components/navbar/SubNavbar";

function App() {
  const [filter, setFilter] = useState("");
  const handleClick = (filter) => {
    setFilter(filter);
  };
  return (
    <div className="bg-white-100">
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-40 top-0 left-0">
        <Navbar />
        <hr />
        <SubNavbar setFilter={handleClick} />
      </nav>
      <div className="mt-[182px]">
        <ListingGrid selectedFilter={filter} />
      </div>
    </div>
  );
}

export default App;
