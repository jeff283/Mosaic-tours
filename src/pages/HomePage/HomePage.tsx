// Components
import Navbar from "../../components/Navbar";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import TourCarousel from "@/components/TourCarousel";

// Assets
import fiveStars from "../../assets/SVGs/5-stars.svg";
import heroImg from "../../assets/imgs/HeroImg.png";
import cheifGuide from "../../assets/imgs/chiefGuide.png";
import SandraGwen from "../../assets/imgs/SandraGwen.png";
import DavidLaner from "../../assets/imgs/DavidLaner.png";
import SarahHomer from "../../assets/imgs/SarahHomer.png";
import ContactUsImg from "../../assets/imgs/ContactUs.png";
import { NavLink } from "react-router-dom";

import { db } from "@/config/firebase";
import Tour from "@/Interfaces/Tour";
import { collection, getDocs, limit, query } from "firebase/firestore";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [tourList, setTourList] = useState<Tour[]>({} as Tour[]);

  // FIREBASE FIRESTORE

  const tourCollectionRef = collection(db, "mosaicTours");
  // Firebase Get

  const getTourList = () => {
    const q = query(tourCollectionRef, limit(5));
    getDocs(q)
      .then((data) => {
        const filterData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setTourList(filterData as Tour[]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // USE EFFECTS
  useEffect(() => {
    getTourList();
  }, []);
  return (
    <div className="bg-eggshell">
      <Navbar />
      {/* Hero Section */}
      <section id="home">
        <div className="pt-6 pb-4 bg-darkGreen md:pt-36">
          <div className="flex flex-col-reverse items-center justify-between px-5 text-white md:px-20 md:flex-row ">
            {/* Left Container */}
            <div className="space-y-8 smMax:pt-8 md:space-y-16">
              <h1 className="w-3/4 text-4xl font-bold md:text-6xl">
                Discover a World Within Kenya
              </h1>
              <p className="text-xl font-light md:text-2xl md:w-1/2 ">
                Join us on an unforgettable journey through Kenya's mosaic of
                experiences.
              </p>
              {/* CTA btn  */}
              <div className="w-1/2 md:w-1/3">
                <NavLink
                  to="/tours"
                  className="block text-center font-medium text-3xl bg-eggshell text-darkGreen border border-eggshell px-6 py-1.5 pb-2 rounded-full align-middle hover:text-eggshell hover:bg-darkGreen md:block lgMax:px-2 lgMax:py-1 lgMax:pb-1 lgMax:text-2xl"
                >
                  Book A Tour
                </NavLink>
              </div>
            </div>
            {/* Right Container */}
            <div>
              <img src={heroImg} alt="Tours in Kenya" />
            </div>
          </div>
          {/* Locations */}
          <div className="justify-between hidden pt-16 text-lg bg-darkGreen text-eggshell md:flex md:px-20 ">
            <span className="opacity-20 ">Mount Kenya </span>
            <span className="opacity-20">Nairobi National Park </span>
            <span className="opacity-20 ">Mount Longonot National Park</span>
            <span className="opacity-20 ">Aberdare National Park </span>
            <span className="opacity-20 ">Lewa Wildlife Conservancy </span>
            <span className="opacity-20">Masai Mara National Reserve</span>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours">
        {/* Container */}
        <div className="px-5 py-6 md:px-20 md:py-12">
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-16 font-bold text-darkGreen">
            <h2 className="text-4xl md:text-5xl ">Tours</h2>
            <div className="text-2xl cursor-pointer md:text-3xl navbar-links navbar-links-darkGreen ">
              <NavLink to="/tours">See all</NavLink>
            </div>
          </div>
          {/* Card Container */}
          <div className="flex justify-center">
            {/* Cards */}
            {tourList && tourList.length > 0 ? (
              <TourCarousel tours={tourList} />
            ) : (
              <div className="w-full gap-3 text-center">
                <h2 className="text-4xl font-bold">No Tours Available</h2>
                <h3 className="text-2xl font-medium">Please come back later</h3>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about">
        {/* Container */}
        <div className="px-5 py-6 md:px-20 md:py-12">
          {/* Title */}
          <h2 className="pb-5 text-4xl font-bold md:pb-10 text-darkGreen md:text-5xl">
            About Us
          </h2>
          {/* Flex Container */}
          <div className="mx-auto space-y-8 md:flex md:justify-between md:space-x-6">
            {/* Left Img */}
            <div>
              <img src={cheifGuide} alt="Chief Tour Guide" />
            </div>
            {/* Right Content Flex */}
            <div className="space-y-8 md:w-3/5 md:space-y-16">
              {/* Content */}
              <div className="space-y-4 md:space-y-8">
                <h3 className="text-2xl font-bold md:text-3xl text-lightGreen">
                  Curated Experiences, Crafted with Care
                </h3>
                <p className="text-lg md:text-2xl text-lightGray">
                  We curate unique tours that take you off the beaten path,
                  immersing you in the authentic beauty of Kenya. From
                  breathtaking mountain hikes and wildlife encounters to vibrant
                  coastal communities and ancient historical sites, our
                  experiences are designed to connect you with the heart and
                  soul of this incredible country.
                </p>
              </div>
              {/* Awards Container*/}
              {/* <div className="flex flex-col items-center space-y-8 md:flex-row md:justify-between md:space-x-4 md:px-4 "> */}
              <div className="flex items-center justify-between gap-5 ">
                {/* Award 1 */}
                <div className="flex-grow p-3 text-center rounded-xl md:rounded-3xl md:p-5 custom-shadow">
                  <div className="text-3xl md:text-5xl">20+</div>
                  <div className="text-xl md:text-2xl text-lightGray">
                    Awards Won
                  </div>
                </div>
                {/* Award 2 */}
                <div className="flex-grow p-3 text-center rounded-xl md:rounded-3xl md:p-5 custom-shadow">
                  <div className="text-3xl md:text-5xl">12K+</div>
                  <div className="text-xl md:text-2xl text-lightGray">
                    Success Tours
                  </div>
                </div>

                {/* Award 3 */}
                <div className="flex-grow p-3 text-center rounded-xl md:rounded-3xl md:p-5 custom-shadow">
                  <div className="text-3xl md:text-5xl">16+</div>
                  <div className="text-xl md:text-2xl text-lightGray">
                    Years of Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}

      <section id="reviews">
        {/* Container */}
        <div className="px-5 py-6 md:px-20 md:py-12 ">
          {/* Title */}
          <h2 className="pb-5 text-4xl font-bold md:pb-10 text-darkGreen md:text-5xl">
            Customer Reviews
          </h2>
          {/* Review Container */}
          <div className="flex justify-between ">
            {/* Review 1 */}
            <div className="flex flex-col items-center justify-center p-5 space-y-2 text-center custom-shadow rounded-3xl md:w-1/4">
              {/* Img */}
              <div className="py-2 ">
                <img src={SarahHomer} alt="Sarah Homer" />
              </div>
              {/* Name */}
              <h3 className="text-3xl font-bold">Sarah Homer</h3>
              {/* Rating */}
              <div>
                <img src={fiveStars} alt="5 Stars" />
              </div>
              {/* Content */}
              <p className="pb-4 text-xl">
                Mosaic Tours unveiled a hidden Kenya - stunning hikes, vibrant
                cultures, and unforgettable memories!
              </p>
            </div>
            {/* Review 2 */}
            <div className="flex-col items-center justify-center hidden p-5 space-y-2 text-center custom-shadow rounded-3xl md:w-1/4 md:flex">
              {/* Img */}
              <div className="py-2 ">
                <img src={DavidLaner} alt="David Laner" />
              </div>
              {/* Name */}
              <h3 className="text-3xl font-bold">David Laner</h3>
              {/* Rating */}
              <div>
                <img src={fiveStars} alt="5 Stars" />
              </div>
              {/* Content */}
              <p className="pb-4 text-xl">
                Personalized Kenyan adventure with Mosaic Tours: from Masai Mara
                safaris to Mombasa's history.
              </p>
            </div>
            {/* Review 3 */}
            <div className="flex-col items-center justify-center hidden p-5 space-y-2 text-center custom-shadow rounded-3xl md:w-1/4 md:flex">
              {/* Img */}
              <div className="py-2 ">
                <img src={SandraGwen} alt="Sandra Gwen" />
              </div>
              {/* Name */}
              <h3 className="text-3xl font-bold">Sandra Gwen</h3>
              {/* Rating */}
              <div>
                <img src={fiveStars} alt="5 Stars" />
              </div>
              {/* Content */}
              <p className="pb-4 text-xl">
                Mosaic Tours exceeded expectations the landscapes, wildlife, and
                authentic cultural experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact us */}

      <section id="contact">
        {/* Container */}
        <div className="px-5 py-6 md:px-20 md:py-12">
          {/* Title */}
          <h2 className="pb-5 text-4xl font-bold md:pb-10 text-darkGreen md:text-5xl">
            Talk To Us
          </h2>
          {/* Talk to Us */}
          <div className="flex flex-col justify-between md:flex-row ">
            {/* Left Container */}

            <div className="custom-shadow rounded-[30px] text-center  space-y-8 max-w-[438px]">
              {/* Image */}
              <img src={ContactUsImg} alt="Masaai Couple" />

              {/* Content Container*/}
              <div className="py-10 space-y-8 text-2xl ">
                <div>Yala Towers, 4th Floor, Junction of Biashara street</div>
                <div>Tel: +254 110467983</div>
                <div>info@mosaic.com</div>
              </div>
            </div>

            {/* Right Container */}
            <div className=" max-w-[400px] md:max-w-[1000px] lg:w-[900px] mt-12 md:mt-0">
              <ContactUs />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;
