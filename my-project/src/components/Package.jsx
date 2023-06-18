export default function Package() {
  return (
    <>
      {/* <h1>this is package</h1> */}
      <div className="md:mx-20 mt-10 mx-10">
        <h1 className="text-center text-slate-400">Complete Package</h1>
        <h1 className="md:text-center text-slate-800 text-5xl mt-4 font-bold drop-shadow-lg">
          From product design to software continuous delivery
        </h1>
        <div className="md:grid md:grid-cols-3 md:gap-4 mt-10">
          {/* first card */}
          <div className="border border-solid border-yellow-300 p-10 rounded-3xl mt-4">
            <img src="../src/assets/web.svg" />
            <h1 className=" text-yellow-400 font-semibold mt-4 text-xl">
              Website Development
            </h1>
            <h1 className=" text-slate-600 mt-4">
              High-performance website to reach out more your potential
              customers
            </h1>
          </div>

          {/* second card */}
          <div className="border border-solid border-slate-300 p-10 rounded-3xl mt-4">
            <img src="../src/assets/mobile.svg" />
            <h1 className=" text-yellow-400 font-semibold mt-4 text-xl">
              Mobile Apps Development
            </h1>
            <h1 className=" text-slate-600 mt-4">
              To accelerate your business process
            </h1>
          </div>

          {/* third card */}
          <div className="border border-solid border-slate-300 p-10 rounded-3xl mt-4">
            <img src="../src/assets/Digital product design.svg" />
            <h1 className=" text-yellow-400 font-semibold mt-4 text-xl">
              Digital Product Design
            </h1>
            <h1 className=" text-slate-600 mt-4">
              Complete digital product creations from UX prototyping to final UI
              designs
            </h1>
          </div>

          {/* fourth card */}
          <div className="border border-solid border-slate-300 p-10 rounded-3xl mt-4">
            <img src="../src/assets/Maintenance.svg" />
            <h1 className=" text-yellow-400 font-semibold mt-4 text-xl">
              Maintenance
            </h1>
            <h1 className=" text-slate-600 mt-4">
              Make sure your digital environment keep online and updated
            </h1>
          </div>

          {/* fifth card */}
          <div className="border border-solid border-slate-300 p-10 rounded-3xl mt-4">
            <img src="../src/assets/CMS Development.svg" />
            <h1 className=" text-yellow-400 font-semibold mt-4 text-xl">
              CMS Development
            </h1>
            <h1 className=" text-slate-600 mt-4">
              You can update your website content yourself
            </h1>
          </div>

          {/* sixth card */}
          <div className="border border-solid border-slate-300 p-10 rounded-3xl mt-4">
            <img src="../src/assets/Payment.svg" />
            <h1 className=" text-yellow-400 font-semibold mt-4 text-xl">
              Integrated payment gateway
            </h1>
            <h1 className=" text-slate-600 mt-4">
              Simplify the payment with just one step
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
