"use client";

// Importing necessary libraries
import Link from "next/link";
import { Navigation } from "swiper/modules";

// Importing necessary components
import DestinationComponent from "@/Components/DestinationComponent";
import FooterComponent from "@/Components/FooterComponent";
import NavbarComponent from "@/Components/NavbarComponent";
import PackageComponent from "@/Components/PackageComponent";
import TestimonialComponent from "@/Components/TestimonialComponent";

// Importing necessary data
import TravelDestinations from "@/Data-Json/TravelDestinations";
import TravelPackages from "@/Data-Json/TravelPackages";
import UserReviews from "@/Data-Json/UserReviews";

// Importing swiperJS libraries
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

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

export default function Home() {
  return (
    <>
      <section>
        <NavbarComponent />
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(/HomePage/hero-bg.jpg)",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-3xl">
              <h1
                className={`${pattaya.className} text-4xl md:text-5xl lg:text-6xl leading-11 md:leading-14 lg:leading-16`}
              >
                Explore, Discover, and Experience the World with{" "}
                <span className="bg-(--color3) text-black px-4">
                  Wanderlust
                </span>{" "}
                Horizons
              </h1>
              <p className={`${dosis.className} mt-4 lg:mt-8 text-2xl`}>
                Your Gateway to Unforgettable Adventures
              </p>
              <Link
                href="/destinations"
                className={` ${lexend.className} btn btn-xl mt-16 bg-(--color5) text-white font-normal border-white shadow-none`}
              >
                <div className="flex items-center gap-4">
                  Plan Your Trip
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                    className="w-5 h-5 fill-white"
                  >
                    <path
                      id="SVGRepo_iconCarrier"
                      d="M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0"
                    ></path>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32 flex flex-col gap-36">
        <section className="px-8 lg:px-16 2xl:px-36">
          <p
            className={`${lexend.className} text-center text-xl uppercase font-bold text-gray-400 mb-2`}
          >
            Destinations
          </p>
          <h2
            className={`${pattaya.className} text-5xl text-center md:text-6xl`}
          >
            Why Travel with Us?
          </h2>
          <div className="flex flex-col lg:flex-row mt-12">
            <div className="flex flex-col items-center text-center px-10 py-4">
              <img
                src="/HomePage/feature-icons/hiking.png"
                alt="hiking"
                className="w-16 h-16"
              />
              <h3 className={`${lexend.className} text-xl mt-6`}>
                Tailored Adventures
              </h3>
              <p className={`${dosis.className} text-lg mt-1`}>
                Personalized itineraries designed to suit your interests and
                pace.
              </p>
            </div>
            <div className="divider divider-vertical lg:divider-horizontal"></div>
            <div className="flex flex-col items-center text-center px-10 py-4">
              <img
                src="/HomePage/feature-icons/customer-care.png"
                alt="customer-care"
                className="w-16 h-16"
              />
              <h3 className={`${lexend.className} text-xl mt-6`}>
                Always Here for You
              </h3>
              <p className={`${dosis.className} text-lg mt-1`}>
                24/7 customer support to ensure a worry-free experience.
              </p>
            </div>
            <div className="divider divider-vertical lg:divider-horizontal"></div>
            <div className="flex flex-col items-center text-center px-10 py-4">
              <img
                src="/HomePage/feature-icons/value.png"
                alt="value"
                className="w-16 h-16"
              />
              <h3 className={`${lexend.className} text-xl mt-6`}>
                Unbeatable Value
              </h3>
              <p className={`${dosis.className} text-lg mt-1`}>
                Best price guarantee without compromising on quality.
              </p>
            </div>
            <div className="divider divider-vertical lg:divider-horizontal"></div>
            <div className="flex flex-col items-center text-center px-10 py-4">
              <img
                src="/HomePage/feature-icons/mission.png"
                alt="mission"
                className="w-16 h-16"
              />
              <h3 className={`${lexend.className} text-xl mt-6`}>
                Travel with Purpose
              </h3>
              <p className={`${dosis.className} text-lg mt-1`}>
                Sustainable travel options for an eco-friendly journey.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div
            className="hero"
            style={{
              backgroundImage: "url(/HomePage/category-bg.jpg)",
            }}
          >
            <div className="hero-overlay bg-white/90"></div>
            <div className="px-8 lg:px-16 2xl:px-36 py-16 pt-4 grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="pr-10">
                <p
                  className={`${lexend.className} text-xl uppercase font-bold text-gray-400 mb-2`}
                >
                  Destinations
                </p>
                <h2 className={`${pattaya.className} text-5xl md:text-5xl`}>
                  Our Popular Destinations
                </h2>
                <p className={`${dosis.className} text-lg text-gray-500 mt-4`}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolore, voluptates!
                </p>
              </div>
              <div>
                <DestinationComponent destinationData={TravelDestinations[0]} />
              </div>
              <div>
                <DestinationComponent destinationData={TravelDestinations[1]} />
              </div>
              <div>
                <DestinationComponent destinationData={TravelDestinations[2]} />
              </div>
              <div>
                <DestinationComponent destinationData={TravelDestinations[3]} />
              </div>
              <div className="relative flex flex-col justify-center items-center h-full w-full gap-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 200 200"
                  className="absolute z-0 fill-(--color3)"
                >
                  <path d="M160.9 44.7c16.3 10.7 26.4 33 24.2 53-2.3 20-17.1 37.8-33.4 51.8-16.2 14.1-34 24.4-50.9 23.6-17-.7-33.1-12.7-48.3-26.7-15.2-14.1-29.4-30.2-29.2-46.2.2-15.9 14.8-31.7 30-42.3 15.2-10.7 31-16.2 50-19.5s41.3-4.3 57.6 6.3"></path>
                </svg>
                <h3
                  className={`${lexend.className} text-3xl font-light text-center mx-auto z-10`}
                >
                  Find All
                  <br />
                  Destinations
                </h3>
                <Link
                  href="/destinations"
                  className={`${lexend.className} flex gap-3 text-xl btn rounded-xl font-light bg-(--color1) hover:bg-(--color1)/40 hover:border-(--color1) hover:border-2 text-black shadow-none px-10 z-10`}
                >
                  Find All
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <g
                      id="SVGRepo_iconCarrier"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="m5.5 5 6.293 6.293a1 1 0 0 1 0 1.414L5.5 19M13.5 5l6.293 6.293a1 1 0 0 1 0 1.414L13.5 19"></path>
                    </g>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="px-8 lg:px-16 2xl:px-36">
          <div className="flex justify-between items-end">
            <div>
              <p
                className={`${lexend.className} text-base md:text-xl uppercase font-bold text-gray-400 mb-2`}
              >
                Packages
              </p>
              <h2 className={`${pattaya.className} text-4xl md:text-5xl`}>
                Our Most Popular Tours
              </h2>
            </div>
            <div className="flex gap-2 md:gap-6">
              <button className="package-swiper-button-prev cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="-0.5 0 25 25"
                  className="w-12 h-12"
                >
                  <g
                    id="SVGRepo_iconCarrier"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  >
                    <path d="M12 22.42c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10"></path>
                    <path d="m13.41 16.42-3.06-2.87a1.537 1.537 0 0 1 0-2.26l3.06-2.87"></path>
                  </g>
                </svg>
              </button>
              <button className="package-swiper-button-next cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="-0.5 0 25 25"
                  className="w-12 h-12"
                >
                  <g
                    id="SVGRepo_iconCarrier"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  >
                    <path d="M12 22.42c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10"></path>
                    <path d="m10.56 8.42 3.06 2.87a1.52 1.52 0 0 1 0 2.26l-3.06 2.87"></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-12">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".package-swiper-button-next",
                prevEl: ".package-swiper-button-prev",
              }}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 3.4,
                },
                1536: {
                  slidesPerView: 3.6,
                },
              }}
              spaceBetween={10}
              className="packageSwiper"
            >
              {TravelPackages.filter(
                (packageData) =>
                  packageData.batch?.toLowerCase() === "popular" ||
                  packageData.batch?.toLowerCase() === "new"
              ).map((packageData, index) => (
                <SwiperSlide className="p-1" key={index}>
                  <PackageComponent packageData={packageData} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-full flex justify-center">
            <Link
              href="destinations/all"
              className={`${lexend.className} btn flex gap-3 btn-xl w-full lg:w-max lg:px-40 rounded-xl bg-(--color1) hover:bg-(--color1)/40 hover:border-2 border-(--color1) font-light text-black mt-6`}
            >
              Find Tours
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <g
                  id="SVGRepo_iconCarrier"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="m5.5 5 6.293 6.293a1 1 0 0 1 0 1.414L5.5 19M13.5 5l6.293 6.293a1 1 0 0 1 0 1.414L13.5 19"></path>
                </g>
              </svg>
            </Link>
          </div>
        </section>
        <section>
          <div
            className="hero min-h-screen bg-fixed"
            style={{
              backgroundImage: "url(/HomePage/welcome-bg.jpg)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content flex flex-col lg:flex-row text-center bg-(--color2)/10 backdrop-blur-lg p-12 rounded-2xl">
              <div>
                <img src="/HomePage/flight.png" alt="" className="w-lg" />
              </div>
              <div className="divider divider-horizontal"></div>
              <div className="max-w-md">
                <h1
                  className={`${pattaya.className} mb-5 text-5xl lg:text-6xl font-bold`}
                >
                  Your journey begins here!
                </h1>
                <p className={`${dosis.className} text-xl mb-5 font-light`}>
                  We specialize in crafting unforgettable travel experiences,
                  whether you're dreaming of serene beaches, thrilling
                  adventures, or exploring hidden gems around the globe. Let us
                  take the stress out of planning and turn your travel dreams
                  into reality.
                </p>
                <p className={`${dosis.className} text-xl mb-5 font-light`}>
                  Where will your next adventure take you?
                  <br />
                  The horizon awaits!
                  <br />
                  Contact us today and let's plan your perfect getaway!
                </p>
                <Link
                  href="/contact-us"
                  className="flex gap-3 btn bg-(--color4) shadow-none w-fit px-10 mx-auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <g id="SVGRepo_iconCarrier">
                      <g id="style=fill">
                        <g id="call" fill="#000">
                          <path
                            id="vector"
                            d="M21.97 18.33c0 .36-.08.73-.25 1.09a4.2 4.2 0 0 1-.68 1.02 5 5 0 0 1-.592.56q-.488.39-1.048.62c-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a29 29 0 0 1-3.28-2.8 28.4 28.4 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41Q2 8.1 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13s.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78"
                          ></path>
                          <path
                            id="vector (Stroke)"
                            fillRule="evenodd"
                            d="M2.99 2.4c.752-.738 1.63-1.15 2.6-1.15.383 0 .773.081 1.13.251.368.171.703.433.964.808L10 5.574c.205.285.366.564.482.846.118.277.198.586.198.9 0 .387-.113.757-.313 1.09-.17.298-.403.586-.671.855l-.69.716q.012.025.027.065c.15.262.415.631.817 1.106.44.509.907 1.024 1.41 1.538.532.522 1.036.996 1.545 1.428.48.407.856.666 1.128.814l.059.026.69-.68a3.8 3.8 0 0 1 .88-.681 2.1 2.1 0 0 1 1.078-.307q.449.002.894.186c.283.116.56.275.838.464l.006.004 3.313 2.352c.355.247.632.559.806.952l.005.012.004.011a2.8 2.8 0 0 1 .214 1.059c0 .473-.105.952-.322 1.41a5 5 0 0 1-.802 1.204q-.321.354-.68.642a5 5 0 0 1-1.23.727 5.8 5.8 0 0 1-2.236.437c-1.139 0-2.329-.268-3.554-.79a18.3 18.3 0 0 1-3.587-2.064h-.001a29.5 29.5 0 0 1-3.366-2.873l-.005-.005a29 29 0 0 1-2.863-3.357l-.003-.003c-.846-1.177-1.536-2.365-2.041-3.555l-.001-.002C1.517 8.886 1.25 7.697 1.25 6.54c0-.768.136-1.513.413-2.207A5.35 5.35 0 0 1 2.99 2.4"
                            clipRule="evenodd"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="px-8 lg:px-16 2xl:px-36">
          <div className="flex justify-between items-end">
            <button className="review-swiper-button-prev cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="-0.5 0 25 25"
                className="w-12 h-12"
              >
                <g
                  id="SVGRepo_iconCarrier"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                >
                  <path d="M12 22.42c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10"></path>
                  <path d="m13.41 16.42-3.06-2.87a1.537 1.537 0 0 1 0-2.26l3.06-2.87"></path>
                </g>
              </svg>
            </button>
            <div>
              <p
                className={`${lexend.className} text-base md:text-xl uppercase text-center font-bold text-gray-400 mb-2`}
              >
                Reviews & Testimonials
              </p>
              <h2
                className={`${pattaya.className} text-4xl md:text-5xl text-center`}
              >
                Top Reviews for Wanderlust
              </h2>
            </div>
            <button className="review-swiper-button-next cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="-0.5 0 25 25"
                className="w-12 h-12"
              >
                <g
                  id="SVGRepo_iconCarrier"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                >
                  <path d="M12 22.42c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10"></path>
                  <path d="m10.56 8.42 3.06 2.87a1.52 1.52 0 0 1 0 2.26l-3.06 2.87"></path>
                </g>
              </svg>
            </button>
          </div>
          <div className="mt-12">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".review-swiper-button-next",
                prevEl: ".review-swiper-button-prev",
              }}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 3.6,
                },
              }}
              spaceBetween={0}
              className="mySwiper"
            >
              <SwiperSlide className="p-1">
                <TestimonialComponent review={UserReviews[0]} />
              </SwiperSlide>
              <SwiperSlide className="p-1">
                <TestimonialComponent review={UserReviews[1]} />
              </SwiperSlide>
              <SwiperSlide className="p-1">
                <TestimonialComponent review={UserReviews[2]} />
              </SwiperSlide>
              <SwiperSlide className="p-1">
                <TestimonialComponent review={UserReviews[3]} />
              </SwiperSlide>
              <SwiperSlide className="p-1">
                <TestimonialComponent review={UserReviews[4]} />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="w-full flex justify-center">
            <Link
              href="about-us"
              className={`${lexend.className} btn flex gap-3 btn-xl w-full lg:w-max lg:px-40 rounded-xl bg-(--color1) hover:bg-(--color1)/40 hover:border-2 border-(--color1) font-light text-black mt-6`}
            >
              All Reviews
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <g
                  id="SVGRepo_iconCarrier"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="m5.5 5 6.293 6.293a1 1 0 0 1 0 1.414L5.5 19M13.5 5l6.293 6.293a1 1 0 0 1 0 1.414L13.5 19"></path>
                </g>
              </svg>
            </Link>
          </div>
        </section>
      </section>
      <FooterComponent />
    </>
  );
}
