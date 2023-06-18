export default function Hero() {
  return (
    <>
      <div className="md:grid md:grid-cols-2 md:justify-start md:bg-sky-100 ">
        <div className=" mt-12 md:mx-auto md:mt-12 md:ml-10 ">
          <h1 className="font-bold text-6xl md:text-6xl md:mb-8 drop-shadow-lg md:mt-12 lg:text-8xl">
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
            className=" text-black bg-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-4 text-center mr-3 mt-4 md:mr-0 md:px-12"
          >
            Book now
          </button>
        </div>
        <div className="md:mr-40 md:pr-4">
          <img
            src="../src/assets/hero.png"
            className="mt-10 md:mt-24 md:ml-28 lg:scale-100 lg:ml-10 md:scale-150 "
          />
        </div>
      </div>
    </>
  );
}
