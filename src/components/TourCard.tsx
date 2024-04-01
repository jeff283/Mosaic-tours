import Tour from "@/Interfaces/Tour";
import { PiCalendarFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

interface Props {
  tour: Tour;
}

const TourCard = ({ tour }: Props) => {
  const navigate = useNavigate();
  const handleBookClick = (tourData: Tour) => {
    navigate("/payment", { state: { tourData } });
  };
  return (
    <div>
      {/*Card  Container */}
      <div className="custom-shadow p-3 rounded-3xl space-y-4 max-w-[350px] pb-4">
        {/* Card Img */}
        <div>
          <img className="rounded-3xl" src={tour.tourImg} alt="Mountain Tour" />
        </div>

        {/* Card Content */}
        <div className="space-y-3">
          {/* Location */}
          <div>
            {/* Tour */}
            <h2 className="text-3xl font-medium text-darkGreen">
              {/* Mountain Tour */}
              {tour.tourName}
            </h2>
            {/* Location */}
            <p className="text-xl font-light text-darkGreen">
              {/* Mount Kenya, Meru */}
              {tour.location}
            </p>
          </div>
          {/* Pricing */}
          <div className="flex items-center justify-between">
            {/* Price */}
            <p className="text-2xl">
              {/* Ksh40,000 */}
              Ksh{tour.price}
            </p>
            {/* Date */}
            <div className="flex items-center ">
              <PiCalendarFill size={32} />
              <p className="text-xl">
                {/* April 03 */}
                {tour.tourDate}
              </p>
            </div>
          </div>

          {/* Period */}
          <div className="text-xl text-center">
            {/* 5 days/4 nights */}
            {tour.days} days/{tour.nights} nights
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => handleBookClick(tour)}
          className="w-full px-12 py-1.5   text-2xl font-semibold rounded-lg border-2 border-darkGreen text-eggshell bg-darkGreen hover:text-darkGreen hover:bg-eggshell"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TourCard;
