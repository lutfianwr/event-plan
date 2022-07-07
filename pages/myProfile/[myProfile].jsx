import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import swal from "sweetalert";
import { useRouter } from "next/router";
import axios from "axios";

const MyProfiles = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar_url, setAvatar] = useState("");
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState();
  const [remove, setRemove] = useState("");
  const [objSubmit, setObjSubmit] = useState("");

  useEffect(() => {
    getmyProfile();
  }, []);

  const getmyProfile = () => {
    axios({
      method: "get",
      url: `https://group3.altaproject.online/myprofile`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        // handle success
        const results = response.data.data;
        setProfile(results);
      })
      .catch(function (error) {
        // handle error
        swal({
          title: "Good job!",
          text: "EROOR",
        });
      })
      .finally(() => {
        setLoading(false);
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
    axios({
      method: "put",
      url: `https://group3.altaproject.online/users`,
      data: formData,

      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        // handle success
        getmyProfile();
        swal("Good job!", "Success ", "success");
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleChange = (value, key) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  const handleRemove = (id) => {
    axios
      .delete(`https://group3.altaproject.online/users`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        // handle success
        const results = response.data.data;
        setRemove(results);
        swal({
          title: "Good job!",
          text: "SUCCESS DELETE ACCOUNT",
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

  if (loading) {
    return (
      <div className="flex bg-white w-full h-screen">
        <h1 className="text-3xl m-auto text-black font-bold ">LOADING...</h1>
      </div>
    );
  } else {
    return (
      <Layout>
        <div className="flex justify-center p-10">
          <form
            className="p-10 mt-8 w-full bg-white "
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white">
                <div className="grid grid-cols-3 border-b-2 border-zinc-700">
                  <h1 className="">Account Information</h1>
                </div>

                <div className="mb-5 mt-5">
                  <div className="mt-1 flex items-center">
                    <span className="inline-block max-h-80 max-w-7xl rounded-full overflow-hidden bg-gray-100">
                      <img
                        src={profile.avatar_url}
                        alt=""
                        width="210"
                        height="210"
                      />
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
                        //placeholder="name"
                        placeholder={profile.name}
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
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 placeholder:to-black"
                        placeholder={profile.email}
                        //placeholder="@gmail.com"
                        onChange={(e) => handleChange(e.target.value, "email")}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-grey-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-grey-500"
                  onClick={() => handleSubmit()}
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="flex justify-center mb-8">
          <button
            type="submit"
            className="py-2 px-4 mr-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            onClick={() => handleRemove(profile.id)}
          >
            Delete My Profile
          </button>
        </div>
      </Layout>
    );
  }
};

export default MyProfiles;
