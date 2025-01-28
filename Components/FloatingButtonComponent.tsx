"use client";

// Importing necessary libraries
import React, { useState, useEffect } from "react";

const FloatingButtonComponent = () => {
  // State to track if the user has scrolled past 500px
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update state based on scroll position
      setIsScrolled(window.scrollY > 500);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Clean up event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`${
        isScrolled ? "opacity-100" : "opacity-0"
      } fixed btn btn-circle btn-xl duration-100 transition-opacity border-none shadow-none bg-(--color1) btn-info right-5 lg:right-10 bottom-5 lg:bottom-10`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="w-8 h-8"
      >
        <path
          id="SVGRepo_iconCarrier"
          stroke="#363853"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="m7 14.5 5-5 5 5"
        ></path>
      </svg>
    </button>
  );
};

export default FloatingButtonComponent;
