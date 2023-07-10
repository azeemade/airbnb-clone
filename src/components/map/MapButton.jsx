export const MapButton = ({ toggleView, view }) => {
  return (
    <>
      <div
        tabIndex="-1"
        className="fixed z-50 left-1/2 bottom-16 border-2 group hover:border-0 border-stone-800 rounded-full"
      >
        <button
          className="px-5 py-2 text-white bg-stone-800 border-2 border-white group-hover:border-0 rounded-full "
          onClick={() => toggleView()}
        >
          Show{" "}
          {view === "listings" ? (
            <>
              <span>map</span>
              <i className="ri-map-2-line ml-2"></i>
            </>
          ) : (
            <>
              <span>list</span> <i className="ri-list-check"></i>
            </>
          )}
        </button>
      </div>
    </>
  );
};
