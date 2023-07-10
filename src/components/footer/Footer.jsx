export const Footer = () => {
  return (
    <>
      <footer className="fixed bottom-0 left-0 z-20 w-full py-4 px-20 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between dark:bg-gray-800 dark:border-gray-600">
        <div className="flex space-x-3">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Airbnb, Inc
            </a>
            .
          </span>
          <ul className="flex flex-wrap space-x-4 items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="/#" className="hover:underline flex items-center">
                <i className="ri-checkbox-blank-circle-fill text-[0.3rem] mr-1"></i>
                Terms
              </a>
            </li>
            <li>
              <a href="/#" className="hover:underline flex items-center">
                <i className="ri-checkbox-blank-circle-fill text-[0.3rem] mr-1"></i>
                Sitemap
              </a>
            </li>
            <li>
              <a href="/#" className="hover:underline flex items-center">
                <i className="ri-checkbox-blank-circle-fill text-[0.3rem] mr-1"></i>
                Privacy
              </a>
            </li>
            <li>
              <a href="/#" className="hover:underline flex items-center">
                <i className="ri-checkbox-blank-circle-fill text-[0.3rem] mr-1"></i>
                Your Privacy Choices
              </a>
            </li>
            <li>
              <a href="/#" className="hover:underline flex items-center">
                <i className="ri-checkbox-blank-circle-fill text-[0.3rem] mr-1"></i>
                Destinations
              </a>
            </li>
          </ul>
        </div>
        <ul className="flex flex-wrap space-x-4 items-center mt-3 text-sm font-bold text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/#" className="hover:underline">
              <i className="ri-global-line mr-2"></i>
              English (US)
            </a>
          </li>
          <li>
            <a href="/#" className="hover:underline">
              $ USD
            </a>
          </li>
          <li>
            <a href="/#" className="hover:underline">
              Support &amp; resources
              <i className="ri-arrow-up-s-line ml-2"></i>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};
