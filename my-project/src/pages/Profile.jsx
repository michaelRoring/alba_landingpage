import { useState } from "react";
import toaster from "../helpers/toaster";

export default function Profile() {
  // declaration
  const [profile, setProfile] = useState({
    name: "Eva Holt",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/69/Evangeline_Lilly_2014_Comic_Con_01_%28cropped%29.jpg",
    token: localStorage.access_token,
  });

  //   handle login
  const handleLogin = async e => {
    try {
      e.preventDefault();

      toaster(`Hire me to get the next page`);
    } catch (err) {
      console.log(err); // log the error if login fails
    }
  };

  return (
    <>
      {/* this should be navbar */}

      {/* body content of profile */}
      {/* <div className="mx-auto">
        <h1 className="font-bold text-5xl ml-12 w-11/12 my-8">
          Profile detail
        </h1>
        <div className="bg-yellow-100 mx-auto rounded-xl py-7 md:flex my-4 shadow-2xl w-11/12">
          <img
            className="md:w-56 md:h-56 mx-10 rounded-full w-24 h-24"
            src={profile.img}
          />
          <div className="mt-10 mx-5">
            <h1 className="font-bold text-4xl">{profile.name}</h1>
            <h1 className="text-sm">Profile token: {profile.token}</h1>
            <div className="lg: flex">
              <button
                className="bg-blue-500 md:px-5 md:py-2 rounded-xl text-white mt-14 mx-2 px-2 py-1 hover:bg-blue-700"
                onClick={e => handleLogin(e)}
              >
                Edit profile
              </button>
              <button
                className="bg-white md:px-5 md:py-2 rounded-xl text-blue-400 border border-solid border-blue-800 mt-14 mx-2 px-2 py-1 hover:bg-slate-100"
                onClick={e => handleLogin(e)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <section class=" bg-yellow-50 flex font-medium items-center justify-center h-screen">
        <section class="w-64 mx-auto bg-yellow-400 rounded-2xl px-8 py-6 shadow-2xl">
          <div class="flex items-center justify-between">
            <span class="text-slate-600 text-sm">2d ago</span>
            <span class="text-emerald-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </span>
          </div>
          <div class="mt-6 w-fit mx-auto">
            <img
              src={profile.img}
              class="rounded-full w-28 "
              alt="profile picture"
              srcset=""
            />
          </div>

          <div class="mt-8 ">
            <h2 class="text-white font-bold text-2xl tracking-wide">
              {profile.name}
            </h2>
          </div>
          <p class="text-slate-500 font-semibold mt-2.5">{profile.token}</p>

          <div class="h-1 w-full bg-black mt-8 rounded-full">
            <div class="h-1 rounded-full w-2/5 bg-red-400 "></div>
          </div>
          <div class="mt-3 text-white text-sm">
            <span class="text-gray-400 font-semibold">Profile complete: </span>
            <span>40%</span>
          </div>
        </section>
      </section>
      {/* this should be footer */}
    </>
  );
}
