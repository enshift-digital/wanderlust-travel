"use client";

// Importing necessary libraries
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Image from "next/image";

// Importing necessary components
import TestimonialComponent from "@/Components/TestimonialComponent";
import NavbarComponent from "@/Components/NavbarComponent";
import FooterComponent from "@/Components/FooterComponent";
import ProfileCard from "@/Components/ProfileCard";

// Importing necessary data
import UserReviews from "@/Data-Json/UserReviews";

// Importing swiperJS libraries
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

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

// Profile data
const Profiles = [
  {
    name: "Alexander Cruz",
    position: "Travel Specialist",
    image: "AboutPage/ProfileCards/profile1.jpg",
    description:
      "Just 5 minutes from Barceloneta Beach, this location offers seaside relaxation and quick access to Naviglio’s vibrant nightlife, restaurants, and cultural spots for a memorable Barcelona stay.",
  },
  {
    name: "Ethan Morales",
    position: "Travel Guide",
    image: "AboutPage/ProfileCards/profile2.jpg",
    description:
      "Enjoy Barcelona's highlights! A 2-minute walk to Barceloneta Beach, this spot connects you to public transport and the bustling Naviglio district for dining, nightlife, and cultural experiences.",
  },
  {
    name: "Sophia Bennett",
    position: "Guest Coordinator",
    image: "AboutPage/ProfileCards/profile3.jpg",
    description:
      "This charming location is steps from Barceloneta Beach and Naviglio’s nightlife hub. Ideal for exploring Barcelona’s vibrant culture, it’s perfect for both relaxation and excitement during your stay.",
  },
];

