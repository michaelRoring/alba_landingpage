import { useState } from "react";

export default function Client() {
  const [image, setImage] = useState({
    dio: "https://firebasestorage.googleapis.com/v0/b/alba-homepage.appspot.com/o/dio.svg?alt=media&token=51d87e2c-47aa-42ab-937d-620071415bf3",
    homeliving:
      "https://firebasestorage.googleapis.com/v0/b/alba-homepage.appspot.com/o/homeliving.svg?alt=media&token=f5027a34-0d64-4b54-be58-14842dbb9829",
    melandas:
      "https://firebasestorage.googleapis.com/v0/b/alba-homepage.appspot.com/o/melandas.svg?alt=media&token=d4d7ab3e-012e-4ef5-8005-6883bc318de4",
    hippo:
      "https://firebasestorage.googleapis.com/v0/b/alba-homepage.appspot.com/o/hippo.svg?alt=media&token=2961cbd1-2f21-4b9b-8c61-9bc2fecad2b3",
    ilios:
      "https://firebasestorage.googleapis.com/v0/b/alba-homepage.appspot.com/o/ilios.svg?alt=media&token=7a0390dd-6bdb-4e7e-8b18-f37e07732e36",
  });

  return (
    <>
      {/* <h1>This is client</h1> */}
      <div className="mx-10 mt-36">
        <div className="text-center gap-10 mx-auto lg:text-center">
          <img src={image.hippo} className="inline-block -mt-16 lg:mr-10" />
          <img
            src={image.homeliving}
            className="inline-block -mt-16 lg:mr-10"
          />
          <img src={image.ilios} className="inline-block -mt-16 lg:mr-10" />
          <img src={image.dio} className="inline-block -mt-16 lg:mr-10" />
          <img src={image.melandas} className="inline-block -mt-16 lg:mr-10" />
        </div>
        <div className="bg-yellow-400 border border-solid border-black p-4 mt-10 rounded-3xl text-center lg:mx-36">
          <h1 className="text-slate-800 lg:text-xl">
            Is software important for your business?
          </h1>
          <h1 className="text-slate-800 text-4xl font-semibold mt-4 tracking-wide lg:text-4xl">
            Build it with Albatech
          </h1>
          <button className="border border-solid-2 border-black mt-12 rounded-full p-4 font-bold hover:shadow-2xl hover:bg-yellow-500 ease-in-out duration-300">
            Consultation now
          </button>
        </div>
      </div>
      <hr className="my-8 lg:mx-48" />
    </>
  );
}
