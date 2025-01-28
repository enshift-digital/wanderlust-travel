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

const FooterComponent = () => {
  return (
    <footer className="bg-(--color4)/20 rounded-lg">
      <div className="lg:px-24 2xl:px-32 mx-auto py-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0 lg:items-end justify-between">
          <div>
            <p className={`${dosis.className} text-xl`}>
              Subscribe to Our Newsletter
            </p>
            <div className={`${lexend.className} join mt-2`}>
              <input
                className="input input-bordered join-item rounded-l-lg border-2"
                placeholder="info@enshift.online"
              />
              <button className="btn join-item rounded-r-lg border-2">
                Subscribe
              </button>
            </div>
          </div>
          <ul
            className={`${lexend.className} text-lg flex flex-col lg:flex-row gap-4 items-center font-light text-gray-500`}
          >
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/destinations" className="hover:underline">
                Destinations
              </Link>
            </li>
            <li>
              <Link href="/destinations/all" className="hover:underline">
                Packages
              </Link>
            </li>
            <li>
              <Link href="/about-s" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:underline">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="divider"></div>
        <div className="px-6">
          <p className={`${lexend.className} text-gray-500 text-center`}>
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:underline">
              Wanderlust Travels
            </Link>
            . All Rights Reserved. | Website by{" "}
            <Link
              href="https://enshift.online/"
              className="hover:underline text-black"
            >
              Enshift Digital
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
