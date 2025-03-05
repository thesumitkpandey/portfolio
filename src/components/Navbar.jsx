import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-scroll";
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuOptions = ["Home", "Skills", "Projects", "Education", "Experience"];

  return (
    <nav className="fixed text-2xl font-['roboto'] top-0 left-0 w-full bg-[rgba(33,33,33,0.314)] backdrop-blur-xs px-6 md:px-12 py-4 flex justify-between items-center z-20">
      <h1 className="font-bold text-white hidden md:block">
        Sumit Kumar Pandey
      </h1>
      <h1 className="font-bold text-white md:hidden">Sumit</h1>

      <ul className="hidden md:flex space-x-6 text-white items-center">
        {menuOptions.map((option, index) => (
          <li key={index} className="group relative">
            <Link
              to={option.toLowerCase()}
              smooth={true}
              duration={500}
              className="hover:text-green-500 transition-colors cursor-pointer"
            >
              {option}
            </Link>

            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-500 group-hover:w-full transition-all duration-500"></div>
          </li>
        ))}

        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-white  hover:scale-110 transition-all duration-500 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden text-white text-4xl font-bold"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? "✕" : <CiMenuBurger />}
      </button>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute  text-4xl top-full  items-center content-center bg-green-500 left-0 w-full h-screen backdrop-blur-lg z-50">
          <ul className="flex flex-col space-y-4 p-6 text-white content-center items-center">
            {menuOptions.map((option, index) => (
              <Link
                onClick={() => setIsMobileMenuOpen(false)}
                key={index}
                className="group relative"
                to={option.toLowerCase()}
                smooth={true}
                duration={500}
              >
                <button className="hover:text-gray-300 transition-colors cursor-pointer m-4">
                  {option}
                </button>

                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}

            <Link to="contact" smooth={true} duration={500}>
              <button
                type="button"
                className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-4xl font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]"
              >
                Contact
              </button>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}
