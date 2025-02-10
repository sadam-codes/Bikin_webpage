import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className={`bg-slate-100 py-4 ${isOpen ? "mb-64" : ""}`}>
      <div className="mx-10">
        <div className="container mx-auto flex justify-between items-center ">
          <h1 className="text-2xl font-bold text-gray-800">Bikin</h1>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-800 focus:outline-none"
          >
            {isOpen ? (
              <span className="text-3xl">&times;</span>
            ) : (
              <span className="text-3xl">&#9776;</span>
            )}
          </button>

          <ul
            className={`lg:flex lg:space-x-6 text-gray-700 font-medium absolute left-0 w-full lg:w-auto bg-slate-100 lg:bg-transparent transition-all duration-300 ease-in ${
              isOpen ? "block" : "hidden"
            } lg:flex z-50 lg:static top-16`}
          >
            <li className="lg:inline-block block text-center p-3">
              <Link to="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li className="lg:inline-block block text-center p-3">
              <Link to="/about" className="hover:text-blue-500">
                About
              </Link>
            </li>
            <li className="lg:inline-block block text-center p-3">
              <Link to="/services" className="hover:text-blue-500">
                Services
              </Link>
            </li>
            <li className="lg:inline-block block text-center p-3">
              <Link to="/portfolio" className="hover:text-blue-500">
                Portfolio
              </Link>
            </li>
            <li className="lg:inline-block block text-center p-3">
              <Link to="/team" className="hover:text-blue-500">
                Team
              </Link>
            </li>
            <li className="lg:inline-block block text-center p-3">
              <Link to="/pricing" className="hover:text-blue-500">
                Pricing
              </Link>
            </li>

            <li
              className="relative lg:inline-block block text-center p-3"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="hover:text-blue-500 focus:outline-none"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Dropdown
              </button>
              {dropdownOpen && (
                <ul className="absolute left-0 lg:left-auto mt-2 bg-white shadow-lg rounded-md w-48 z-50">
                  <li className="p-3 hover:bg-gray-200">
                    <Link to="/option1">Option 1</Link>
                  </li>
                  <li className="p-3 hover:bg-gray-200">
                    <Link to="/option2">Option 2</Link>
                  </li>
                  <li className="p-3 hover:bg-gray-200">
                    <Link to="/option3">Option 3</Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="lg:inline-block block text-center p-3">
              <Link to="/contact" className="hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>

          <button className="hidden md:block bg-slate-300 text-blue-500 px-6 py-2 rounded-md font-semibold whitespace-nowrap">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
