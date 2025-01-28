"use client";

// Importing necessary libraries
import React, { useState } from "react";

// Importing necessary data
import TravelDestinations from "@/Data-Json/TravelDestinations";
import TravelPackages from "@/Data-Json/TravelPackages";

// Importing necessary components
import PackageModal from "@/Components/AdminPanel/PackageModal";
import DeleteConfirmModal from "@/Components/AdminPanel/DeleteConfirmModal";

// Importing the fonts
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

// Defining the structure of a travel package
interface PackageStructure {
  id: string;
  name: string;
  country: string;
  duration: number;
  highlights: string[];
  price: number;
  rating: number;
  image: string;
  batch: string | null;
}

const AdminPackagesPage = () => {
  // State to store the ID of the selected package
  const [selectedPackageId, setSelectedPackageId] = useState("");
  // State to store the filtered travel packages
  const [filteredTravelPackages, setFilteredTravelPackages] =
    useState<PackageStructure[]>(TravelPackages);
  // State to store the search query
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Function to apply filters based on search query and selected country
  const applyFilters = (query: string, selectedCountry: string) => {
    const lowerCaseQuery = query.toLowerCase();
    // Filter packages by selected country
    const filteredByCountry =
      selectedCountry === "All"
        ? TravelPackages
        : TravelPackages.filter(
            (pkg) => pkg.country.toLowerCase() === selectedCountry.toLowerCase()
          );
    // Further filter packages by search query
    const fullyFiltered = filteredByCountry.filter(
      (pkg) =>
        pkg.name.toLowerCase().includes(lowerCaseQuery) ||
        pkg.highlights.some((highlight) =>
          highlight.toLowerCase().includes(lowerCaseQuery)
        )
    );
    setFilteredTravelPackages(fullyFiltered);
  };

  return (
    <div className="p-8 bg-gray-100">
      <div className="card card-border bg-base-100 p-8">
        <div
          className={`${lexend.className} flex justify-between items-center`}
        >
          <h2 className="text-2xl">Current Packages</h2>
          <div className="flex items-center gap-4">
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                required
                placeholder="Search"
                className="search-input"
                value={searchQuery}
                onChange={(e) => {
                  const query = e.target.value;
                  setSearchQuery(query);
                  const selectedCountry =
                    (document.querySelector(".select") as HTMLSelectElement)
                      ?.value || "All";
                  applyFilters(query, selectedCountry);
                }}
              />
            </label>
            <select
              defaultValue="All"
              className="select"
              onChange={(e) => {
                const selectedCountry = e.target.value;
                applyFilters(searchQuery, selectedCountry);
              }}
            >
              <option value="All">All</option>
              {TravelDestinations.map((destination, index) => (
                <option key={index} value={destination.country}>
                  {destination.country}
                </option>
              ))}
            </select>
            <button
              className="btn btn-primary text-lg font-normal"
              onClick={() =>
                (
                  document.getElementById("add_new_modal") as HTMLFormElement
                ).showModal()
              }
            >
              Add New
            </button>
          </div>
          <dialog id="add_new_modal" className="modal overflow-y-scroll">
            <PackageModal type="add" />
          </dialog>
        </div>
        <div className="divider"></div>
        <div className="overflow-x-auto">
          <table className="table table-zebra table-md">
            {/* head */}
            <thead className={`${lexend.className} text-xl`}>
              <tr>
                <th className="font-normal">Image</th>
                <th className="font-normal">Name</th>
                <th className="font-normal">Country</th>
                <th className="font-normal">Highlights</th>
                <th className="font-normal">Duration</th>
                <th className="font-normal">Price</th>
                <th className="font-normal">Rating</th>
                <th className="font-normal">Batch</th>
              </tr>
            </thead>
            <tbody className={`${lexend.className} text-lg`}>
              {filteredTravelPackages.map((packageData, index) => (
                <tr key={index}>
                  <td>
                    <img
                      className="mask mask-square w-20 h-12.5 rounded-lg"
                      src={packageData.image}
                    />
                  </td>
                  <td>{packageData.name}</td>
                  <td>{packageData.country}</td>
                  <td className="text-gray-600 list-none">
                    {packageData.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </td>
                  <td>{packageData.duration} Days</td>
                  <td>${packageData.price.toLocaleString("en-US")}</td>
                  <td>{packageData.rating} / 5</td>
                  <td>
                    {packageData.batch == "popular" ? (
                      <div className="badge badge-primary">POPULAR</div>
                    ) : packageData.batch == "new" ? (
                      <div className="badge badge-secondary">NEW</div>
                    ) : (
                      <div></div>
                    )}
                  </td>
                  <th>
                    <button
                      className="btn btn-square p-2 btn-info"
                      onClick={() => {
                        setSelectedPackageId(packageData.id);
                        (
                          document.getElementById(
                            "edit_modal"
                          ) as HTMLFormElement
                        ).showModal();
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <g
                          id="SVGRepo_iconCarrier"
                          stroke="#000"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        >
                          <path d="m21.28 6.4-9.54 9.54c-.95.95-3.77 1.39-4.4.76s-.2-3.45.75-4.4l9.55-9.55a2.58 2.58 0 1 1 3.64 3.65"></path>
                          <path d="M11 4H6a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h11c2.21 0 3-1.8 3-4v-5"></path>
                        </g>
                      </svg>
                    </button>
                    <dialog id="edit_modal" className="modal">
                      <PackageModal type="edit" />
                    </dialog>
                  </th>
                  <th>
                    <button
                      className="btn btn-square p-2 btn-warning"
                      onClick={() => {
                        setSelectedPackageId(packageData.id);
                        (
                          document.getElementById(
                            "delete_confirm_modal"
                          ) as HTMLFormElement
                        ).showModal();
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <g
                          id="SVGRepo_iconCarrier"
                          stroke="#000"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        >
                          <path d="M3 6.99a26.38 26.38 0 0 1 18 0"></path>
                          <path d="M8.01 5.72a4 4 0 1 1 8 0M12 13v5M19 9.99l-.67 8a4.44 4.44 0 0 1-4.33 4h-4a4.44 4.44 0 0 1-4.33-4l-.67-8"></path>
                        </g>
                      </svg>
                    </button>
                    <dialog id="delete_confirm_modal" className="modal">
                      <DeleteConfirmModal
                        deleteData={
                          TravelPackages.find(
                            (packageDate) =>
                              packageDate.id === selectedPackageId
                          )?.name!
                        }
                      />
                    </dialog>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPackagesPage;
