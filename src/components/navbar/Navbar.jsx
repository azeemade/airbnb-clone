import { Logo } from "./Logo";

export const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center py-4 px-20">
        <div>
          <Logo />
        </div>
        <div className="grid grid-cols-3 divide-x border items-center px-4 py-2  border-stone-300 rounded-full text-sm shadow-sm hover:shadow-md">
          <div className="text-center  cursor-pointer">
            <a href="/#">Anywhere</a>
          </div>
          <div className="text-center  cursor-pointer">
            <a href="/#">Any week</a>
          </div>
          <div className="pl-4 text-stone-300 cursor-pointer">
            <a href="/#">
              Add guests
              <i className="bg-[#FF5A5F] btn-circle btn-sm btn ml-2 text-white ri-search-line"></i>
            </a>
          </div>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="hover:bg-base-200 p-2 rounded-full cursor-pointer">
            <a href="/#" className="text-sm font-medium">
              Airbnb your home
            </a>
          </div>
          <div className="hover:bg-base-200 btn-circle btn btn-sm bg-transparent border-transparent">
            <a href="/#">
              <i className="ri-global-line"></i>
            </a>
          </div>
          <div>
            <button className="rounded-full shadow-sm border border-neutral-content hover:shadow-md flex space-x-2 p-2">
              <i className="ri-menu-line text-lg"></i>
              <i className="ri-account-circle-fill text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
