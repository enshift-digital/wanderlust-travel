"use client";

// Importing necessary libraries
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

// Importing necessary components
import NavbarComponent from "@/Components/NavbarComponent";
import PackageComponent from "@/Components/PackageComponent";
import FooterComponent from "@/Components/FooterComponent";

// Importing necessary data
import TravelPackages from "@/Data-Json/TravelPackages";
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

const PackagesPage = () => {
  // Initialize the router for navigation
  const router = useRouter();

  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Extract the destinationId from the URL parameters
  const { destinationId } = useParams<{ destinationId: string }>();

  // Find the current destination based on the destinationId
  const currentDestination =
    destinationId === "all"
      ? null
      : TravelDestinations.find(
          (destination) => destination.id === destinationId
        );

  // Filter travel packages based on the current destination
  const filteredTravelPackages =
    destinationId === "all"
      ? TravelPackages
      : TravelPackages.filter((packageData) =>
          currentDestination?.packageIds.includes(packageData.id)
        );

  // Further filter the travel packages based on the search query
  const searchFilteredTravelPackages = filteredTravelPackages.filter(
    (packageData) =>
      packageData.highlights.some((highlight) =>
        highlight.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <>
      <section>
        <NavbarComponent />
        <div
          className="hero min-h-96"
          style={{
            backgroundImage: "url(/HomePage/hero-bg.jpg)",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-3xl">
              <h1 className={`${pattaya.className} mb-2 text-7xl`}>Packages</h1>
              <p className={`${dosis.className} text-2xl capitalize`}>
                Home /{" "}
                {destinationId.toLowerCase() == "all"
                  ? "All"
                  : currentDestination?.country}{" "}
                / Packages
              </p>
            </div>
          </div>
        </div>
      </section>
      <h2 className={`${dosis.className} text-center text-4xl mt-10 mx-12`}>
        &ldquo; Tailored Packages for Every Traveler &rdquo;
      </h2>
      <section className="px-8 lg:px-24 py-16">
        <div className="flex justify-between items-center mb-12">
          <select
            defaultValue={
              destinationId == "all" ? "all" : currentDestination?.id
            }
            className="select lg:hidden"
            onChange={(event) => {
              const selectedValue = event.target.value;
              if (selectedValue === "all") {
                router.push("/destinations/all");
              } else {
                router.push(`/destinations/${selectedValue}`);
              }
            }}
          >
            <option value="all">All Countries</option>
            {TravelDestinations.map((destination, index) => (
              <option key={index} value={destination.id}>
                {destination.country}
              </option>
            ))}
          </select>
          <div
            role="tablist"
            className={`${lexend.className} tabs tabs-border hidden lg:block`}
          >
            <Link
              href={`/destinations/all`}
              role="tab"
              className={`tab text-lg ${
                "all" == destinationId.toLowerCase() ? "tab-active" : ""
              }`}
            >
              All
            </Link>
            {TravelDestinations.map((destination, index) => (
              <Link
                href={`/destinations/${destination.id}`}
                key={index}
                role="tab"
                className={`tab text-lg ${
                  destination.id == destinationId ? "tab-active" : ""
                }`}
              >
                {destination.country}
              </Link>
            ))}
          </div>
          <label className="input input-bordered flex items-center gap-2 w-48">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              onChange={(e) => {
                const query = e.target.value;
                setSearchQuery(query);
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="grid grid-cols-1 w-full lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {destinationId.toLowerCase() === "all"
            ? searchFilteredTravelPackages.map((packageData, index) => (
                <PackageComponent key={index} packageData={packageData} />
              ))
            : searchFilteredTravelPackages.map((packageData, index) => (
                <PackageComponent key={index} packageData={packageData} />
              ))}
        </div>
      </section>
      <FooterComponent />
    </>
  );
};

export default PackagesPage;
