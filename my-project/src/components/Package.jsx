import { useState } from "react";

export default function Package() {
  const [image, setImage] = useState({
    website:
      "https://firebasestorage.googleapis.com/v0/b/alba-homepage.appspot.com/o/web.svg?alt=media&token=1cf94fb8-984a-463d-bb8d-50e153fa448d",
    mobile:
      "https://firebasestorage.googleapis.com/v0/b/alba-homepage.appspot.com/o/mobile.svg?alt=media&token=354df853-7e6c-4514-9543-d84aeb691e75",
    digital:
      "https://firebasestorage.googleapis.com/v0/b/alba-homepage.appspot.com/o/Digital%20product%20design.svg?alt=media&token=3340f914-9788-4757-afe3-1bf05f7620e9",
    maintenance:
      "https://firebasestorage.googleapis.com/v0/b/alba-homepage.appspot.com/o/Maintenance.svg?alt=media&token=15ab4384-b009-4408-860d-4b816023c54f",
    CMS: "https://firebasestorage.googleapis.com/v0/b/alba-homepage.appspot.com/o/CMS%20development.svg?alt=media&token=270fe08f-ffb4-42ee-9392-1394c9051390",
    payment:
      "https://firebasestorage.googleapis.com/v0/b/alba-homepage.appspot.com/o/Payment.svg?alt=media&token=aee5aa33-de6b-488f-9b46-ab44641e560f",
  });

  return (
    <>
      {/* <h1>this is package</h1> */}
      <div className=" ">
        <div className="md:mx-auto mt-10 mx-14 md:mt-48 lg:mx-20">
          <h1 className="text-center text-slate-400">Complete Package</h1>
          <h1 className="md:text-center text-black text-4xl mt-4 font-bold drop-shadow-xl">
            From product design to software continuous delivery
          </h1>
          <div className="md:grid md:grid-cols-3 md:gap-4 mt-10 lg:gap-3 lg:px-14 md:px-14">
            {/* first card */}
            <div className="border border-solid border-yellow-300 p-10 rounded-3xl mt-4 lg:w-96 ">
              <img src={image.website} />
              <h1 className=" text-yellow-400 font-semibold mt-4 text-xl">
                Website Development
              </h1>
              <h1 className=" text-slate-600 mt-4">
                High-performance website to reach out more your potential
                customers
              </h1>
            </div>

            {/* second card */}
            <div className="border border-solid border-slate-300 p-10 rounded-3xl lg:w-96  mt-4 ">
              <img src={image.mobile} />
              <h1 className=" text-yellow-400 font-semibold mt-4 text-xl">
                Mobile Apps Development
              </h1>
              <h1 className=" text-slate-600 mt-4">
                To accelerate your business process
              </h1>
            </div>

            {/* third card */}
            <div className="border border-solid border-slate-300 p-10 rounded-3xl lg:w-96  mt-4">
              <img src={image.digital} />
              <h1 className=" text-yellow-400 font-semibold mt-4 text-xl">
                Digital Product Design
              </h1>
              <h1 className=" text-slate-600 mt-4">
                Complete digital product creations from UX prototyping to final
                UI designs
              </h1>
            </div>

            {/* fourth card */}
            <div className="border border-solid border-slate-300 p-10 rounded-3xl lg:w-96  mt-4">
              <img src={image.maintenance} />
              <h1 className=" text-yellow-400 font-semibold mt-4 text-xl">
                Maintenance
              </h1>
              <h1 className=" text-slate-600 mt-4">
                Make sure your digital environment keep online and updated
              </h1>
            </div>

            {/* fifth card */}
            <div className="border border-solid border-slate-300 p-10 rounded-3xl lg:w-96  mt-4">
              <img src={image.CMS} />
              <h1 className=" text-yellow-400 font-semibold mt-4 text-xl">
                CMS Development
              </h1>
              <h1 className=" text-slate-600 mt-4">
                You can update your website content yourself
              </h1>
            </div>

            {/* sixth card */}
            <div className="border border-solid border-slate-300 p-10 rounded-3xl lg:w-96  mt-4">
              <img src={image.payment} />
              <h1 className=" text-yellow-400 font-semibold mt-4 text-xl">
                Integrated payment gateway
              </h1>
              <h1 className=" text-slate-600 mt-4">
                Simplify the payment with just one step
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
