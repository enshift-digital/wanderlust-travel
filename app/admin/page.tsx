// Importing necessary libraries
import React from "react";

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

const AdminHomePage = () => {
  return (
    <section className="flex justify-center p-24">
      <div className={`${lexend.className} p-12 ring-2 rounded-2xl w-96`}>
        <h2 className={`${dosis.className} text-center text-4xl`}>Sign In</h2>
        <fieldset className="fieldset mt-6">
          <legend className="fieldset-legend text-lg">Username</legend>
          <input type="text" className="input" placeholder="admin" />
        </fieldset>
        <fieldset className="fieldset mt-2">
          <legend className="fieldset-legend text-lg">Password</legend>
          <input type="password" className="input" placeholder="*******" />
        </fieldset>
        <button className="btn btn-soft w-full mt-4">Sign In</button>
      </div>
    </section>
  );
};

export default AdminHomePage;