const AboutPage = () => {
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
              <h1 className={`${pattaya.className} mb-2 text-7xl`}>About Us</h1>
              <p className={`${dosis.className} text-2xl`}>Home / About Us</p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-10 lg:px-24 2xl:px-36 pt-24 lg:pt-36 flex flex-col gap-36">
        <section>
          <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
              <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                <Image
                  width={384}
                  height={384}
                  className="h-96 w-full rounded-xl object-cover"
                  src="/AboutPage/about1.jpg"
                  alt="about Us image"
                />
              </div>
              <Image
                width={384}
                height={384}
                className="h-96 w-full sm:ml-0 ml-auto rounded-xl object-cover"
                src="/AboutPage/about2.jpg"
                alt="about Us image"
              />
            </div>
            <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <p
                    className={`${lexend.className} text-xl uppercase text-center font-bold text-gray-400`}
                  >
                    About Us
                  </p>
                  <h2
                    className={`${pattaya.className} text-gray-900 text-5xl font-bold font-manrope leading-14 lg:text-start text-center`}
                  >
                    Making Your{" "}
                    <span className="text-(--color5)">Travel Dreams</span> Come
                    True
                  </h2>
                  <p
                    className={`${dosis.className} text-gray-500 text-xl font-normal leading-normal lg:text-start text-center`}
                  >
                    Wanderlust Horizons is dedicated to providing unforgettable
                    travel experiences. With over 10 years of expertise, we
                    specialize in personalized travel planning, offering a
                    diverse range of destinations and unique packages tailored
                    to your needs.
                  </p>
                </div>
                <div className="w-full lg:justify-start justify-center items-center sm:gap-12 gap-5 inline-flex">
                  <div className="flex-col justify-start items-start inline-flex">
                    <h3
                      className={`${lexend.className} text-gray-900 text-4xl font-bold leading-normal`}
                    >
                      33+
                    </h3>
                    <h6
                      className={`${lexend.className} text-gray-500 text-base font-normal leading-relaxed`}
                    >
                      Years of Experience
                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4
                      className={`${lexend.className} text-gray-900 text-4xl font-bold leading-normal`}
                    >
                      125+
                    </h4>
                    <h6
                      className={`${lexend.className} text-gray-500 text-base font-normal leading-relaxed`}
                    >
                      Successful Projects
                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4
                      className={`${lexend.className} text-gray-900 text-4xl font-bold leading-normal`}
                    >
                      52+
                    </h4>
                    <h6
                      className={`${lexend.className} text-gray-500 text-base font-normal leading-relaxed`}
                    >
                      Happy Clients
                    </h6>
                  </div>
                </div>
              </div>
              <Link
                href="/destinations"
                className={`${lexend.className} flex btn btn-lg items-center gap-4 cursor-pointer text-black bg-(--color1) hover:bg-transparent hover:border-2 border-(--color1) font-light rounded-lg px-8 py-4 text-center`}
              >
                View Destinations
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
        <section>
          <p
            className={`${lexend.className} text-xl uppercase text-center font-bold text-gray-400 mb-2`}
          >
            Tour Guides
          </p>
          <h2
            className={`${pattaya.className} text-4xl md:text-5xl text-center`}
          >
            Expert Tour Guides
          </h2>
          <div className="flex flex-col lg:flex-row gap-4 2xl:gap-0 justify-between mt-10">
            <ProfileCard profileData={Profiles[0]} />
            <ProfileCard profileData={Profiles[1]} />
            <ProfileCard profileData={Profiles[2]} />
          </div>
        </section>
        <section className="flex flex-col lg:flex-row w-full gap-4 2xl:gap-10">
          <div className="md:w-3/12">
            <p
              className={`${lexend.className} text-xl uppercase font-bold text-gray-400 mb-2`}
            >
              About Us
            </p>
            <h2 className={`${pattaya.className} text-6xl leading-14`}>
              What Our <span className="text-(--color5)">Clients</span> Say
            </h2>
            <div className="flex gap-6 mt-10">
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
          </div>
          <div className="md:w-9/12">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".review-swiper-button-next",
                prevEl: ".review-swiper-button-prev",
              }}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 2.4,
                },
                1536: {
                  slidesPerView: 2.6,
                },
              }}
              spaceBetween={0}
              className="reviewSwiper"
            >
              {UserReviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <TestimonialComponent review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </section>
      <section className="flex flex-col gap-6 w-full my-32">
        <Marquee direction="right">
          <Image
            width={150}
            height={150}
            src="/AboutPage/MarqueeLogos/airlines/airline1.png"
            alt="airline1"
            className="h-24 mx-12"
          />
          <Image
            width={150}
            height={150}
            src="/AboutPage/MarqueeLogos/airlines/airline2.png"
            alt="airline2"
            className="h-24 mx-12"
          />
          <Image
            width={150}
            height={150}
            src="/AboutPage/MarqueeLogos/airlines/airline3.png"
            alt="airline3"
            className="h-24 mx-12"
          />
          <Image
            width={150}
            height={150}
            src="/AboutPage/MarqueeLogos/airlines/airline4.png"
            alt="airline4"
            className="h-24 mx-12"
          />
          <Image
            width={150}
            height={150}
            src="/AboutPage/MarqueeLogos/airlines/airline5.png"
            alt="airline5"
            className="h-24 mx-12"
          />
          <Image
            width={150}
            height={150}
            src="/AboutPage/MarqueeLogos/airlines/airline6.png"
            alt="airline6"
            className="h-24 mx-12"
          />
        </Marquee>
        <Marquee>
          <Image
            width={150}
            height={150}
            src="/AboutPage/MarqueeLogos/hotels/hotel1.png"
            alt="hotel1"
            className="h-24 mx-12"
          />
          <Image
            width={150}
            height={150}
            src="/AboutPage/MarqueeLogos/hotels/hotel2.png"
            alt="hotel2"
            className="h-24 mx-12"
          />
          <Image
            width={150}
            height={150}
            src="/AboutPage/MarqueeLogos/hotels/hotel3.png"
            alt="hotel3"
            className="h-24 mx-12"
          />
          <Image
            width={150}
            height={150}
            src="/AboutPage/MarqueeLogos/hotels/hotel4.png"
            alt="hotel4"
            className="h-24 mx-12"
          />
          <Image
            width={150}
            height={150}
            src="/AboutPage/MarqueeLogos/hotels/hotel5.png"
            alt="hotel5"
            className="h-24 mx-12"
          />
          <Image
            width={150}
            height={150}
            src="/AboutPage/MarqueeLogos/hotels/hotel6.png"
            alt="hotel6"
            className="h-24 mx-12"
          />
        </Marquee>
      </section>
      <FooterComponent />
    </>
  );
};

export default AboutPage;
