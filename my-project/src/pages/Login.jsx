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
      console.log("res :", res);

      if (!res) {
        toaster(`Invalid email / password`);
        setData({ password: "" });
      } else if (res.token) {
        localStorage.access_token = res.token;
        toaster(`Welcome back, ${data.email}!`);
        navigate("/profile");
      }
    } catch (err) {
      console.log(err); // log the error if login fails
    }
  };

  return (
    <>
      {/* this should be navbar */}

      <div className="mx-auto pt-52 w-4/12">
        <h1 className="text-4xl mb-6">Login</h1>
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
              class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
              class="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <button
            className="bg-yellow-500 px-5 py-2 rounded-xl text-white mt-4 hover:bg-yellow-700"
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
