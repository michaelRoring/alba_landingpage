import { useState } from "react";

export default function Portfolio() {
  const [image, setImage] = useState({
    portfolio:
      "https://firebasestorage.googleapis.com/v0/b/alba-homepage.appspot.com/o/portfolio.svg?alt=media&token=ad5fb039-51e5-43fe-b653-63df0ccd36ae",
  });

  return (
    <>
      <div className="mt-20 mx-14">
        <h1 className="text-center text-slate-400">Portfolio</h1>
        <h1 className=" text-black mt-8 font-bold text-4xl md:text-center drop-shadow-lg">
          The software that we built takes our client to the next level
        </h1>
        <div className="lg:grid lg:grid-cols-3 md:gap-10 md:mx-20">
          {/* first card */}
          <div className="border border-yellow-300 rounded-xl mt-10">
            <img src={image.portfolio} className="mb-8 w-full" />
            <div className="px-10">
              <h1 className=" text-slate-300 ">Mobile apps</h1>
              <h1 className=" text-yellow-400 text-2xl font-semibold mb-8 md:mb-4">
                ILIOS app (B2B E-commerce)
              </h1>
              <h1 className=" text-slate-700 mb-6">
                Has a unique selling point where not all companies offer
                applications for sales, data collection and management
              </h1>
            </div>
          </div>

          {/* second card */}
          <div className="border border-slate-300 rounded-xl mt-10">
            <img src={image.portfolio} className="mb-8 w-full" />
            <div className="px-10 md:mb-4">
              <h1 className=" text-slate-300 ">Website development</h1>
              <h1 className=" text-yellow-400 text-2xl font-semibold mb-8 md:mb-4">
                Home and Living
              </h1>
              <h1 className=" text-slate-700 mb-6">
                Albatech helps in creating a website catalog to show brand
                identity and information in accordance with vision and mission
                of Home and Living.
              </h1>
            </div>
          </div>

          {/* third card */}
          <div className="border border-slate-300 rounded-xl mt-10">
            <img src={image.portfolio} className="mb-8 w-full" />
            <div className="px-10 md:mb-4">
              <h1 className=" text-slate-300 ">Website development</h1>
              <h1 className=" text-yellow-400 text-2xl font-semibold mb-8 md:mb-4">
                HIPPO
              </h1>
              <h1 className=" text-slate-700 mb-6">
                Albatech help to create e-commerce and company profile for
                Hippo's Website with realtime transaction and integration with
                Payment Gateway to accept multi payment
              </h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-4 md:mt-10">
          <button
            type="button"
            className="items-center text-black bg-yellow-400 hover:bg-yellow-500 ease-in-out duration-300 hover:shadow-xl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-4 text-center"
          >
            Learn more
          </button>
        </div>
      </div>
    </>
  );
}
