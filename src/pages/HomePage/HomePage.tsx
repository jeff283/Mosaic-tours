import Navbar from "../../components/Navbar/Navbar";
import heroImg from "../../assets/imgs/HeroImg.png";
import cheifGuide from "../../assets/imgs/chiefGuide.png";

const HomePage = () => {
  return (
    <div className="bg-eggshell">
      <Navbar />
      {/* Hero Section */}
      <section id="home">
        <div className=" bg-darkGreen pt-6 pb-4 md:pt-36  ">
          <div className="flex flex-col-reverse justify-between items-center  text-white px-5  md:px-20 md:flex-row ">
            {/* Left Container */}
            <div className="space-y-8 smMax:pt-8 md:space-y-16">
              <h1 className="font-bold text-4xl w-3/4 md:text-6xl">
                Discover a World Within Kenya
              </h1>
              <p className="text-xl font-light md:text-2xl md:w-1/2 ">
                Join us on an unforgettable journey through Kenya's mosaic of
                experiences.
              </p>
              {/* CTA btn  */}
              <div className="w-1/2 md:w-1/3">
                <a
                  href="/"
                  className="block text-center font-medium text-3xl bg-eggshell text-darkGreen border border-eggshell px-6 py-1.5 pb-2 rounded-full align-middle hover:text-eggshell hover:bg-darkGreen md:block lgMax:px-2 lgMax:py-1 lgMax:pb-1 lgMax:text-2xl"
                >
                  Book A Tour
                </a>
              </div>
            </div>
            {/* Right Container */}
            <div className="">
              <img className="" src={heroImg} alt="Tours in Kenya" />
            </div>
          </div>
          {/* Locations */}
          <div className="bg-darkGreen text-eggshell  justify-between hidden md:flex md:px-20 text-lg pt-16 ">
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
        <div className="px-5 py-6  md:px-20 md:py-12">
          {/* Top Bar */}
          <div className="flex justify-between items-center font-bold text-darkGreen pb-16">
            <h2 className="text-4xl md:text-5xl ">Tours</h2>
            <div className="text-2xl md:text-3xl underline ">See all</div>
          </div>
          {/* Card Container */}
          <div className="">
            {/* Card */}
            <div className="">Card</div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about">
        {/* Container */}
        <div className="px-5 py-6  md:px-20 md:py-12">
          {/* Title */}
          <h2 className="font-bold pb-3 text-darkGreen text-4xl md:text-5xl">
            About Us
          </h2>
          {/* Flex Container */}
          <div className="space-y-8 md:flex md:justify-between mx-auto">
            {/* Left Img */}
            <div className="">
              <img src={cheifGuide} alt="Chief Tour Guide" className="" />
            </div>
            {/* Right Content Flex */}
            <div className=" md:w-3/5  space-y-8 md:space-y-16">
              {/* Content */}
              <div className="space-y-4 md:space-y-8">
                <h3 className="font-bold text-2xl md:text-3xl text-lightGreen">
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
              <div className=" flex gap-5 items-center justify-between ">
                {/* Award 1 */}
                <div className="flex-grow rounded-xl md:rounded-3xl p-3 md:p-5 text-center about-shadow">
                  <div className="text-3xl md:text-5xl">20+</div>
                  <div className="text-xl md:text-2xl text-lightGray">
                    Awards Won
                  </div>
                </div>
                {/* Award 2 */}
                <div className="flex-grow rounded-xl md:rounded-3xl p-3 md:p-5 text-center about-shadow">
                  <div className="text-3xl md:text-5xl">12K+</div>
                  <div className="text-xl md:text-2xl text-lightGray">
                    Success Tours
                  </div>
                </div>

                {/* Award 3 */}
                <div className="flex-grow rounded-xl md:rounded-3xl p-3 md:p-5 text-center about-shadow">
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
    </div>
  );
};

export default HomePage;
