import { useState } from "react";

export default function Hero() {
  const [image, setImage] = useState({
    hero: "https://firebasestorage.googleapis.com/v0/b/alba-homepage.appspot.com/o/hero.png?alt=media&token=e79bfe1a-62eb-4320-ac1b-81719460fa13",
    website:
      "https://firebasestorage.googleapis.com/v0/b/alba-homepage.appspot.com/o/web.svg?alt=media&token=1cf94fb8-984a-463d-bb8d-50e153fa448d",
  });

  return (
    <>
      <div className="md:grid md:grid-cols-2 md:justify-start ">
        <div className=" mt-12 md:mx-auto md:mt-12 md:ml-20 lg:ml-20 ml-8 ">
          <h1 className="font-bold text-6xl md:text-6xl md:mb-8 drop-shadow-lg md:mt-12 lg:text-8xl ">
            Build or scale up
          </h1>
          <h1 className=" text-3xl md:text-3xl lg:text-5xl">
            your development team
          </h1>
          <div className="flex">
            <hr className="w-12 h-1 my-4 mr-4 bg-yellow-300 border-0 rounded md:my-10" />
            <h1 className=" text-md md:mt-7 md:text-xl lg:text-2xl drop-shadow-xl">
              in weeks, not months
            </h1>
          </div>
          <button
            type="button"
            className=" text-black bg-yellow-400 hover:bg-yellow-500 ease-in-out duration-200 hover:shadow-2xl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-12 py-4 text-center mr-3 mt-4 md:mr-0 md:px-12"
          >
            Book now
          </button>
        </div>
        <div className="md:mr-40 md:pr-4 ">
          <img
            src={image.hero}
            className="mt-10 md:mt-24 md:ml-28 lg:ml-4 lg:scale-125  md:scale-150 "
          />
        </div>
      </div>
    </>
  );
}
