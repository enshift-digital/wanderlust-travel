"use client";

// Importing necessary libraries
import React, { useState } from "react";

// Importing necessary data
import BookingsData from "@/Data-Json/BookingsData";
import TravelPackages from "@/Data-Json/TravelPackages";

// Importing necessary components
import PackageComponent from "@/Components/PackageComponent";
import BookingModal from "@/Components/AdminPanel/BookingModal";
import DeleteConfirmModal from "@/Components/AdminPanel/DeleteConfirmModal";

// Importing the google fonts
import { Lexend, Pattaya } from "next/font/google";
const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
});
const pattaya = Pattaya({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const AdminBookingsPage = () => {
  // State to store the selected package ID
  const [selectedPackageId, setSelectedPackageId] = useState("pkg1");
  // State to store the selected booking ID
  const [selectedBookingId, setSelectedBookingId] = useState("");

  return (
    <div className="p-8 bg-gray-100">
      <div className="card card-border bg-base-100 p-8">
        <div
          className={`${lexend.className} flex justify-between items-center`}
        >
          <h2 className="text-2xl">Current Destinations</h2>
          <div className="flex items-center gap-4"></div>
        </div>
        <div className="divider"></div>
        <div className="overflow-x-auto">
          <table className="table table-zebra table-sm">
            {/* head */}
            <thead className={`${lexend.className} text-lg`}>
              <tr>
                <th className="font-normal">Name</th>
                <th className="font-normal">Email</th>
                <th className="font-normal">Package</th>
                <th className="font-normal">Phone Number</th>
                <th className="font-normal">Tickets</th>
                <th className="font-normal">Date</th>
                <th className="font-normal">Special Notes</th>
              </tr>
            </thead>
            <tbody className={`${lexend.className} text-lg`}>
              {BookingsData.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.name}</td>
                  <td>{booking.email}</td>
                  <td>
                    <button
                      onClick={() => {
                        setSelectedPackageId(booking.packageId);
                        (
                          document.getElementById(
                            "view_package_modal"
                          ) as HTMLFormElement
                        ).showModal();
                      }}
                      className="btn btn-accent btn-sm"
                    >
                      View
                    </button>
                    <dialog id="view_package_modal" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <h3 className="font-bold text-lg text-center">
                          Selected Package
                        </h3>
                        <div className="py-8 flex justify-center">
                          <PackageComponent
                            packageData={
                              TravelPackages.find(
                                (packageData) =>
                                  packageData.id === selectedPackageId
                              )!
                            }
                          />
                        </div>
                      </div>
                    </dialog>
                  </td>
                  <td>{booking.phoneNumber}</td>
                  <td>{booking.tickets}</td>
                  <td>{booking.date}</td>
                  <td>{booking.specialNotes}</td>
                  <th>
                    <button
                      onClick={() => {
                        setSelectedBookingId(booking.id);
                        (
                          document.getElementById(
                            "edit_booking_modal"
                          ) as HTMLFormElement
                        ).showModal();
                      }}
                      className="btn btn-square p-2 btn-info"
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
                    <dialog
                      id="edit_booking_modal"
                      className="modal overflow-y-scroll"
                    >
                      <BookingModal />
                    </dialog>
                  </th>
                  <th>
                    <button
                      onClick={() => {
                        setSelectedBookingId(booking.id);
                        (
                          document.getElementById(
                            "delete_confirm_modal"
                          ) as HTMLFormElement
                        ).showModal();
                      }}
                      className="btn btn-square p-2 btn-warning"
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
                          BookingsData.find(
                            (booking) => booking.id === selectedBookingId
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

export default AdminBookingsPage;
