import { useState } from "react";

export default function Navbar() {
  const [image, setImage] = useState({
    logo: "https://firebasestorage.googleapis.com/v0/b/alba-homepage.appspot.com/o/alba-logo.png?alt=media&token=18ddbe32-e348-4154-a0d3-e041f5282ef6",
  });

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 sticky z-20 top-0 left-0 border-b border-gray-200 lg:mx-20 lg:w-11/12 md:w-full">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src={image.logo}
              className="h-8 mr-3  lg:w-36 lg:h-16"
              alt="Flowbite Logo"
            />
          </a>
          <div className="flex md:order-2">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 md:mt-6 gap-x-24 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-2 md:mx-auto md:border-0 md:bg-white ">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 lg:mt-3 md:mt-5"
                  aria-current="page"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 lg:mt-3 md:mt-5"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 lg:mt-3 md:mt-5"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 lg:mt-3 md:mt-5"
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 lg:mt-3 md:mt-5"
                >
                  Carrer
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className=" text-black bg-yellow-400 hover:bg-yellow-500 ease-in-out duration-300 hover:shadow-2xl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-4 text-center mr-3 md:mr-0 lg:mb-2"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
