// Importing necessary components
import NavbarComponent from "@/Components/NavbarComponent";
import FooterComponent from "@/Components/FooterComponent";
import DestinationComponent from "@/Components/DestinationComponent";

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

const DestinationsPage = () => {
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
              <h1 className={`${pattaya.className} mb-2 text-6xl`}>
                Destinations
              </h1>
              <p className={`${dosis.className} text-2xl`}>
                Home / Destinations
              </p>
            </div>
          </div>
        </div>
      </section>
      <h2 className={`${dosis.className} text-center text-4xl mt-10 mx-12`}>
        " Discover Your Next Adventure "
      </h2>
      <section className="px-8 lg:24 2xl:px-40 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {TravelDestinations.map((destination, index) => (
            <DestinationComponent key={index} destinationData={destination} />
          ))}
        </div>
      </section>
      <FooterComponent />
    </>
  );
};

export default DestinationsPage;
