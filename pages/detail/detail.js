import React from "react";
import Layout from "../../components/layout";

function detail() {
  return (
    <Layout>
      <div className="bg-red-200 h-full">
        <div className="flex justify-center p-10">
          <div className="flex flex-col lg:flex-row rounded-lg bg-gray-100 shadow-lg">
            <img
              className=" w-full h-auto object-cover  rounded-t-lg md:rounded-none md:rounded-l-lg"
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/australia-day-club-event-video-banner-design-template-956e38b1e34f16e4fe55fb23f1084457_screen.jpg?ts=1577355840"
              alt=""
            />
            <div className="p-6 flex flex-col justify-between">
              <div>
                <p className="text-gray-600 text-s pb-5 lg:pb-10">
                  26 January 2022
                </p>

                <h5 className="text-gray-900 text-xl font-medium pb-2 lg:pb-5">
                  Australia Day Live Music DJ
                </h5>

                <p className="text-gray-600 text-xs">Hosted by</p>
                <p className="text-gray-900 text-s pb-2 lg:pb-5">Sydney Club</p>
                <p className="text-gray-600 text-s pb-6">Australia</p>
              </div>

              <div className="">
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="w-full px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default detail;
