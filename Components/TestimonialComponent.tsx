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

// Defining the structure of a review
interface ReviewStruc {
  name: string;
  position: string;
  rating: number;
  review: string;
  image: string;
}

interface ReviewProps {
  review: ReviewStruc;
}

const TestimonialComponent = ({ review }: ReviewProps) => {
  return (
    <div className="flex flex-col max-w-80 h-96">
      <div className="bg-(--color4)/60 rounded-2xl rounded-br-none p-8 relative h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 fill-black/5 z-0"
        >
          <path
            id="SVGRepo_iconCarrier"
            d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48m-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48"
          ></path>
        </svg>
        <div className="flex flex-col items-center gap-4 z-10 h-full">
          <div className="rating rating-sm">
            {[1, 2, 3, 4, 5].map((star) => (
              <div
                key={star}
                className="mask mask-star-2 bg-orange-400"
                aria-label={`${star} star`}
                aria-current={star === review.rating ? "true" : "false"}
              ></div>
            ))}
          </div>
          <p className={`${dosis.className} text-lg line-clamp-4 h-full`}>
            {review.review}
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="relative w-fit">
          <div className="absolute right-0 top-0 w-10 h-10 bg-(--color4)/60 z-0"></div>
          <div className="relative flex items-center rounded-2xl bg-white py-2 px-4 gap-3 z-10">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={review.image} />
              </div>
            </div>
            <div className={`${lexend.className} leading-4`}>
              <p>
                {review.name}
                <br />
                <span className={`${dosis.className} text-gray-600 text-sm`}>
                  / {review.position}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-(--color4)/60 grow rounded-br-2xl rounded-bl-2xl"></div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
