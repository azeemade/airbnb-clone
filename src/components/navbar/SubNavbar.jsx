import { useRef, useState } from "react";
import { Barn } from "./icons/Barn";
import { BeachFront } from "./icons/BeachFront";
import { Boats } from "./icons/Boats";
import { Cabins } from "./icons/Cabins";
import { Campervan } from "./icons/Campervan";
import { CasasParticulares } from "./icons/CasasParticulares";
import { Castles } from "./icons/Castles";
import { Container } from "./icons/Container";
import { Domes } from "./icons/Domes";
import { Farms } from "./icons/Farms";
import { GrandPianos } from "./icons/GrandPianos";
import { GuestHouse } from "./icons/GuestHouse";
import { Jacuzzi } from "./icons/Jacuzzi";
import { LakeFront } from "./icons/LakeFront";
import { OutdoorDining } from "./icons/OutdoorDining";
import { Ryokans } from "./icons/Ryokans";
import { Tent } from "./icons/Tent";
import { TinyHomes } from "./icons/TinyHomes";
import { Tower } from "./icons/Tower";
import { Yurts } from "./icons/Yurts";

export const SubNavbar = ({ setFilter }) => {
  const elRef = useRef(null);

  const [arrowHide, setArrowHide] = useState({
    left: true,
    right: false,
  });

  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowHide({ ...arrowHide, left: true });
      } else if (
        element.scrollLeft + element.clientWidth ===
        element.scrollWidth
      ) {
        setArrowHide({ ...arrowHide, right: true });
      } else {
        setArrowHide({ left: false, right: false });
      }
    }, speed);
  };

  return (
    <>
      <div className="flex items-center mx-20 space-x-6">
        <div className="relative flex items-center w-[90%]">
          <div className="absolute left-0 flex items-center h-full bg-gradient-to-r from-white from-75%">
            <button
              onClick={() => {
                handleHorizantalScroll(elRef.current, 25, 100, -10);
              }}
              className={`btn btn-circle bg-white hover:bg-white hover:shadow border-base-300 btn-sm ${
                arrowHide.left && "invisible"
              }`}
            >
              <i className="ri-arrow-left-s-line"></i>
            </button>
          </div>

          <div
            className="flex space-x-16 px-20 py-4 overflow-hidden"
            ref={elRef}
          >
            <div
              className="filter_tab flex flex-col text-sm items-center cursor-pointer text-stone-500 hover:text-stone-800 hover:border-b-2 hover:border-base-300"
              onClick={() => {
                setFilter("Barn");
              }}
            >
              <Barn />
              <p>Barn</p>
            </div>
            <div
              className="filter_tab flex flex-col text-sm items-center cursor-pointer hover:text-stone-800 text-stone-500 hover:border-b-2 hover:border-base-300"
              onClick={() => {
                setFilter("BeachFront");
              }}
            >
              <BeachFront /> <p>BeachFront</p>
            </div>
            <div
              className="filter_tab flex flex-col text-sm items-center cursor-pointer text-stone-500 hover:text-stone-800 hover:border-b-2 hover:border-base-300"
              onClick={() => {
                setFilter("Boats");
              }}
            >
              <Boats /> <p>Boats</p>
            </div>
            <div
              className="filter_tab flex flex-col text-sm items-center cursor-pointer text-stone-500 hover:text-stone-800 hover:border-b-2 hover:border-base-300"
              onClick={() => {
                setFilter("Cabins");
              }}
            >
              <Cabins /> <p>Cabins</p>
            </div>
            <div
              className="filter_tab flex flex-col text-sm items-center cursor-pointer text-stone-500 hover:text-stone-800 hover:border-b-2 hover:border-base-300"
              onClick={() => {
                setFilter("Campervan");
              }}
            >
              <Campervan /> <p>Campervan</p>
            </div>
            <div
              className="filter_tab flex flex-col text-sm items-center cursor-pointer text-stone-500 hover:text-stone-800 hover:border-b-2 hover:border-base-300"
              onClick={() => {
                setFilter("CasasParticulares");
              }}
            >
              <CasasParticulares /> <p>CasasParticulares</p>
            </div>
            <div
              className="filter_tab flex flex-col text-sm items-center cursor-pointer text-stone-500 hover:text-stone-800 hover:border-b-2 hover:border-base-300"
              onClick={() => {
                setFilter("Castles");
              }}
            >
              <Castles /> <p>Castles</p>
            </div>
            <div
              className="filter_tab flex flex-col text-sm items-center cursor-pointer text-stone-500 hover:text-stone-800 hover:border-b-2 hover:border-base-300"
              onClick={() => {
                setFilter("Container");
              }}
            >
              <Container /> <p>Container</p>
            </div>
            <div
              className="filter_tab flex flex-col text-sm items-center cursor-pointer text-stone-500 hover:text-stone-800 hover:border-b-2 hover:border-base-300"
              onClick={() => {
                setFilter("Domes");
              }}
            >
              <Domes /> <p>Domes</p>
            </div>
            <div
              className="filter_tab flex flex-col text-sm items-center cursor-pointer text-stone-500 hover:text-stone-800 hover:border-b-2 hover:border-base-300"
              onClick={() => {
                setFilter("Farms");
              }}
            >
              <Farms /> <p>Farms</p>
            </div>
            <div
              className="filter_tab flex flex-col text-sm items-center cursor-pointer text-stone-500 hover:text-stone-800 hover:border-b-2 hover:border-base-300"
              onClick={() => {
                setFilter("GrandPianos");
              }}
            >
              <GrandPianos /> <p>GrandPianos</p>
            </div>
            <div
              className="filter_tab flex flex-col text-sm items-center cursor-pointer text-stone-500 hover:text-stone-800 hover:border-b-2 hover:border-base-300"
              onClick={() => {
                setFilter("GuestHouse");
              }}
            >
              <GuestHouse /> <p>GuestHouse</p>
            </div>
            <div
              className="filter_tab flex flex-col text-sm items-center cursor-pointer text-stone-500 hover:text-stone-800 hover:border-b-2 hover:border-base-300"
              onClick={() => {
                setFilter("Jacuzzi");
              }}
            >
              <Jacuzzi /> <p>Jacuzzi</p>
            </div>
            <div
              className="filter_tab flex flex-col text-sm items-center cursor-pointer text-stone-500 hover:text-stone-800 hover:border-b-2 hover:border-base-300"
              onClick={() => {
                setFilter("LakeFront");
              }}
            >
              <LakeFront /> <p>LakeFront</p>
            </div>
            <div
              className="filter_tab flex flex-col text-sm items-center cursor-pointer text-stone-500 hover:text-stone-800 hover:border-b-2 hover:border-base-300"
              onClick={() => {
                setFilter("OutdoorDining");
              }}
            >
              <OutdoorDining /> <p>OutdoorDining</p>
            </div>
            <div
              className="filter_tab flex flex-col text-sm items-center cursor-pointer text-stone-500 hover:text-stone-800 hover:border-b-2 hover:border-base-300"
              onClick={() => {
                setFilter("Ryokans");
              }}
            >
              <Ryokans /> <p>Ryokans</p>
            </div>
            <div
              className="filter_tab flex flex-col text-sm items-center cursor-pointer text-stone-500 hover:text-stone-800 hover:border-b-2 hover:border-base-300"
              onClick={() => {
                setFilter("Tent");
              }}
            >
              <Tent /> <p>Tent</p>
            </div>
            <div
              className="filter_tab flex flex-col text-sm items-center cursor-pointer text-stone-500 hover:text-stone-800 hover:border-b-2 hover:border-base-300"
              onClick={() => {
                setFilter("TinyHomes");
              }}
            >
              <TinyHomes /> <p>TinyHomes</p>
            </div>
            <div
              className="filter_tab flex flex-col text-sm items-center cursor-pointer text-stone-500 hover:text-stone-800 hover:border-b-2 hover:border-base-300"
              onClick={() => {
                setFilter("Tower");
              }}
            >
              <Tower /> <p>Tower</p>
            </div>
            <div
              className="filter_tab flex flex-col text-sm items-center cursor-pointer text-stone-500 hover:text-stone-800 hover:border-b-2 hover:border-base-300"
              onClick={() => {
                setFilter("Yurts");
              }}
            >
              <Yurts /> <p>Yurts</p>
            </div>
          </div>

          <div className="absolute right-0 flex items-center h-full bg-gradient-to-l from-white from-75%">
            <button
              onClick={() => {
                handleHorizantalScroll(elRef.current, 25, 100, 10);
              }}
              className={`btn btn-circle bg-white hover:bg-white hover:shadow border-base-300 btn-sm ${
                arrowHide.right && "invisible"
              }`}
            >
              <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>
        </div>
        <div>
          <button className="btn btn-outline border-base-300 normal-case rounded-lg !flex flex-nowrap shadow-sm hover:bg-transparent hover:shadow hover:border-base-300 hover:text-[#1f2937] text-xs">
            <i className="ri-equalizer-line"></i>
            <a href="/#" className="text-xs">
              Filters
            </a>
          </button>
        </div>
      </div>
    </>
  );
};
