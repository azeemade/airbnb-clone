import { ListingCarousel } from "./ListingCarousel";
import { formatAvailableDates } from "./functions";

export const ListingItem = ({ listing }) => {
  return (
    <>
      <div>
        <div>
          <ListingCarousel listing={listing} />
        </div>
        <div className="flex">
          <div className=" w-[90%]">
            <p title={listing.name} className="truncate">
              {listing.name}
            </p>
          </div>
          <div>
            <p>
              <i className="ri-star-s-fill"></i>
              {listing.averageRating}
            </p>
          </div>
        </div>

        <div>
          <p className="text-stone-400">Hosted by {listing.host}</p>
        </div>

        <div className="mb-3">
          <p className="text-stone-400">
            {formatAvailableDates(listing.availableDates)}
          </p>
        </div>

        <div>
          <p className="text-sm">
            <b>${listing.costPerNight}</b> night
          </p>
        </div>
      </div>
    </>
  );
};
