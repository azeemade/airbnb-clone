import data from "../data.json";
import { ListingItem } from "../listings-item/ListingItem";

export const ListingGrid = ({ selectedFilter }) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-6 px-20">
        {data &&
          data.listings.map((listing) =>
            selectedFilter ? (
              listing.categories.includes(selectedFilter) && (
                <div key={listing.id} className="group cursor-pointer">
                  <ListingItem listing={listing} />
                </div>
              )
            ) : (
              <div key={listing.id} className="group cursor-pointer">
                <ListingItem listing={listing} />
              </div>
            )
          )}
      </div>
    </>
  );
};
