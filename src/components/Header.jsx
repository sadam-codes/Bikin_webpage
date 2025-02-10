import React from "react";
import firstimage from "../assets/1st.png";

const Header = () => {
  return (
    <header className="relative top-0 md:top-0 mx-auto max-w-screen-lg text-center px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-800">
        Build Better Websites With Bikin
      </h1>
      <p className="text-lg text-gray-600 mt-4">
        We are a team of talented designers making websites with Bootstrap and
        Tailwind.
      </p>
      <button className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition">
        Get Started
      </button>
      <div className="mt-8">
        <img
          src={firstimage}
          alt="Website Illustration"
          className="max-w-full h-auto mx-auto"
        />
      </div>
    </header>
  );
};

export default Header;
