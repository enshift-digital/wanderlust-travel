// Importing necessary libraries
import Link from "next/link";

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

// Defining the structure of a travel destination
interface DestinationStructure {
  id: string;
  country: string;
  description: string;
  image: string;
  packageIds: string[];
}

interface DestinationProps {
  destinationData: DestinationStructure;
}

const DestinationComponent = ({ destinationData }: DestinationProps) => {
  return (
    <div className="card bg-black image-full max-w-96 h-full shadow-sm group">
      <figure>
        <img
          src={destinationData.image}
          alt={destinationData.country}
          className="transition-transform opacity-40 duration-300 ease-in-out transform group-hover:scale-110"
        />
      </figure>
      <div className="card-body">
        <h2
          className={`${lexend.className} card-title justify-center text-3xl`}
        >
          {destinationData.country}
        </h2>
        <p className={`${dosis.className} text-center text-xl`}>
          {destinationData.description}
        </p>
        <div className="card-actions justify-center">
          <Link
            href={`/destinations/${destinationData.id}`}
            className={`${lexend.className} btn text-black bg-(--color4) border-none shadow-none`}
          >
            Packages
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              className="w-4 h-4 fill-black"
            >
              <path
                id="SVGRepo_iconCarrier"
                d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationComponent;
