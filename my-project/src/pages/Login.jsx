import { login } from "../store/action/actionCreator";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toaster from "../helpers/toaster";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [image, setImage] = useState({
    logo: "https://firebasestorage.googleapis.com/v0/b/alba-homepage.appspot.com/o/alba-logo.png?alt=media&token=18ddbe32-e348-4154-a0d3-e041f5282ef6",
  });

  //   handle change
  const handleChange = e => {
    const { name, value } = e.target;
    setData(prevState => ({ ...prevState, [name]: value }));
  };

  //   handle login
  const handleLogin = async e => {
    try {
      e.preventDefault();
      const res = await dispatch(login(data));
      // console.log("res :", res);

      if (!res) {
        toaster(`Invalid email / password`);
        setData({ password: "" });
      } else if (res.token) {
        localStorage.access_token = res.token;
        toaster(`Welcome back, ${data.email}!`);
        navigate("/profile");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* this should be navbar */}

      <div className="mx-auto mt-52 w-4/12 border-4 p-20 border-slate-400 rounded-3xl px-8 bg-gradient-to-t from-slate-50 from-10% via-slate-100 via-30% to-yellow-50 to-90%">
        <img src={image.logo} className="mb-14" />
        <form>
          <div class="relative z-0 w-full mb-6 group">
            {/* email login input */}
            <input
              type="email"
              name="email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
              placeholder=" "
              required
              onChange={handleChange}
              value={data.email}
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            {/* password login input */}
            <input
              type="password"
              name="password"
              id="floating_password"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
              placeholder=" "
              required
              onChange={handleChange}
              value={data.password}
            />
            <label
              for="floating_password"
              class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <button
            className="bg-yellow-400 px-5 py-2 rounded-xl text-white mt-4 hover:bg-yellow-500 ease-in-out duration-200 hover:shadow-2xl"
            onClick={e => handleLogin(e)}
          >
            Login
          </button>
        </form>
      </div>
      {/* this should be footer */}
    </>
  );
}
