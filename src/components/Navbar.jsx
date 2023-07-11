import React from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="container mx-auto bg-gray-800 p-3 md:p-6">
      <div className="flex items-center justify-between ">
        <Link
          to={"/"}
          className=" title-font font-medium items-center md:justify-start justify-center text-white hidden md:flex">
          <img
            src={Logo}
            alt="Logo"
            className=" bg-auto	 text-white   rounded-full h-14"
          />
          <span className="ml-3 text-xl">BassieNL Community</span>
        </Link>
        <div className="uppercase flex flex-wrap justify-evenly">
          <a href="/" className="text-white mr-4 hover:text-card_purple  py-2 md:py-0 ">
            cards
          </a>
          <a
            href="/about"
            className="text-white mr-4 hover:text-card_purple  py-2 md:py-0 ">
            About us
          </a>
          <a
            href="/discord"
            className="text-white mr-4 hover:text-card_purple  py-2 md:py-0 ">
            Discord
          </a>
          <a
            href="/info"
            className="text-white mr-4 hover:text-card_purple  py-2 md:py-0 ">
            info
          </a>
          <a
            href="/thanks"
            className="text-white mr-4 hover:text-card_purple  py-2 md:py-0 ">
            special thanks
          </a>
          {/* <a
            href="/giveaway"
            className="text-white hover:text-card_purple  py-2 md:py-0 ">
            giveaway
          </a> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
