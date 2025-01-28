"use client";

// Importing necessary libraries
import React, { useState, useEffect } from "react";
import Link from "next/link";

// Importing necessary data
import TravelDestinations from "@/Data-Json/TravelDestinations";

// Importing the google fonts
import { Dosis, Lexend, Pattaya } from "next/font/google";
const dosis = Dosis({
  subsets: ["latin"],
  display: "swap",
});
const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
});
const pattaya = Pattaya({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const NavbarComponent = () => {
  // State to track if the user has scrolled past 0px
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update state based on scroll position
      setIsScrolled(window.scrollY > 0);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full ${
        isScrolled ? "top-0" : "px-2 lg:px-16 top-2"
      } fixed z-50 bg-transparent duration-300`}
    >
      <div
        className={`${lexend.className} navbar ${
          isScrolled ? "bg-white" : "bg-base-100/80 rounded-2xl"
        } shadow-sm px-2 lg:px-10`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/destinations">Destinations</Link>
              </li>
              <li>
                <a>Packages</a>
                <ul className="p-2">
                  <li>
                    <Link href="/destinations/all">All</Link>
                  </li>
                  {TravelDestinations.map((destination, index) => (
                    <li key={index}>
                      <Link href={`/destinations/${destination.id}`}>
                        {destination.country}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
            </ul>
          </div>
          <Link
            href="/"
            className={`${pattaya.className} text-2xl lg:text-3xl cursor-pointer text-(--color5)`}
          >
            Wanderlust
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li>
              <Link href="/" className="hover:text-(--color5)">
                Home
              </Link>
            </li>
            <li>
              <Link href="/destinations" className="hover:text-(--color5)">
                Destinations
              </Link>
            </li>
            <li>
              <details>
                <summary>Packages</summary>
                <ul className="p-2">
                  <li>
                    <Link
                      href="/destinations/all"
                      className="hover:text-(--color5)"
                    >
                      All
                    </Link>
                  </li>
                  {TravelDestinations.map((destination, index) => (
                    <li key={index}>
                      <Link
                        href={`/destinations/${destination.id}`}
                        className="hover:text-(--color5)"
                      >
                        {destination.country}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-(--color5)">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/gallery" className=" hover:text-(--color5)">
                Gallery
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            href="/contact-us"
            className="flex gap-3 btn border-2 border-(--color5) bg-transparent hover:bg-(--color4)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <g id="SVGRepo_iconCarrier">
                <g id="style=fill">
                  <g id="call" fill="#000">
                    <path
                      id="vector"
                      d="M21.97 18.33c0 .36-.08.73-.25 1.09a4.2 4.2 0 0 1-.68 1.02 5 5 0 0 1-.592.56q-.488.39-1.048.62c-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a29 29 0 0 1-3.28-2.8 28.4 28.4 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41Q2 8.1 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13s.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78"
                    ></path>
                    <path
                      id="vector (Stroke)"
                      fillRule="evenodd"
                      d="M2.99 2.4c.752-.738 1.63-1.15 2.6-1.15.383 0 .773.081 1.13.251.368.171.703.433.964.808L10 5.574c.205.285.366.564.482.846.118.277.198.586.198.9 0 .387-.113.757-.313 1.09-.17.298-.403.586-.671.855l-.69.716q.012.025.027.065c.15.262.415.631.817 1.106.44.509.907 1.024 1.41 1.538.532.522 1.036.996 1.545 1.428.48.407.856.666 1.128.814l.059.026.69-.68a3.8 3.8 0 0 1 .88-.681 2.1 2.1 0 0 1 1.078-.307q.449.002.894.186c.283.116.56.275.838.464l.006.004 3.313 2.352c.355.247.632.559.806.952l.005.012.004.011a2.8 2.8 0 0 1 .214 1.059c0 .473-.105.952-.322 1.41a5 5 0 0 1-.802 1.204q-.321.354-.68.642a5 5 0 0 1-1.23.727 5.8 5.8 0 0 1-2.236.437c-1.139 0-2.329-.268-3.554-.79a18.3 18.3 0 0 1-3.587-2.064h-.001a29.5 29.5 0 0 1-3.366-2.873l-.005-.005a29 29 0 0 1-2.863-3.357l-.003-.003c-.846-1.177-1.536-2.365-2.041-3.555l-.001-.002C1.517 8.886 1.25 7.697 1.25 6.54c0-.768.136-1.513.413-2.207A5.35 5.35 0 0 1 2.99 2.4"
                      clipRule="evenodd"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
