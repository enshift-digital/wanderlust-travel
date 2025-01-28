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

// Defining the structure of a profile
interface ProfileStruc {
  name: string;
  position: string;
  image: string;
  description: string;
}

interface ProfileProps {
  profileData: ProfileStruc;
}

const ProfileCard = ({ profileData }: ProfileProps) => {
  return (
    <div className="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg max-w-sm">
      <div className="m-2.5 overflow-hidden rounded-md h-64 flex justify-center items-center">
        <img
          className="w-full h-full object-top object-cover"
          src={profileData.image}
          alt="profile-picture"
        />
      </div>
      <div className="p-6 text-center">
        <h4
          className={`${lexend.className} mb-1 text-xl font-semibold text-slate-800`}
        >
          {profileData.name}
        </h4>
        <p
          className={`${dosis.className} text-sm font-semibold text-slate-500 uppercase`}
        >
          {profileData.position}
        </p>
        <p
          className={`${dosis.className} text-lg text-slate-600 mt-4 font-light`}
        >
          {profileData.description}
        </p>
      </div>
      <div className="flex justify-center p-6 pt-2 gap-7">
        <div className="tooltip" data-tip="Facebook">
          <button className="btn btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              id="Layer_1"
              fill="#000"
              version="1.1"
              viewBox="-143 145 512 512"
              className="w-6 h-6"
            >
              <g id="SVGRepo_iconCarrier">
                <path d="M113 145c-141.4 0-256 114.6-256 256s114.6 256 256 256 256-114.6 256-256-114.6-256-256-256m159.8 415.7c-20.8 20.8-44.9 37.1-71.8 48.4-27.8 11.8-57.4 17.7-88 17.7-30.5 0-60.1-6-88-17.7-26.9-11.4-51.1-27.7-71.8-48.4-20.8-20.8-37.1-44.9-48.4-71.8C-107 461.1-113 431.5-113 401s6-60.1 17.7-88c11.4-26.9 27.7-51.1 48.4-71.8 20.9-20.8 45-37.1 71.9-48.5C52.9 181 82.5 175 113 175s60.1 6 88 17.7c26.9 11.4 51.1 27.7 71.8 48.4 20.8 20.8 37.1 44.9 48.4 71.8 11.8 27.8 17.7 57.4 17.7 88 0 30.5-6 60.1-17.7 88-11.4 26.9-27.7 51.1-48.4 71.8"></path>
                <path d="M146.8 313.7c10.3 0 21.3 3.2 21.3 3.2l6.6-39.2s-14-4.8-47.4-4.8c-20.5 0-32.4 7.8-41.1 19.3-8.2 10.9-8.5 28.4-8.5 39.7v25.7H51.2v38.3h26.5v133h49.6v-133h39.3l2.9-38.3h-42.2v-29.9c0-10.3 9.2-14 19.5-14"></path>
              </g>
            </svg>
          </button>
        </div>
        <div className="tooltip" data-tip="Twitter">
          <button className="btn btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path
                id="SVGRepo_iconCarrier"
                fill="#0F0F0F"
                fillRule="evenodd"
                d="M19.783 3.918c.348-.082.591-.164.79-.249.28-.12.51-.263.876-.504A1 1 0 0 1 23 4c0 1.08-.135 1.967-.447 2.746a5.5 5.5 0 0 1-1.071 1.674c-.187 3.363-1.16 6.004-2.648 8.005-1.543 2.074-3.595 3.402-5.759 4.146-2.157.741-4.436.907-6.478.656-2.029-.25-3.904-.921-5.211-1.938a1 1 0 0 1 .755-1.78c1.286.185 2.524-.108 3.542-.526q-.301-.165-.565-.348c-.927-.643-1.676-1.514-2.012-2.188A1 1 0 0 1 3.4 13.2C2.047 12.081 1.5 10.536 1.5 9.5a1 1 0 0 1 .723-.96 7 7 0 0 1-.24-.887c-.266-1.287-.242-2.74.047-3.895A1 1 0 0 1 3.866 3.5c1.078 1.868 3.065 3.01 4.915 3.686.87.318 1.675.52 2.279.645.13-1.22.47-2.227.994-3.027a4.59 4.59 0 0 1 2.686-1.957c1.783-.48 3.76.067 5.043 1.071m-9.035 5.89a18 18 0 0 1-2.654-.744c-1.357-.496-2.933-1.27-4.253-2.468q.035.331.1.652c.222 1.071.633 1.671 1.006 1.857a1 1 0 0 1 .49 1.242c-.239.648-.869.7-1.441.558.46.69 1.288 1.378 2.668 1.609a1 1 0 0 1 .032 1.967l-.87.174q.2.174.43.335c.698.483 1.397.69 2.001.54a1 1 0 0 1 .883 1.738c-.644.536-1.396.966-2.15 1.323-.353.168-.749.333-1.178.479q.496.106 1.029.172c1.77.217 3.741.07 5.584-.563 1.836-.631 3.534-1.74 4.804-3.448 1.268-1.705 2.153-4.064 2.272-7.268a1 1 0 0 1 .292-.67c.45-.45.821-.965 1.004-1.579-.32.1-.68.186-1.11.268a1 1 0 0 1-.894-.275c-.765-.764-2.277-1.267-3.533-.929A2.6 2.6 0 0 0 13.727 5.9C13.315 6.53 13 7.51 13 9a1 1 0 0 1-.33.743c-.498.45-1.336.184-1.922.066"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="tooltip" data-tip="Instagram">
          <button className="btn btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <g id="SVGRepo_iconCarrier" fill="#0F0F0F">
                <path
                  fillRule="evenodd"
                  d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
                  clipRule="evenodd"
                ></path>
                <path d="M18 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2"></path>
                <path
                  fillRule="evenodd"
                  d="M1.654 4.276C1 5.56 1 7.24 1 10.6v2.8c0 3.36 0 5.04.654 6.324a6 6 0 0 0 2.622 2.622C5.56 23 7.24 23 10.6 23h2.8c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622C23 18.44 23 16.76 23 13.4v-2.8c0-3.36 0-5.04-.654-6.324a6 6 0 0 0-2.622-2.622C18.44 1 16.76 1 13.4 1h-2.8c-3.36 0-5.04 0-6.324.654a6 6 0 0 0-2.622 2.622M13.4 3h-2.8c-1.713 0-2.878.002-3.778.075-.877.072-1.325.202-1.638.361a4 4 0 0 0-1.748 1.748c-.16.313-.29.761-.36 1.638C3.001 7.722 3 8.887 3 10.6v2.8c0 1.713.002 2.878.075 3.778.072.877.202 1.325.361 1.638a4 4 0 0 0 1.748 1.748c.313.16.761.29 1.638.36.9.074 2.065.076 3.778.076h2.8c1.713 0 2.878-.002 3.778-.075.877-.072 1.325-.202 1.638-.361a4 4 0 0 0 1.748-1.748c.16-.313.29-.761.36-1.638.074-.9.076-2.065.076-3.778v-2.8c0-1.713-.002-2.878-.075-3.778-.072-.877-.202-1.325-.361-1.638a4 4 0 0 0-1.748-1.748c-.313-.16-.761-.29-1.638-.36C16.278 3.001 15.113 3 13.4 3"
                  clipRule="evenodd"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
