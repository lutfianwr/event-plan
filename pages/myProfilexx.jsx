import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import swal from "sweetalert";
import { useRouter } from "next/router";
import axios from "axios";

const MyProfiles = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar_url, setAvatar] = useState("");
  const [loading, setLoading] = useState("");
  const [profile, setProfile] = useState();
  const [remove, setRemove] = useState("");
  const [objSubmit, setObjSubmit] = useState("");

  useEffect(() => {
    getmyProfile();
  }, []);

  const getmyProfile = () => {
    axios({
      method: "get",
      url: `http://3.86.179.206:80/myprofile`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        // handle success
        console.log(response);
        const results = response.data.data;
        setProfile(results);
      })
      .catch(function (error) {
        // handle error
        swal({
          title: "Good job!",
          text: "EROOR",
        });
      });
  };

  const editProfile = () => {
    axios({
      method: "put",
      url: `http://3.86.179.206:80/users`,
      data: {
        name: name,
        email: email,
        password: password,
        avatar_url: avatar_url,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        // handle success
        console.log(response);
        swal("Good job!", "macan ", "aing maccan");
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        swal("Good job!", "macan ", "aing maccan");
      });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    if (e !== undefined) {
      e.preventDefault();
    }
    const formData = new FormData();
    for (const key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }
    var requestOptions = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: formData,
    };
  };
  const handleChange = (value, key) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  const handleRemove = (id) => {
    axios
      .delete(`http://3.86.179.206:80/users`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        // handle success
        console.log(response);
        const results = response.data.data;
        setRemove(results);
        swal({
          title: "Good job!",
          text: "SUKSES DELETE DATA",
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(() => {
        // setLoading(false);
        router.push("/login");
      });
  };
  return (
    <Layout>
      <form>
        <div className="flex justify-center p-10">
          <div className="p-10 mx-16 mb-5  w-full bg-white">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white">
                <div className="grid grid-cols-3 border-b-2 border-zinc-700">
                  <h1 className="">Account Information</h1>
                </div>

                <div className="mb-5 mt-5">
                  <div className="mt-1 flex items-center">
                    <span className="inline-block max-h-80 max-w-7xl rounded-full overflow-hidden bg-gray-100">
                      <svg
                        className="h-full w-full text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span>
                    <input
                      type="file"
                      className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onChange={(e) => {
                        setAvatar(URL.createObjectURL(e.target.files[0]));
                        handleChange(e.target.files[0], "avatar_url");
                        //console.log(e.target.files[0]);
                      }}
                    />
                  </div>
                </div>

                <div className="mb-5 mt-5">
                  <div className="col-span-3 sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <div className="mt-1 flex rounded-md border-2 border-grey-600 shadow-sm">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder="name"
                        onChange={(e) => handleChange(e.target.value, "name")}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-5 mt-5">
                  <div className="col-span-3 sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="mt-1 flex rounded-md border-2 border-grey-600 shadow-sm">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder="*******"
                        onChange={(e) =>
                          handleChange(e.target.value, "password")
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-5 mt-5">
                  <div className="col-span-3 sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1 flex rounded-md border-2 border-grey-600 shadow-sm">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder="@gmail.com"
                        onChange={(e) => handleChange(e.target.value, "email")}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 mr-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  onClick={() => handleRemove(profile.id)}
                >
                  Delete
                </button>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-grey-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grey-500"
                  onClick={() => handleSubmit()}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default MyProfiles;
