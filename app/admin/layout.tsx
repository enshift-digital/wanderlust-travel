// Importing necessary libraries
import Link from "next/link";

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

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center">
          <div className="navbar bg-base-100 shadow-sm flex space-x-4 px-6">
            <div className="flex-1 flex">
              <label
                htmlFor="my-drawer-2"
                className="btn btn-primary drawer-button lg:hidden"
              >
                Open drawer
              </label>
              <h2 className={`${lexend.className} text-2xl`}>Admin Page</h2>
            </div>
            <div className="flex-none flex gap-4">
              <div className="btn btn-circle p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <g
                    id="SVGRepo_iconCarrier"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                  >
                    <path d="M18.75 9.71v-.705C18.75 5.136 15.726 2 12 2S5.25 5.136 5.25 9.005v.705a4.4 4.4 0 0 1-.692 2.375L3.45 13.81c-1.011 1.575-.239 3.716 1.52 4.214a25.8 25.8 0 0 0 14.06 0c1.759-.498 2.531-2.639 1.52-4.213l-1.108-1.725a4.4 4.4 0 0 1-.693-2.375Z"></path>
                    <path
                      strokeLinecap="round"
                      d="M7.5 19c.655 1.748 2.422 3 4.5 3s3.845-1.252 4.5-3"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="btn btn-circle avatar">
                <div className="rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">{children}</div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul
            className={`${lexend.className} menu menu-xl gap-2 bg-base-200 text-base-content min-h-full w-80 p-4`}
          >
            {/* Sidebar content here */}
            <li>
              <Link href="/admin" className={`${pattaya.className} text-4xl`}>
                Wanderlust
              </Link>
            </li>
            <li>
              <Link href="/admin/bookings">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <g
                    id="SVGRepo_iconCarrier"
                    stroke="#292D32"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                      d="M8 2v3M16 2v3"
                    ></path>
                    <path
                      strokeWidth="1.5"
                      d="M18.2 21.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4M22 22l-1-1"
                    ></path>
                    <path
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                      d="M3.5 9.09h17M13.37 22H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5V13"
                    ></path>
                    <path
                      strokeWidth="2"
                      d="M11.996 13.7h.008M8.294 13.7h.01M8.294 16.7h.01"
                    ></path>
                  </g>
                </svg>
                Bookings
              </Link>
            </li>
            <li>
              <Link href="/admin/destinations">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <g
                    id="SVGRepo_iconCarrier"
                    stroke="#292D32"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                  >
                    <path d="M5 10h2q3 0 3-3V5q0-3-3-3H5Q2 2 2 5v2q0 3 3 3M17 10h2q3 0 3-3V5q0-3-3-3h-2q-3 0-3 3v2q0 3 3 3M17 22h2q3 0 3-3v-2q0-3-3-3h-2q-3 0-3 3v2q0 3 3 3M5 22h2q3 0 3-3v-2q0-3-3-3H5q-3 0-3 3v2q0 3 3 3"></path>
                  </g>
                </svg>
                Destinations
              </Link>
            </li>
            <li>
              <Link href="/admin/packages">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <g
                    id="SVGRepo_iconCarrier"
                    stroke="#292D32"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  >
                    <path d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"></path>
                    <path d="M17 2.44v9.98c0 1.97-1.41 2.74-3.14 1.7l-1.32-.79c-.3-.18-.78-.18-1.08 0l-1.32.79C8.41 15.15 7 14.39 7 12.42V2.44"></path>
                    <path d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"></path>
                    <path d="M17 2.44v9.98c0 1.97-1.41 2.74-3.14 1.7l-1.32-.79c-.3-.18-.78-.18-1.08 0l-1.32.79C8.41 15.15 7 14.39 7 12.42V2.44"></path>
                  </g>
                </svg>
                Packages
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
