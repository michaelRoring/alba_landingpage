import { useState } from "react";

export default function Testimonial() {
  const [image, setImage] = useState({
    bg: "https://firebasestorage.googleapis.com/v0/b/alba-homepage.appspot.com/o/bg.svg?alt=media&token=17d49646-321b-4114-a986-387741f8ebc5",
  });
  return (
    <>
      <div className="relative mt-36 mx-10 lg:mx-20 ">
        <span class="absolute   ">
          <img src={image.bg} />
        </span>
        <h1 className="text-slate-500 text-center">Testimonials</h1>
        <h1 className="text-black font-bold text-3xl text-center lg:text-5xl lg:mx-96">
          What clients love in working with Albatech Team
        </h1>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:mx-36">
          {/* first testimonial */}
          <div className="lg:mr-48 ">
            <h1 className="drop-shadow-xl text-2xl font-bold mb-4 mt-16 lg:text-4xl">
              Amazing people
            </h1>
            <h1 className="lg:text-xl">
              "They are people who are not only following the tasks, but can
              work as a team. Together."
            </h1>
            <div className="flex mt-4">
              <div className="bg-slate-200 rounded-full w-12 h-12 mr-4"></div>
              <div>
                <h1 className="text-slate-800">Matthijs Piest</h1>
                <h1 className="text-slate-300">COO at WieBetaaltWat</h1>
              </div>
            </div>
          </div>

          {/* second testimonial */}
          <div className="lg:text-sm lg:mr-48">
            <h1 className="drop-shadow-xl text-2xl font-bold mb-4 mt-16 lg:text-sm">
              Amazing people
            </h1>
            <h1>
              "They are people who are not only following the tasks, but can
              work as a team. Together."
            </h1>
            <div className="flex mt-4">
              <div>
                <h1 className="text-slate-800">Matthijs Piest</h1>
                <h1 className="text-slate-300">COO at WieBetaaltWat</h1>
              </div>
            </div>
          </div>

          {/* third testimonial */}
          <div className="lg:text-sm lg:mr-48">
            <h1 className="drop-shadow-xl text-2xl font-bold mb-4 mt-16 lg:text-sm">
              Amazing people
            </h1>
            <h1>
              "They are people who are not only following the tasks, but can
              work as a team. Together."
            </h1>
            <div className="flex mt-4">
              <div>
                <h1 className="text-slate-800">Matthijs Piest</h1>
                <h1 className="text-slate-300">COO at WieBetaaltWat</h1>
              </div>
            </div>
          </div>

          {/* fourth testimonial */}
          <div className="lg:mr-48">
            <h1 className="drop-shadow-xl text-2xl font-bold mb-4 mt-16 lg:text-4xl">
              Partnership approach
            </h1>
            <h1 className="lg:text-xl">
              "We felt like we had a true partner throughout the process. They
              were clearly intersted on our long-term success."
            </h1>
            <div className="flex mt-4">
              <div className="bg-slate-200 rounded-full w-12 h-12 mr-4"></div>
              <div>
                <h1 className="text-slate-800">Matthijs Piest</h1>
                <h1 className="text-slate-300">COO at WieBetaaltWat</h1>
              </div>
            </div>
          </div>

          {/* fifth testimonial */}
          <div className="lg:ml-72">
            <h1 className="drop-shadow-xl text-2xl font-bold mb-4 mt-16 lg:text-xl">
              Amazing people
            </h1>
            <h1 className="lg:text-sm">
              "They are people who are not only following the tasks, but can
              work as a team. Together."
            </h1>
            <div className="flex mt-4 lg:text-sm">
              <div>
                <h1 className="text-slate-800">Matthijs Piest</h1>
                <h1 className="text-slate-300">COO at WieBetaaltWat</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
