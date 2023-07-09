import { useState, useEffect } from "react";
import { CarouselLoader } from "./CarouselLoader";
import { readFromCache, writeToCache } from "./functions";

export const ListingCarousel = ({ listing }) => {
  const [images, setImages] = useState();
  const [loading, setLoading] = useState(false);
  const [initIndex, setInitIndex] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const setFav = (id) => {
    var favs = readFromCache();

    if (favs.includes(id)) {
      let index = favs.indexOf(id);
      favs.splice(index, 1);
      setFavorite(false);
    } else {
      favs.push(id);
      setFavorite(true);
    }
    writeToCache(favs);
  };

  useEffect(() => {
    const getFav = () => {
      let favs = readFromCache();
      favs.includes(listing.id) && setFavorite(true);
    };

    const getImages = () => {
      const AUTHORIZATION = {
        Authorization: "Client-ID o1R4wCrL53msfhPblUPN3qCz1GimNn_nHvHRA9FkGx4",
      };
      const RANDNO = Math.floor(Math.random() * (7 - 4) + 4);
      const URL = `https://api.unsplash.com/search/photos?page=1&query=homes&color=${listing.color}&per_page=${RANDNO}`;

      setLoading(true);
      fetch(URL, { method: "GET", headers: AUTHORIZATION })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setImages(data.results);
          setLoading(false);
        })
        .catch((e) => {
          setLoading(true);
          console.log(e.message);
        });
    };

    getFav();
    getImages();
  }, []);
  return (
    <div>
      {loading ? (
        <CarouselLoader />
      ) : (
        <div
          id="indicators-carousel"
          className="relative w-full h-72"
          data-carousel="static"
        >
          <div className="relative h-72 overflow-hidden rounded-lg">
            {images &&
              images.map((image, index) => (
                <div
                  id={`${image.id}${index}`}
                  className={`${
                    initIndex !== index && "hidden"
                  } duration-700 ease-in-out`}
                  data-carousel-item={initIndex === index ? "active" : ""}
                  key={index}
                >
                  <img
                    src={image.urls.regular}
                    className="absolute block w-full h-72 rounded-lg -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt={image.alt_description}
                  />
                </div>
              ))}
            <button
              className={`absolute top-[2%] right-[5%] text-3xl ${
                favorite ? "text-red-600" : "text-stone-600"
              }`}
              onClick={() => setFav(listing.id)}
            >
              <i className="ri-heart-3-fill"></i>
            </button>
          </div>
          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            {images &&
              images.map((image, index) => (
                <button
                  type="button"
                  className={`w-3 h-3 rounded-full ${
                    index === initIndex ? "bg-slate-100" : "bg-slate-100/50"
                  }`}
                  aria-current="true"
                  aria-label={`Slide ${image.id}${index - 1}`}
                  data-carousel-slide-to={index}
                  key={index}
                  onClick={() => setInitIndex(index)}
                ></button>
              ))}
          </div>
          {initIndex !== 0 && (
            <button
              type="button"
              className="absolute top-[50%] left-0 z-30 group items-center justify-center px-4 cursor-pointer hidden group-hover:flex focus:outline-none"
              data-carousel-prev
              onClick={() => setInitIndex(initIndex - 1)}
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-100">
                <i className="ri-arrow-left-s-line"></i>
                <span className="sr-only">Previous</span>
              </span>
            </button>
          )}
          {images && images.length - 1 !== initIndex && (
            <button
              type="button"
              className="absolute top-[50%] right-0 z-30 hidden group-hover:flex items-center justify-center px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
              onClick={() => setInitIndex(initIndex + 1)}
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-100">
                <i className="ri-arrow-right-s-line"></i>
                <span className="sr-only">Next</span>
              </span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};
