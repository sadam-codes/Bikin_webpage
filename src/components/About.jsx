import React from "react";
import citrus from "../assets/cirtrus.png";
import askme from "../assets/ask-img.png";
import client from "../assets/client-1.png";
import ghost from "../assets/ghost-img.png";
import belimo from "../assets/belimo.png";
import askFm from "../assets/askFm-img.png";

const About = () => {
  return (
    <>
      <div className="bg-blue-600">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-14 p-8 container mx-auto">
          <div className="md:w-1/3">
            <h1 className="text-3xl font-bold text-white mb-4 mt-4">
              Voluptatem Dignissimos Provident Quasi
            </h1>
            <p className="text-white leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="bg-blue-500 hover:bg-black text-white px-6 py-2 rounded-lg shadow-md transition duration-300 cursor-pointer">
              About Us
            </button>
          </div>
          <div className="md:w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="rounded-lg p-6 hover:bg-black cursor-pointer"
              >
                <h2 className="text-xl font-semibold text-white mb-2">
                  Card Title {item}
                </h2>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  enim ad minim veniam.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-32 mx-auto">
        <img
          src={citrus}
          alt="No Display"
          className="w-20 h-20 object-contain"
        />
        <img
          src={askme}
          alt="No Display"
          className="w-20 h-20 object-contain"
        />
        <img
          src={client}
          alt="No Display"
          className="w-20 h-20 object-contain"
        />
        <img
          src={ghost}
          alt="No Display"
          className="w-20 h-20 object-contain"
        />
        <img
          src={belimo}
          alt="No Display"
          className="w-20 h-20 object-contain"
        />
        <img
          src={askFm}
          alt="No Display"
          className="w-20 h-20 object-contain"
        />
      </div>
    </>
  );
};

export default About;
