import { PiCalendarFill } from "react-icons/pi";

import mountainTourSM from "../assets/imgs/TourImgs/mountainTourSM.jpg";
import mountainTour from "../assets/imgs/TourImgs/mountainTour.jpg";

interface Props {
  Img: string;
  tourName: string;
  tourLocation: string;
  price: number;
  days: number;
  nights: number;
}

const TourCard = () => {
  return (
    <div>
      {/*Card  Container */}
      <div className="custom-shadow p-3 rounded-3xl space-y-4 max-w-[350px] pb-4">
        {/* Card Img */}
        <div>
          <img className="rounded-3xl" src={mountainTour} alt="Mountain Tour" />
        </div>

        {/* Card Content */}
        <div className="space-y-3">
          {/* Location */}
          <div>
            {/* Tour */}
            <h2 className="font-medium text-3xl text-darkGreen">
              Mountain Tour
            </h2>
            {/* Location */}
            <p className="font-light text-xl text-darkGreen">
              Mount Kenya, Meru
            </p>
          </div>
          {/* Pricing */}
          <div className="flex justify-between items-center">
            {/* Price */}
            <p className="text-2xl">Ksh40,000</p>
            {/* Date */}
            <div className=" flex items-center">
              <PiCalendarFill size={32} />
              <p className="text-xl">April 03</p>
            </div>
          </div>

          {/* Period */}
          <div className="text-xl  text-center">5 days/4 nights</div>
        </div>

        {/* Button */}
        <button className="w-full px-12 py-1.5   text-2xl font-semibold rounded-lg border-2 border-darkGreen text-eggshell bg-darkGreen hover:text-darkGreen hover:bg-eggshell">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TourCard;
