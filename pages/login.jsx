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
      .post("https://group3.altaproject.online/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.data.token);
        swal("Good job!", "Success Login", "success");
        router.push("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center  bg-[#F4B4B4]">
      <img
        className="object-cover w-full max-w-xl rounded-md lg:h-screen"
        src="https://lambeturah.id/wp-content/uploads/2020/02/Kamus-KBBI-88-e1580661363914.png"
        width="600"
        height="750"
        alt=""
      />
      <div className="w-full mt-2 lg:h-screen flex justify-center items-center">
        <form
          className="flex flex-col justify-center text-black border shadow-xl border-black w-full md:w-[45vw] lg:w-[40vw]  p-10 h-80  rounded-lg "
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
