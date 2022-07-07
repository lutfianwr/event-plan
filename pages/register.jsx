import React from "react";
import swal from "sweetalert";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://3.86.179.206:80/users`, {
        name: name,
        email: email,
        password: password,
      })
      .then((response) => {
        // handle success
        console.log(response);

        localStorage.setItem("token", response.data.token);
        console.log(response.data.token);
        swal("Good job!", "Succecss Signup", "success");
        router.push("/login");

        // navigate('/', { replace: true });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    // .finally(() => setLoading(false));
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-[#F4DBB4]">
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
      <div className="w-full mt-2 lg:h-screen flex justify-center items-center  ">
        <form
          className="flex flex-col justify-center text-black w-full md:w-[45vw] lg:w-[40vw]  p-10 h-96  rounded-lg "
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="text-xl font-semibold lg:mt-3 pl-3">Register</div>
          <input
            className="text-lg font-bold m-3 border p-2 rounded-md"
            type="text"
            id="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="text-lg font-bold m-3 border p-2 rounded-md"
            type="email"
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="text-lg font-bold m-3 border p-2 rounded-md"
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="bg-white rounded-lg p-3 w-28 mx-auto mb-5 font-bold"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
