import React from "react";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import swal from "sweetalert";
import { useRouter } from "next/router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://3.86.179.206:80/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        // handle success
        console.log(response);

        localStorage.setItem("token", response.data.data.token);
        console.log(response.data.data.token);
        swal("Good job!", "Succecss Login", "success");

        router.push("/");
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    // .finally(() => setLoading(false));
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center  bg-[#F4DBB4]">
      <div className="backdrop-opacity-10 backdrop-invert bg-slate-500/30 relative w-full max-w-xl">
        <img
          className="object-cover w-full max-w-xl rounded-md lg:h-screen opacity-50"
          src="https://talvinsingh.com/wp-content/uploads/2020/09/merlin_170369790_63d02a4c-82f8-441a-ac7c-c395828b7961-mobileMasterAt3x.jpg"
          alt=""
        />
        <div className="absolute bottom-36 left-36 md:bottom-72 md:left-44">
          <h1 className="font-bold text-3xl text-center text-white">
            KAPANGIH
          </h1>
          <p className="text-muted text-center text-white"> Join The World</p>
        </div>
      </div>
      <div className="w-full mt-2 lg:h-screen flex justify-center items-center">
        <form
          className="flex flex-col justify-center text-black w-full md:w-[45vw] lg:w-[40vw]  p-10 h-80  rounded-lg "
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="text-xl font-semibold mb-3 rounded-md pl-3">
            Login
          </div>
          <input
            className="text-lg font-bold m-3 border rounded-md p-3"
            type="email"
            value={email}
            id="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="text-lg font-bold m-3 border rounded-md p-3"
            type="password"
            value={password}
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-white rounded-lg p-3 w-28 mx-auto mb-5 font-bold"
            type="submit"
          >
            Login
          </button>
          <p className="text-sm font-semibold mt-2 pt-1 mb-0 ml-3">
            Dont have an account?
            <Link href="/register">
              <a className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">
                Register
              </a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
