import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import toaster from "../helpers/toaster";
import { fetchEva } from "../store/action/actionCreator";

export default function Profile() {
  // declaration
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEva(4));
  }, []);

  const user = useSelector(state => {
    return state?.userReducer?.profile;
  });

  return (
    <>
      <section class=" bg-yellow-50 flex font-medium items-center justify-center h-screen bg-gradient-to-b from-slate-50 from-20% via-slate-100 via-30% to-yellow-50 to-90% ">
        <section class="w-1/3 mx-auto  rounded-2xl px-8 py-6 shadow-2xl bg-gradient-to-b from-yellow-300 from-10% via-yellow-400 via-50% to-amber-400 to-90%">
          <div class="flex items-center justify-between">
            <span class="text-slate-600 text-sm">2d ago</span>
            <span class="text-black">
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
          <div class="mt-2 w-fit flex">
            <img
              src={user?.data?.avatar}
              class="rounded-full w-28 shadow-2xl"
              alt="profile picture"
              srcset=""
            />
            <div class=" ml-10">
              <h2 class="text-white font-bold text-4xl tracking-wide mt-4">
                {user?.data?.first_name} {user?.data?.last_name} #
                {user?.data?.id}
              </h2>
              <h2 class="text-slate-600 font-bold text-md tracking-wide mt-0.5">
                {user?.data?.email}
              </h2>
            </div>
          </div>

          <div class="h-2 w-full bg-black mt-8 rounded-full">
            <div class="h-2 rounded-full w-4/5 bg-green-400 "></div>
          </div>
          <div class="mt-3 text-slate-50 text-sm">
            <span class=" font-semibold">Profile complete: </span>
            <span>80%</span>
          </div>
        </section>
      </section>
      {/* this should be footer */}
    </>
  );
}
