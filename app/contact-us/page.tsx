// Importing necessary libraries
import Link from "next/link";
import Image from "next/image";

// Importing necessary components
import NavbarComponent from "@/Components/NavbarComponent";
import FooterComponent from "@/Components/FooterComponent";

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

const ContactPage = () => {
  // FAQ data
  const faqData = [
    {
      id: 1,
      question: "What destinations do you offer?",
      answer:
        "We offer a wide range of travel packages to destinations across the globe. Whether you're looking to explore exotic beaches, vibrant cities, or scenic mountains, we have something for everyone. Contact us for more details on available destinations!",
      defaultChecked: true,
    },
    {
      id: 2,
      question: "How can I book a trip with your agency?",
      answer:
        "You can easily book your trip through our website by browsing our travel packages and selecting the one that suits you best. Alternatively, you can call us or send an email to our customer support team, who will assist you in the booking process.",
    },
    {
      id: 3,
      question: "What is included in the travel packages?",
      answer:
        "Our travel packages typically include accommodation, transportation, guided tours, and select meals. The specifics of what’s included may vary based on the package. Check the details on each trip listing or get in touch with us for more information.",
    },
    {
      id: 4,
      question: "Do you offer custom travel itineraries?",
      answer:
        "Yes! We specialize in creating tailor-made itineraries to suit your travel preferences, budget, and schedule. Whether you're planning a solo adventure, a romantic getaway, or a family vacation, we can design a personalized plan for you.",
    },
    {
      id: 5,
      question: "What happens if I need to cancel or modify my booking?",
      answer:
        "If you need to cancel or modify your booking, please contact us as soon as possible. Cancellation policies and fees vary depending on the destination and package selected. We strive to accommodate changes whenever possible, and our team will guide you through the process.",
    },
  ];

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
              <h1 className={`${pattaya.className} mb-2 text-7xl`}>
                Contact Us
              </h1>
              <p className={`${dosis.className} text-2xl`}>Home / Contact Us</p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-10 lg:px-24 2xl:px-36 py-24 lg:py-36 flex flex-col gap-32">
        <section className="flex flex-col lg:flex-row gap-16">
          <div className="basis-4/6">
            <p
              className={`${lexend.className} uppercase text-xl font-bold text-gray-400 mb-2`}
            >
              Contact Us
            </p>
            <h2 className={`${pattaya.className} text-5xl`}>
              Feel Free to Contact with us
            </h2>
            <p
              className={`${dosis.className} text-xl text-gray-400 pr-8 lg:pr-24 mt-4`}
            >
              Get in touch with us today! We&rsquo;re here to answer your
              questions, provide guidance, and help you achieve your goals.
              Whether you need support, advice, or services tailored to your
              needs, we&rsquo;re just a message away. Your success is our
              priority—reach out anytime!
            </p>

            <div className="flex flex-col lg:flex-row gap-10 mt-8">
              <div className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon w-12 lg:w-24 h-12 lg:h-24"
                  viewBox="0 0 1024 1024"
                >
                  <g id="SVGRepo_iconCarrier">
                    <path d="M779.588 95.397H287.774c-48.347 0-87.688 39.329-87.688 87.676v3.19c-50.627 10.808-80.138 32.525-80.138 59.872 0 29.627 34.721 49.516 80.138 59.481v8.855c-50.627 10.875-80.138 32.558-80.138 59.904 0 29.625 34.721 49.484 80.138 59.478v8.858c-50.627 10.871-80.138 32.587-80.138 59.901 0 29.627 34.721 49.486 80.138 59.45v8.888c-50.627 10.872-80.138 32.555-80.138 59.902 0 29.627 34.721 49.486 80.138 59.447v8.888c-50.627 10.874-80.138 32.591-80.138 59.904 0 29.627 34.721 49.487 80.138 59.448v22.627c0 48.347 39.341 87.675 87.688 87.675h491.814c65.632 0 119.026-53.393 119.026-119.026V214.423c0-65.632-53.394-119.026-119.026-119.026M200.086 784.648c-30.702-7.844-46.8-19.469-46.8-25.557 0-5.6 14.615-17.42 46.8-25.523zm0-128.24c-30.702-7.844-46.8-19.436-46.8-25.557 0-5.598 14.615-17.386 46.8-25.524zm0-128.237c-30.702-7.848-46.8-19.469-46.8-25.56 0-5.598 14.615-17.415 46.8-25.523zm0-128.21c-30.702-7.878-46.8-19.467-46.8-25.588 0-4.884 14.078-17.125 46.8-25.46zm0-128.237c-30.702-7.848-46.8-19.503-46.8-25.59 0-4.918 14.078-17.093 46.8-25.46z"></path>
                    <path
                      fill="#F4CE73"
                      d="M287.774 878.834c-20.77 0-37.682-16.896-37.682-37.67V825.28c6.835.39 13.705.78 20.59.78 4.573 5.048 11.02 8.335 18.362 8.335 13.805 0 25.003-11.198 25.003-25.003s-11.198-25.004-25.003-25.004c-7.341 0-13.789 3.287-18.346 8.335-7.291 0-13.965-.39-20.606-.78v-94.936c6.835.39 13.705.813 20.59.813 4.573 5.048 11.02 8.334 18.362 8.334 13.805 0 25.003-11.198 25.003-25.003 0-13.802-11.198-25.003-25.003-25.003-7.341 0-13.789 3.29-18.346 8.334-7.291-.034-13.965-.424-20.606-.813V568.8c6.835.39 13.705.78 20.59.78 4.573 5.048 11.02 8.335 18.362 8.335 13.805 0 25.003-11.199 25.003-25.004 0-13.802-11.198-25.003-25.003-25.003-7.341 0-13.789 3.29-18.346 8.335-7.291 0-13.965-.39-20.606-.78v-94.87c6.835.39 13.705.78 20.59.78 4.573 5.048 11.02 8.335 18.362 8.335 13.805 0 25.003-11.198 25.003-25.003 0-13.802-11.198-25.004-25.003-25.004-7.341 0-13.789 3.291-18.346 8.335-7.291 0-13.965-.39-20.606-.78v-94.936c6.835.393 13.705.817 20.59.817 4.573 5.044 11.02 8.334 18.362 8.334 13.805 0 25.003-11.201 25.003-25.003 0-13.805-11.198-25.003-25.003-25.003-7.341 0-13.789 3.286-18.346 8.334-7.291-.034-13.965-.393-20.606-.817v-95.91c0-20.772 16.913-37.668 37.682-37.668h435.23c24.94 12.858 42.26 38.578 42.26 68.533v595.388c0 30.67-18.103 57.008-44.05 69.51z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M798.6 401.721h50.007v93.503h-50.006zm0 126.84h50.007v93.503h-50.006zm0-253.68h50.007v93.503h-50.006zm0 380.52h50.007v93.5h-50.006z"
                    ></path>
                    <path
                      fill="#F4CE73"
                      d="M848.607 214.423v27.12h-50.006v-27.606c0-25.98-9.378-49.617-24.45-68.533h5.437c38.025 0 69.02 30.961 69.02 69.02m-69.019 664.41h-6.25c15.528-19.046 25.263-43.072 25.263-69.509v-27.087h50.006v27.577c0 38.06-30.994 69.02-69.019 69.02"
                    ></path>
                    <path
                      fill="#79CCBF"
                      d="M408.316 285.332c6.965-3.224 42.809-15.205 42.809-15.205 9.491-3.124 19.7 2.02 22.806 11.49l35.291 107.472c3.094 9.475-2.033 19.662-11.525 22.756l-32.67 10.744c-.03.03-.064.03-.08.064-3.858 1.237-7.748 1.92-11.622 2.54 0 .063-14.148.78-5.78 13.672 4.38 6.774 34.33 48.053 51.407 77.647 17.092 29.627 41.085 80.417 43.982 86.309 2.9 5.894 9.1 9.507 13.725 1.433.226-.424 7.928-10.384 12.549-14.522l.066-.03 25.654-22.953c7.424-6.64 18.819-5.99 25.46 1.43l75.433 84.292c6.674 7.421 6.02 18.816-1.4 25.49l-25.72 22.986s-8.109 6.477-12.468 8.984c-65.535 44.213-163.012-32.913-230.874-150.443-49.667-86.049-73.903-172.257-55.607-227.503.13-.423 9.067-33.01 38.564-46.653"
                    ></path>
                    <path d="M614.754 739.2c-64.688 0-142.792-65.633-203.833-171.377-55.247-95.716-76.02-183.617-56.99-241.078 1.01-3.583 12.518-40.405 47.386-56.55 7.424-3.45 38.402-13.805 44.52-15.889 18.248-6.054 38.091 4.298 43.935 22.14l35.292 107.434c2.88 8.858 2.166 18.233-2 26.5-4.202 8.271-11.366 14.456-20.203 17.322l-32.621 10.742c-.767.23-1.513.457-2.264.687.067.096.13.16.197.29 11.134 15.922 31.854 45.58 45.218 68.759 12.993 22.53 29.904 57.04 38.726 75.273 2.15-2.41 4.284-4.624 5.957-6.12l25.72-22.987c13.738-12.305 36.788-11.005 49.03 2.734l75.403 84.257c12.761 14.225 11.554 36.202-2.67 49.03l-25.72 22.983c-.717.62-10.225 8.108-15.303 11.039-14.196 9.635-31.288 14.81-49.78 14.81m-156.66-452.404c-16.196 3.974-38.546 11.722-42.78 13.675-21.812 10.092-29.217 35.032-29.526 36.072-16.019 48.443 4.247 128.403 54.01 214.611 53.44 92.526 123.745 154.707 174.956 154.707 11.885 0 22.433-3.19 32.135-9.764 4.687-2.704 11.395-8.175 11.395-8.175l25.003-22.366-75.337-86.271-27.54 22.853c-2.834 2.473-8.728 9.797-10.095 11.688-8.267 14.682-33.384 14.552-42.338-3.647l-2.214-4.59c-6.59-13.74-26.697-55.541-41.248-80.741-12.648-21.943-32.834-50.85-43.676-66.35-3.597-5.143-6.2-8.886-7.291-10.58-7.308-11.232-5.794-20.12-3.24-25.558 3.516-7.488 11.004-12.435 20.592-13.672 2.98-.457 5.99-.977 8.955-1.89l32.637-10.808z"></path>
                  </g>
                </svg>
                <div className="flex flex-col">
                  <h3
                    className={`${lexend.className} text-2xl font-light text-gray-600 mb-2`}
                  >
                    Phone Number
                  </h3>
                  <Link
                    href="#"
                    className={`${dosis.className} text-xl hover:text-blue-800`}
                  >
                    +45 111 222 3333
                  </Link>
                  <Link
                    href="#"
                    className={`${dosis.className} text-xl hover:text-blue-800`}
                  >
                    +45 111 222 4444
                  </Link>
                </div>
              </div>
              <div className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon w-12 lg:w-24 h-12 lg:h-24"
                  viewBox="0 0 1024 1024"
                >
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill="#27323A"
                      d="M913.872 369.867c-6.433-6.433-14.864-9.649-23.29-9.649H660.506l51.343-67.685a24.71 24.71 0 0 0 2.444-25.928c-4.18-8.43-12.738-13.706-22.133-13.706h-72.317V120.105c0-13.641-11.065-24.707-24.707-24.707H429.657c-13.641 0-24.706 11.066-24.706 24.707v132.794h-73.605a24.66 24.66 0 0 0-22.134 13.706 24.72 24.72 0 0 0 2.447 25.928l51.278 67.685H132.925c-8.43 0-16.856 3.215-23.294 9.65-6.433 6.432-9.649 14.863-9.649 23.292v498.113c0 8.426 3.215 16.856 9.65 23.289a32.85 32.85 0 0 0 23.293 9.652h757.657c8.426 0 16.856-3.218 23.289-9.652a32.84 32.84 0 0 0 9.652-23.29V393.16a32.84 32.84 0 0 0-9.651-23.293"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M429.657 302.31c13.641 0 24.706-11.065 24.706-24.706V144.81H570.43v132.794c0 13.641 11.068 24.706 24.706 24.706h47.292c-36.351 47.806-105.259 138.717-130.673 172.238-25.415-33.52-94.388-124.367-130.672-172.238z"
                    ></path>
                    <path
                      fill="#79CCBF"
                      d="m400.448 409.63 91.617 120.699c4.698 6.177 11.968 9.78 19.69 9.78s15.053-3.604 19.686-9.78l91.554-120.698H832.29l-322.08 277.622-319.445-277.622z"
                    ></path>
                    <path
                      fill="#F4CE73"
                      d="m149.396 439.097 170.048 147.786-170.048 236.06zm23.546 435.706L356.89 619.439 477.78 724.506c9.395 8.235 21.425 12.739 33.972 12.739 12.481 0 24.578-4.504 33.907-12.676l120.959-105.13 183.943 255.364zm701.17-51.86-170.049-236.06 170.048-147.786z"
                    ></path>
                  </g>
                </svg>
                <div className="flex flex-col">
                  <h3
                    className={`${lexend.className} text-2xl font-light text-gray-600 mb-2`}
                  >
                    Email Address
                  </h3>
                  <Link
                    href="#"
                    className={`${dosis.className} text-xl hover:text-blue-800`}
                  >
                    info@wanderlust.com
                  </Link>
                  <Link
                    href="#"
                    className={`${dosis.className} text-xl hover:text-blue-800`}
                  >
                    support@wanderlust.com
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-10">
              <h3
                className={`${lexend.className} text-2xl font-light text-gray-600 mb-4`}
              >
                Social Media
              </h3>
              <div className="flex gap-6">
                <Link
                  href="#"
                  className="tooltip w-10 h-10"
                  data-tip="Facebook"
                >
                  <Image
                    width={40}
                    height={40}
                    src="/ContactPage/social-icons/facebook.png"
                    alt="facebook"
                  />
                </Link>
                <Link
                  href="#"
                  className="tooltip w-10 h-10"
                  data-tip="Instagram"
                >
                  <Image
                    width={40}
                    height={40}
                    src="/ContactPage/social-icons/instagram.png"
                    alt="instagram"
                  />
                </Link>
                <Link href="#" className="tooltip w-10 h-10" data-tip="Tiktok">
                  <Image
                    width={40}
                    height={40}
                    src="/ContactPage/social-icons/tiktok.png"
                    alt="tiktok"
                  />
                </Link>
                <Link href="#" className="tooltip w-10 h-10" data-tip="Youtube">
                  <Image
                    width={40}
                    height={40}
                    src="/ContactPage/social-icons/youtube.png"
                    alt="youtube"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="basis-2/6">
            <div className="px-4 py-6 bg-(--color3)/40 border-(--color3) border-2 rounded-2xl">
              <h3 className={`${lexend.className} text-4xl`}>Get In Touch</h3>
              <p className={`${dosis.className} text-xl text-gray-600`}>
                You can reach us anytime
              </p>
              <div className="flex flex-col gap-3 mt-8">
                <div className="flex gap-3">
                  <input
                    type="text"
                    id="fname"
                    className={`${lexend.className} shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                    placeholder="First name"
                    required
                  />
                  <input
                    type="text"
                    id="lname"
                    className={`${lexend.className} shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
                    placeholder="Last name"
                    required
                  />
                </div>
                <div className="flex gap-3">
                  <div className="basis-1/2 relative">
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
                      className={`${lexend.className} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5`}
                      placeholder="Your Email"
                    ></input>
                  </div>
                  <div className="basis-1/2 relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                      className={`${lexend.className} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5`}
                      placeholder="Your Phone"
                    ></input>
                  </div>
                </div>
                <textarea
                  id="message"
                  rows={6}
                  className={`${lexend.className} block resize-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="Your Message"
                ></textarea>
                <button
                  type="button"
                  className={`${lexend.className} cursor-pointer w-full text-white bg-(--color1) focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center`}
                >
                  Send Message
                </button>
                <p className={`${dosis.className} px-8 text-center`}>
                  By contacting us, you agree to our{" "}
                  <span className="font-bold">Terms of services</span> and{" "}
                  <span className="font-bold">Privacy Policy</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="basis-1/2 h-96 shadow-xl rounded-4xl ring-2 ring-gray-400">
            <Image
              width={1000}
              height={1000}
              src="/ContactPage/map.png"
              alt="map"
              className="w-full h-full object-cover rounded-4xl"
            />
          </div>
          <div>
            <p
              className={`${lexend.className} text-xl uppercase font-bold text-gray-400 mb-2`}
            >
              Our Location
            </p>
            <h3 className={`${pattaya.className} text-5xl`}>How to find us</h3>
            <div className="flex flex-col lg:flex-row mt-12">
              <div>
                <p className={`${lexend.className} text-gray-800`}>
                  Head Office:
                </p>
                <p className={`${dosis.className} leading-7 text-xl`}>
                  <span className="font-semibold">Wanderlust Journeys</span>
                  <br />
                  123 Adventure Lane
                  <br />
                  Suite 45, Explore Building
                  <br />
                  Travelton, CA 90210
                  <br />
                  United States
                </p>
              </div>
              <div className="divider divider-vertical lg:divider-horizontal !mx-12"></div>
              <div>
                <p className={`${lexend.className} text-gray-800`}>
                  East Coast Office:
                </p>
                <p className={`${dosis.className} leading-7 text-xl`}>
                  <span className="font-semibold">
                    Wanderlust Journeys Branch
                  </span>
                  <br />
                  456 Sunset Boulevard
                  <br />
                  Suite 10, Horizon Plaza
                  <br />
                  Nomad City, NY 10001
                  <br />
                  United States
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row gap-16">
          <div className="basis-2/6">
            <p
              className={`${lexend.className} text-xl font-bold text-gray-400 mb-2`}
            >
              FAQ
            </p>
            <h3 className={`${pattaya.className} text-5xl`}>
              Do you have any Questions?
            </h3>
            <p className={`${dosis.className} text-xl text-gray-400 mt-6`}>
              Find answers to common questions and get the information you need
              to make the most of our services.
            </p>
          </div>
          <div className="basis-4/6 flex flex-col gap-2">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="collapse collapse-arrow bg-(--color4)/40 ring-1 ring-gray-300"
              >
                <input
                  type="radio"
                  name="faq-accordion"
                  defaultChecked={faq.defaultChecked || false}
                />
                <div
                  className={`${lexend.className} collapse-title text-xl font-medium`}
                >
                  {faq.question}
                </div>
                <div className="collapse-content">
                  <p className={`${dosis.className} text-xl`}>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
      <FooterComponent />
    </>
  );
};

export default ContactPage;
