"use client";

// Importing necessary libraries
import { useParams } from "next/navigation";

// Importing necessary components
import NavbarComponent from "@/Components/NavbarComponent";
import FooterComponent from "@/Components/FooterComponent";

// Importing necessary data
import TravelPackages from "@/Data-Json/TravelPackages";
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

const PackagePage = () => {
  // Extracting destinationId and packageId from URL parameters
  const { destinationId, packageId } = useParams<{
    destinationId: string;
    packageId: string;
  }>();

  // Finding the current destination based on the destinationId
  const currentDestination = TravelDestinations.find(
    (destination) => destination.id === destinationId
  );

  // Finding the current package based on the packageId
  const currentPackage = TravelPackages.find(
    (packageData) => packageData.id === packageId
  );

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
              <h1 className={`${pattaya.className} mb-2 text-7xl`}>Package</h1>
              <p className={`${dosis.className} text-2xl capitalize`}>
                Home / {currentDestination?.country} / {currentPackage?.name}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-8 lg:px-20 2xl:px-36 py-24 flex gap-16 flex-col-reverse lg:flex-row">
        <section className="basis-8/12">
          <h1 className={`${pattaya.className} text-5xl`}>
            {currentPackage?.name}
          </h1>
          <div className="mt-8">
            <h2 className={`${lexend.className} text-4xl`}>Overview</h2>
            <p className={`${dosis.className} text-xl mt-4`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br />
              <br />
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
          <div className="mt-8 grid lg:grid-cols-3 items-center bg-(--color3)/40 ring-1 ring-(--color3) py-2 rounded-lg divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-gray-300 shadow-lg">
            <div className="flex flex-col items-center py-4 lg:py-0">
              <h4 className={`${dosis.className} text-xl`}>Duration</h4>
              <p className={`${lexend.className} text-xl`}>
                {currentPackage?.duration} Days
              </p>
            </div>
            <div className="flex flex-col gap-1 items-center py-4 lg:py-0">
              <h4 className={`${dosis.className} text-xl`}>Rating</h4>
              <div className="rating rating-sm">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div
                    key={star}
                    className="mask mask-star-2 bg-orange-400"
                    aria-label={`${star} star`}
                    aria-current={
                      star === currentPackage?.rating ? "true" : "false"
                    }
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center py-4 lg:py-0">
              <h4 className={`${dosis.className} text-xl`}>Price</h4>
              <p className={`${lexend.className} text-xl`}>
                $ {currentPackage?.price.toLocaleString("en-US")} pp
              </p>
            </div>
          </div>
          <div className="mt-16">
            <h2 className={`${lexend.className} text-4xl`}>Timeline</h2>
            <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical mt-4">
              {[1, 2, 3].map((num, index) => (
                <li key={index}>
                  {num == 1 ? "" : <hr />}
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      className="h-10 w-10 fill-(--color5)"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-end mb-10 ml-6">
                    <time className={`${lexend.className} font-light`}>
                      8:00 am to 10:00 am
                    </time>
                    <div className={`${lexend.className} text-xl font-bold`}>
                      Day {num}: Lorem ipsum dolor sit.
                    </div>
                    <span
                      className={`${dosis.className} text-lg text-gray-600`}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iste, nemo, nulla voluptas dolores recusandae id error
                      deleniti illo tenetur unde alias corporis accusamus
                      suscipit voluptatem labore aliquam quisquam, nam eos
                      doloremque soluta. Optio quos impedit neque quae iusto
                      omnis qui nihil, vel eius aliquam alias ratione, unde
                      reprehenderit illum voluptatibus!
                    </span>
                    <ul
                      className={`${dosis.className} ml-6 mt-2 text-xl text-gray-800 list-[circle]`}
                    >
                      <li>Lorem, ipsum dolor.</li>
                      <li>Lorem, ipsum dolor.</li>
                      <li>Lorem, ipsum dolor.</li>
                    </ul>
                  </div>
                  {num == 3 ? "" : <hr />}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <h2 className={`${lexend.className} text-4xl`}>Related Gallery</h2>
            <div className="mt-4 grid grid-cols-3 w-full gap-1 lg:gap-4 group">
              <img
                src="https://picsum.photos/400/400?random=1"
                alt="random1"
                className="w-full h-full rounded-2xl shadow-sm transform transition duration-200 ease-in-out hover:blur-none cursor-pointer group-hover:blur-xs"
              />
              <img
                src="https://picsum.photos/400/400?random=2"
                alt="random2"
                className="w-full h-full rounded-2xl shadow-sm transform transition duration-200 ease-in-out hover:blur-none cursor-pointer group-hover:blur-xs"
              />
              <img
                src="https://picsum.photos/400/400?random=3"
                alt="random3"
                className="w-full h-full rounded-2xl shadow-sm transform transition duration-200 ease-in-out hover:blur-none cursor-pointer group-hover:blur-xs"
              />
              <img
                src="https://picsum.photos/800/400?random=4"
                alt="random4"
                className="col-span-2 w-full h-full rounded-2xl shadow-sm transform transition duration-200 ease-in-out hover:blur-none cursor-pointer group-hover:blur-xs"
              />
              <img
                src="https://picsum.photos/400/400?random=5"
                alt="random5"
                className="w-full h-full rounded-2xl shadow-sm transform transition duration-200 ease-in-out hover:blur-none cursor-pointer group-hover:blur-xs"
              />
            </div>
          </div>
        </section>
        <section className="basis-4/12">
          <div className="px-6 py-12 bg-(--color3)/60 rounded-xl">
            <h3 className={`${lexend.className} text-4xl`}>Book Your Tour</h3>
            <p className={`${dosis.className} text-xl text-gray-600`}>
              We&rsquo;ll contact you soon
            </p>
            <div className="flex flex-col gap-3 mt-8">
              <input
                type="text"
                id="name"
                className={`${lexend.className} shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5`}
                placeholder="Your name"
                required
              />
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="email-address-icon"
                  className={`${lexend.className} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full ps-10 p-2.5`}
                  placeholder="Your Email"
                ></input>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-gray-500"
                  >
                    <path
                      id="SVGRepo_iconCarrier"
                      fill="#000"
                      d="m16.1 13.359-.528-.532zm.456-.453.529.532zm2.417-.317-.358.66zm1.91 1.039-.358.659zm.539 3.255.529.532zm-1.42 1.412-.53-.531zm-1.326.67.07.747zm-9.86-4.238.528-.532zM4.002 5.746l-.749.042zm6.474 1.451.53.532zm.157-2.654.6-.449zM9.374 2.86l-.601.45zM6.26 2.575l.53.532zm-1.57 1.56-.528-.531zm7.372 7.362.529-.532zm4.567 2.394.455-.453-1.058-1.064-.455.453zm1.985-.643 1.91 1.039.716-1.318-1.91-1.038zm2.278 3.103-1.42 1.413 1.057 1.063 1.42-1.412zm-2.286 1.867c-1.45.136-5.201.015-9.263-4.023l-1.057 1.063c4.432 4.407 8.65 4.623 10.459 4.454zm-9.263-4.023c-3.871-3.85-4.512-7.087-4.592-8.492l-1.498.085c.1 1.768.895 5.356 5.033 9.47zm1.376-6.18.286-.286L9.95 6.666l-.287.285zm.515-3.921L9.974 2.41l-1.201.899 1.26 1.684zM5.733 2.043l-1.57 1.56 1.058 1.064 1.57-1.56zm4.458 5.44c-.53-.532-.53-.532-.53-.53h-.002l-.003.004a1 1 0 0 0-.127.157c-.054.08-.113.185-.163.318a2.1 2.1 0 0 0-.088 1.071c.134.865.73 2.008 2.256 3.526l1.058-1.064c-1.429-1.42-1.769-2.284-1.832-2.692-.03-.194.001-.29.01-.312q.009-.02 0-.006a.3.3 0 0 1-.03.039l-.01.01-.01.009zm1.343 4.546c1.527 1.518 2.676 2.11 3.542 2.242.443.068.8.014 1.071-.087a1.5 1.5 0 0 0 .42-.236l.05-.045.007-.006.003-.003.001-.002s.002-.001-.527-.533c-.53-.532-.528-.533-.528-.533l.002-.002.002-.002.006-.005.01-.01.038-.03q.014-.009-.007.002c-.025.009-.123.04-.32.01-.414-.064-1.284-.404-2.712-1.824zm-1.56-9.62C8.954 1.049 6.95.834 5.733 2.044L6.79 3.107c.532-.529 1.476-.475 1.983.202zM4.752 5.704c-.02-.346.139-.708.469-1.036L4.163 3.604c-.537.534-.96 1.29-.909 2.184zm14.72 12.06c-.274.274-.57.428-.865.455l.139 1.494c.735-.069 1.336-.44 1.784-.885zM11.006 7.73c.985-.979 1.058-2.527.229-3.635l-1.201.899c.403.539.343 1.246-.085 1.673zm9.52 6.558c.817.444.944 1.49.367 2.064l1.058 1.064c1.34-1.333.927-3.557-.71-4.446zm-3.441-.849c.384-.382 1.002-.476 1.53-.19l.716-1.317c-1.084-.59-2.428-.427-3.304.443z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="email-address-icon"
                  className={`${lexend.className} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5`}
                  placeholder="Your Phone"
                ></input>
              </div>
              <input
                type="number"
                id="tickets"
                className={`${lexend.className} shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5`}
                placeholder="Tickets"
                required
              />
              <input
                type="date"
                className={`${lexend.className} input shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full`}
              />
              <textarea
                id="message"
                rows={6}
                className={`${lexend.className} block resize-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  `}
                placeholder="Special Notes"
              ></textarea>
              <button
                type="button"
                className={`${lexend.className} cursor-pointer w-full text-white bg-(--color1) focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center`}
              >
                Send Message
              </button>
            </div>
          </div>
        </section>
      </section>
      <FooterComponent />
    </>
  );
};

export default PackagePage;
