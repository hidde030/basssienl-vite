import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

export default function Footer() {
  return (
    <footer className="text-white body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <img
            src={Logo}
            alt="Logo"
            className=" bg-auto	 text-white   rounded-full h-14"
          />
          <span className="ml-3 text-xl">BassieNL Community</span>
        </Link>
        <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © Hosted with ❤️ by{" "}
          <a href="https://hostmajority.com/" className="underline-offset-auto	underline ">
            HostMajority
          </a>{" "}
          <a
            href="https://www.twitch.tv/bassienl"
            className="text-white ml-1"
            rel="noopener noreferrer"
            target="_blank">
            @BassieNL
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link
            onClick={() =>
              (window.location.href = "https://www.instagram.com/bassienltwitch/")
            }
            className="ml-3 text-white">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </Link>
          <Link
            className="ml-3 text-white"
            onClick={() => (window.location.href = "https://www.twitch.tv/bassienl")}>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 256 268"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid">
              <g>
                <path
                  d="M17.4579119,0 L0,46.5559188 L0,232.757287 L63.9826001,232.757287 L63.9826001,267.690956 L98.9144853,267.690956 L133.811571,232.757287 L186.171922,232.757287 L256,162.954193 L256,0 L17.4579119,0 Z M40.7166868,23.2632364 L232.73141,23.2632364 L232.73141,151.29179 L191.992415,192.033461 L128,192.033461 L93.11273,226.918947 L93.11273,192.033461 L40.7166868,192.033461 L40.7166868,23.2632364 Z M104.724985,139.668381 L127.999822,139.668381 L127.999822,69.843872 L104.724985,69.843872 L104.724985,139.668381 Z M168.721862,139.668381 L191.992237,139.668381 L191.992237,69.843872 L168.721862,69.843872 L168.721862,139.668381 Z"
                  fill="#fff"></path>
              </g>
            </svg>
          </Link>
        </span>
      </div>
    </footer>
  );
}
