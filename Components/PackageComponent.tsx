// Importing necessary libraries
import React from "react";
import Link from "next/link";

// Importing necessary components
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

interface PackageProps {
  packageData: PackageStructure;
}

const PackageComponent = ({ packageData }: PackageProps) => {
  return (
    <div className="indicator card bg-base-100 max-w-72 md:max-w-80 shadow-lg relative ring-1 rounded-3xl group/card">
      <figure className="relative">
        <img
          src={packageData?.image}
          alt="Maldives"
          className="w-full group-hover/card:scale-110 duration-300"
        />
        <div className="absolute inset-0 px-8 py-4 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-between">
          <div className="w-full flex justify-end">
            {packageData?.batch?.toLowerCase() == "popular" ? (
              <div className={`${lexend.className} badge badge-secondary`}>
                POPULAR
              </div>
            ) : packageData?.batch?.toLowerCase() == "new" ? (
              <div className={`${lexend.className} badge badge-warning`}>
                NEW
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="w-full flex justify-between items-center">
            <span
              className={`${dosis.className} flex items-center gap-2 text-white text-lg`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-white"
              >
                <path
                  id="SVGRepo_iconCarrier"
                  fillRule="evenodd"
                  d="M4.25 8.515C4.25 4.453 7.771 1.25 12 1.25s7.75 3.203 7.75 7.265c0 3.81-2.363 8.285-6.175 9.914-1.001.428-2.149.428-3.15 0C6.613 16.8 4.25 12.326 4.25 8.515M12 2.75c-3.503 0-6.25 2.63-6.25 5.765 0 3.328 2.105 7.185 5.265 8.535a2.53 2.53 0 0 0 1.97 0c3.16-1.35 5.265-5.207 5.265-8.535 0-3.134-2.747-5.765-6.25-5.765m0 5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M9.25 9a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m-5.655 5.997a.75.75 0 0 1-.052 1.059c-.568.514-.793 1.006-.793 1.444 0 .764.724 1.705 2.487 2.498C6.929 20.76 9.32 21.25 12 21.25s5.071-.49 6.763-1.252c1.763-.793 2.487-1.734 2.487-2.498 0-.438-.225-.93-.793-1.444a.75.75 0 0 1 1.007-1.112c.763.691 1.286 1.557 1.286 2.556 0 1.722-1.515 3.03-3.371 3.866-1.927.867-4.537 1.384-7.379 1.384s-5.452-.517-7.379-1.384C2.765 20.53 1.25 19.222 1.25 17.5c0-.999.523-1.865 1.286-2.556a.75.75 0 0 1 1.06.053"
                  clipRule="evenodd"
                ></path>
              </svg>
              {packageData?.country}
            </span>
            <div className="rating rating-sm">
              {[1, 2, 3, 4, 5].map((star) => (
                <div
                  key={star}
                  className="mask mask-star-2 bg-orange-400"
                  aria-label={`${star} star`}
                  aria-current={star === packageData?.rating ? "true" : "false"}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </figure>
      <div className="card-body border-t-2 border-gray-300">
        <h2 className={`${dosis.className} card-title text-2xl leading-6`}>
          {packageData?.name}
        </h2>
        <ul
          className={`${dosis.className} text-lg space-y-1 text-left text-gray-500`}
        >
          <h2
            className={`${lexend.className} mb-2 text-lg font-light text-gray-900`}
          >
            Highlights:
          </h2>
          {packageData?.highlights.map((highlight, index) => (
            <li
              key={index}
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                id="Layer_1"
                width="200"
                height="200"
                fill="#000"
                version="1.1"
                viewBox="0 0 511.999 511.999"
                className="w-5 h-5"
              >
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#1FCFC1"
                    d="m494.328 98.756-33.279-33.279c-9.99-9.99-26.185-9.99-36.175 0L172.007 318.344c-3.877 3.877-10.163 3.877-14.04 0L87.11 247.488c-9.99-9.99-26.185-9.99-36.175 0l-33.26 33.26c-9.99 9.99-9.99 26.185 0 36.175l129.581 129.581c9.997 9.997 26.209 9.989 36.194-.019l310.896-311.572c9.972-9.994 9.963-26.175-.018-36.157"
                  ></path>
                  <g fill="#4D4D4D">
                    <path d="M165.343 464.196c-9.557 0-18.54-3.721-25.3-10.479L10.462 324.135c-13.949-13.95-13.949-36.649 0-50.6l33.26-33.26c13.951-13.95 36.649-13.95 50.6 0l70.664 70.664L417.661 58.265c13.95-13.948 36.649-13.949 50.6 0l33.279 33.28c13.935 13.936 13.947 36.623.027 50.573L190.67 453.689c-6.755 6.771-15.744 10.502-25.308 10.507zM69.022 250.203a15.33 15.33 0 0 0-10.875 4.498l-33.259 33.26c-5.997 5.997-5.997 15.754 0 21.75l129.581 129.581a15.28 15.28 0 0 0 10.874 4.505h.009a15.28 15.28 0 0 0 10.879-4.517l310.896-311.572c5.983-5.997 5.978-15.748-.012-21.738l-33.279-33.281c-5.996-5.997-15.754-5.996-21.75 0L179.219 325.557c-7.848 7.848-20.617 7.847-28.466 0l-70.856-70.856a15.33 15.33 0 0 0-10.875-4.498"></path>
                    <path d="M277.27 318.332c-2.611 0-5.221-.997-7.213-2.989-3.983-3.983-3.982-10.442.001-14.425l3.192-3.192c3.983-3.982 10.443-3.982 14.425.001s3.982 10.442-.001 14.425l-3.192 3.192a10.16 10.16 0 0 1-7.212 2.988M168.75 426.851c-2.61 0-5.221-.996-7.212-2.988-3.983-3.983-3.983-10.442 0-14.426l81.922-81.922c3.983-3.983 10.442-3.983 14.426 0s3.983 10.442 0 14.426l-81.922 81.922a10.17 10.17 0 0 1-7.214 2.988"></path>
                  </g>
                </g>
              </svg>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <div className="divider my-1"></div>
        <div className="flex items-center justify-between">
          <div className={`${dosis.className} flex flex-col`}>
            <span className={`${dosis.className} text-xl`}>
              ${" "}
              <span className="text-2xl">
                {packageData?.price.toLocaleString("en-US")}
              </span>{" "}
              pp
            </span>
            <span className={`${lexend.className} text-sm text-gray-400`}>
              /{packageData?.duration} Days
            </span>
          </div>
          <Link
            href={`/destinations/${
              TravelDestinations.find(
                (destination) =>
                  destination.country.toLowerCase() ==
                  packageData.country.toLowerCase()
              )?.id
            }/${packageData.id}`}
            className="btn text-black bg-(--color4) border-none shadow-none group/button"
          >
            <div className={`${lexend.className} flex items-center px-2 gap-3`}>
              Explore
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-black"
              >
                <path
                  id="SVGRepo_iconCarrier"
                  fillRule="evenodd"
                  d="M12.293 4.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414L17.586 13H4a1 1 0 1 1 0-2h13.586l-5.293-5.293a1 1 0 0 1 0-1.414"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackageComponent;
