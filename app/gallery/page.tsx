// Importing necessary components
import NavbarComponent from "@/Components/NavbarComponent";
import FooterComponent from "@/Components/FooterComponent";

// Importing the google fonts
import { Dosis, Pattaya } from "next/font/google";
const dosis = Dosis({
  subsets: ["latin"],
  display: "swap",
});
const pattaya = Pattaya({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const GalleryPage = () => {
  return (
    <>
      <section>
        <NavbarComponent />
        <div
          className="hero min-h-96"
          style={{
            backgroundImage: "url(/GalleryPage/hero-bg.jpg)",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-3xl">
              <h1 className={`${pattaya.className} mb-2 text-7xl`}>Gallery</h1>
              <p className={`${dosis.className} text-2xl`}>Home / Gallery</p>
            </div>
          </div>
        </div>
      </section>
      <h2 className={`${dosis.className} text-center text-4xl mt-10 mx-12`}>
        &ldquo; Find magic in every journey &rdquo;
      </h2>
      <section className="px-8 lg:px-24 2xl:px-40 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4 group">
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24,
          ].map((num, index) => (
            <img
              key={index}
              src={`https://picsum.photos/500/500?random=${num}`}
              alt={`Random${num}`}
              className="rounded-xl shadow-sm transform transition duration-300 ease-in-out hover:scale-110 cursor-pointer group-hover:scale-95"
            />
          ))}
        </div>
      </section>
      <FooterComponent />
    </>
  );
};

export default GalleryPage;
